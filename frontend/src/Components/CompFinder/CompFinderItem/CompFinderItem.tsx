import React from "react";
import { Link } from "react-router-dom";
import { CompanyCompData } from "../../../company";

type Props = {
  company: CompanyCompData;
};

const CompFinderItem = ({ company }: Props) => {
  return (
    <Link
      reloadDocument
      to={`/company/${company.symbol}/company-profile`}
      className="inline-flex flex-col items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md w-24 "
    >
      <span className="font-bold text-sm ">{company.symbol}</span>
    </Link>
  );
};

export default CompFinderItem;
