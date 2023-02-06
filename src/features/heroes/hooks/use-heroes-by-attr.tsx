import { useMemo, useState } from 'react'

import { Hero, HeroAttr } from '../types/hero.types'

export const useHeroesByAttr = (heroes: Hero[]) => {
	const [heroAttr, setHeroAttr] = useState<HeroAttr | ''>('')

	const heroesByAttr = useMemo(() => {
		if (heroAttr === '') return heroes

		return heroes.filter((hero) => hero.primary_attr === Number(heroAttr))
	}, [heroes, heroAttr])

	return { heroesByAttr, setHeroAttr }
}
