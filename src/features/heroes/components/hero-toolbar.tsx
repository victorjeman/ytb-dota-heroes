import { Paper, Flex, Text } from '@mantine/core'

import { SetHeroAttr, SetHeroFilter } from '../types/hero.types'
import { HeroFilterByAttribute } from './hero-filter-by-attribute'
import { HeroFilterByComplexity } from './hero-filter-by-complexity'
import { HeroSearch } from './hero-search'

interface HeroToolbarProps {
	setHeroAttr: SetHeroAttr
	setHeroFilter: SetHeroFilter
}

export const HeroToolbar = ({ setHeroAttr, setHeroFilter }: HeroToolbarProps) => {
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

				<HeroFilterByAttribute setHeroAttr={setHeroAttr} />

				<HeroFilterByComplexity />

				<HeroSearch setHeroFilter={setHeroFilter} />
			</Flex>
		</Paper>
	)
}
