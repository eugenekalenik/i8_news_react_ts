import { BASE_URL, API_KEY } from '../constants';


export const getNews = async (topic: string) => {
  const NEWS_URL: string = `${BASE_URL}${topic}&apiKey=${API_KEY}`;

  return await fetch(NEWS_URL)
    .then(response => response.json());
};
