document.addEventListener('alpine:init', () =>{
  Alpine.data('calculator', () => {
    const defaults = {
      bill: 142.55,
      people: 5,
      tip: 0.15,
      custom: 0,
    };

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    function toCurrency(value) {
      const roundedValue = Math.floor(value * 100) / 100
      return formatter.format(roundedValue)
    }

    return {
      bill: defaults.bill,
      tip: defaults.tip,
      people: defaults.people,
      custom: defaults.custom,

      tipOptions: [
        { text: '5%', value: 0.05 },
        { text: '10%', value: 0.10 },
        { text: '15%', value: 0.15 },
        { text: '25%', value: 0.25 },
        { text: '50%', value: 0.50 },
        { text: 'Custom', value: 'custom' },
      ],

      getTip() {
        return this.tip === 'custom' ? this.custom / 100 : this.tip
      },

      getSplitTip() {
        const result = this.people > 0
          ? (this.bill * this.getTip()) / this.people
          : 0;

        return toCurrency(result)
      },

      getSplitTotal() {
        const result = this.people > 0
          ? (this.bill + (this.bill * this.getTip())) / this.people
          : 0;

        return toCurrency(result)
      },

      reset() {
        this.bill = defaults.bill;
        this.tip = defaults.tip;
        this.people = defaults.people;
      }
    }
  })
})
