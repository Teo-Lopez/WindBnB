import React from 'react'
import styled from 'styled-components'
import star from '../../assets/star.svg'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	img {
		fill: #eb5757b8;
		width: 14px;
		margin-right: ${({ theme }) => theme.spacings.xs};
	}
	p {
		font-size: 14px;
		margin: 0;
	}
`
//TODO MASK IMAGE?
function Rating({ rating }: { rating: number }) {
	return (
		<Wrapper>
			<img src={star} alt={'rating star'} />
			<p>{rating}</p>
		</Wrapper>
	)
}

export default Rating
