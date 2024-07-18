import { useLoaderData } from 'react-router-dom';

export const CompanyOfficers = () => {
  const { company } = useLoaderData() as { company: any };

  if (!company) {
    return (
      <div>
        <p>Couldn't load company details for this number</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl">{company.title} - Officers</h1>
      {company.officers.map((officer: any) => (
        <div
          className="card bg-base-100 w-96 shadow-xl my-10"
          key={officer.name}
        >
          <div className="card-body">
            <h2 className="card-title">{officer.name}</h2>
            <p>{officer.officer_role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
