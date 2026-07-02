'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'ShopFlow E-Commerce',
    description:
      'Full-featured e-commerce platform with real-time inventory, admin dashboard, and JWT authentication. Built for scale with Next.js SSR and MongoDB aggregations.',
    tags: ['Next.js', 'MongoDB', 'Redux', ],
    category: 'fullstack',
    color: '#6c47ff',
    github: 'https://github.com/bakry5/store-management-system-with-Next.js-',
    live: 'https://store-management-system-with-next-j.vercel.app',
    featured: true,
    stat: "",
  },
  {
    id: 2,
    title: 'Chat App',
    description:
      'Real-time chat app with rooms, images sharing, emoji support, and message history built with Socket.io.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'fullstack',
    color: '#00d4aa',
    github: 'https://github.com/bakry5/chat-backend',
    live: 'https://chat-frontend-react-three.vercel.app',
    featured: true,
    stat: "",
  },
  {
    id: 3,
    title: 'CloudHosting Platform',
    description:
      'cloud hosting for docunemts ',
    tags: ['Next.js', 'prisma', 'Tailwind'],
    category: 'fullstack',
    color: '#ff6b6b',
    github: 'https://github.com/bakry5/cloud-hosting-nextjs',
    live: 'https://cloud-hosting-nextjs-inky.vercel.app',
    featured: false,
    stat: "",
  },{
   id: 4,
    title: 'Netflix Clone',
    description:" Netflix clone built with React.js, Tailwind CSS,Zustand, and TMDB API. It features a responsive design ",
     
    tags: ['React', 'Tailwind CSS', 'Zustand', 'TMDB'],
    category: 'frontend',
    color: '#00d4aa',
    github: 'https://github.com/bakry5/Netflex-clone--react-',
    live: 'https://netflex-clone-react-pink.vercel.app',
    featured: true,
    stat: "",
  },
  {
    id: 5,
    title: ' Architect Portfolio',
    description:
      'Advanced MERN Auth Course: Email Verification, Password Recovery, and Welcome Emails with Nodemailer and JWT.',
    tags: ['Next.js', 'Node.js',"MongoDB", 'Tailwind'],
    category: 'fullstack',
    color: '#a78bfa',
    github: 'https://github.com/bakry5/architect-portfolio-frontend',
    live: 'https://architect-portfolio-ma.vercel.app',
    featured: false,
    stat: "",
  },
   {
    id: 6,
    title: ' Master Auth',
    description:
      'Open-source Next.js portfolio template with Framer Motion animations and Tailwind CSS.',
    tags: ['React', 'Node.js',"MongoDB", 'Tailwind'],
    category: 'fullstack',
    color: '#a78bfa',
    github: 'https://github.com/bakry5/auth-master-frontend-react-',
    live: 'https://auth-master-frontend-react.vercel.app',
    featured: false,
    stat: "",
  },
   
  {
    id: 7,
    title: 'E-commerce ',
    description:
      'E-commerce backend built with Node.js, Express, and MongoDB. Features JWT authentication, product management, and order processing.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'backend',
    color: '#fbbf24',
    github: 'https://github.com/bakry5/E-commece-backend-',
   
    featured: false,
    stat: '',
  },
]

const categories = ['all', 'fullstack', 'frontend', 'backend']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28 relative">
      <div className="orb w-[350px] h-[350px] bg-accent-3/10 top-0 right-[-80px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">03 — Projects</span>
          <div className="h-px w-12 bg-border" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold"
          >
            Selected <span className="text-gradient">Work</span>
          </motion.h2>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                  active === cat
                    ? 'bg-accent text-white'
                    : 'border border-border text-subtle hover:text-text hover:border-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative rounded-2xl border border-border bg-surface/40 p-6 card-hover group overflow-hidden ${
                project.featured ? 'ring-1 ring-accent/20' : ''
              }`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}10, transparent 60%)` }}
              />

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-accent/10 text-accent border border-accent/20">
                    featured
                  </span>
                </div>
              )}

              <div className="relative">
                {/* Color bar */}
                <div className="w-8 h-1 rounded-full mb-4" style={{ background: project.color }} />

                <h3 className="font-display font-bold text-text text-lg mb-2">{project.title}</h3>
                <p className="text-subtle text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Stat */}
                <div className="text-xs font-mono mb-4" style={{ color: project.color }}>
                  ↗ {project.stat}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono border border-border bg-bg rounded text-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-subtle hover:text-text transition-colors"
                  >
                    <FiGithub size={14} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors"
                    style={{ color: project.color }}
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface/40 hover:border-accent/40 text-subtle hover:text-text text-sm rounded-xl transition-all duration-200"
          >
            <FiGithub size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
