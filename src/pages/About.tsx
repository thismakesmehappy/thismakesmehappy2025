export function About() {
  return (
    <div className="fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gradient mb-6">About This App</h1>
        
        <div className="card-custom mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>React 18</strong> - Modern React with hooks and concurrent features</li>
            <li>• <strong>Vite</strong> - Fast build tool and development server</li>
            <li>• <strong>TypeScript</strong> - Type safety and better developer experience</li>
            <li>• <strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
            <li>• <strong>shadcn/ui</strong> - Beautiful, accessible components</li>
            <li>• <strong>React Router</strong> - Client-side routing</li>
            <li>• <strong>SCSS</strong> - Enhanced CSS with variables and nesting</li>
          </ul>
        </div>
        
        <div className="card-custom">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <div className="text-gray-700 space-y-2">
            <div><strong>src/components/</strong> - Reusable components</div>
            <div><strong>src/pages/</strong> - Page components</div>
            <div><strong>src/styles/</strong> - SCSS customizations</div>
            <div><strong>src/hooks/</strong> - Custom React hooks</div>
            <div><strong>src/utils/</strong> - Utility functions</div>
          </div>
        </div>
      </div>
    </div>
  )
}