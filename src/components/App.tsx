import { ChangeEvent, useState } from 'react'
import './App.css'
import NavMobile from './layout/NavMobile'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'
import Searchbox from './shared/Searchbox'
import Region from './Region/Region'
import styled from 'styled-components'

const NavWrapper = styled.div`
	@media screen and (min-width: 700px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

function App() {
	const [guests, setGuest] = useState('')
	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		setGuest(e.target.value)

	

	return (
		<ThemeProvider theme={defaultTheme}>
			<NavWrapper>
				<NavMobile />
				<Searchbox updateGuests={onChange} guests={guests} />
			</NavWrapper>
			<Region guests={guests} />
		</ThemeProvider>
	)
}

export default App
