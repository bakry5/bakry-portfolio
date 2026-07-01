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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform hover:scale-105"
    >
      <FaWhatsapp size={26} />
    </a>
  )
}
