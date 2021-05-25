import React from 'react'
import styled from 'styled-components'
import Flat from './Flat'
import data from './stays.json'
const Wrapper = styled.section`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 700;

	header {
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		padding: ${({ theme }) => theme.spacings.md} ${({ theme }) => theme.spacings.sm};
		.stays {
			font-size: 14px;
			font-weight: 500;
		}
	}
`

function Region({ guests }: { guests: string }) {
	const stays = data.filter(e => e.maxGuests >= Number(guests))

	return (
		<Wrapper>
			<header>
				<p>Stays in Finland</p>
				<p className='stays'>{stays.length}+ stays</p>
			</header>
			{stays.map((e, idx) => (
				<Flat key={idx} {...e} />
			))}
		</Wrapper>
	)
}

export default Region
