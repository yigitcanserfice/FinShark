import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDasboard from "../../Components/CompanyDashboard/CompanyDasboard";
import Tile from "../../Components/Tile/Tile";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
      console.log(result);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />

          <CompanyDasboard>
            <Tile title="Company Name" subTitle={company.companyName} />
          </CompanyDasboard>
        </div>
      ) : (
        <div> Company not found!</div>
      )}
    </>
  );
};

export default CompanyPage;
