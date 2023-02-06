export const getHeroesAPI = async (url: string) => {
  const data = await window.fetch(url);
  const heroes = await data.json();

  return heroes;
};
