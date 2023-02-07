import { SimpleGrid, Paper, SimpleGridBreakpoint } from '@mantine/core'

import { Hero } from '../types/hero.types'
import { HeroThumbnail } from './hero-thumbnail'

interface HeroListProps {
	heroes: Hero[]
}

const BREAKPOINTS: SimpleGridBreakpoint[] = [
	{ maxWidth: 980, cols: 5, spacing: 'md' },
	{ maxWidth: 700, cols: 3, spacing: 'sm' },
	{ maxWidth: 500, cols: 2, spacing: 'sm' },
]

export const HeroList = ({ heroes }: HeroListProps) => {
	return (
		<Paper shadow='xs' p='md' mb='lg'>
			<SimpleGrid cols={5} breakpoints={BREAKPOINTS}>
				{heroes?.map((hero) => (
					<HeroThumbnail key={hero.id} hero={hero} />
				))}
			</SimpleGrid>
		</Paper>
	)
}
