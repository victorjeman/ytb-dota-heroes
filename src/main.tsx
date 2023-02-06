import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'
import { ThemeProvider } from './layout/theme-provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
)
