const s=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span className="border border-container"></span>
    <span className="border-top border-container"></span>
    <span className="border-end border-container"></span>
    <span className="border-bottom border-container"></span>
    <span className="border-start border-container"></span>
// End Prism Code//`,a=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span className="border-0 border-container"></span>
    <span className="border border-top-0 border-container"></span>
    <span className="border border-end-0 border-container"></span>
    <span className="border border-bottom-0 border-container"></span>
    <span className="border border-start-0 border-container"></span>
// End Prism Code//`,e=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span className="border border-container"></span>
    <span className="border border-container"></span>
    <span className="border border-container"></span>
    <span className="border border-container"></span>
    <span className="border border-container"></span>
// End Prism Code//`,r=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span className="border border-container border-primary"></span>
    <span className="border border-container border-secondary"></span>
    <span className="border border-container border-success"></span>
    <span className="border border-container border-danger"></span>
    <span className="border border-container border-warning"></span>
    <span className="border border-container border-info"></span>
    <span className="border border-container border-light"></span>
    <span className="border border-container border-dark"></span>
    <span className="border border-container border-white"></span>
// End Prism Code//`,d=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <div className="mb-4">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email
        address</label>
    <input type="email" className="form-control border-success"
        id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
    Below Shows Danger Border
</div>
    <div
    className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
    Customizing borders with background colors
    </div>
// End Prism Code//`,o=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <div className="border border-success p-2 mb-2">This is default success border</div>
    <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
    opacity
    success border
    </div>
    <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
    opacity
    success border
    </div>
    <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
    opacity
    success border
    </div>
    <div className="border border-success p-2 border-opacity-10">This is 10% opacity
    success
    border
    </div>
// End Prism Code//`,c=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <img src={media58} className="bd-placeholder-img rounded" alt="..." />
    <img src={media58} className="bd-placeholder-img rounded-top" alt="..." />
    <img src={media58} className="bd-placeholder-img rounded-end" alt="..." />
    <img src={media58} className="bd-placeholder-img rounded-bottom" alt="..." />
    <img src={media58} className="bd-placeholder-img rounded-start" alt="..." />
    <img src={media58} className="bd-placeholder-img rounded-circle" alt="..." />
    <img src={media58} className="bd-placeholder-img  rounded-pill" alt="..." />
// End Prism Code//`,i=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
    <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
    <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
    <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
    <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
    <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
// End Prism Code//`,n=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Avatardata.map((idx,index) => (
    <span className={'avatar me-2 &#60{idx.class}'} key={index}>
        <img src={idx.src} alt="img" />
    </span>
))}

// End Prism Code//`,t=`
interface AvatarType {
    id: number;
    class: string;
    src: string;
}
export const Avatardata: AvatarType[] = [
    { id: 1, class: "avatar-radius-0", src: "/assets/images/faces/1.jpg" },
    { id: 1, class: "", src: "/assets/images/faces/2.jpg" },
    { id: 1, class: "avatar-rounded", src: "/assets/images/faces/3.jpg" },
]`,l=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Avatarsize.map((idx,index) => (
    <span key={index} className={'avatar avatar-&#60{idx.class} me-2'}>
        <img src={idx.src} alt="img" />
    </span>
))}
// End Prism Code//`,m=`
export const Avatarsize: AvatarType[] = [
    { id: 1, class: "xs", src: "/assets/images/faces/4.jpg" },
    { id: 2, class: "sm", src: "/assets/images/faces/5.jpg" },
    { id: 3, class: "md", src: "/assets/images/faces/6.jpg" },
    { id: 4, class: "lg", src: "/assets/images/faces/7.jpg" },
    { id: 5, class: "xl", src: "/assets/images/faces/8.jpg" },
    { id: 6, class: "xxl", src: "/assets/images/faces/9.jpg" },
]`,p=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Avataricon.map((idx,index) => (
    <span key={index} className={'avatar avatar-&#60{idx.class} me-2 avatar-rounded'}>
        <img src={idx.src} alt="img" />
        <Link to="#!" className={'badge bg-&#60{idx.class1} rounded-pill avatar-badge'}><i className={'fe fe-&#60{idx.icon}'}></i></Link>
    </span>
))}
// End Prism Code//`,g=`
interface Icontype {
    id: number;
    class: string;
    src: string;
    icon: string;
    class1: string;
}
export const Avataricon: Icontype[] = [
    { id: 1, class: "xs", src: "/assets/images/faces/2.jpg", icon: "camera", class1: "success" },
    { id: 2, class: "sm", src: "/assets/images/faces/3.jpg", icon: "edit", class1: "secondary" },
    { id: 3, class: "md", src: "/assets/images/faces/14.jpg", icon: "plus", class1: "warning" },
    { id: 4, class: "lg", src: "/assets/images/faces/13.jpg", icon: "edit", class1: "info" },
    { id: 5, class: "xl", src: "/assets/images/faces/15.jpg", icon: "camera", class1: "success" },
    { id: 6, class: "xxl", src: "/assets/images/faces/9.jpg", icon: "plus", class1: "danger" },
]`,b=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Avataronline.map((idx,index) => (
    <span key={index} className={'avatar avatar-&#60{idx.class} me-2 avatar-rounded'}>
        <img src={idx.src} alt="img" />
    </span>
))}
// End Prism Code//`,u=`
export const Avataronline: AvatarType[] = [
    { id: 1, class: "xs online", src: "/assets/images/faces/8.jpg" },
    { id: 2, class: "sm online", src: "/assets/images/faces/10.jpg" },
    { id: 3, class: "md online", src: "/assets/images/faces/12.jpg" },
    { id: 4, class: "lg online", src: "/assets/images/faces/13.jpg" },
    { id: 5, class: "xl online", src: "/assets/images/faces/14.jpg" },
    { id: 6, class: "xxl online", src: "/assets/images/faces/15.jpg" },
]`,f=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Avataroffline.map((idx,index) => (
    <span key={index} className={'avatar avatar-&#60{idx.class} me-2 avatar-rounded'}>
        <img src={idx.src} alt="img" />
    </span>
))}`,x=`
export const Avataroffline: AvatarType[] = [
    { id: 1, class: "xs offline", src: "/assets/images/faces/2.jpg" },
    { id: 2, class: "sm offline", src: "/assets/images/faces/3.jpg" },
    { id: 3, class: "md offline", src: "/assets/images/faces/4.jpg" },
    { id: 4, class: "lg offline", src: "/assets/images/faces/5.jpg" },
    { id: 5, class: "xl offline", src: "/assets/images/faces/6.jpg" },
    { id: 6, class: "xxl offline", src: "/assets/images/faces/7.jpg" },
]`,v=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Avatarnumber.map((idx,index) => (
    <span key={index} className={'avatar avatar-&#60{idx.class} me-2 avatar-rounded'}>
        <img src={idx.src} alt="img" />
        <span className={'badge rounded-pill bg-&#60{idx.class1} avatar-badge'}>{idx.data}</span>
    </span>
))}
// End Prism Code//`,h=`
export const Avatarnumber = [
    { id: 1, class: "xs", src: "/assets/images/faces/2.jpg", icon: "camera", class1: "primary", data: '2' },
    { id: 2, class: "sm", src: "/assets/images/faces/3.jpg", icon: "edit", class1: "secondary", data: '5' },
    { id: 3, class: "md", src: "/assets/images/faces/14.jpg", icon: "plus", class1: "warning", data: '1' },
    { id: 4, class: "lg", src: "/assets/images/faces/13.jpg", icon: "edit", class1: "info", data: '7' },
    { id: 5, class: "xl", src: "/assets/images/faces/15.jpg", icon: "camera", class1: "success", data: '3' },
    { id: 6, class: "xxl", src: "/assets/images/faces/9.jpg", icon: "plus", class1: "danger", data: '9' },
]`,N=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Avatarinitial.map((idx,index) => (
    <span key={index} className={'avatar avatar-&#60{idx.data} m-2 bg-&#60{idx.color}'}>
        {idx.data1}
    </span>
))}
// End Prism Code//`,y=`
interface InitialType {
    id: number;
    data: string;
    color: string;
    data1: string
}
export const Avatarinitial: InitialType[] = [
    { id: 1, data: "xs", color: "primary", data1: "XS" },
    { id: 2, data: "sm", color: "secondary", data1: "SM" },
    { id: 3, data: "md", color: "warning", data1: "MD" },
    { id: 4, data: "lg", color: "danger", data1: "LG" },
    { id: 5, data: "xl", color: "success", data1: "XL" },
    { id: 6, data: "xxl", color: "info", data1: "XXL" },
]`,j=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="avatar-list-stacked">
{Avatarstack.map((idx,index) => (
    <span key={index} className="avatar">
        <img src={idx.src} alt="img" />
    </span>
))}
<a className="avatar bg-primary text-fixed-white" to="#!">
    +8
</a>
</div>

// End Prism Code//`,C=`
interface StackType {
    id: number;
    src: string;
}
export const Avatarstack: StackType[] = [
    { id: 1, src: "/assets/images/faces/2.jpg" },
    { id: 2, src: "/assets/images/faces/8.jpg" },
    { id: 3, src: "/assets/images/faces/2.jpg" },
    { id: 4, src: "/assets/images/faces/10.jpg" },
    { id: 5, src: "/assets/images/faces/4.jpg" },
    { id: 6, src: "/assets/images/faces/13.jpg" },
]`,P=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="avatar-list-stacked">
{Avatarstack.map((idx,index) => (
    <span key={index} className="avatar avatar-rounded">
        <img src={idx.src} alt="img" />
    </span>
))}
<a className="avatar bg-primary avatar-rounded text-fixed-white" to="#!">
    +8
</a>
</div>
// End Prism Code//`;export{t as a,n as b,m as c,l as d,g as e,p as f,u as g,b as h,x as i,f as j,h as k,v as l,y as m,N as n,C as o,j as p,P as q,s as r,a as s,e as t,r as u,d as v,o as w,c as x,i as y};
