import { ChangeEvent, useState } from 'react'
import './App.css'
import NavMobile from './layout/NavMobile'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'
import Searchbox from './shared/Searchbox'
import Region from './Region/Region'
function App() {
	const [guests, setGuest] = useState('')
	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		setGuest(e.target.value)

	return (
		<ThemeProvider theme={defaultTheme}>
			<NavMobile />
			<Searchbox updateGuests={onChange} guests={guests}/>
			<Region guests={guests}/>
		</ThemeProvider>
	)
}

export default App
