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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-pattern border-b border-border">
      {/* Orbs are switched off via CSS (see .orb in globals.css) — kept as no-ops */}
      <div className="orb w-[500px] h-[500px] bg-accent/20 top-[-100px] left-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-accent-2/15 bottom-[-80px] right-[-100px]" />
      <div className="orb w-[200px] h-[200px] bg-accent-3/10 top-[40%] right-[10%]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 w-full pt-28 pb-16">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Prompt path */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6 text-sm font-mono text-muted">
            <span className="text-accent">~/mohamed</span>
            <span>$</span>
            <span className="text-subtle">whoami</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-4xl md:text-6xl leading-[1.15] tracking-tight mb-6"
          >
            <span className="block text-text">Full Stack Developer</span>
            <span className="block text-gradient-2">
              building with React, Node &amp; MongoDB
              <span className="inline-block w-[0.55ch] h-[1em] bg-accent align-middle ml-1 animate-pulse" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-subtle font-body text-base md:text-lg leading-relaxed mb-10"
          >
            I ship fast, well-structured web apps — from pixel-accurate UIs to
            REST APIs that hold up in production. MERN stack, mostly.
          </motion.p>

          {/* Tech pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-10">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-border bg-surface text-subtle rounded-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-14">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent hover:bg-transparent hover:text-accent text-bg font-medium font-mono text-sm rounded-none border border-accent transition-colors duration-150"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border hover:border-accent hover:text-accent bg-transparent text-text font-medium font-mono text-sm rounded-none transition-colors duration-150"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-none border border-border bg-transparent text-subtle hover:text-accent hover:border-accent transition-colors duration-150"
              >
                <Icon size={16} />
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
