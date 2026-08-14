'use client'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/bakry5', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mohamed-medhat-3a95b830a', label: 'LinkedIn' },
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-pattern border-b-2 border-border">
      {/* Orbs are switched off via CSS (see .orb in globals.css) — kept as no-ops */}
      <div className="orb w-[500px] h-[500px] bg-accent/20 top-[-100px] left-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-accent-2/15 bottom-[-80px] right-[-100px]" />
      <div className="orb w-[200px] h-[200px] bg-accent-3/10 top-[40%] right-[10%]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full pt-28 pb-16">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Docket label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent border-2 border-accent px-2 py-1">Docket №01</span>
            <span className="h-px flex-1 bg-border max-w-[120px]" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted">Mansoura, EG</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            <span className="block text-text">Full Stack</span>
            <span className="block text-gradient-2">Developer.</span>
          </motion.h1>

          {/* Subheadline — offset to the right, editorial column width */}
          <motion.p
            variants={fadeUp}
            className="md:ml-auto max-w-xl text-subtle font-body text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-accent pl-5"
          >
            I craft fast, scalable web products using{' '}
            <span className="text-text font-semibold not-italic">React</span>,{' '}
            <span className="text-text font-semibold not-italic">Next.js</span>,{' '}
            <span className="text-text font-semibold not-italic">Node.js</span> &amp;{' '}
            <span className="text-text font-semibold not-italic">MongoDB</span>. From pixel-perfect UIs to robust APIs.
          </motion.p>

          {/* Tech pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-10">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border-2 border-border bg-surface text-subtle rounded-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-accent hover:bg-text text-bg font-bold font-mono uppercase tracking-wider text-sm rounded-none border-2 border-text transition-all duration-150 hover:-translate-y-1 hover:translate-x-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border-2 border-border hover:border-accent bg-bg text-text font-bold font-mono uppercase tracking-wider text-sm rounded-none transition-all duration-150 hover:-translate-y-1 hover:translate-x-1"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-none border-2 border-border bg-bg text-subtle hover:text-bg hover:bg-text hover:border-text transition-all duration-150"
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
        className="absolute bottom-8 right-8 flex items-center gap-2 text-muted"
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
