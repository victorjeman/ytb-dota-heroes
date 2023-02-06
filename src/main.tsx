import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'

import App from './app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider
			theme={{
				fontFamily: 'Merriweather',
				headings: { fontFamily: 'Merriweather' },
				colorScheme: 'dark',
			}}
			withGlobalStyles
			withNormalizeCSS>
			<App />
		</MantineProvider>
	</React.StrictMode>,
)
