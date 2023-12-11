import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Components/AppRoute";
import { createContext } from "react";
import { useState } from "react";
import HodDetaiPage from "./HOD/HodDetaiPage";

export const newContext = createContext();

function App() {
  const [designation, setDesignation] = useState("");
  const [discription, setDiscription] = useState("");

  const [AssetName, setAssetName] = useState("");
  const [AssetDis, setAssetDis] = useState("");

  const [CompanyDetails, setCompanyDetails] = useState([]);

  const [EmployeeDesignation, setEmployeeDesignation] = useState([
    {
      id: 1,
      Designation: "Project Manager",
      Discription:
        "Coordinates the planning, execution, and completion of projects...",
    },
    {
      id: 2,
      Designation: "UI UX Designer",
      Discription:
        "Coordinates the planning, execution, and completion of projects...",
    },
    {
      id: 3,
      Designation: "QA Engineer",
      Discription:
        "Coordinates the planning, execution, and completion of projects...",
    },
    {
      id: 4,
      Designation: "React Developer",
      Discription:
        "Coordinates the planning, execution, and completion of projects...",
    },
    {
      id: 5,
      Designation: "React Developer",
      Discription:
        "Coordinates the planning, execution, and completion of projects...",
    },
  ]);

  const [AssetType, setAssetType] = useState([
    {
      name: "Laptop",
      dis: "Coordinates the planning, execution, and completion of projects...",
    },
    {
      name: "UI UX Designer",
      dis: "Coordinates the planning, execution, and completion of projects...",
    },
    {
      name: "QA Engineer",
      dis: "Coordinates the planning, execution, and completion of projects...",
    },
    {
      name: "React Developer",
      dis: "Coordinates the planning, execution, and completion of projects...",
    },
    {
      name: "React Developer",
      dis: "Coordinates the planning, execution, and completion of projects...",
    },
  ]);

  return (
    <div>
      <newContext.Provider
        value={{
          designation,
          setDesignation,
          discription,
          setDiscription,
          EmployeeDesignation,
          setEmployeeDesignation,
          AssetType,
          setAssetType,
          AssetName,
          setAssetName,
          AssetDis,
          setAssetDis,
          CompanyDetails,
          setCompanyDetails,
        }}
      >
        <BrowserRouter>
          <AppRoute />
          {/* <HodDetaiPage/> */}
        </BrowserRouter>
      </newContext.Provider>
    </div>
  );
}

export default App;
