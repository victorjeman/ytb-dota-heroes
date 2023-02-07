import { Container } from '@mantine/core'
import useSWR from 'swr'

import { HEROES_API } from '../constants/hero.const'
import { getHeroesAPI } from '../api/hero.api'

import { useFilteredHeroes } from '../hooks/use-filtered-heroes'
import { useHeroesByAttr } from '../hooks/use-heroes-by-attr'

import { HeroFilterByAttribute } from './hero-filter-by-attribute'
import { HeroFilterByComplexity } from './hero-filter-by-complexity'
import { HeroIntro } from './hero-intro'
import { HeroList } from './hero-list'
import { HeroSearch } from './hero-search'
import { HeroToolbar } from './hero-toolbar'

export const HeroGrid = () => {
	return (
		<Container size='xl'>
			<HeroToolbar>
				<HeroFilterByAttribute />

				<HeroFilterByComplexity />

				<HeroSearch />
			</HeroToolbar>

			<HeroIntro />

			<HeroList />
		</Container>
	)
}
