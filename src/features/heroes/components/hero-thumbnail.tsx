import { Box, Text, AspectRatio, Image, createStyles, Flex } from '@mantine/core'

import { Hero } from '../types/hero.types'

interface HeroThumbnailProps {
	hero: Hero
}

export const HeroThumbnail = ({ hero }: HeroThumbnailProps) => {
	const { classes } = useStyles()

	return (
		<Box className={classes.box}>
			<Image
				width='225'
				className={classes.image}
				src={`/images/heroes/${hero.name_loc.toLocaleLowerCase().replace(/\ /g, '_')}.png`}
				alt={hero.name_loc}
			/>

			<Text className={classes.text} sx={{ lineHeight: '1' }}>
				<Flex justify='start' align='center'>
					<Box
						sx={{
							width: 30,
							marginRight: '0.5rem',
							display: 'inline-block',
						}}>
						<Image m='0' src={`/images/icons/attr_${hero.primary_attr}.png`} alt={`${hero.primary_attr}`} />
					</Box>

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
		fontSize: '1.2rem',
		padding: '0.4rem',
		opacity: 0,
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
	},
}))
