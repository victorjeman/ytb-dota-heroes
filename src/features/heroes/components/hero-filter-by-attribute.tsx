import { SegmentedControl } from '@mantine/core'

import { HeroAttr } from '../types/hero.types'

interface HeroFilterByAttributeProps {
	setHeroAttr: (value: HeroAttr) => void
}

export const HeroFilterByAttribute = ({ setHeroAttr }: HeroFilterByAttributeProps) => {
	return (
		<SegmentedControl
			onChange={setHeroAttr}
			data={[
				{ label: 'All', value: 'all' },
				{ label: 'Strength', value: 'str' },
				{ label: 'Intelligence', value: 'int' },
				{ label: 'Agility', value: 'agi' },
			]}
		/>
	)
}
