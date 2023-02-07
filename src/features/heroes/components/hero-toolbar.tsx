import { Paper, Flex, Text } from '@mantine/core'

interface HeroToolbarProps {
	children: React.ReactNode
}

export const HeroToolbar = ({ children }: HeroToolbarProps) => {
	return (
		<Paper shadow='lg' p='lg' mb='xl' mt='xl' withBorder>
			<Flex
				direction={{ base: 'column', sm: 'row' }}
				gap={{ base: 'sm', sm: 'lg' }}
				justify={{ sm: 'space-between' }}
				align={{ sm: 'center' }}>
				<Text transform='uppercase' c='white'>
					Filter Heroes
				</Text>

				{children}
			</Flex>
		</Paper>
	)
}
