import{j as t,L as l,r as A}from"./index-B9OqNNtW.js";import{S as s}from"./spk-tables-D3hj-w1w.js";import{f as j}from"./1-D9GcpNWB.js";import{f as p}from"./2-CMwqw6pL.js";import{f as C}from"./3-e_JKDO5Q.js";import{f as B}from"./4-BvjlBdSq.js";import{f as u}from"./5-DJZI3Dv0.js";import{f as b}from"./6-eUiJh6nN.js";import{f as P}from"./8-KczY8jVn.js";import{f as k}from"./10-DJY4r3ac.js";import{f as g}from"./11-Dv4H9hoZ.js";import{f as y}from"./12-DIsovD7x.js";import{f as N}from"./13-DgBn0lim.js";import{f as T}from"./14-u0tXO_G7.js";import{f as v}from"./15-Dnc-T42e.js";import{f as H}from"./16-DX-BILfC.js";import{P as M}from"./pageheader-BoORmfIV.js";import{S as L}from"./seo-BPobQkd9.js";import{S as r}from"./showcode-BTCpz21M.js";import{S as i}from"./spk-badge-B0pa-PHm.js";import{S as c}from"./spk-button-CEtg3cXB.js";import{S as f}from"./spk-progress-BV4nBiId.js";import{R as o}from"./Row-BX1QiT30.js";import{C as d}from"./Col-Bn1iAtN2.js";import"./Table-Ane4wcb2.js";import"./ThemeProvider-C2ht03iH.js";import"./Card-Dt1grWNq.js";import"./CardHeaderContext-aGazOiJx.js";import"./divWithClassName-CRx3L4Vg.js";import"./ProgressBar-APL7EgJG.js";import"./ElementChildren-EgXLlF_i.js";const I=` 
import { Table } from "react-bootstrap";

<div className="table-responsive">
<Table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
<th scope="row">John</th>
<td>21,Dec 2023</td>
<td>+1234-12340</td>
<td><Badge className="bg-primary-transparent">
Completed</Badge></td>
        </tr>
        <tr>
<th scope="row">Vareni</th>
<td>29,April 2023</td>
<td>+1523-12459</td>
<td><Badge className="bg-secondary-transparent">
Failed</Badge></td>
        </tr>
        <tr>
<th scope="row">Sasra</th>
<td>30,Nov 2023</td>
<td>+1982-16234</td>
<td><Badge className="bg-success-transparent">
Successful</Badge></td>
        </tr>
        <tr>
<th scope="row">Widoyi</th>
<td>18,Mar 2023</td>
<td>+1526-10729</td>
<td><Badge className="bg-warning-transparent">
Pending</Badge></td>
        </tr>
        <tr>
<th scope="row">Rocky</th>
<td>30,Nov 2023</td>
<td>+1982-16234</td>
<td><Badge className="bg-success-transparent">
Successful</Badge></td>
        </tr>
    </tbody>
</Table>
</div>`,D=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
{Basictable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.date}</td>
        <td>{idx.number}</td>
        <td><SpkBadge Customclass={'bg-outline-&#60{idx.color}'}>{idx.status}</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`,W=`

import {Table1data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
{Table1data.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </th>
        <td><Badge bg={idx.color} className={'badge &#{idx.class}'}>{idx.text}</Badge></td>
        <td>{idx.mail}</td>
        <td>
            <div className="hstack gap-2 flex-wrap">
                <Link to="#!" className="text-info fs-14 lh-1">
                    <i className="ri-edit-line"></i>
                </Link>
                <Link to="#!" className="text-danger fs-14 lh-1">
                    <i className="ri-delete-bin-5-line"></i>
                </Link>
            </div>
        </td>
    </tr>
))}`,R=`

interface Bordertable {
    id: number
    src: string
    name: string
    mail: string
    color: string
    class: string
    class1: string
    text: string
}
export const Bordertable: Bordertable[] = [
    { id: 1, src: "/assets/images/faces/13.jpg", name: "Sukuro Kim", mail: "kimosukuro@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" },
    { id: 2, src: "/assets/images/faces/6.jpg", name: "Hasimna", mail: "hasimna2132@gmail.com", color: "light", class: "text-default", text: "Inactive", class1: "offline" },
    { id: 3, src: "/assets/images/faces/15.jpg", name: "Azimo Khan", mail: "azimokhan421@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" },
    { id: 4, src: "/assets/images/faces/5.jpg", name: "Samantha Julia", mail: "	julianasams143@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" }
];`,F=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
<SpkTables tableClass="text-nowrap table-bordered" header={[{ title: 'User' }, { title: 'Status' }, { title: 'Email' }, { title: 'Action' }]}>
{Bordertable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </th>
        <td><SpkBadge variant={idx.color} Customclass={'&#60{idx.class}'}>{idx.text}</SpkBadge></td>
        <td>{idx.mail}</td>
        <td>
            <div className="hstack gap-2 flex-wrap">
                <Link to="#!" className="text-info fs-14 lh-1">
                    <i className="ri-edit-line"></i>
                </Link>
                <Link to="#!" className="text-danger fs-14 lh-1">
                    <i className="ri-delete-bin-5-line"></i>
                </Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`,$=`
interface Primarytable {
    id: number
    src: string
    order: string
    date: string
    name: string
}
export const Primarytable: Primarytable[] = [
    { id: 1, src: "/assets/images/faces/3.jpg", order: "#0007", date: "26-04-2022", name: "Mayor Kelly", },
    { id: 2, src: "/assets/images/faces/6.jpg", order: "#0008", date: "	15-02-2022", name: "Wicky Kross", },
    { id: 3, src: "/assets/images/faces/1.jpg", order: "#0009", date: "23-05-2022", name: "Julia Cam", }
];`,U=`import {Primarytable} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
<Table className="text-nowrap table-bordered border-primary">
<thead>
    <tr>
        <th scope="col">Order</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Primarytable.map((idx)=>(
    <tr>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="primary-transaprent">Booked</SpkBadge></td>
    </tr>
    ))}

</tbody>
</Table>`,K=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
  <SpkTables tableClass="text-nowrap table-bordered border-primary" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Action' }]}>
{Primarytable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="primary-transparent">Booked</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`,J=`

interface Primarytable {
    id: number
    src: string
    order: string
    date: string
    name: string
}

export const Successtable: Primarytable[] = [
    { id: 1, src: "/assets/images/faces/10.jpg", order: "#0011", date: "07-01-2022", name: "Helsenky", },
    { id: 2, src: "/assets/images/faces/14.jpg", order: "#0012", date: "18-05-2022", name: "Brodus", },
    { id: 3, src: "/assets/images/faces/12.jpg", order: "#0013", date: "19-03-2022", name: "Chikka Alen", }
];`,O=`import {Table5data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
<Table className="text-nowrap table-bordered border-success">
<thead>
    <tr>
        <th scope="col">Order</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Successtable.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </span>{idx.name}
            </div>
        </td>
        <td><span className="badge bg-success-transparent">Delivered</span></td>
    </tr>
    ))}
</tbody>
</Table>`,z=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-bordered border-success" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Successtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass=" text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="success-transparent">Delivered</SpkBadge></td>
    </tr>
))}
</SpkTables>`,q=`

export const Warningtable: Primarytable[] = [
    { id: 1, src: "/assets/images/faces/13.jpg", order: "#0014", date: "21-02-2022", name: "Sukuro Kim", },
    { id: 2, src: "/assets/images/faces/11.jpg", order: "#0018", date: "26-03-2022", name: "Alex Carey", },
    { id: 3, src: "/assets/images/faces/2.jpg", order: "#0020", date: "14-03-2022", name: "Pamila Anderson", }
];`,G=`import {Warningtable} from "@/shared/data/tables/tablesdata";  
    import { Table } from "react-bootstrap";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

<tbody>
{Warningtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><span className="badge bg-warning-transparent">Accepted</span></td>
    </tr>
))}
</tbody>`,E=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
<SpkTables tableClass="text-nowrap table-bordered border-warning" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Warningtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="warning-transparent">Accepted</SpkBadge></td>
    </tr>
))}
</SpkTables>`,Z=`<Table className="table text-nowrap table-borderless">
<thead>
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
{Borderdata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.transactionid}</td>
        <td>{idx.date}</td>
        <td><SpkBadge variant="" Customclass={'bg-&#60{idx.color}'}>{idx.status}</SpkBadge></td>
    </tr>
))}
</tbody>
</Table>`,Q=`
interface Border {
    id: number;
    name: string;
    transactionid: string;
    date: string;
    status: string;
    color: string;
}
export const Borderdata: Border[] = [
    { id: 1, name: "Harshrath", transactionid: "#5182-3467", date: "24 May 2022", status: "Fixed", color: "primary" },
    { id: 2, name: "Zozo Hadid", transactionid: "#5182-3412", date: "02 July 2022", status: "In Progress", color: "warning" },
    { id: 3, name: "Martiana", transactionid: "#5182-3423", date: "15 April 2022", status: "Completed", color: "success" },
    { id: 4, name: "Alex Carey", transactionid: "#5182-3456", date: "17 March 2022", status: "Pending", color: "danger" },
]`,V=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-borderless" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Borderdata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.transactionid}</td>
        <td>{idx.date}</td>
        <td><SpkBadge variant="" Customclass={'bg-&#60{idx.color}'}>{idx.status}</SpkBadge></td>
    </tr>
))}
</SpkTables>`,X=`<Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Product</th>
        <th scope="col">Seller</th>
        <th scope="col">Sale Percentage</th>
        <th scope="col">Qunatity Sold</th>
    </tr>
</thead>
<tbody className="table-group-divider">
{Groupdata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.product}</th>
        <td>{idx.seller}</td>
        <td><Link to="#!"  className={'text-&#60{idx.color}'}>{idx.percent}<i
            className={'ri-arrow-&#60{idx.icon}-fill ms-1'}></i></Link></td>
        <td>{idx.sold}</td>
    </tr>
))}
</tbody>
</Table>`,Y=`
interface Group {
    id: number;
    product: string;
    seller: string;
    percent: string;
    sold: string;
    icon: string;
    color: string;
}
export const Groupdata: Group[] = [
    { id: 1, product: "Smart Watch", seller: "Slowtrack.inc", percent: "	24.23%", sold: "250/1786", icon: "up", color: "success" },
    { id: 2, product: "White Sneakers", seller: "American & Co.inc", percent: "12.45%", sold: "123/985", icon: "down", color: "danger" },
    { id: 3, product: "Baseball Bat", seller: "Sports Company", percent: "06.64%", sold: "124/232", icon: "up", color: "success" },
    { id: 4, product: "Black Hoodie", seller: "Renonds Fabrics", percent: "14.42%", sold: "192/2456", icon: "up", color: "success" },
]`,_=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" tBodyClass="table-group-divider" header={[{ title: 'Product' }, { title: 'Seller' }, { title: 'Sale Percentage' }, { title: 'Quantity Sold' }]}>
{Groupdata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.product}</th>
        <td>{idx.seller}</td>
        <td><Link to="#!"  className={'text-&#60{idx.color}'}>{idx.percent}<i
            className={'ri-arrow-&#60{idx.icon}-fill ms-1'}></i></Link></td>
        <td>{idx.sold}</td>
    </tr>
))}
</SpkTables>`,w=`
interface Strippedtable {
    id: number
    order: string
    name: string
    date: string
}
export const Strippedtable: Strippedtable[] = [
    { id: 1, order: "2022R-01", date: "27-010-2022", name: "Moracco" },
    { id: 2, order: "2022R-02", date: "28-10-2022", name: "Thornton" },
    { id: 3, order: "2022R-03", date: "22-10-2022", name: "Larry Bird" },
    { id: 4, order: "2022R-04", date: "29-09-2022", name: "Erica Sean" }
];`,tt=`
import {Strippedtable} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table striped className="table text-nowrap table-striped">
<thead>
    <tr>
     <th scope="col">ID</th>
     <th scope="col">Date</th>
     <th scope="col">Customer</th>
     <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Strippedtable.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
        <div className="hstack gap-2 fs-15">
        <a to="#!"  className="btn btn-icon btn-sm btn-info-light rounded-pill"><i className="ri-edit-line"></i></a>
       <a to="#!"  className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i className="ri-delete-bin-line"></i></a>
   </div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,et=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-striped" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Strippedtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <SpkButton Buttonvariant="success" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download </SpkButton>
        </td>
    </tr>
))}
</SpkTables>`,at=`import {Strippedtable} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-striped-columns">
<thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Strippedtable.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <div className="hstack gap-2 fs-15">
                 <a to="#!"  className="btn btn-icon btn-sm btn-info-light 
                 rounded-pill"><i className="ri-edit-line"></i></a>
                <a to="#!"  className="btn btn-icon btn-sm btn-danger-light
                 rounded-pill"><i className="ri-delete-bin-line"></i></a>
            </div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,st=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-striped-columns" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Strippedtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <SpkButton Buttonvariant="danger" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete </SpkButton>
        </td>
    </tr>
))}
</SpkTables>`,n=`
export const tablePrimary: tablePrimary[] = [
    { id: 1, text1: "Mark", text2: "Otto", text3: "@mdo" },
    { id: 2, text1: "Jacob", text2: "Thornton", text3: "@fat" },
    { id: 3, text1: "Larry the Bird", text2: "Thornton", text3: "@twitter" }
];`,rt=`
import {tablePrimary} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {tablePrimary.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`,dt=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-primary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`,lt=`import {tablePrimary} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {tablePrimary.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`,it=` 
 <SpkTables tableClass="text-nowrap table-secondary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`,ot=`
import {tablePrimary} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {tablePrimary.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`,ct=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-warning" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`,nt=` 
import {tablePrimary} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {tablePrimary.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`,mt=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-danger" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`,pt=`<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {tablePrimary.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`,ht=`  
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-dark" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescompo>`,xt=`import {tablePrimary} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {tablePrimary.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`,bt=`
 <SpkTables tableClass="text-nowrap table-success table-striped" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`,ut=`<Table className="table text-nowrap table-hover">
<thead>
    <tr>
        <th scope="col">Product Manager</th>
        <th scope="col">Category</th>
        <th scope="col">Team</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
{Hoverabledata.map((idx,index) => (
    <tr key={index}>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={idx.src} alt="img" />
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.product}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><span className={'badge bg-&#60{idx.color}-transparent'}>{idx.category}</span></td>
        <td>
            {idx.team}
        </td>
        <td>
            <SpkProgress variant='primary' mainClass='progress-xs' now={idx.status} />
        </td>
    </tr>
))}
</tbody>
</Table>`,gt=`
export const Hoverabledata = [
    { id: 1, product: "Joanna Smith", src: "/assets/images/faces/10.jpg", mail: "joannasmith14@gmail.com", category: "Fashion", color: "primary", team: avatar1, status: 52 },
    { id: 2, product: "Kara Kova", src: "/assets/images/faces/2.jpg", mail: "milesakara@gmail.com", category: "Clothing", color: "warning", team: avatar2, status: 40 },
    { id: 3, product: "Donald Trimb", src: "/assets/images/faces/16.jpg", mail: "donaldo21@gmail.com", category: "Electronics", color: "dark", team: avatar3, status: 17 },
    { id: 4, product: "Justin Gaethje", src: "/assets/images/faces/13.jpg", mail: "justingae@gmail.com", category: "Sports", color: "danger", team: avatar4, status: 72 },
]`,vt=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
  <SpkTables tableClass="text-nowrap table-hover" header={[{ title: 'Product Manager' }, { title: 'Category' }, { title: 'Team' }, { title: 'Status' }]}>
{Hoverabledata.map((idx,index) => (
    <tr key={index}>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={idx.src} alt="img" />
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.product}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><span className={'badge bg-&#60{idx.color}-transparent'}>{idx.category}</span></td>
        <td>
            {idx.team}
        </td>
        <td>
            <SpkProgress variant='primary' mainClass='progress-xs' now={idx.status} />
        </td>
    </tr>
))}
</SpkTables>`,jt=`
interface Hoverable {
    id: number
    src: string
    name: string
    mail: string
    date: string
    text1: string
    text2: string
    color: string
    class: string
    icon: string
}
export const Hoverable: Hoverable[] = [
    { id: 1, src: "/assets/images/faces/15.jpg", name: "Mark Cruise", mail: "markcruise24@gmail.com", date: "Jul 26,2022", text1: "IN-2032", text2: "Paid", color: "success-transparent", class: "", icon: "check-fill" },
    { id: 2, src: "/assets/images/faces/12.jpg", name: "Charanjeep", mail: "charanjeep@gmail.in", date: "Mar 14,2022", text1: "IN-2022", text2: "Paid", color: "success-transparent", class: "", icon: "check-fill" },
    { id: 3, src: "/assets/images/faces/5.jpg", name: "Samantha Julie", mail: "julie453@gmail.com", date: "Feb 1,2022", text1: "IN-2014", text2: "Cancelled", color: "danger-transparent", class: "", icon: "close-fill" },
    { id: 4, src: "/assets/images/faces/11.jpg", name: "Simon Cohen", mail: "simon@gmail.com", date: "Apr 24,2022", text1: "IN-2036", text2: "	Refunded", color: "light", class: "text-default", icon: "reply-line" }
];`,Ct=`import {Hoverable} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
<Table className="text-nowrap table-striped table-hover">
<thead>
    <tr>
        <th scope="col">Invoice</th>
        <th scope="col">Customer</th>
        <th scope="col">Status</th>
        <th scope="col">Date</th>
    </tr>
</thead>
<tbody>
    {Hoverable.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.text1}</th>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.name}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><Badge bg={idx.color} className={badge {idx.class}}><i
                    className={ri-{idx.icon} align-middle me-1}>
                    </i>{idx.text2}</Badge></td>
        <td>{idx.date}</td>
    </tr>
    ))}
</tbody>
</Table>`,kt=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

<SpkTables tableClass="text-nowrap table-striped table-hover" header={[{ title: 'Invoice' }, { title: 'Customer' }, { title: 'Status' }, { title: 'Date' }]}>
{Hoverable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.text1}</th>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={idx.src} alt="img" />
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.name}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><SpkBadge variant={idx.color} Customclass={idx.class}><i
            className={'ri-&#60{idx.icon} align-middle me-1'}></i>{idx.text2}</SpkBadge></td>
        <td>{idx.date}</td>
    </tr>
))}
</SpkTablescompon>`,yt=`
interface Primaryhead {
    id: number
    text: string
    date: string
    name: string
}
export const Primaryhead: Primaryhead[] = [
    { id: 1, name: "Harshrath", date: "24 May 2022", text: "	#5182-3467" },
    { id: 2, name: "Zozo Hadid", date: "02 July 2022", text: "#5182-3412" },
    { id: 3, name: "Martiana", date: "15 April 2022", text: "#5182-3423" },
    { id: 4, name: "Alex Carey", date: "17 March 2022", text: "#5182-3456" }
];`,Nt=`import {Primaryhead} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-primary">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Primaryhead.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
<div className="hstack gap-2 fs-15">
    <a to="#!" 
        className="btn btn-icon btn-sm btn-success-light rounded-pill"><i
className="ri-download-2-line"></i></a>
    <a to="#!" 
        className="btn btn-icon btn-sm btn-info-light rounded-pill"><i
className="ri-edit-line"></i></a>
    <a to="#!" 
        className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i
className="ri-delete-bin-line"></i></a>
</div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,Tt=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

  <SpkTables headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Primaryhead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <div className="hstack gap-2 fs-15">
                <Link to="#!" 
                    className="btn btn-icon btn-sm btn-success-light rounded-pill"><i
                        className="ri-download-2-line"></i></Link>
                <Link to="#!" 
                    className="btn btn-icon btn-sm btn-info-light rounded-pill"><i
                        className="ri-edit-line"></i></Link>
                <Link to="#!" 
                    className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i
                        className="ri-delete-bin-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`,h=`
interface Warninghead {
    id: number
    text: string
    date: string
    name: string
    btn: string
    color: string
}
export const Warninghead: Warninghead[] = [
    { id: 1, name: "Harshrath", date: "24 May 2022", text: "	#5182-3467", btn: "Pending", color: "primary-light" },
    { id: 2, name: "Zozo Hadid", date: "02 July 2022", text: "#5182-3412", btn: "Pending", color: "primary-light" },
    { id: 3, name: "Martiana", date: "15 April 2022", text: "#5182-3423", btn: "Rejected", color: "danger-light" },
    { id: 4, name: "Alex Carey", date: "17 March 2022", text: "#5182-3456", btn: "Processed", color: "success-light" }
];`,ft=`import {Warninghead} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-warning">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Warninghead.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton variant={idx.color} className="btn-sm">{idx.btn}</SpkButton>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,wt=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-warning" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`,St=`import {Table8data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-success">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Warninghead.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton variant={idx.color} className="btn-sm">{idx.btn}</SpkButton>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,Bt=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-success" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`,Pt=`import {Warninghead} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-info">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Warninghead.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton variant={idx.color} className="btn-sm">{idx.btn}</SpkButton>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,Ht=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-info" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`,At=`import {Warninghead} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-secondary">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Warninghead.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton variant={idx.color} className="btn-sm">{idx.btn}</SpkButton>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,Mt=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-secondary" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`,Lt=` import {Warninghead} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-danger">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Warninghead.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton variant={idx.color} className="btn-sm">{idx.btn}</SpkButton>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,It=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-danger" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`,Dt=`
interface Tablefoot {
    id: number
    text1: string
    text2: string
    text3: string
    text4: string
}
export const Tablefoot: Tablefoot[] = [
    { id: 1, text1: "01", text2: "Manchester", text3: "232", text4: "42%" },
    { id: 2, text1: "02", text2: "Barcelona", text3: "175", text4: "58%" },
    { id: 3, text1: "03", text2: "Portugal", text3: "126", text4: "32%" }
];`,Wt=` import {Tablefoot} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-primary">
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Team</th>
        <th scope="col">Matches Won</th>
        <th scope="col">Win Ratio</th>
    </tr>
</thead>
<tbody>
    {Tablefoot.map((idx,index) => (
        <tr key={index}>
            <th scope="row">
                {idx.text1}
            </th>
            <td>
                {idx.text2}
            </td>
            <td>
                {idx.text3}
            </td>
            <td>
                <span className="badge bg-primary">{idx.text3}</span>
            </td>
        </tr>
    ))}
</tbody>
<tfoot className="table-primary">
    <tr>
        <th scope="row">
            Total
        </th>
        <td>
            United States
        </td>
        <td>
            558
        </td>
        <td><span className="badge bg-primary">56%</span></td>
    </tr>
</tfoot>
</Table>`,Rt=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables footerClass="table-primary" headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Team' }, { title: 'Matches Won' }, { title: 'Win Ratio' }]}>
{Tablefoot.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.text1}
        </th>
        <td>
            {idx.text2}
        </td>
        <td>
            {idx.text3}
        </td>
        <td>
            <SpkBadge variant="primary">{idx.text3}</SpkBadge>
        </td>
    </tr>
))}
<tr className="table-primary">
    <th scope="row">
        Total
    </th>
    <td>
        United States
    </td>
    <td>
        558
    </td>
    <td><SpkBadge variant="primary">56%</SpkBadge></td>
</tr>
</SpkTablescomponent>`,Ft=`<Table className="table text-nowrap">
<caption className="px-3">Top 3 Countries</caption>
<thead>
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Country</th>
        <th scope="col">Medals Won</th>
        <th scope="col">No Of Athletes</th>
    </tr>
</thead>
<tbody>
{Captiondata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">0{idx.id}</th>
        <td>{idx.country}</td>
        <td>{idx.won}<i className="ri-medal-line mx-2"></i></td>
        <td>{idx.athletes}</td>
    </tr>
))}
</tbody>
</Table>`,$t=`
interface Caption {
    id: number;
    country: string;
    won: string;
    athletes: string;
}
export const Captiondata: Caption[] = [
    { id: 1, country: "United States", won: "2012", athletes: "1823" },
    { id: 2, country: "United Kingdom", won: "1012", athletes: "992" },
    { id: 3, country: "Germany", won: "914", athletes: "875" },
]`,Ut=`  
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables headerContent={<caption className='px-3'>Top 3 Countries</caption>} tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Country' }, { title: 'Medals Won' }, { title: 'No Of Athletes' }]}>
{Captiondata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">0{idx.id}</th>
        <td>{idx.country}</td>
        <td>{idx.won}<i className="ri-medal-line mx-2"></i></td>
        <td>{idx.athletes}</td>
    </tr>
))}
</SpkTables>`,Kt=`<Table className="table text-nowrap caption-top">
<caption className="px-2">Top IT Companies</caption>
<thead>
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Revenue</th>
        <th scope="col">Country</th>
    </tr>
</thead>
<tbody>
{Topcaptuiondata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.name}</td>
        <td>{idx.revenue}</td>
        <td>{idx.country}</td>
    </tr>
))}
</tbody>
</Table>`,Jt=`
interface Topcaption {
    id: number;
    name: string;
    revenue: string;
    country: string;
}
export const Topcaptuiondata: Topcaption[] = [
    { id: 1, name: "Microsoft", revenue: "$170 billion", country: "United States" },
    { id: 2, name: "HP", revenue: "$72 billion", country: "United States" },
    { id: 3, name: "IBM", revenue: "$60 billion", country: "United States" },
]`,Ot=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

  <SpkTables headerContent={<caption className="px-2">Top IT Companies</caption>} tableClass="text-nowrap caption-top" header={[{ title: 'S.No' }, { title: 'Country' }, { title: 'Revenue' }, { title: 'Country' }]}>
{Topcaptuiondata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.name}</td>
        <td>{idx.revenue}</td>
        <td>{idx.country}</td>
    </tr>
))}
</SpkTables>`,zt=` <Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Created On</th>
        <th scope="col">Number</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
{Activedata.map((idx,index) => (
    <tr key={index} className={idx.class}>
        <th scope="row">{idx.name}</th>
        <td>{idx.create}</td>
        <td className={idx.tdclass}>{idx.number}</td>
        <td><span className={'badge bg-&#60{idx.color}'}>{idx.status}</span></td>
    </tr>
))}
</tbody>
 </Table>`,qt=`
 interface Active {
    id: number;
    name: string;
    create: string;
    number: string;
    status: string;
    color: string;
    class: string;
    tdclass: string;
}
export const Activedata: Active[] = [
    { id: 1, name: 'Mark', create: "21,Dec 2021", number: "+1234-12340", status: "Completed", color: "primary", class: "table-active", tdclass: '' },
    { id: 2, name: 'Monika', create: "29,April 2022", number: "+1523-12459", status: "Failed", color: "warning", class: "", tdclass: '' },
    { id: 3, name: 'Madina', create: "30,Nov 2022", number: "+1982-16234", status: "Successful", color: "success", class: "", tdclass: 'table-active' },
    { id: 4, name: 'Bhamako', create: "18,Mar 2022", number: "+1526-10729", status: "Pending", color: "secondary", class: "", tdclass: '' },
]`,Gt=`
 <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
 {Activedata.map((idx,index) => (
     <tr key={index} className={idx.class}>
         <th scope="row">{idx.name}</th>
         <td>{idx.create}</td>
         <td className={idx.tdclass}>{idx.number}</td>
         <td><span className={'badge bg-&#60{idx.color}'}>{idx.status}</span></td>
     </tr>
 ))}
</SpkTablescomponent>`,Et=`
interface Smalltables {
    id: string
    text: string
    date: string
    name: string
    class: string
}
export const Smalltables: Smalltables[] = [
    { id: "1", name: "Zelensky", date: "25-Apr-2021", text: "Paid", class: "success-transparent" },
    { id: "2", name: "Kim Jong", date: "29-April-2022", text: "Pending", class: "danger-transparent" },
    { id: "3", name: "Obana", date: "30-Nov-2022", text: "Paid", class: "success-transparent" },
    { id: "4", name: "Sean Paul", date: "01-Jan-2022", text: "Paid", class: "success-transparent" },
    { id: "5", name: "Karizma", date: "14-Feb-2022", text: "Pending", class: "danger-transparent" }
];`,Zt=`import {Smalltables} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-sm">
<thead>
    <tr>
        <th scope="col">Invoice</th>
        <th scope="col">Created Date</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Smalltables.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">
            <div className="form-check">
            <Form.Check id={idx.id} className="" type="checkbox" value="" />
                <Form.Label className="" htmlFor="checkebox-sm">
                    {idx.name}
                </Form.Label>
            </div>
        </th>  
        <td>{idx.date}</td>
        <td><Badge bg={idx.class} className="badge 
        bg-success-transparent">{idx.text}</Badge></td>
        <td>
            <div className="hstack gap-2 fs-15">
                <a to="#!"  className="btn btn-icon btn-sm
                 btn-light"><i className="ri-download-2-line"></i></a>
                <a to="#!"  className="btn btn-icon btn-sm 
                btn-light"><i className="ri-edit-line"></i></a>
            </div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`,Qt=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-sm" header={[{ title: 'Invoice' }, { title: 'Created Date' }, { title: 'Status' }, { title: 'Action' }]}>
{Smalltables.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            <div className="form-check">
                <input id={idx.id} defaultChecked={idx.checked === 'defaultChecked'} className="form-check-input" type="checkbox" value="" />
                <div className="form-check-label">
                    {idx.name}
                </div>
            </div>
        </th>
        <td>{idx.date}</td>
        <td><SpkBadge variant={idx.class} Customclass="bg-success-transparent">{idx.text}</SpkBadge></td>
        <td>
            <div className="hstack gap-2 fs-15">
                <Link to="#!"  className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                <Link to="#!"  className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`,Vt=`import {ColorTables} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Color</th>
        <th scope="col">Client</th>
        <th scope="col">State</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total Price</th>
    </tr>
</thead>
<tbody>
    {ColorTables.map((idx,index)=>(
    <tr key={index}>
        <th scope="row">{idx.text}</th>
        <td>{idx.name}</td>
        <td><Badge bg={idx.color} 
        className={badge {idx.class2}}>Processed</Badge></td>
        <td>{idx.quantity}</td>
        <td>{idx.price}</td>
    </tr>
    ))}
</tbody>
</Table>`,Xt=`
interface ColorTables {
    id: number
    text: string
    color: string
    quantity: string
    price: string
    class1: string
    class2: string
    name: string
    bgcolor: string
}
export const ColorTables: ColorTables[] = [
    { id: 1, text: "Default", color: "primary-transparent", quantity: "22", price: "$2,012", class1: "", class2: "", name: "Rita Book", bgcolor: "" },
    { id: 2, text: "Primary", color: "primary", quantity: "22", price: "$4,254", class1: "table-primary", class2: "", name: "Rhoda Report", bgcolor: "table-primary" },
    { id: 3, text: "Secondary", color: "secondary", quantity: "26", price: "$1,234", class1: "table-secondary", class2: "", name: "Rita Book", bgcolor: "table-secondary" },
    { id: 4, text: "Success", color: "success", quantity: "42", price: "$2,623", class1: "table-success", class2: "", name: "Anne Teak", bgcolor: "table-success" },
    { id: 5, text: "Danger", color: "danger", quantity: "52", price: "$32,132", class1: "table-danger", class2: "", name: "Dee End", bgcolor: "table-danger" },
    { id: 6, text: "Warning", color: "warning", quantity: "10", price: "$1,434", class1: "table-warning", class2: "", name: "Lee Nonmi", bgcolor: "table-warning" },
    { id: 7, text: "Info", color: "info", quantity: "63", price: "$1,854", class1: "table-info", class2: "", name: "Lynne Gwistic", bgcolor: "table-info" },
    { id: 8, text: "Light", color: "light", quantity: "05", price: "$823", class1: "table-light", class2: "text-default", name: "Fran Tick", bgcolor: "table-light" },
    { id: 9, text: "Dark", color: "dark", quantity: "35", price: "$1,832", class1: "table-dark", class2: "text-light", name: "Polly Pipe", bgcolor: "table-dark" }
];`,Yt=` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap" header={[{ title: 'Color' }, { title: 'Client' }, { title: 'State' }, { title: 'Quantity' }, { title: 'Total Price' }]}>
{ColorTables.map((idx,index) => (
    <tr key={index} className={idx.bgcolor}>
        <th scope="row">{idx.text}</th>
        <td>{idx.name}</td>
        <td><SpkBadge variant={idx.color} Customclass={idx.class2}>Processed</SpkBadge></td>
        <td>{idx.quantity}</td>
        <td>{idx.price}</td>
    </tr>
))}
</SpkTables>`,_t=`<Table className="table text-nowrap table-striped table-bordered">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <td colSpan="4">
            <table className="table text-nowrap mb-0">
                <thead>
                    <tr>
                        <th scope="col">Aplhabets</th>
                        <th scope="col">Users</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">A</th>
                        <td>Dino King</td>
                        <td>dinoking231@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        <td>Poppins sams</td>
                        <td>pops@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">C</th>
                        <td>Brian Shaw</td>
                        <td>swanbrian@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
    <tr>
        <th scope="row">4</th>
        <td>Jimmy</td>
        <td>the Ostrich</td>
        <td>Dummy Text</td>
    </tr>
    <tr>
        <th scope="row">5</th>
        <td>Cobra Kai</td>
        <td>the Snake</td>
        <td>Another Name</td>
    </tr>
</tbody>
</Table>`,te=`  
 <SpkTablescomponent tableClass="text-nowrap table-striped table-bordered" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
<tr>
    <td colSpan={4}>
        <table className="table text-nowrap mb-0">
            <thead>
                <tr>
                    <th scope="col">Alphabets</th>
                    <th scope="col">Users</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">A</th>
                    <td>Dino King</td>
                    <td>dinoking231@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row">B</th>
                    <td>Poppins sams</td>
                    <td>pops@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row">C</th>
                    <td>Brian Shaw</td>
                    <td>swanbrian@gmail.com</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
</tr>
<tr>
    <th scope="row">4</th>
    <td>Jimmy</td>
    <td>the Ostrich</td>
    <td>Dummy Text</td>
</tr>
<tr>
    <th scope="row">5</th>
    <td>Cobra Kai</td>
    <td>the Snake</td>
    <td>Another Name</td>
</tr>
</SpkTablescomponent>`,ee=` <Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col"><input className="form-check-input" 
        type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/></th>
        <th scope="col">Team Head</th>
        <th scope="col">Gmail</th>
        <th scope="col">Category</th>
        <th scope="col">Role</th>
        <th scope="col">Team</th>
        <th scope="col">Work Progress</th>
        <th scope="col">Revenue</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row"><input className="form-check-input" type="checkbox" 
        id="checkboxNoLabel1" value="" aria-label="..."/></th>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={face3} alt="img"/>
                </span>Mayor Kelly
            </div>
        </td>
        <td>mayorkrlly@gmail.com</td>
        <td>Manufacturer</td>
        <td><SpkBadge variant="primary-transaprent">Team Lead</SpkBadge></td>
        <td>
        <ProgressBar className="progress progress-xs" variant='primary' now={52} />
        </td>
        <td>$10,984.29</td>
        <td>
            <div className="avatar-list-stacked">
                <span className="avatar avatar-sm avatar-rounded">
                    <img src={face2} alt="img"/>
                </span>
                <span className="avatar avatar-sm avatar-rounded">
                    <img src={face8} alt="img"/>
                </span>
                <span className="avatar avatar-sm avatar-rounded">
                    <img src={face2} alt="img"/>
                </span>
                <a className="avatar avatar-sm bg-primary 
                text-fixed-white avatar-rounded" to="#!" >
                    +4
                </a>
            </div>
        </td>
        <td>
            <div className="hstack gap-2 fs-15">
                <a to="#!"  className="btn btn-icon btn-sm btn-success">
                <i className="ri-download-2-line"></i></a>
                <a to="#!"  className="btn btn-icon btn-sm btn-info">
                <i className="ri-edit-line"></i></a>
            </div>
        </td>
    </tr>
</tbody>
</Table>`,ae=`
export const Responsivedata = [
    { id: 1, src: "/assets/images/faces/3.jpg", name: "Mayor Kelly", category: "Manufacturer", role: "Team Lead", color: "primary", team: Avatar, progress: 52, revenue: "$10,984.29", mail: "mayorkrlly@gmail.com" },
    { id: 2, src: "/assets/images/faces/12.jpg", name: "Andrew Garfield", category: "Managing Director", role: "Director", color: "warning", team: Avatar1, progress: 91, revenue: "$1.4billion", mail: "andrewgarfield@gmail.com" },
    { id: 3, src: "/assets/images/faces/14.jpg", name: "Simon Cowel", category: "Service Manager", role: "Manager", color: "success", team: Avatar2, progress: 45, revenue: "$7,123.21", mail: "simoncowel234@gmail.com" },
    { id: 4, src: "/assets/images/faces/5.jpg", name: "Mirinda Hers", category: "Recruiter", role: "Employee", color: "danger", team: Avatar3, progress: 21, revenue: "$2,325.45", mail: "mirindahers@gmail.com" },
]
`,se=`
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" showCheckbox={true} header={[{ title: 'Team Head' }, { title: 'Category' }, { title: 'Role' }, { title: 'Gmail' }, { title: 'Team' }, { title: 'Work Progress' }, { title: 'Revenue' }, { title: 'Action' }]}>
{Responsivedata.map((idx,index) => (
    <tr key={index}>
        <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td>{idx.category}</td>
        <td><SpkBadge variant="primary-transparent">{idx.role}</SpkBadge></td>
        <td>{idx.mail}</td>
        <td>
            {idx.team}
        </td>
        <td>
            <SpkProgress mainClass="progress progress-xs" variant='primary' now={idx.progress} />
        </td>
        <td>{idx.revenue}</td>

        <td>
            <div className="hstack gap-2 fs-15">
                <Link to="#!"  className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                <Link to="#!"  className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`,re=`
interface VerticalTables {
    id: number
    text1: string
    text2: string
    text3: string
    text4: string
    class1: string
    class2: string
    code1: string
    code2: string
}

export const VerticalTables: VerticalTables[] = [
    { id: 1, text1: "This cell inherits", text2: " from the table", text3: "This cell inherits ", text4: "from the table", class1: "", class2: "", code1: "vertical-align: middle;", code2: "vertical-align: middle;" },
    { id: 2, text1: "This cell inherits", text2: "from the table row", text3: "This cell inherits ", text4: "from the table row", class1: "align-bottom", class2: "", code1: "vertical-align: bottom;", code2: "vertical-align: bottom;" },
    { id: 3, text1: "This cell inherits", text2: " from the table", text3: "This cell is aligned to the top.", text4: "", class1: "", class2: "align-top", code1: "vertical-align: middle;", code2: "" },

];`,de=`import {Table12data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table align-middle">
<thead>
    <tr>
        <th scope="col" className="w-25">Heading 1</th>
        <th scope="col" className="w-25">Heading 2</th>
        <th scope="col" className="w-25">Heading 3</th>
        <th scope="col" className="w-25">Heading 4</th>
    </tr>
</thead>
<tbody>
{Table12data.map((idx,index) => (
    <tr key={index} className={idx.class1}>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
        <td>This here is some placeholder text, intended to take up
            quite a
            bit of vertical space, to demonstrate how the vertical
            alignment
            works in the preceding cells.</td>
    </tr>
))}
</tbody>
</Table>`,le=`
 <SpkTablescomponent tableClass="align-middle" header={[{ title: 'Heading 1' }, { title: 'Heading 2' }, { title: 'Heading 3' }, { title: 'Heading 4' }]}>
{Table12data.map((idx,index) => (
    <tr key={index} className={idx.class1}>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
        <td>This here is some placeholder text, intended to take up
            quite a
            bit of vertical space, to demonstrate how the vertical
            alignment
            works in the preceding cells.</td>
    </tr>
))}
</SpkTablescomponent>`,ie=[{id:1,name:"Mark",date:"21,Dec 2021",number:"+1234-12340",status:"Completed",color:"secondary"},{id:2,name:"Monika",date:"29,April 2024",number:"+1523-12459",status:"Failed",color:"danger"},{id:3,name:"Madina",date:"30,Nov 2024",number:"+1982-16234",status:"Successful",color:"primary"},{id:4,name:"Bhamako",date:"18,Mar 2024",number:"+1526-10729",status:"Pending",color:"warning"}],oe=[{id:1,src:N,name:"Sukuro Kim",mail:"kimosukuro@gmail.com",color:"primary-transparent ",class:"",text:"Active",class1:"online"},{id:2,src:b,name:"Hasimna",mail:"hasimna2132@gmail.com",color:"light",class:"text-default",text:"Inactive",class1:"offline"},{id:3,src:v,name:"Azimo Khan",mail:"azimokhan421@gmail.com",color:"primary-transparent ",class:"",text:"Active",class1:"online"},{id:4,src:u,name:"Samantha Julia",mail:"	julianasams143@gmail.com",color:"primary-transparent ",class:"",text:"Active",class1:"online"}],ce=[{id:1,src:C,order:"#0007",date:"26-04-2022",name:"Mayor Kelly"},{id:2,src:b,order:"#0008",date:"	15-02-2022",name:"Wicky Kross"},{id:3,src:j,order:"#0009",date:"23-05-2022",name:"Julia Cam"}],ne=[{id:1,src:k,order:"#0011",date:"07-01-2022",name:"Helsenky"},{id:2,src:T,order:"#0012",date:"18-05-2022",name:"Brodus"},{id:3,src:y,order:"#0013",date:"19-03-2022",name:"Chikka Alen"}],me=[{id:1,src:N,order:"#0014",date:"21-02-2022",name:"Sukuro Kim"},{id:2,src:g,order:"#0018",date:"26-03-2022",name:"Alex Carey"},{id:3,src:p,order:"#0020",date:"14-03-2022",name:"Pamila Anderson"}],pe=[{id:1,name:"Harshrath",transactionid:"#5182-3467",date:"24 May 2024",status:"Fixed",color:"primary"},{id:2,name:"Zozo Hadid",transactionid:"#5182-3412",date:"02 July 2024",status:"In Progress",color:"warning"},{id:3,name:"Martiana",transactionid:"#5182-3423",date:"15 April 2024",status:"Completed",color:"secondary"},{id:4,name:"Alex Carey",transactionid:"#5182-3456",date:"17 March 2024",status:"Pending",color:"danger"}],he=[{id:1,product:"Smart Watch",seller:"Slowtrack.inc",percent:"	24.23%",sold:"250/1786",icon:"up",color:"secondary"},{id:2,product:"White Sneakers",seller:"American & Co.inc",percent:"12.45%",sold:"123/985",icon:"down",color:"danger"},{id:3,product:"Baseball Bat",seller:"Sports Company",percent:"06.64%",sold:"124/232",icon:"up",color:"secondary"},{id:4,product:"Black Hoodie",seller:"Renonds Fabrics",percent:"14.42%",sold:"192/2456",icon:"up",color:"secondary"}],S=[{id:1,order:"2022R-01",date:"27-010-2022",name:"Moracco"},{id:2,order:"2022R-02",date:"28-10-2022",name:"Thornton"},{id:3,order:"2022R-03",date:"22-10-2022",name:"Larry Bird"},{id:4,order:"2022R-04",date:"29-09-2022",name:"Erica Sean"}],m=[{id:1,text1:"Mark",text2:"Otto",text3:"@mdo"},{id:2,text1:"Jacob",text2:"Thornton",text3:"@fat"},{id:3,text1:"Larry the Bird",text2:"Thornton",text3:"@twitter"}],xe=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:p,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:P,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:p,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+5"})]}),be=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:B,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:b,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+6"})]}),ue=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:j,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:g,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:v,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+2"})]}),ge=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:B,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:b,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+5"})]}),ve=[{id:1,product:"Joanna Smith",src:k,mail:"joannasmith14@gmail.com",category:"Fashion",color:"primary",team:xe,status:52},{id:2,product:"Kara Kova",src:p,mail:"milesakara@gmail.com",category:"Clothing",color:"warning",team:be,status:40},{id:3,product:"Donald Trimb",src:H,mail:"donaldo21@gmail.com",category:"Electronics",color:"dark",team:ue,status:17},{id:4,product:"Justin Gaethje",src:N,mail:"justingae@gmail.com",category:"Sports",color:"danger",team:ge,status:72}],je=[{id:1,src:v,name:"Mark Cruise",mail:"markcruise24@gmail.com",date:"Jul 26,2022",text1:"IN-2032",text2:"Paid",color:"primary-transparent",class:"",icon:"check-fill"},{id:2,src:y,name:"Charanjeep",mail:"charanjeep@gmail.in",date:"Mar 14,2022",text1:"IN-2022",text2:"Paid",color:"primary-transparent",class:"",icon:"check-fill"},{id:3,src:u,name:"Samantha Julie",mail:"julie453@gmail.com",date:"Feb 1,2022",text1:"IN-2014",text2:"Cancelled",color:"danger-transparent",class:"",icon:"close-fill"},{id:4,src:g,name:"Simon Cohen",mail:"simon@gmail.com",date:"Apr 24,2022",text1:"IN-2036",text2:"	Refunded",color:"light",class:"text-default",icon:"reply-line"}],Ce=[{id:1,name:"Harshrath",date:"24 May 2022",text:"	#5182-3467"},{id:2,name:"Zozo Hadid",date:"02 July 2022",text:"#5182-3412"},{id:3,name:"Martiana",date:"15 April 2022",text:"#5182-3423"},{id:4,name:"Alex Carey",date:"17 March 2022",text:"#5182-3456"}],x=[{id:1,name:"Harshrath",date:"24 May 2022",text:"	#5182-3467",btn:"Pending",color:"primary-light"},{id:2,name:"Zozo Hadid",date:"02 July 2022",text:"#5182-3412",btn:"Pending",color:"primary-light"},{id:3,name:"Martiana",date:"15 April 2022",text:"#5182-3423",btn:"Rejected",color:"danger-light"},{id:4,name:"Alex Carey",date:"17 March 2022",text:"#5182-3456",btn:"Processed",color:"secondary-light"}],ke=[{id:1,text1:"01",text2:"Manchester",text3:"232",text4:"42%"},{id:2,text1:"02",text2:"Barcelona",text3:"175",text4:"58%"},{id:3,text1:"03",text2:"Portugal",text3:"126",text4:"32%"}],ye=[{id:1,country:"United States",won:"2012",athletes:"1823"},{id:2,country:"United Kingdom",won:"1012",athletes:"992"},{id:3,country:"Germany",won:"914",athletes:"875"}],Ne=[{id:1,name:"Microsoft",revenue:"$170 billion",country:"United States"},{id:2,name:"HP",revenue:"$72 billion",country:"United States"},{id:3,name:"IBM",revenue:"$60 billion",country:"United States"}],Te=[{id:1,name:"Mark",create:"21,Dec 2021",number:"+1234-12340",status:"Completed",color:"primary",class:"table-active",tdclass:""},{id:2,name:"Monika",create:"29,April 2022",number:"+1523-12459",status:"Failed",color:"danger",class:"",tdclass:""},{id:3,name:"Madina",create:"30,Nov 2022",number:"+1982-16234",status:"Successful",color:"secondary",class:"",tdclass:"table-active"},{id:4,name:"Bhamako",create:"18,Mar 2022",number:"+1526-10729",status:"Pending",color:"warning",class:"",tdclass:""}],fe=[{id:"1",name:"Zelensky",date:"25-Apr-2021",text:"Paid",class:"primary-transparent",checked:"defaultChecked"},{id:"2",name:"Kim Jong",date:"29-April-2022",text:"Pending",class:"danger-transparent",checked:""},{id:"3",name:"Obana",date:"30-Nov-2022",text:"Paid",class:"primary-transparent",checked:""},{id:"4",name:"Sean Paul",date:"01-Jan-2022",text:"Paid",class:"primary-transparent",checked:""},{id:"5",name:"Karizma",date:"14-Feb-2022",text:"Pending",class:"danger-transparent",checked:""}],we=[{id:1,text:"Default",color:"primary-transparent",quantity:"22",price:"$2,012",class1:"",class2:"",name:"Rita Book",bgcolor:""},{id:2,text:"Primary",color:"primary",quantity:"22",price:"$4,254",class1:"table-primary",class2:"",name:"Rhoda Report",bgcolor:"table-primary"},{id:3,text:"Secondary",color:"secondary",quantity:"26",price:"$1,234",class1:"table-secondary",class2:"",name:"Rita Book",bgcolor:"table-secondary"},{id:4,text:"Success",color:"success",quantity:"42",price:"$2,623",class1:"table-success",class2:"",name:"Anne Teak",bgcolor:"table-success"},{id:5,text:"Danger",color:"danger",quantity:"52",price:"$32,132",class1:"table-danger",class2:"",name:"Dee End",bgcolor:"table-danger"},{id:6,text:"Warning",color:"warning",quantity:"10",price:"$1,434",class1:"table-warning",class2:"",name:"Lee Nonmi",bgcolor:"table-warning"},{id:7,text:"Info",color:"info",quantity:"63",price:"$1,854",class1:"table-info",class2:"",name:"Lynne Gwistic",bgcolor:"table-info"},{id:8,text:"Light",color:"light",quantity:"05",price:"$823",class1:"table-light",class2:"text-default",name:"Fran Tick",bgcolor:"table-light"},{id:9,text:"Dark",color:"dark",quantity:"35",price:"$1,832",class1:"table-dark",class2:"text-light",name:"Polly Pipe",bgcolor:"table-dark"}],Se=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:p,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:P,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:p,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+4"})]}),Be=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:j,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:u,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:g,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:v,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+4"})]}),Pe=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:b,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:H,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+10"})]}),He=t.jsxs("div",{className:"avatar-list-stacked",children:[t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:C,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:k,alt:"img"})}),t.jsx("span",{className:"avatar avatar-sm avatar-rounded",children:t.jsx("img",{src:T,alt:"img"})}),t.jsx(l,{className:"avatar avatar-sm bg-primary text-fixed-white avatar-rounded",to:"#!",children:"+6"})]}),Ae=[{id:1,src:C,name:"Mayor Kelly",category:"Manufacturer",role:"Team Lead",color:"primary",team:Se,progress:52,revenue:"$10,984.29",mail:"mayorkrlly@gmail.com"},{id:2,src:y,name:"Andrew Garfield",category:"Managing Director",role:"Director",color:"warning",team:Be,progress:91,revenue:"$1.4billion",mail:"andrewgarfield@gmail.com"},{id:3,src:T,name:"Simon Cowel",category:"Service Manager",role:"Manager",color:"primary",team:Pe,progress:45,revenue:"$7,123.21",mail:"simoncowel234@gmail.com"},{id:4,src:u,name:"Mirinda Hers",category:"Recruiter",role:"Employee",color:"danger",team:He,progress:21,revenue:"$2,325.45",mail:"mirindahers@gmail.com"}],Me=[{id:1,text1:"This cell inherits",text2:" from the table",text3:"This cell inherits ",text4:"from the table",class1:"",class2:"",code1:"vertical-align: middle;",code2:"vertical-align: middle;"},{id:2,text1:"This cell inherits",text2:"from the table row",text3:"This cell inherits ",text4:"from the table row",class1:"align-bottom",class2:"",code1:"vertical-align: bottom;",code2:"vertical-align: bottom;"},{id:3,text1:"This cell inherits",text2:" from the table",text3:"This cell is aligned to the top.",text4:"",class1:"",class2:"align-top",code1:"vertical-align: middle;",code2:""}],na=()=>t.jsxs(A.Fragment,{children:[t.jsx(L,{title:"Tables"}),t.jsx(M,{title:"Tables",currentpage:"Tables",activepage:"Tables"}),t.jsxs(o,{children:[t.jsx(d,{xl:6,children:t.jsx(r,{title:"Basic Tables",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:I,reusableCode:D,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",header:[{title:"Name"},{title:"Created On"},{title:"Number"},{title:"Status"}],children:ie.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.date}),t.jsx("td",{children:e.number}),t.jsx("td",{children:t.jsx(i,{variant:"",Customclass:`bg-outline-${e.color}`,children:e.status})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Bordered Tables",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:W,dataCode:R,reusableCode:F,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-bordered",header:[{title:"User"},{title:"Status"},{title:"Email"},{title:"Action"}],children:oe.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("span",{className:"avatar avatar-xs me-2 online avatar-rounded",children:t.jsx("img",{src:e.src,alt:"img"})}),e.name]})}),t.jsx("td",{children:t.jsx(i,{variant:e.color,Customclass:`${e.class}`,children:e.text})}),t.jsx("td",{children:e.mail}),t.jsx("td",{children:t.jsxs("div",{className:"hstack gap-2 flex-wrap",children:[t.jsx(l,{to:"#!",className:"text-info fs-14 lh-1",children:t.jsx("i",{className:"ri-edit-line"})}),t.jsx(l,{to:"#!",className:"text-danger fs-14 lh-1",children:t.jsx("i",{className:"ri-delete-bin-5-line"})})]})})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:4,children:t.jsx(r,{title:" Bordered Primary",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:U,dataCode:$,reusableCode:K,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-bordered border-primary",header:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Action"}],children:ce.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.order}),t.jsx("td",{children:t.jsx(i,{variant:"light",Customclass:"text-dark",children:e.date})}),t.jsx("td",{children:t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("span",{className:"avatar avatar-xs me-2 online avatar-rounded",children:t.jsx("img",{src:e.src,alt:"img"})}),e.name]})}),t.jsx("td",{children:t.jsx(i,{variant:"primary-transparent",children:"Booked"})})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Bordered Secondary",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:O,dataCode:J,reusableCode:z,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-bordered border-secondary",header:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Status"}],children:ne.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.order}),t.jsx("td",{children:t.jsx(i,{variant:"light",Customclass:" text-dark",children:e.date})}),t.jsx("td",{children:t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("span",{className:"avatar avatar-xs me-2 online avatar-rounded",children:t.jsx("img",{src:e.src,alt:"img"})}),e.name]})}),t.jsx("td",{children:t.jsx(i,{variant:"secondary-transparent",children:"Delivered"})})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Bordered warning",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:G,dataCode:q,reusableCode:E,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-bordered border-warning",header:[{title:"Order"},{title:"Date"},{title:"Customer"},{title:"Status"}],children:me.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.order}),t.jsx("td",{children:t.jsx(i,{variant:"light",Customclass:"text-dark",children:e.date})}),t.jsx("td",{children:t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("span",{className:"avatar avatar-xs me-2 online avatar-rounded",children:t.jsx("img",{src:e.src,alt:"img"})}),e.name]})}),t.jsx("td",{children:t.jsx(i,{variant:"warning-transparent",children:"Accepted"})})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Without Borders",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",dataCode:Q,reactCode:Z,reusableCode:V,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-borderless",header:[{title:"User Name"},{title:"Transaction Id"},{title:"Created"},{title:"Status"}],children:pe.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.transactionid}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsx(i,{variant:"",Customclass:`bg-${e.color}`,children:e.status})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Group Dividers",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",dataCode:Y,reactCode:X,reusableCode:_,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",tBodyClass:"table-group-divider",header:[{title:"Product"},{title:"Seller"},{title:"Sale Percentage"},{title:"Quantity Sold"}],children:he.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.product}),t.jsx("td",{children:e.seller}),t.jsx("td",{children:t.jsxs(l,{to:"#!",className:`text-${e.color}`,children:[e.percent,t.jsx("i",{className:`ri-arrow-${e.icon}-fill ms-1`})]})}),t.jsx("td",{children:e.sold})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:6,children:t.jsx(r,{title:"Striped rows",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:tt,dataCode:w,reusableCode:et,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-striped",header:[{title:"ID"},{title:"Date"},{title:"Customer"},{title:"Action"}],children:S.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.order}),t.jsx("td",{children:e.date}),t.jsx("td",{children:e.name}),t.jsx("td",{children:t.jsxs(c,{Buttonvariant:"primary",Size:"sm",Customclass:"waves-effect waves-light",children:[" ",t.jsx("i",{className:"ri-download-2-line align-middle me-2 d-inline-block"}),"Download "]})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Striped columns",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:at,dataCode:w,reusableCode:st,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-striped-columns",header:[{title:"ID"},{title:"Date"},{title:"Customer"},{title:"Action  "}],children:S.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.order}),t.jsx("td",{children:e.date}),t.jsx("td",{children:e.name}),t.jsx("td",{children:t.jsxs(c,{Buttonvariant:"danger",Size:"sm",Customclass:"waves-effect waves-light",children:[" ",t.jsx("i",{className:"ri-delete-bin-line align-middle me-2 d-inline-block"}),"Delete "]})})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:4,children:t.jsx(r,{title:"Primary Table",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:rt,dataCode:n,reusableCode:dt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-primary",header:[{title:"#"},{title:"First"},{title:"Last"},{title:"Handle"}],children:m.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.id}),t.jsx("td",{children:e.text1}),t.jsx("td",{children:e.text2}),t.jsx("td",{children:e.text3})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Secondary Table",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:lt,dataCode:n,reusableCode:it,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-secondary",header:[{title:"#"},{title:"First"},{title:"Last"},{title:"Handle"}],children:m.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.id}),t.jsx("td",{children:e.text1}),t.jsx("td",{children:e.text2}),t.jsx("td",{children:e.text3})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Warning Table",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:ot,dataCode:n,reusableCode:ct,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-warning",header:[{title:"#"},{title:"First"},{title:"Last"},{title:"Handle"}],children:m.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.id}),t.jsx("td",{children:e.text1}),t.jsx("td",{children:e.text2}),t.jsx("td",{children:e.text3})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Danger Table",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:nt,dataCode:n,reusableCode:mt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-danger",header:[{title:"#"},{title:"First"},{title:"Last"},{title:"Handle"}],children:m.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.id}),t.jsx("td",{children:e.text1}),t.jsx("td",{children:e.text2}),t.jsx("td",{children:e.text3})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Dark Table",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:pt,dataCode:n,reusableCode:ht,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-dark",header:[{title:"#"},{title:"First"},{title:"Last"},{title:"Handle"}],children:m.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.id}),t.jsx("td",{children:e.text1}),t.jsx("td",{children:e.text2}),t.jsx("td",{children:e.text3})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Success Table With Striped Rows",customCardClass:"custom-card",customCardBodyClass:"",customCardHeaderClass:"pb-0",reactCode:xt,dataCode:n,reusableCode:bt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-success table-striped",header:[{title:"#"},{title:"First"},{title:"Last"},{title:"Handle"}],children:m.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.id}),t.jsx("td",{children:e.text1}),t.jsx("td",{children:e.text2}),t.jsx("td",{children:e.text3})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:6,children:t.jsx(r,{title:"Hoverable Rows",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:ut,reusableCode:vt,dataCode:gt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-hover",header:[{title:"Product Manager"},{title:"Category"},{title:"Team"},{title:"Status"}],children:ve.map((e,a)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("div",{className:"avatar avatar-sm me-2 avatar-rounded",children:t.jsx("img",{src:e.src,alt:"img"})}),t.jsxs("div",{children:[t.jsx("div",{className:"lh-1",children:t.jsx("span",{children:e.product})}),t.jsx("div",{className:"lh-1",children:t.jsx("span",{className:"fs-11 text-muted",children:e.mail})})]})]})}),t.jsx("td",{children:t.jsx(i,{Customclass:`bg-${e.color}-transparent`,children:e.category})}),t.jsx("td",{children:e.team}),t.jsx("td",{children:t.jsx(f,{variant:"primary",mainClass:"progress-xs",now:e.status})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:" Hoverable rows With striped rows",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Ct,dataCode:jt,reusableCode:kt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-striped table-hover",header:[{title:"Invoice"},{title:"Customer"},{title:"Status"},{title:"Date"}],children:je.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.text1}),t.jsx("td",{children:t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("div",{className:"avatar avatar-sm me-2 avatar-rounded",children:t.jsx("img",{src:e.src,alt:"img"})}),t.jsxs("div",{children:[t.jsx("div",{className:"lh-1",children:t.jsx("span",{children:e.name})}),t.jsx("div",{className:"lh-1",children:t.jsx("span",{className:"fs-11 text-muted",children:e.mail})})]})]})}),t.jsx("td",{children:t.jsxs(i,{variant:e.color,Customclass:e.class,children:[t.jsx("i",{className:`ri-${e.icon} align-middle me-1`}),e.text2]})}),t.jsx("td",{children:e.date})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Head Primary",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Nt,dataCode:yt,reusableCode:Tt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{headerClass:"table-primary",tableClass:"text-nowrap",header:[{title:"User Name"},{title:"Transaction Id"},{title:"Created"},{title:"Status"}],children:Ce.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.text}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsxs("div",{className:"hstack gap-2 fs-15",children:[t.jsx(l,{to:"#!",className:"btn btn-icon btn-sm btn-success-light rounded-pill",children:t.jsx("i",{className:"ri-download-2-line"})}),t.jsx(l,{to:"#!",className:"btn btn-icon btn-sm btn-info-light rounded-pill",children:t.jsx("i",{className:"ri-edit-line"})}),t.jsx(l,{to:"#!",className:"btn btn-icon btn-sm btn-danger-light rounded-pill",children:t.jsx("i",{className:"ri-delete-bin-line"})})]})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Head warning",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:ft,dataCode:h,reusableCode:wt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",headerClass:"table-warning",header:[{title:"User Name"},{title:"Transaction Id"},{title:"Created"},{title:"Status"}],children:x.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.text}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsx(c,{Buttonvariant:e.color,Size:"sm",children:e.btn})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Head Success",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:St,dataCode:h,reusableCode:Bt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",headerClass:"table-success",header:[{title:"User Name"},{title:"Transaction Id"},{title:"Created"},{title:"Status"}],children:x.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.text}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsx(c,{Buttonvariant:e.color,Size:"sm",children:e.btn})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Head Info",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Pt,dataCode:h,reusableCode:Ht,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",headerClass:"table-info",header:[{title:"User Name"},{title:"Transaction Id"},{title:"Created"},{title:"Status"}],children:x.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.text}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsx(c,{Buttonvariant:e.color,Size:"sm",children:e.btn})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Head Secondary",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:At,dataCode:h,reusableCode:Mt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",headerClass:"table-secondary",header:[{title:"User Name"},{title:"Transaction Id"},{title:"Created"},{title:"Status"}],children:x.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.text}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsx(c,{Buttonvariant:e.color,Size:"sm",children:e.btn})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Table Head Danger",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Lt,dataCode:h,reusableCode:It,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",headerClass:"table-danger",header:[{title:"User Name"},{title:"Transaction Id"},{title:"Created"},{title:"Status"}],children:x.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.text}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsx(c,{Buttonvariant:e.color,Size:"sm",children:e.btn})})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:4,children:t.jsx(r,{title:"Table Foot",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Wt,dataCode:Dt,reusableCode:Rt,children:t.jsx("div",{className:"table-responsive",children:t.jsxs(s,{footerClass:"table-primary",headerClass:"table-primary",tableClass:"text-nowrap",header:[{title:"S.No"},{title:"Team"},{title:"Matches Won"},{title:"Win Ratio"}],children:[ke.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.text1}),t.jsx("td",{children:e.text2}),t.jsx("td",{children:e.text3}),t.jsx("td",{children:t.jsx(i,{variant:"primary",children:e.text4})})]},a)),t.jsxs("tr",{className:"table-primary",children:[t.jsx("th",{scope:"row",children:"Total"}),t.jsx("td",{children:"United States"}),t.jsx("td",{children:"558"}),t.jsx("td",{children:t.jsx(i,{variant:"primary",children:"56%"})})]})]})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Table With Caption",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Ft,dataCode:$t,reusableCode:Ut,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{headerContent:t.jsx("caption",{className:"px-3",children:"Top 3 Countries"}),tableClass:"text-nowrap",header:[{title:"S.No"},{title:"Country"},{title:"Medals Won"},{title:"No Of Athletes"}],children:ye.map((e,a)=>t.jsxs("tr",{children:[t.jsxs("th",{scope:"row",children:["0",e.id]}),t.jsx("td",{children:e.country}),t.jsxs("td",{children:[e.won,t.jsx("i",{className:"ri-medal-line mx-2"})]}),t.jsx("td",{children:e.athletes})]},a))})})})}),t.jsx(d,{xl:4,children:t.jsx(r,{title:"Table With Top Caption",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Kt,reusableCode:Ot,dataCode:Jt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{headerContent:t.jsx("caption",{className:"px-2",children:"Top IT Companies"}),tableClass:"text-nowrap caption-top",header:[{title:"S.No"},{title:"Name"},{title:"Revenue"},{title:"Country"}],children:Ne.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:e.id}),t.jsx("td",{children:e.name}),t.jsx("td",{children:e.revenue}),t.jsx("td",{children:e.country})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:6,children:t.jsx(r,{title:"Active Tables",customCardHeaderClass:"pb-0",customCardClass:"custom-card",reactCode:zt,reusableCode:Gt,dataCode:qt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",header:[{title:"Name"},{title:"Created On"},{title:"Number"},{title:"Status"}],children:Te.map((e,a)=>t.jsxs("tr",{className:e.class,children:[t.jsx("th",{scope:"row",children:e.name}),t.jsx("td",{children:e.create}),t.jsx("td",{className:e.tdclass,children:e.number}),t.jsx("td",{children:t.jsx(i,{Customclass:`bg-${e.color}`,children:e.status})})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Small Tables",customCardClass:"custom-card",customCardHeaderClass:"pb-0",customCardBodyClass:"",reactCode:Zt,dataCode:Et,reusableCode:Qt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap table-sm",header:[{title:"Invoice"},{title:"Created Date"},{title:"Status"},{title:"Action"}],children:fe.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:t.jsxs("div",{className:"form-check",children:[t.jsx("input",{id:e.id,defaultChecked:e.checked==="defaultChecked",className:"form-check-input",type:"checkbox",value:""}),t.jsx("div",{className:"form-check-label",children:e.name})]})}),t.jsx("td",{children:e.date}),t.jsx("td",{children:t.jsx(i,{variant:e.class,Customclass:"",children:e.text})}),t.jsx("td",{children:t.jsxs("div",{className:"hstack gap-2 fs-15",children:[t.jsx(l,{to:"#!",className:"btn btn-icon btn-sm btn-light",children:t.jsx("i",{className:"ri-download-2-line"})}),t.jsx(l,{to:"#!",className:"btn btn-icon btn-sm btn-light",children:t.jsx("i",{className:"ri-edit-line"})})]})})]},a))})})})})]}),t.jsxs(o,{children:[t.jsx(d,{xl:6,children:t.jsx(r,{title:"Color variants tables",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:Vt,dataCode:Xt,reusableCode:Yt,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",header:[{title:"Color"},{title:"Client"},{title:"State"},{title:"Quantity"},{title:"Total Price"}],children:we.map((e,a)=>t.jsxs("tr",{className:e.bgcolor,children:[t.jsx("th",{scope:"row",children:e.text}),t.jsx("td",{children:e.name}),t.jsx("td",{children:t.jsx(i,{variant:e.color,Customclass:e.class2,children:"Processed"})}),t.jsx("td",{children:e.quantity}),t.jsx("td",{children:e.price})]},a))})})})}),t.jsx(d,{xl:6,children:t.jsx(r,{title:"Nesting",customCardClass:"custom-card",customCardHeaderClass:"pb-0",customCardBodyClass:"",reactCode:_t,reusableCode:te,children:t.jsx("div",{className:"table-responsive",children:t.jsxs(s,{tableClass:"text-nowrap table-striped table-bordered",header:[{title:"#"},{title:"First"},{title:"Last"},{title:"Handle"}],children:[t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:"1"}),t.jsx("td",{children:"Mark"}),t.jsx("td",{children:"Otto"}),t.jsx("td",{children:"@mdo"})]}),t.jsx("tr",{children:t.jsx("td",{colSpan:4,children:t.jsxs("table",{className:"table text-nowrap mb-0",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"Alphabets"}),t.jsx("th",{scope:"col",children:"Users"}),t.jsx("th",{scope:"col",children:"Email"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:"A"}),t.jsx("td",{children:"Dino King"}),t.jsx("td",{children:"dinoking231@gmail.com"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:"B"}),t.jsx("td",{children:"Poppins sams"}),t.jsx("td",{children:"pops@gmail.com"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:"C"}),t.jsx("td",{children:"Brian Shaw"}),t.jsx("td",{children:"swanbrian@gmail.com"})]})]})]})})}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:"3"}),t.jsx("td",{children:"Larry"}),t.jsx("td",{children:"the Bird"}),t.jsx("td",{children:"@twitter"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:"4"}),t.jsx("td",{children:"Jimmy"}),t.jsx("td",{children:"the Ostrich"}),t.jsx("td",{children:"Dummy Text"})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:"5"}),t.jsx("td",{children:"Cobra Kai"}),t.jsx("td",{children:"the Snake"}),t.jsx("td",{children:"Another Name"})]})]})})})})]}),t.jsx(o,{children:t.jsx(d,{xl:12,children:t.jsx(r,{title:"Always responsive",customCardClass:"custom-card",customCardHeaderClass:"pb-0",reactCode:ee,reusableCode:se,dataCode:ae,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"text-nowrap",showCheckbox:!0,header:[{title:"Team Head"},{title:"Category"},{title:"Role"},{title:"Gmail"},{title:"Team"},{title:"Work Progress"},{title:"Revenue"},{title:"Action"}],children:Ae.map((e,a)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:t.jsx("input",{className:"form-check-input",type:"checkbox",id:"checkboxNoLabel1",value:"","aria-label":"..."})}),t.jsx("td",{children:t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("span",{className:"avatar avatar-xs me-2 online avatar-rounded",children:t.jsx("img",{src:e.src,alt:"img"})}),e.name]})}),t.jsx("td",{children:e.category}),t.jsx("td",{children:t.jsx(i,{variant:`${e.color}-transparent`,children:e.role})}),t.jsx("td",{children:e.mail}),t.jsx("td",{children:e.team}),t.jsx("td",{children:t.jsx(f,{mainClass:"progress progress-xs",variant:"primary",now:e.progress})}),t.jsx("td",{children:e.revenue}),t.jsx("td",{children:t.jsxs("div",{className:"hstack gap-2 fs-15",children:[t.jsx(l,{to:"#!",className:"btn btn-icon btn-sm btn-secondary",children:t.jsx("i",{className:"ri-download-2-line"})}),t.jsx(l,{to:"#!",className:"btn btn-icon btn-sm btn-info",children:t.jsx("i",{className:"ri-edit-line"})})]})})]},a))})})})})}),t.jsx(o,{children:t.jsx(d,{xl:12,children:t.jsx(r,{title:"Vertical alignment",customCardClass:"custom-card vertical-alignment-table",customCardHeaderClass:"pb-0",reactCode:de,dataCode:re,reusableCode:le,children:t.jsx("div",{className:"table-responsive",children:t.jsx(s,{tableClass:"align-middle",header:[{title:"Heading 1",headerClassname:"w-25"},{title:"Heading 2",headerClassname:"w-25"},{title:"Heading 3",headerClassname:"w-25"},{title:"Heading 4",headerClassname:"w-25"}],children:Me.map((e,a)=>t.jsxs("tr",{className:e.class1,children:[t.jsxs("td",{children:[e.text1," ",t.jsx("code",{children:e.code1})," ",e.text2]}),t.jsxs("td",{children:[e.text1," ",t.jsx("code",{children:e.code1})," ",e.text2]}),t.jsxs("td",{className:e.class2,children:[e.text3," ",t.jsx("code",{children:e.code2})," ",e.text4]}),t.jsx("td",{children:"This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells."})]},a))})})})})})]});export{na as default};
