import { Mail, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-white font-bold mb-4">Vivek Kumar Singh</h3>
            <p className="text-sm">Senior Frontend Engineer specializing in real-time systems and performance optimization.</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="mailto:viveksingh1291@gmail.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/vivek-kr-5737411a2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <p>&copy; 2024 Vivek Kumar Singh. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
