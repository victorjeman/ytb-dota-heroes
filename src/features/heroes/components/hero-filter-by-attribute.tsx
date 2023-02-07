import { SegmentedControl } from '@mantine/core'

import { HERO_ATTR } from '../constants/hero.const'
import { SetHeroAttr } from '../types/hero.types'

interface HeroFilterByAttributeProps {
	setHeroAttr: SetHeroAttr
}

const DATA = [
	{ label: 'All', value: '' },
	{ label: 'Strength', value: HERO_ATTR.STR },
	{ label: 'Intelligence', value: HERO_ATTR.INT },
	{ label: 'Agility', value: HERO_ATTR.AGI },
]

export const HeroFilterByAttribute = ({ setHeroAttr }: HeroFilterByAttributeProps) => {
	return <SegmentedControl radius={10} size='lg' onChange={setHeroAttr} data={DATA} />
}
