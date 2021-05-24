import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
const Navbar = styled.nav`
	padding: ${({ theme }) => theme.spacings.sm};

	img {
		width: 100px;
	}
`

function NavMobile() {
	return (
		<Navbar>
			<img src={logo} alt='company logo'></img>
		</Navbar>
	)
}

export default NavMobile
