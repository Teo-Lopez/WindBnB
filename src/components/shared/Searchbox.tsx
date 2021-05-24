import React from 'react'
import styled from 'styled-components'
import glass from '../../assets/magnifying.svg'
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding-top: ${props => props.theme.spacings.md};
`

const SearchBox = styled.div`
	width: 297px;
	font-family: Mulish;
	font-size: 14px;
	height: 55px;
	display: flex;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
	border-radius: 16px;

	.country {
		width: 138px;
		padding: 0 auto;
		height: 100%;

		p {
			margin: 0 16px 0;

			line-height: 55px;
			/* identical to box height */

			color: #333333;
		}
	}

	.input {
		width: 106px;
		border-right: 1px solid #f2f2f2;
		border-left: 1px solid #f2f2f2;

		input {
			box-sizing: border-box;
			max-width: 106px;
			color: #bdbdbd;
			background: transparent;
			border: none;
			padding: 0 16px 0;
			font-family: Mulish;
			font-size: 14px;
			font-weight: 400;
			line-height: 55px;
		}
	}

	.glass {
		display: flex;
		align-items: center;
		justify-content: space-around;
		img {
      color: red;
			width: 17px;
			height: 17px;
		}
	}
`

function Searchbox() {
	return (
		<Wrapper>
			<SearchBox>
				<div className='country'>
					<p>Helsinki, Finland</p>
				</div>
				<div className='input'>
					<input placeholder='Add guests'></input>
				</div>
				<div className='glass'>
					<img src={glass} alt='magnifying glass'></img>
				</div>
			</SearchBox>
		</Wrapper>
	)
}

export default Searchbox
