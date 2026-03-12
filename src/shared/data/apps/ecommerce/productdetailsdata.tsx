import {  Col,  } from "react-bootstrap";
import { MasterData } from "./productsdata";
import SpkProducts from "../../../@spk-reusable-components/reusable-apps/spk-productscard";


export const Productdetailsswiper = MasterData.map((item, index) => (
    <Col className="col" key={index}>
        <SpkProducts
            imgclass={item.imgclass}
            color={item.color}
            discount1={item.discount1}
            discount={item.discount}
            productPicture={item.productpicture}
            title={item.title}
            status={item.status}
            idx={`${import.meta.env.BASE_URL}apps/ecommerce/product-details`}
            price={item.price}
        />
    </Col>
))

export const Offersdata=[
{
    id:"1",
    svg:` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 15h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H15V6H3v9z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M17 8V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4h-3zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9-3H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-6V9.5h2.5l1.96 2.5H17z" />
            </svg>`,
    title:'Free Delivery',
    text:'Free Shipping World Wide',
    color:'primary'
},
{
    id:"2",
    svg:` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
            width="24px" fill="#000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
                d="M11 4H4v7l9 9.01L20 13l-9-9zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z"
                opacity=".8" fill="#fff" />
            <path
                d="M12.41 2.58C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42l-9-9zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z" />
            <circle cx="6.5" cy="6.5" r="1.5" />
        </svg>`,
    title:'Festival Offer',
    text:'New Special Festival',
    color:'secondary'
},
{
    id:"3",
    svg:`<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
            height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
            <g>
                <rect fill="none" height="24" width="24" />
            </g>
            <g>
                <g>
                    <path
                        d="M13,5c-2.65,0-4.79,2.06-4.97,4.67L6.7,12H8v4h3v3h3v-3.95l0.89-0.42C16.71,13.88,18,12.09,18,10 C18,7.24,15.76,5,13,5z M12.5,14c-0.41,0-0.74-0.33-0.74-0.74c0-0.41,0.33-0.73,0.74-0.73c0.41,0,0.73,0.32,0.73,0.73 C13.23,13.67,12.92,14,12.5,14z M14.26,9.68c-0.44,0.65-0.86,0.85-1.09,1.27c-0.09,0.17-0.13,0.28-0.13,0.82h-1.06 c0-0.29-0.04-0.75,0.18-1.16c0.28-0.51,0.83-0.81,1.14-1.26c0.33-0.47,0.15-1.36-0.8-1.36c-0.62,0-0.92,0.47-1.05,0.86l-0.96-0.4 C10.76,7.67,11.46,7,12.5,7c0.86,0,1.45,0.39,1.75,0.88C14.51,8.31,14.66,9.1,14.26,9.68z"
                        opacity=".8" fill="#fff" />
                    <path
                        d="M19.94,9.06C19.5,5.73,16.57,3,13,3C9.47,3,6.57,5.61,6.08,9l-1.93,3.48C3.74,13.14,4.22,14,5,14h1l0,2c0,1.1,0.9,2,2,2h1 v3h7l0-4.68C18.62,15.07,20.35,12.24,19.94,9.06z M14.89,14.63L14,15.05V19h-3v-3H8v-4H6.7l1.33-2.33C8.21,7.06,10.35,5,13,5 c2.76,0,5,2.24,5,5C18,12.09,16.71,13.88,14.89,14.63z" />
                    <path
                        d="M12.5,12.54c-0.41,0-0.74,0.31-0.74,0.73c0,0.41,0.33,0.74,0.74,0.74c0.42,0,0.73-0.33,0.73-0.74 C13.23,12.85,12.92,12.54,12.5,12.54z" />
                    <path
                        d="M12.5,7c-1.03,0-1.74,0.67-2,1.45l0.96,0.4c0.13-0.39,0.43-0.86,1.05-0.86c0.95,0,1.13,0.89,0.8,1.36 c-0.32,0.45-0.86,0.75-1.14,1.26c-0.23,0.4-0.18,0.87-0.18,1.16h1.06c0-0.55,0.04-0.65,0.13-0.82c0.23-0.42,0.65-0.62,1.09-1.27 c0.4-0.59,0.25-1.38-0.01-1.8C13.95,7.39,13.36,7,12.5,7z" />
                </g>
            </g>
        </svg>`,
    title:'24 X 7 Service',
    text:'Online Service For New Customer',
    color:'danger'
},
{
    id:"4",
    svg:` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M4 12h16v6H4zm0-6h16v2H4z" opacity=".8" fill="#fff" />
                <path
                    d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>`,
    title:'Online Payment',
    text:'Secure Payment',
    color:'warning'
},
]