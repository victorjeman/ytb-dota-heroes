import { Paper } from '@mantine/core'

interface HeroToolbarProps {
	children: React.ReactNode
}

export const HeroToolbar = ({ children }: HeroToolbarProps) => {
	return (
		<Paper shadow='lg' p='lg' mb='xl' mt='xl' withBorder>
			{children}
		</Paper>
	)
}
