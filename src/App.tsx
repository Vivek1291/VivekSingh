import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './layouts/Layout'
import Loading from './components/Loading'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const ExperiencePage = lazy(() => import('./pages/Experience'))
const ProjectsPage = lazy(() => import('./pages/Projects'))
const SkillsPage = lazy(() => import('./pages/Skills'))
const ContactPage = lazy(() => import('./pages/Contact'))

export default function App() {
  return (
    <Router basename="/VivekSingh">
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}
