import { MantineProvider, MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
	colorScheme: 'dark',
}

interface ThemeProviderProps {
	children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	return (
		<MantineProvider
			theme={{
				globalStyles: (theme) => ({
					body: {
						overflow: 'scroll',
					},
				}),
				fontFamily: 'Merriweather',
				headings: { fontFamily: 'Merriweather' },
				colorScheme: 'dark',
			}}
			withGlobalStyles
			withNormalizeCSS>
			{children}
		</MantineProvider>
	)
}
