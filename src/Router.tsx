import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}
