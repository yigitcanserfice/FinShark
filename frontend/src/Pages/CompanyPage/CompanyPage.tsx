import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDasboard from "../../Components/CompanyDashboard/CompanyDasboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import CompFinder from "../../Components/CompFinder/CompFinder";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormatting";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />

          <CompanyDasboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile
              title="Market Cap"
              subTitle={formatLargeMonetaryNumber(company.marketCap.toString())}
            ></Tile>
            <CompFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />
            <p className=" bg-white shadow rounded text-base text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDasboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
