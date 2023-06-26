import { useState } from 'react'
import Header from '../src/Pages/SIPCalculator/Header'
import FirstPage from '../src/Pages/SIPCalculator/FirstPage'
import AboutUs from '../src/Pages/SIPCalculator/AboutUS'
import MutualInfo from '../src/Pages/SIPCalculator/Mutual_info'
import WhyInvest from '../src/Pages/SIPCalculator/WhyInvest'
import SIPCalculator from '../src/Pages/SIPCalculator/SIPCalculator'
import AboutTabs from '../src/Pages/SIPCalculator/AboutTabs'
import Footer from './Pages/SIPCalculator/Footer'

function App() {

  return (
    <>
    <Header/>
    <FirstPage/>
    <AboutUs/>
    <MutualInfo/>
    <WhyInvest/>
    <SIPCalculator/>
    <AboutTabs/>
    <Footer/>
    </>
  )
}

export default App
