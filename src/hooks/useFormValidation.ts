"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { validateForm, validateField, hasValidationErrors } from "@/lib/validation"
import type { ValidationRules, ValidationErrors } from "@/lib/validation"

interface UseFormValidationProps {
  initialData: Record<string, string>
  validationRules: ValidationRules
}

export function useFormValidation({ initialData, validationRules }: UseFormValidationProps) {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateSingleField = useCallback(
    (fieldName: string, value: string) => {
      const fieldRules = validationRules[fieldName]
      if (!fieldRules) return ""

      return validateField(value, fieldName, fieldRules)
    },
    [validationRules],
  )

  const validateAllFields = useCallback(() => {
    const newErrors = validateForm(formData, validationRules)
    setErrors(newErrors)
    return !hasValidationErrors(newErrors)
  }, [formData, validationRules])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))

      // Clear error when user starts typing (only if field was touched)
      if (touched[name] && errors[name]) {
        const fieldError = validateSingleField(name, value)
        setErrors((prev) => ({
          ...prev,
          [name]: fieldError,
        }))
      }
    },
    [touched, errors, validateSingleField],
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target

      setTouched((prev) => ({
        ...prev,
        [name]: true,
      }))

      const fieldError = validateSingleField(name, value)
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }))
    },
    [validateSingleField],
  )

  const resetForm = useCallback(() => {
    setFormData(initialData)
    setErrors({})
    setTouched({})
  }, [initialData])

  const setFieldValue = useCallback((fieldName: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }, [])

  const setFieldError = useCallback((fieldName: string, error: string) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }))
  }, [])

  return {
    formData,
    errors,
    touched,
    handleInputChange,
    handleBlur,
    validateAllFields,
    resetForm,
    setFieldValue,
    setFieldError,
    isValid: !hasValidationErrors(errors),
  }
}
