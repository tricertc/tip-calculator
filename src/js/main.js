document.addEventListener('alpine:init', () =>{
  Alpine.data('calculator', () => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    function toCurrency(value) {
      const roundedValue = Math.floor(value * 100) / 100
      return formatter.format(roundedValue)
    }

    return {
      bill: 142.55,
      tip: 0.15,
      people: 5,

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
      }
    }
  })
})
