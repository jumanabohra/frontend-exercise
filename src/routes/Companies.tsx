import { useLoaderData, Link } from 'react-router-dom';

export const Companies = () => {
  const { companies } = useLoaderData() as { companies: any };

  return (
    <div className="p-8">
      <h1 className="text-4xl">Companies</h1>
      {companies.items.map((item: any) => (
        <Link to={`/company/${item.company_number}`} key={item.company_number}>
          <div className="card bg-base-100 w-96 shadow-xl my-10">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.address_snippet}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
