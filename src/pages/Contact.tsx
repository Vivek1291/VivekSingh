import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'viveksingh1291@gmail.com',
      link: 'mailto:viveksingh1291@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'vivek-kr-5737411a2',
      link: 'https://linkedin.com/in/vivek-kr-5737411a2'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@viveksingh',
      link: 'https://github.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9650037240',
      link: 'tel:+919650037240'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container-x">
          <h1 className="section-title">Let's Connect</h1>
          <p className="section-subtitle mt-4">I'm always open to interesting opportunities and conversations</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container-x max-w-4xl">
          <div className="card bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-600 text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you have a project in mind, want to discuss frontend architecture, or just want to say hello, feel free to reach out!
            </p>
            <a href="mailto:viveksingh1291@gmail.com" className="btn-primary inline-block">
              Send Me an Email
            </a>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <a
                  key={i}
                  href={method.link}
                  target={method.label !== 'Email' && method.label !== 'Phone' ? '_blank' : undefined}
                  rel={method.label !== 'Email' && method.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className="card hover:border-blue-600 hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{method.label}</h3>
                      <p className="text-gray-600">{method.value}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-100 py-12">
        <div className="container-x max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Working Together</h3>
          <p className="text-gray-600 text-lg mb-6">
            I'm based in India and available for remote opportunities. I typically respond within 24 hours.
          </p>
          <p className="text-gray-600">
            I'm interested in long-term collaborations, interesting technical challenges, and mentorship opportunities.
          </p>
        </div>
      </section>
    </div>
  )
}
