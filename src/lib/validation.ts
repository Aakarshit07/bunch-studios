export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

export interface ValidationRules {
  [key: string]: ValidationRule
}

export interface ValidationErrors {
  [key: string]: string
}

export const validationRules = {
  name: {
    required: true,
    pattern: /^[A-Za-z\s]+$/,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 100,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
} as const

export const validationMessages = {
  required: (field: string) => `${field} is required`,
  minLength: (field: string, min: number) => `${field} should be at least ${min} characters`,
  maxLength: (field: string, max: number) => `${field} should not exceed ${max} characters`,
  pattern: {
    name: "Name should only contain letters and spaces",
    email: "Please enter a valid email address",
  },
} as const

export function validateField(value: string, fieldName: string, rules: ValidationRule): string {
  const trimmedValue = value.trim()

  // Required validation
  if (rules.required && !trimmedValue) {
    return validationMessages.required(fieldName.charAt(0).toUpperCase() + fieldName.slice(1))
  }

  // Skip other validations if field is empty and not required
  if (!trimmedValue && !rules.required) {
    return ""
  }

  // Min length validation
  if (rules.minLength && trimmedValue.length < rules.minLength) {
    return validationMessages.minLength(fieldName.charAt(0).toUpperCase() + fieldName.slice(1), rules.minLength)
  }

  // Max length validation
  if (rules.maxLength && trimmedValue.length > rules.maxLength) {
    return validationMessages.maxLength(fieldName.charAt(0).toUpperCase() + fieldName.slice(1), rules.maxLength)
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(trimmedValue)) {
    if (fieldName in validationMessages.pattern) {
      return validationMessages.pattern[fieldName as keyof typeof validationMessages.pattern]
    }
    return `Invalid ${fieldName} format`
  }

  // Custom validation
  if (rules.custom) {
    const customError = rules.custom(trimmedValue)
    if (customError) {
      return customError
    }
  }

  return ""
}

export function validateForm(data: Record<string, string>, rules: ValidationRules): ValidationErrors {
  const errors: ValidationErrors = {}

  Object.keys(rules).forEach((fieldName) => {
    const value = data[fieldName] || ""
    const fieldRules = rules[fieldName]
    const error = validateField(value, fieldName, fieldRules)

    if (error) {
      errors[fieldName] = error
    }
  })

  return errors
}

export function hasValidationErrors(errors: ValidationErrors): boolean {
  return Object.values(errors).some((error) => error !== "")
}
