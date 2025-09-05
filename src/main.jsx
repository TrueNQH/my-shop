import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Header } from "./ui/components/Header";
import { FiltersBar } from "./ui/components/FiltersBar";
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from "./CartContext";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <div className="container">
          <Header cartCount={2} onGoHome={() => {}} onGoCart={() => {}} />
          <main className="content">
            {/* <FiltersBar q="" onChangeQ={() => {}} categories={["Tất cả","Áo","Quần"]} selectedCategory="Tất cả" onChangeCategory={() => {}} maxPrice={0} onChangeMaxPrice={() => {}} /> */}
            <App/>
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
