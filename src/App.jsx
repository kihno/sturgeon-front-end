import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import ArticleList from './pages/ArticleList'
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage'

const routes = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/about',
  element: <AboutPage />
}, {
  path: '/articles',
  element: <ArticleList />
}, {
  path: '/articles/individual',
  element: <ArticlePage />
}]

const router = createBrowserRouter(routes)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
