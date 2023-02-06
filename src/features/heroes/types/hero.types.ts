export interface Hero {
	id: string
	name: string
	name_loc: string
	name_english_loc: string
	primary_attr: 0 | 1 | 2
	complexity: 1 | 2 | 3
}

export type HeroAttr = '0' | '1' | '2'

export type SetHeroAttr = (value: HeroAttr) => void
export type SetHeroFilter = (value: string) => void
