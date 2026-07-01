'use client'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/bakry5' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mohamed-medhat-3a95b830a' },
  
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
          <span className="text-gradient-2">Bakry</span>
          <span className="text-subtle">.</span>
        </div>

        <p className="text-sm text-muted flex items-center gap-1.5">
            all rights reserved &copy; <span className="text-gradient-2">Bakry</span>
      
          {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-subtle hover:text-text hover:border-accent/30 transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
