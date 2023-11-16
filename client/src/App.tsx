import './App.css'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { MainBanner } from './components/MainBanner';
import { Navbar } from './components/Navbar';


function App() {

  return (
    <MantineProvider>
      <Navbar></Navbar>
      <MainBanner></MainBanner>
    </MantineProvider>
  )
}

export default App
