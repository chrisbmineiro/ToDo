import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs, PageNotFound } from './pages'
import { LayoutPadrao } from './layouts'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<LayoutPadrao />}>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='*' element={ <PageNotFound />} />
            </Route>
        </Routes>
    )
}

export { Router }