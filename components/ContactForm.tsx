"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Send } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Here you would normally handle the actual form submission
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-mono text-white/70 mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border border-white/20 rounded px-4 py-2 font-mono text-white focus:border-white/50 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-mono text-white/70 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border border-white/20 rounded px-4 py-2 font-mono text-white focus:border-white/50 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-mono text-white/70 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-transparent border border-white/20 rounded px-4 py-2 font-mono text-white focus:border-white/50 focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded font-mono text-white flex items-center justify-center transition-all",
          isSubmitting && "opacity-50 cursor-not-allowed",
        )}
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar mensaje <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
