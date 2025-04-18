import React, { useEffect, useState } from "react";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import CompFinderItem from "./CompFinderItem/CompFinderItem";

type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyList, setCompanyList] = useState<CompanyCompData[]>([]);

  useEffect(() => {
    const getComps = async () => {
      const data = await getCompData(ticker);
      if (data) setCompanyList(data);
      console.log(data);
    };
    getComps();
  }, [ticker]);

  return (
    <div className="inline-flex flex-wrap rounded-md shadow-sm m-4 gap-2">
      {companyList.map((company) => (
        <CompFinderItem key={company.symbol} company={company} />
      ))}
    </div>
  );
};

export default CompFinder;
