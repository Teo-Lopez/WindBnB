import React from 'react'
import './App.css'
import NavMobile from './layout/NavMobile'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'
import Searchbox from './shared/Searchbox'
function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<NavMobile />
			<Searchbox />
		</ThemeProvider>
	)
}

export default App
