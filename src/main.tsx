import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Search } from './routes/Search.tsx';
import { Companies } from './routes/Companies.tsx';
import { ErrorPage } from './components/ErrorPage.tsx';
import { fetchCompanyDetails, searchCompanies } from './services/companies.ts';
import './index.css';
import { CompanyDetails } from './routes/Company.tsx';
import { CompanyOfficers } from './routes/CompanyOfficers.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/companies',
    element: <Companies />,
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const query = url.searchParams.get('q');
      return { companies: await searchCompanies(query) };
    },
    errorElement: <ErrorPage />,
  },
  {
    path: '/company/:companyNumber',
    element: <CompanyDetails />,
    loader: async ({ params }) => {
      if (params.companyNumber) {
        return { company: await fetchCompanyDetails(params.companyNumber) };
      }

      return { company: null };
    },
    errorElement: <ErrorPage />,
  },
  {
    path: '/company/:companyNumber/officers',
    element: <CompanyOfficers />,
    loader: async ({ params }) => {
      if (params.companyNumber) {
        return { company: await fetchCompanyDetails(params.companyNumber) };
      }

      return { company: null };
    },
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
