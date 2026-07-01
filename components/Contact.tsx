'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '+201507882744'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/bakry5', username: '@bakry5' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-medhat-3a95b830a/', username: 'Mohamed Medhat' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setSent(true)
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="orb w-[400px] h-[400px] bg-accent-2/10 bottom-0 right-[-100px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">04 — Contact</span>
          <div className="h-px w-12 bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Let&apos;s <span className="text-gradient">Work Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-subtle text-lg mb-14 max-w-xl"
        >
          Have a project in mind? Want to collaborate? Drop me a message and I&apos;ll get back to you within 24h.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {sent ? (
              <div className="p-8 rounded-2xl border border-accent-2/30 bg-accent-2/5 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-display text-xl font-bold text-text mb-2">Message Sent!</h3>
                <p className="text-subtle">Thanks for reaching out. I&apos;ll reply as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface/60 text-text placeholder-muted text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface/60 text-text placeholder-muted text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, freelance, etc."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface/60 text-text placeholder-muted text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface/60 text-text placeholder-muted text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent/90 disabled:opacity-70 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-5 rounded-2xl border border-border bg-surface/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <FiMail size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-muted uppercase tracking-wider mb-0.5">Email</div>
                <a href="mailto:mohamed.medhat23000@gmail.com" className="text-text text-sm hover:text-accent transition-colors">
                  mohamed.medhat23000@gmail.com
                </a>

              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-border bg-surface/40 flex items-center gap-4 hover:border-green-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
                <FaWhatsapp size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-muted uppercase tracking-wider mb-0.5">WhatsApp</div>
                <span className="text-text text-sm hover:text-green-500 transition-colors">Chat with me directly{`(${WHATSAPP_NUMBER})`}</span>
              </div>
            </a>

            <div className="p-5 rounded-2xl border border-border bg-surface/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 flex-shrink-0">
                <FiMapPin size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-muted uppercase tracking-wider mb-0.5">Location</div>
                <p className="text-text text-sm">Cairo, Egypt 🇪🇬 — Open to remote</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-surface/40">
              <div className="text-xs font-mono text-muted uppercase tracking-wider mb-4">Find me on</div>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-subtle hover:text-text transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-bg group-hover:border-accent/30 transition-colors">
                      <Icon size={15} />
                    </div>
                    <div>
                      <span className="text-xs text-muted">{label}</span>
                      <div className="text-sm">{username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
                <span className="text-xs font-mono text-accent-2">Typically responds within 24h</span>
              </div>
              <p className="text-xs text-muted">Available for new projects starting immediately.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
