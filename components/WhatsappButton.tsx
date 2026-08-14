'use client'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '+201507882744'

export default function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-none border-2 border-text bg-green-600 hover:bg-text text-bg flex items-center justify-center transition-all duration-150 hover:-translate-y-1 hover:translate-x-1"
    >
      <FaWhatsapp size={26} />
    </a>
  )
}
