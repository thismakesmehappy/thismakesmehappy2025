import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <div className="fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gradient mb-6">
          Welcome to Your App
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          This is a modern React application built with Vite, Tailwind CSS, shadcn/ui, and React Router.
          Customize it with SCSS and make it your own!
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="btn-custom btn-primary">
            Get Started
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-custom text-center">
          <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
          <p className="text-gray-600">Built with Vite for lightning-fast development</p>
        </div>
        <div className="card-custom text-center">
          <h3 className="text-xl font-semibold mb-2">🎨 Customizable</h3>
          <p className="text-gray-600">Tailwind CSS with SCSS for complete control</p>
        </div>
        <div className="card-custom text-center">
          <h3 className="text-xl font-semibold mb-2">🧩 Component-Based</h3>
          <p className="text-gray-600">Beautiful components from shadcn/ui</p>
        </div>
      </div>
    </div>
  )
}