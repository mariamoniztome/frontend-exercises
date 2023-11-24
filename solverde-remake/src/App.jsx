/**
 * The main component of the application.
 * @returns The rendered JSX elements for the application.
 */
import './App.scss'
import Loading from './components/loading/Loading'
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Loading />
    <div className="App">
      <Header/>
      <Home/>
      <Footer />

    </div>
    </>
  )
}

export default App
