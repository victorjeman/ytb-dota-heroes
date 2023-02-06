import { TextInput } from '@mantine/core'

import { SetHeroFilter } from '../types/hero.types'

interface HeroSearchProps {
	setHeroFilter: SetHeroFilter
}

export const HeroSearch = ({ setHeroFilter }: HeroSearchProps) => {
	return (
		<TextInput placeholder='Search hero' onChange={(event) => setHeroFilter(event.currentTarget.value)} />
	)
}
