import { Background } from './components/Background'
import Header from './components/Header'
import Footer from './components/Footer'
import Frontpage from './pages/Frontpage'

export default function App() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans text-foreground selection:bg-primary/30 selection:text-foreground">
            <Background />
            <Header />
            <Frontpage />
            <Footer />
        </div>
    )
}