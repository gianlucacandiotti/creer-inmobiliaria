import React from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { sendContactEmail } from "@/services/email"
import Button from "@/components/Button"
import TextField from "@/components/TextField"
import TextArea from "@/components/TextArea"
import Checkbox from "@/components/Checkbox/Checkbox"

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Ingresa tu correo electrónico.")
    .email("Ingresa un correo electrónico válido."),
  name: yup.string().required("Ingresa tu nombre."),
  phone: yup.string().required("Ingresa tu teléfono."),
  message: yup.string().required("Ingresa un mensaje."),
})

const PropertyContactForm = ({ propertyAddress, slug }) => {
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = async data => {
    try {
      await sendContactEmail(data, propertyAddress, slug)

      reset()

      setFormSubmitted(true)
    } catch (e) {
      console.error("There was an unexpected error!")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        inputProps={register("email", { required: true, disabled: true })}
        label="Email:"
        type="email"
        error={errors.email?.message}
      />

      <span className="mb-4 block" />

      <TextField
        inputProps={register("name", { required: true })}
        label="Nombre:"
        error={errors.name?.message}
      />

      <span className="mb-4 block" />

      <TextField
        inputProps={register("phone", { required: true })}
        label="Teléfono:"
        error={errors.phone?.message}
      />

      <span className="mb-4 block" />

      <TextArea
        inputProps={register("message", { required: true })}
        label="Mensaje:"
        error={errors.message?.message}
      />

      <span className="mb-4 block" />

      <Checkbox inputProps={register("call")} label="Quiero que me llamen" />

      <span className="mb-4 block" />

      {!formSubmitted ? (
        <Button cta type="submit">
          AGENDA UNA VISITA
        </Button>
      ) : (
        <p className="text-blue-700 font-semibold">
          Gracias por ponerte en contacto! Te escribiremos o llamaremos en la
          brevedad :)
        </p>
      )}
    </form>
  )
}

PropertyContactForm.propTypes = {
  propertyAddress: PropTypes.string,
  slug: PropTypes.string,
}

export default PropertyContactForm
