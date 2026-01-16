const API_URL = 'http://localhost:3000/api/products';

export const getProducts = async (
  page: number,
  search?: string,
  categoria?: number | null
) => {
  const params = new URLSearchParams({
    page: page.toString()
  });

  if (search) params.append('search', search);
  if (categoria) params.append('categoria', categoria.toString());

  const res = await fetch(`${API_URL}?${params.toString()}`);
  return res.json();
};
