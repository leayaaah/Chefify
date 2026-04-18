import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import CategoryList from './pages/CategoryList'
import RecipeBox from './pages/RecipeBox'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/recipe-box" element={<RecipeBox />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
