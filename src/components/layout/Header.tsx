import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gradient">
            Your App
          </Link>
          <nav className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}