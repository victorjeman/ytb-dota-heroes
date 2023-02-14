export const getHeroesAPI = async (url: string) => {
	const response = await window.fetch(url)
	const data = await response.json()
	return data
}
