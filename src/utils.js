export const parseListCurrency = (json) => {
    if(!json) {
        return []
    }

    const rates = json?.rates
   
    if(rates) {
        return Object.entries(rates).map(([key, value]) => ({ cur: key, rate: value }))
    } else {
        return []
    }
}
