import axios from "axios";

import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyTenK,
} from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occured.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
      //`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}` Old version.
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      //`https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}` // need to change company.d.ts "CompanyKeyMetrics"
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}` //Old version.
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}` //Old version.
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}` //Old version.
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getCashFlowStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}` //Old version.
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getCompData = async (query: string) => {
  try {
    const { data } = await axios.get<CompanyCompData[]>(
      `https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};
export const getTenK = async (query: string) => {
  try {
    const data = await axios.get<CompanyTenK[]>(
      `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-k&page=0&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
