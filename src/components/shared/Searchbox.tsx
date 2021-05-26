import styled from 'styled-components'
import glass from '../../assets/magnifying.svg'
import close from '../../assets/close.svg'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import { ChangeEvent, FormEvent, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { Input, SvgIcon } from '@material-ui/core'
import { title } from 'process'
import data from '../Region/stays.json'
import { IFlat } from '../Region/IFlat'
import RoomIcon from '@material-ui/icons/Room'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding-top: ${props => props.theme.spacings.md};

	@media screen and (min-width: 700px) {
		margin-right: ${({ theme }) => theme.spacings.md};
		justify-content: flex-end;
	}
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
		height: 100%;
		display: flex;
		align-items: center;

		p {
			width: 100%;
			font-size: 14px;
			text-align: center;
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
		width: 53px;
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

const CustomDrawer = styled(Drawer)`
	header {
		display: flex;
		justify-content: space-between;
		padding: ${({ theme }) => theme.spacings.sm};
		img {
			width: 14px;
		}
	}

	.drawer-search {
		margin: ${({ theme }) => theme.spacings.sm};
		border-radius: 16px;
		font-family: Mulish;
		font-size: 14px;
		font-weight: 400;
		line-height: 18px;

		p {
			margin: 0;
		}
		div {
			padding: ${({ theme }) => theme.spacings.sm};
			.drawer-input {
				padding: 0;

				div {
					padding: 0;
				}
			}
		}
	}
	ul {
		margin: 0;
		padding: ${({ theme }) => theme.spacings.sm + ' ' + theme.spacings.md};
		li {
			display: flex;
			align-items: center;
			padding: ${({ theme }) => theme.spacings.xs} 0;
			list-style: none;
		}
	}
`

function Searchbox({ updateGuests, guests }: { updateGuests: Function; guests: string }) {
	const [open, setOpen] = useState(false)
	const toggle = () => setOpen(!open)
	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		updateGuests(e)
		e.target.value && setOpen(true)
	}
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setOpen(false)
	}

	const regions: IFlat[] = data.filter((e, idx, a) => a.findIndex(t => t.city === e.city) === idx)

	return (
		<Wrapper>
			<SearchBox>
				<div className='country'>
					<p>Helsinki, Finland</p>
				</div>
				<div className='input'>
					<input value={guests} onChange={onChange} placeholder='Add guests'></input>
				</div>
				<div className='glass'>
					<img src={glass} alt='magnifying glass'></img>
				</div>
			</SearchBox>
			<CustomDrawer anchor='top' open={open} onClose={toggle}>
				<header>
					<p>Edit your search</p>
					<img onClick={toggle} src={close} alt={title} />
				</header>
				<Paper elevation={2} className='drawer-search'>
					<div>
						<p>Location</p>
						<Input
							className='drawer-input'
							disableUnderline
							placeholder='Helsinki, Finland'
							value='Helsinki, Finland'
						/>
					</div>
					<Divider />
					<div>
						<p>Guest</p>
						<form onSubmit={onSubmit}>
							<Input
								className='drawer-input'
								disableUnderline
								type='number'
								placeholder='Add guests'
								name='guests'
								value={guests}
								onChange={e => onChange(e)}
								autoFocus
								inputProps={{ min: 0 }}
							/>
						</form>
					</div>
				</Paper>

				<ul>
					{regions.map(e => (
						<li>
							<SvgIcon component={RoomIcon} />
							{e.city}, {e.country}
						</li>
					))}
				</ul>
			</CustomDrawer>
		</Wrapper>
	)
}

export default Searchbox
