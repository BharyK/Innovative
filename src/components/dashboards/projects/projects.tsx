import {
  Fragment,
  useEffect,
  useState,
  type JSXElementConstructor,
  type Key,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import ExcelMultiTab from "../../utilities/excel-reader/excel-multi-tab";
import { Link } from "react-router-dom";
import { getApi } from "../../../api/services";

const Projects = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://vrp.vinnovative.co.in/api/resource/Timesheet?fields=["name","owner"]',
        {
          method: "GET",
          headers: {
            Authorization: "token e6754f4d92fb8aa:600b46ec1ad5896",
            "Content-Type": "application/json",
          },
        },
      );

      const data = await res.json();
      console.log(data);
      setEmployeeDetails(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // const fetchData = async () => {
  //   const header = "name";
  //   try {
  //     const [employeeDeatailsData] = await Promise.all([
  //       getApi(
  //         `https://vrp.vinnovative.co.in/api/resource/Timesheet?fields=["${header}"]`,
  //         {
  //           headers: {
  //             Authorization: "token e6754f4d92fb8aa:600b46ec1ad5896",
  //           },
  //         },
  //       ),
  //     ]);

  //     setEmployeeDetails(employeeDeatailsData.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <Fragment>
      {/* <!-- Start::page-header --> */}
      <Seo title={"Expenses"} />
      <Pageheader
        title="Dashboard"
        currentpage="Expenses"
        activepage="Expenses"
      />
    </Fragment>
  );
};

export default Projects;
