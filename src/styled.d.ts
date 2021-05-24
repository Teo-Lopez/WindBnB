// styled.d.ts
import 'styled-components'
interface IPalette {
	main: string
	contrastText: string
}
interface ISpacings {
	xs: string
	sm: string
	md: string
	lg: string
	xl: string
}
declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string
		palette: {
			common: {
				black: string
				white: string
			}
			primary: IPalette
			secondary: IPalette
		}
		spacings: ISpacings
	}
}
