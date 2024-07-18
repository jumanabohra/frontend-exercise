import { useState } from 'react';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <form method="get" action="/companies">
        <label className="input input-bordered min-w-96 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="q"
            placeholder="Company Name or Number"
            aria-label="Search via Company Name or Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button
          type="submit"
          className="btn btn-neutral my-3"
          disabled={!searchTerm}
        >
          Search
        </button>
      </form>
    </div>
  );
}
