import { Home } from "./components/Home"
import Layout from "./components/Layout"
import { Page } from "./components/Page"
import { ProductList } from "./components/Products/ProductList"
import { ProductPage } from "./components/Products/ProductPage"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

function App() {
 
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
              <Route path='/contact' element={<Page title={"Contact"} />} />
              <Route path='/about' element={<Page />} />
              <Route path='/product' element={<Outlet />} >
                <Route path='/product/:id' element={<ProductPage />} />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App


