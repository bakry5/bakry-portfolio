'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,
  SiGit, SiDocker, SiPostman, SiFigma,
  SiRedux, SiGraphql, SiFirebase, SiVercel,
  SiBootstrap,
  SiCloudinary
} from 'react-icons/si'

const skillGroups = [
  {
    label: 'Frontend',
    color: '#6c47ff',
    skills: [
      { name: 'React.js', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
      { name: 'Redux', icon: SiRedux, level: 80 },
{ name: 'Bootstrap', icon: SiBootstrap, level: 75 },

    ],
  },
  {
    label: 'Backend',
    color: '#00d4aa',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 88 },
      { name: 'Express.js', icon: SiExpress, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
    
    ],
  },
  {
    label: 'Tools & DevOps',
    color: '#ff6b6b',
    skills: [
      { name: 'Git & GitHub', icon: SiGit, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 88 },
      { name: 'Vercel', icon: SiVercel, level: 90 },
     
{ name: 'Cloudinary', icon: SiCloudinary, level: 85 },

    
    ],
  },
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-subtle">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 relative">
      <div className="orb w-[400px] h-[400px] bg-accent/10 top-1/4 left-[-120px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">02 — Skills</span>
          <div className="h-px w-12 bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-14"
        >
          Tech <span className="text-gradient">Stack</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map(({ label, color, skills }, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + gi * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-surface/40 card-hover"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                <h3 className="font-display font-semibold text-text text-sm tracking-wide uppercase">
                  {label}
                </h3>
              </div>

              {/* Icon grid */}
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    title={name}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-bg text-subtle hover:text-text hover:border-accent/30 transition-all duration-200 cursor-default"
                  >
                    <Icon size={15} />
                  </div>
                ))}
              </div>

              {/* Bars */}
              <div>
                {skills.map(({ name, level }, i) => (
                  <SkillBar
                    key={name}
                    name={name}
                    level={level}
                    color={color}
                    delay={0.4 + gi * 0.1 + i * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
