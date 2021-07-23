document.addEventListener('alpine:init', () =>{
  Alpine.data('calculator', () => {
    const defaults = {
      bill: 0,
      people: 1,
      tip: 0.05
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

      tipOptions: [
        { text: '5%', value: 0.05 },
        { text: '10%', value: 0.10 },
        { text: '15%', value: 0.15 },
        { text: '25%', value: 0.25 },
        { text: '50%', value: 0.50 },
        { text: 'Custom', value: 'custom' },
      ],

      getSplitTip() {
        const result = this.people > 0
          ? (this.bill * this.tip) / this.people
          : 0;

        return toCurrency(result)
      },

      getSplitTotal() {
        const result = this.people > 0
          ? (this.bill + (this.bill * this.tip)) / this.people
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
