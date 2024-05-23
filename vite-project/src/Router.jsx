import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs } from './pages'
import { LayoutPadrao } from './layouts'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<LayoutPadrao />}>
                <Route path='/home' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
            </Route>
        </Routes>
    )
}

export { Router }