const BASE_URL = 'http://127.0.0.1:8000';

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': import.meta.env.VITE_APP_API_KEY,
};

export const searchCompanies = async (query: string | null) => {
  if (!query) return [];

  const raw = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      companyName: query,
      companyNumber: query,
    }),
  });

  const response = await raw.json();

  return response;
};

export const fetchCompanyDetails = async (companyNumber: string) => {
  const raw = await fetch(`${BASE_URL}/company/${companyNumber}`, {
    headers,
  });

  const response = await raw.json();

  return response;
};
