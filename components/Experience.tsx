'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Startup X',
    period: '2023 — Present',
    description:
      'Leading frontend architecture for a SaaS dashboard serving 50k+ users. Migrated legacy codebase to Next.js 14 with App Router, reducing load time by 60%. Mentoring 3 junior devs.',
    tags: ['Next.js', 'TypeScript', 'Redux', 'React Query'],
    color: '#6c47ff',
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance / Agency',
    period: '2022 — 2023',
    description:
      'Delivered 8+ full-stack projects for clients across e-commerce, healthcare, and fintech. Built REST APIs with Node/Express and MongoDB, integrated third-party APIs.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: '#00d4aa',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2021 — 2022',
    description:
      'Built responsive web applications for 15+ clients. Collaborated closely with designers to implement pixel-perfect UIs. Introduced Tailwind CSS to the team workflow.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    color: '#ff6b6b',
  },
  {
    role: 'Junior Web Developer',
    company: 'IT Solutions Co.',
    period: '2020 — 2021',
    description:
      'Started career building internal tools and dashboards. Learned React, REST APIs, and agile workflow. Contributed to 3 client-facing products.',
    tags: ['JavaScript', 'React', 'CSS'],
    color: '#fbbf24',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 relative">
      <div className="orb w-[300px] h-[300px] bg-accent/10 bottom-0 left-[-80px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">04 — Experience</span>
          <div className="h-px w-12 bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-14"
        >
          Career <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="md:pl-12 relative"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-6 w-9 h-9 rounded-full border-2 border-bg hidden md:flex items-center justify-center"
                  style={{ background: exp.color + '20', borderColor: exp.color + '40' }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: exp.color }} />
                </div>

                <div className="p-6 rounded-2xl border border-border bg-surface/40 card-hover group relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-full"
                    style={{ background: exp.color }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-text text-lg">{exp.role}</h3>
                      <p className="text-sm" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted whitespace-nowrap px-3 py-1.5 border border-border rounded-lg bg-bg/50">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-subtle text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono border border-border bg-bg rounded text-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
