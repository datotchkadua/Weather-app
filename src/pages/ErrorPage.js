import React from "react";

import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { status, statusText, error } = useRouteError();

  return (
    <section className="bg-primary relative z-10 py-[120px] w-full">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                {status}
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                {statusText}
              </h4>
              <p className="mb-8 text-lg text-white">{error.message}</p>
              <Link
                to="/"
                className="hover:text-primary inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
