import { Link, useLoaderData } from 'react-router-dom';

export const CompanyDetails = () => {
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
      <div>
        <h1 className="text-4xl">{company.title}</h1>
        <p>
          Company Number:{' '}
          <span className="font-bold">{company.company_number}</span>
        </p>
      </div>

      <div className="my-10">
        Registered office address
        <address className="font-bold">{company.address_snippet}</address>
      </div>

      <div className="my-10">
        Company status
        <address className="font-bold">{company.company_status}</address>
      </div>

      <div className="my-10">
        Company type
        <address className="font-bold">{company.company_type}</address>
      </div>

      <div className="my-10">
        Incorporated on
        <address className="font-bold">{company.date_of_creation}</address>
      </div>

      <div className="my-10">
        <Link
          to={`/company/${company.company_number}/officers`}
          className="underline"
        >
          List officers
        </Link>
      </div>
    </div>
  );
};
