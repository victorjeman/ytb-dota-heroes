import { Box, Text, Image, createStyles, Flex } from '@mantine/core'

import { Hero } from '../types/hero.types'

interface HeroThumbnailProps {
	hero: Hero
}

export const HeroThumbnail = ({ hero }: HeroThumbnailProps) => {
	const { classes } = useStyles()

	const heroImgSrc = `/images/heroes/${hero.name_loc.toLocaleLowerCase().replace(/\ /g, '_')}.png`
	const heroAttrImgSrc = `/images/icons/attr_${hero.primary_attr}.png`

	return (
		<Box className={classes.box}>
			<Image width='225' className={classes.image} src={heroImgSrc} alt={hero.name_loc} />

			<Text className={classes.text}>
				<Flex justify='start' align='center' p='sm'>
					<Image src={heroAttrImgSrc} alt={`${hero.primary_attr}`} width={30} mr='sm' />

					<span>{hero.name_loc}</span>
				</Flex>
			</Text>
		</Box>
	)
}

const useStyles = createStyles((theme, params, getRef) => ({
	box: {
		position: 'relative',
		transition: 'all 0.3s',
		backfaceVisibility: 'hidden',
		transformStyle: 'preserve-3d',

		'&:hover': {
			zIndex: 9,
			transform: 'scale(1.2)',

			[`.${getRef('text')}`]: {
				opacity: 1,
			},
		},
	},

	image: {
		ref: getRef('image'),
		cursor: 'pointer',
	},

	text: {
		ref: getRef('text'),
		background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%)',
		color: 'white',
		lineHeight: 1,
		fontSize: '1.2rem',
		padding: '0.4rem',
		opacity: 0,
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
	},
}))
