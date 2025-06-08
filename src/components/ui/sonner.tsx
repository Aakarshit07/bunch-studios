"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group [&_[data-sonner-toast]]:rounded-lg [&_[data-sonner-toast]]:shadow-md"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",

          "--success-bg": "var(--toast-success-bg)",
          "--success-color": "var(--toast-success-text)",
          "--error-bg": "var(--toast-error-bg)",
          "--error-color": "var(--toast-error-text)",
          "--warning-bg": "var(--toast-warning-bg)",
          "--warning-color": "var(--toast-warning-text)",
          "--info-bg": "var(--toast-info-bg)",
          "--info-color": "var(--toast-info-text)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
