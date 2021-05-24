import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
	borderRadius: '4px',
	palette: {
		common: {
			black: '#222831',
			white: '#ffffff'
		},
		primary: {
			main: '#726a95',
			contrastText: '#ffffff'
		},
		secondary: {
			main: '#709fb0',
			contrastText: '#ffffff'
		}
	},
	spacings: {
		xs: '6px',
		sm: '12px',
		md: '18px',
		lg: '24px',
		xl: '32px'
	}
}
