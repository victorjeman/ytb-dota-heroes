import { useMemo, useState } from 'react'

import { Hero, HeroAttr } from '../types/hero.types'

export const useHeroesByAttr = (heroes: Hero[]) => {
	const [heroAttr, setHeroAttr] = useState<HeroAttr>('all')

	const heroesByAttr = useMemo(
		() => ({
			all: heroes,
			str: heroes?.filter((hero: Hero) => hero.primary_attr === 0),
			agi: heroes?.filter((hero: Hero) => hero.primary_attr === 1),
			int: heroes?.filter((hero: Hero) => hero.primary_attr === 2),
		}),
		[heroes],
	)

	return { heroesByAttr: heroesByAttr[heroAttr], setHeroAttr }
}
