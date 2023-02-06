import { Container } from '@mantine/core'
import useSWR from 'swr'

import { HEROES_API } from '../constants/hero.const'
import { getHeroesAPI } from '../api/hero.api'

import { useFilteredHeroes } from '../hooks/use-filtered-heroes'
import { useHeroesByAttr } from '../hooks/use-heroes-by-attr'

import { HeroIntro } from './hero-intro'
import { HeroList } from './hero-list'
import { HeroToolbar } from './hero-toolbar'

export const HeroGrid = () => {
	const { data } = useSWR(HEROES_API, getHeroesAPI)

	const { filteredHeroes, heroFilter, setHeroFilter } = useFilteredHeroes(data)
	const { heroesByAttr, setHeroAttr } = useHeroesByAttr(data)

	const heroes = heroFilter ? filteredHeroes : heroesByAttr

	return (
		<Container size='xl'>
			<HeroToolbar setHeroAttr={setHeroAttr} setHeroFilter={setHeroFilter} />

			<HeroIntro
				title='Chose your hero'
				subtitle="From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory."
			/>

			<HeroList heroes={heroes} filter={heroFilter} />
		</Container>
	)
}
