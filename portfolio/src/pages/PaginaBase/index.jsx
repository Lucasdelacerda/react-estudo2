import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'

export default function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                {/* esse Outlet ele é muito parecido com o children */}
                <Outlet />
            </Container>
            <Footer />

        </main>
    )

}