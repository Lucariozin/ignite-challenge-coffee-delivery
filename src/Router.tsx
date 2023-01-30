import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@layouts/DefaultLayout'

import { Home } from '@pages/Home'
import { Checkout } from '@pages/Checkout'
import { ConfirmedOrder } from '@pages/ConfirmedOrder'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pedido-confirmado" element={<ConfirmedOrder />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
