import { useState } from 'react'
import { validate } from '../lib/validate'

export const useForm = (rules) => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const register = (name) => {
    return {
      value: (form[name] || ''),
      onChangeText: (value) => {
        setForm({ ...form, [name]: value })
      },
      error: errors[name]
    }
  }

  const _validate = () => {
    const errorObject = validate(rules, form)
    setErrors(errorObject)
    return Object.keys(errorObject).length === 0
  }

  return {
    form,
    errors,
    setErrors,
    validate: _validate,
    register
  }
}
