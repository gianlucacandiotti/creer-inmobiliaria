import { CURRENCY } from "@/constants/property-constants"

export const transformCurrencyToSymbol = currency => {
  const map = {
    [CURRENCY.USD]: "$",
    [CURRENCY.PEN]: "S/.",
  }

  return map[currency]
}

export const formatPrice = price =>
  price.toString().replace(/\d(?=(\d{3})$)/g, "$&,")

export const formatArea = area => `${area}.00 m²`
