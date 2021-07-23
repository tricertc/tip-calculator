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
