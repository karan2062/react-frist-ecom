import { useState } from 'react'
import Header from './components/Navbar'
import Footer from './components/Footer'
import ProductCard from './components/productcard'
import Body from './components/MidMain'



function App() {
    return (
        <div>
            <Header />
            <Body />
            {/* <ProductCard /> */}
            <Footer />
        </div>
    )
}

export default App
