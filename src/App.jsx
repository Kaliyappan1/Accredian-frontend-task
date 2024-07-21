import { Box, Container, ThemeProvider } from '@mui/material'
import './App.css'
import Header from './Header'
import theme from './Component/Themes'
import HomePage from './HomePage'
import Footer from './Footer'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>

      <Header/>
      <Container>

      <HomePage/>
      </Container>
      <Footer/>
    </ThemeProvider>


    </>
  )
}

export default App
