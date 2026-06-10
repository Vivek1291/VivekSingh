import { ChevronRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'DigitalPaani',
      role: 'Frontend Lead / Senior Frontend Engineer',
      period: 'Oct 2024 - Nov 2025',
      highlights: [
        'Owned frontend architecture for Web SCADA++, handling 100s+ concurrent data streams',
        'Engineered React + SSE rendering pipeline with sub-second latency',
        'Improved load time by 40% through code splitting and optimization',
        'Established CI/CD pipelines using GitHub Actions',
        'Mentored team on real-time UI patterns and performance optimization'
      ]
    },
    {
      company: 'Done Deal',
      role: 'Senior Software Engineer (Founding Frontend Engineer)',
      period: 'May 2023 - July 2024',
      highlights: [
        'Built entire frontend stack from scratch using React, Redux Toolkit, TypeScript',
        'Designed production-grade component library (30-40% effort reduction)',
        'Mentored 2+ junior engineers and established code review standards',
        'Created architectural documentation (ADRs) for key decisions',
        'Set testing and performance standards adopted by team'
      ]
    },
    {
      company: 'Dotpe',
      role: 'Senior Software Engineer',
      period: 'Nov 2020 - May 2023',
      highlights: [
        'Led frontend for loyalty platform serving 50,000+ merchants',
        'Built POS billing application used at 5,000+ locations',
        'Architected COVID-era features (contactless ordering) in 2-week timeline',
        'Resolved high-severity production issues improving stability',
        'Collaborated with product/design teams on scalable solutions'
      ]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container-x">
          <h1 className="section-title">Experience</h1>
          <p className="section-subtitle mt-4">8+ years of professional frontend development</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-x max-w-4xl">
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="card border-l-4 border-blue-600">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-3 text-gray-600">
                      <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
