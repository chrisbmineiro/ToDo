import { Outlet } from "react-router-dom"
import { Content, Footer, Header } from "../../components"


function LayoutPadrao() {
    return (
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer criador='Christopher' />
        </>
    )
}

export { LayoutPadrao }