export const transformCurrencyToSymbol = currency => {
  const map = {
    USD: "$",
    PEN: "S/.",
  }

  return map[currency]
}

export const formatPrice = price =>
  price.toString().replace(/\d(?=(\d{3})$)/g, "$& ")
