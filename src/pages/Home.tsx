import { Link } from 'react-router-dom'
import { ArrowRight, Code, Zap, Users } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Beautiful, Fast Web Experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm Vivek, a Senior Frontend Engineer with 8+ years building scalable React applications. Specializing in real-time systems, performance optimization, and technical leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-primary">
                View My Work <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-gray-600">Well-structured, maintainable code that scales with your team.</p>
            </div>
            <div className="card">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">High Performance</h3>
              <p className="text-gray-600">Optimized for speed. 40% load time improvements are my norm.</p>
            </div>
            <div className="card">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Team Leader</h3>
              <p className="text-gray-600">Mentoring engineers and establishing best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50k+</div>
              <div className="text-gray-400">Users Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-x text-center">
          <h2 className="section-title mb-6">Ready to work together?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            I'm always interested in discussing new projects and opportunities.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
