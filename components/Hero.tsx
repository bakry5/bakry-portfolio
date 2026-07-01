'use client'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/bakry5', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mohamed-medhat-3a95b830a/', label: 'LinkedIn' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern">
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-accent/20 top-[-100px] left-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-accent-2/15 bottom-[-80px] right-[-100px]" />
      <div className="orb w-[200px] h-[200px] bg-accent-3/10 top-[40%] right-[10%]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Badge */}
       

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
          >
            <span className="block text-text">Full Stack</span>
            <span className="block text-gradient">Developer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-subtle text-lg md:text-xl leading-relaxed mb-10"
          >
            I craft fast, scalable web products using{' '}
            <span className="text-text font-medium">React</span>,{' '}
            <span className="text-text font-medium">Next.js</span>,{' '}
            <span className="text-text font-medium">Node.js</span> &amp;{' '}
            <span className="text-text font-medium">MongoDB</span>. From pixel-perfect UIs to robust APIs.
          </motion.p>

          {/* Tech pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-border bg-surface text-subtle rounded-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-border hover:border-accent/40 bg-surface/50 text-text font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-surface/50 text-subtle hover:text-text hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
