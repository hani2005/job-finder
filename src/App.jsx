import React from 'react'
import Footer from './Components/FooterDiv/Footer'
import Jobs from './Components/JobDiv/Jobs'
import NavBar from './Components/NavBar/NavBar'
import Value from './Components/ValueDiv/Value'

const App = () => {
  return (
    <div className='justify-center w-[1000px] items-center m-auto bg-white'>
      <NavBar />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App