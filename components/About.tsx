'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiCoffee, FiZap } from 'react-icons/fi'

const stats = [
  { value: '1+', label: 'Years of Experience' },
  { value: '8+', label: 'Projects Delivered' },
  { value: '2+', label: 'Happy Clients' },
  { value: '∞', label: 'Cups of Coffee' },
]

const highlights = [
  { icon: FiCode, text: 'Clean, maintainable code' },
  { icon: FiZap, text: 'Performance-first mindset' },
  { icon: FiCoffee, text: 'Always learning, always building' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-accent-2/10 top-1/2 right-[-100px] -translate-y-1/2" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">01 — About</span>
          <div className="h-px flex-1 max-w-[60px] bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building digital{' '}
              <span className="text-gradient">experiences</span>{' '}
              that matter
            </h2>

            <p className="text-subtle leading-relaxed mb-5 text-[15px]">
              I&apos;m a Full Stack Developer from Egypt with a passion for turning complex ideas into
              elegant, high-performance web applications. I specialize in the JavaScript ecosystem
              from frontend to backend.
            </p>
            <p className="text-subtle leading-relaxed mb-8 text-[15px]">
              My approach combines solid engineering principles with great design sense. I care
              deeply about user experience, load times, and code quality — because great products
              need all three.
            </p>

            <div className="space-y-3 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[15px] text-subtle">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Icon size={15} />
                  </span>
                  {text}
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="p-6 rounded-2xl border border-border bg-surface/40 card-hover group"
              >
                <div className="font-display text-4xl font-extrabold text-gradient-2 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {value}
                </div>
                <div className="text-sm text-subtle">{label}</div>
              </motion.div>
            ))}

            {/* Visual card */}
            <div className="col-span-2 p-6 rounded-2xl border border-accent/20 bg-accent/5 relative overflow-hidden">
              <div className="orb w-[150px] h-[150px] bg-accent/20 top-[-40px] right-[-40px]" />
              <div className="relative">
                <div className="text-xs font-mono text-accent mb-3 tracking-wider">CURRENTLY</div>
                <div className="font-display text-lg font-semibold text-text">
                  Open to new opportunities
                </div>
                <div className="text-sm text-subtle mt-1">
                  Remote · Freelance · Full-time
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-2 animate-pulse" />
                  <span className="text-xs text-accent-2 font-mono">Available now</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
