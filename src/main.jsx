import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Auto-import all page components from the pages directory
const pages = import.meta.glob('../pages/**/*Page.tsx', { eager: true })

// Build routes from discovered pages
const routes = Object.entries(pages).map(([path, module]) => {
  // Extract slug from file path (e.g., ../pages/MyPage.tsx -> my-page)
  const fileName = path.split('/').pop().replace('Page.tsx', '')
  const slug = fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return {
    path: slug === 'index' ? '/' : `/${slug}`,
    component: module.default
  }
})

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
        {/* Catch-all route - redirect to first page or home */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
              <p className="text-gray-600">Page not found</p>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
