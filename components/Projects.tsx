'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

const projects = [
   {
  id: 1,
  title: 'AI Resume ',
  description:
    'Full-stack AI-powered resume builder with real-time PDF generation, secure JWT authentication, and MongoDB storage. Built with React.js, Tailwind CSS, and Node.js.',
  category: 'fullstack',
  color: '#e8391a',
  github:"",//github.com/bakry5/ai-resume-react-',
  live: 'https://ai-resume-b.vercel.app',
  incoming: false,
  stat: "",
},

    {
  id: 2,
  title: 'CareHub',
  description:
    'Full-stack healthcare platform built as graduation project at ITI. Features secure JWT authentication, role-based access control, and end-to-end MERN architecture.',
  tags: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
  category: 'fullstack',
  color: '#8a6f47',
  github: 'https://github.com/honda4coding/carehub',
  live: 'https://carehub-two.vercel.app',
  incoming: false,
  stat: "",
},
  
  
  {
    id: 3,
    title: 'ShopFlow',
    description:
      'Full-incoming e-commerce platform with real-time inventory, admin dashboard, and JWT authentication. Built for scale with Next.js SSR and MongoDB aggregations.',
    tags: ['Next.js', 'MongoDB', 'Redux'],
    category: 'fullstack',
    color: '#8a6f47',
    github: 'https://github.com/bakry5/store-management-system-with-Next.js-',
    live: 'https://store-management-system-with-next-j.vercel.app',
    incoming: false,
    stat: "open source",
  },
  {
    id: 4,
    title: 'Chat App',
    description:
      'Real-time chat app with rooms, images sharing, emoji support, and message history built with Socket.io.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'fullstack',
    color: '#1f3b57',
    github: 'https://github.com/bakry5/chat-backend',
    live: 'https://chat-frontend-react-three.vercel.app',
    incoming: false,
    stat: "",
  },
  {
    id: 5,
    title: 'CloudHosting',
    description:
      'Cloud hosting for documents platform with file management and sharing.',
    tags: ['Next.js', 'Prisma', 'Tailwind'],
    category: 'fullstack',
    color: '#a13b28',
    github: 'https://github.com/bakry5/cloud-hosting-nextjs',
    live: 'https://cloud-hosting-nextjs-inky.vercel.app',
    incoming: false,
    stat: "",
  },
  {
    id: 6,
    title: 'Netflix Clone',
    description:"Netflix clone built with React.js, Tailwind CSS, Zustand, and TMDB API. Responsive design.",
    tags: ['React', 'Tailwind CSS', 'Zustand', 'TMDB'],
    category: 'frontend',
    color: '#8a6f47',
    github: 'https://github.com/bakry5/Netflex-clone--react-',
    live: 'https://netflex-clone-react-pink.vercel.app',
    incoming: false,
    stat: "",
  },
  {
    id: 7,
    title: 'Architect Portfolio',
    description:
      'Advanced MERN Auth Course: Email Verification, Password Recovery, and Welcome Emails with Nodemailer and JWT.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'fullstack',
    color: '#1f3b57',
    github: 'https://github.com/bakry5/architect-portfolio-frontend',
    live: 'https://architect-portfolio-ma.vercel.app',
    incoming: false,
    stat: "",
  },
   {
    id: 8,
    title: 'Master Auth',
    description:
      'Open-source authentication system with email verification and password recovery built on Next.js and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'fullstack',
    color: '#8a6f47',
    github: 'https://github.com/bakry5/auth-master-frontend-react-',
    live: 'https://auth-master-frontend-react.vercel.app',
    incoming: false,
    stat: "",
  },
  
  {
    id: 9,
    title: 'E-commerce API',
    description:
      'E-commerce backend built with Node.js, Express, and MongoDB. Features JWT authentication, product management, and order processing.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'backend',
    color: '#1f3b57',
    github: 'https://github.com/bakry5/E-commece-backend-',
    incoming: false,
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
    <section id="projects" className="py-32 relative">
      <div className="orb w-[400px] h-[400px] bg-accent/5 top-0 right-[-150px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-xs font-mono text-accent tracking-[0.4em] uppercase">03 — Projects</span>
          <div className="h-px w-16 bg-accent/30" />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9] tracking-tight"
          >
            Selected<br />
            <span className="text-gradient">Work</span>
          </motion.h2>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-none border-2 text-xs font-mono uppercase tracking-[0.15em] transition-all duration-200 ${
                  active === cat
                    ? 'bg-accent text-bg border-text'
                    : 'bg-bg border-border text-subtle hover:text-text hover:border-text'
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative rounded-none border-2 border-border bg-bg p-7 card-hover overflow-hidden ${
                project.incoming ? 'ring-2 ring-accent' : ''
              }`}
            >
              {/* Accent rule on hover — replaces the soft radial-glow overlay */}
              <div
                className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: project.color }}
              />

              <div className="relative">
                {/* Top line */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-none border-2 border-border bg-bg flex items-center justify-center" style={{ color: project.color }}>
                    <FiArrowUpRight size={18} />
                  </div>
                  {project.incoming && (
                    <span className="px-3 py-1 text-[10px] font-mono tracking-wider rounded-none bg-accent text-bg border border-accent uppercase">
                      Incoming
                    </span>
                  )}
                </div>

                <h3 className="font-display font-extrabold text-text text-xl mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-subtle text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-mono tracking-wider border-2 border-border text-muted rounded-none">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t-2 border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono tracking-wider text-subtle hover:text-text transition-colors"
                    >
                      <FiGithub size={14} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono tracking-wider text-accent hover:text-accent-2 transition-colors"
                    >
                      <FiArrowUpRight size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/bakry5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-text text-subtle hover:text-text hover:border-accent hover:text-accent text-sm font-mono tracking-wider rounded-none transition-all duration-300"
          >
            <FiGithub size={16} />
            View All On GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
