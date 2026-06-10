import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 page">
        {children}
      </main>
      <Footer />
    </div>
  )
}
