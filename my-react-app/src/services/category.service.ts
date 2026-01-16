const API_URL = 'http://localhost:3000/api/categories';

export const getCategories = async () => {
  const res = await fetch(API_URL);
  return res.json();
};
