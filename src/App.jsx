import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/card'
import ThemeBtn from './components/themeBtn'

function App() {
  const [themeMode, setThemeMode] =useState("light")

  const lightTheme = () => {
    setThemeMode ("light")
  }

  const darkTheme = () => {
    setThemeMode ("dark")
  }
  useEffect (() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          <Card />
        </div>
        <div className='w-full'>
          <ThemeBtn/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
