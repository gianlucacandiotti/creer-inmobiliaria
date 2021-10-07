import axios from "axios"

import { getBaseUrl } from "@/utils/getBaseUrl"

const propertyContactEmailEndpoint =
  "https://creer-inmobiliaria-5221-dev.twil.io/property-contact-mail"

export const sendContactEmail = (recipient, propertyAddress, slug) => {
  return axios.post(propertyContactEmailEndpoint, {
    name: recipient.name,
    email: recipient.email,
    phone: recipient.phone,
    message: recipient.message,
    call: recipient.call,
    propertyAddress: propertyAddress,
    propertyLink: `${getBaseUrl()}${slug}`,
  })
}
