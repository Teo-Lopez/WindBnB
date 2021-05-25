import styled from 'styled-components'
import { IFlat } from './IFlat'
import Rating from './Rating'

const CardWrapper = styled.article`
	//border: 1px solid red;
	margin: ${({ theme }) => theme.spacings.sm};
	margin-top: ${({ theme }) => theme.spacings.xs};
	margin-bottom: ${({ theme }) => theme.spacings.xl};
	font-family: Montserrat;
	font-weight: 700;
	line-height: 12px;

	p {
		margin: 0;
	}
	.img-wrapper {
		width: 100%;
		/* max-height: 238px;
		overflow-y: hidden; */
		img {
			width: 100%;
			border-radius: 24px;
			object-fit: contain;
			object-position: bottom;
			//aspect-ratio: 1.5/1;
		}
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: ${({ theme }) => theme.spacings.sm};
		.superhost {
			font-weight: bold;
			font-size: 10px;
			line-height: 12px;
			text-transform: uppercase;
			border: 1px solid #4f4f4f;
			box-sizing: border-box;
			border-radius: 12px;
			display: inline-block;
			padding: ${({ theme }) => theme.spacings.xs} 12px;
		}

		.type {
			text-align: left;
			font-size: 12px;
			color: #828282;
			font-weight: 500;
			line-height: 15px;
		}
	}
	.card-footer {
		margin: ${({ theme }) => theme.spacings.sm} 0;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
	}
`

function Flat({ city, country, superHost, title, rating, maxGuests, type, beds, photo }: IFlat) {
	return (
		<CardWrapper>
			<div className='img-wrapper'>
				<img src={photo} alt={title} />
			</div>
			<div className='info'>
				{superHost && (
					<div className='superhost'>
						<p>Super host</p>
					</div>
				)}
				<div className='type'>
					<p>
						{type}. {beds && `${beds} beds.`}
					</p>
				</div>
				<Rating rating={rating} />
			</div>
			<div className='card-footer'>
				<p>{title}</p>
			</div>
		</CardWrapper>
	)
}

export default Flat
