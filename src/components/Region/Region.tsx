import styled from 'styled-components'
import Flat from './Flat'
import data from './stays.json'
import Grid, { GridSpacing } from '@material-ui/core/Grid'

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

	@media screen and (min-width: 1200px) {
		header {
			font-size: 24px;
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
			<Grid container justify='center' spacing={0}>
				{stays.map((e, idx) => (
					<Grid lg={4} md={6}>
						<Flat key={idx} {...e} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	)
}

export default Region
