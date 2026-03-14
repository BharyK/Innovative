const t=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";

{showr && (
    <Alert variant="warning" dismissible show={showr} >
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <SpkButton variant='' className="btn-close" onClick={handleDismiss}><i className="bi bi-x"></i></SpkButton>
    </Alert>
)} // End Prism Code//`,e=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";

 {showr && (
        <SpkAlert variant="warning" Dismiss={true} show={showr} >
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <SpkButton Buttonvariant='' Customclass="btn-close" onClickfunc={handleDismiss}><i className="bi bi-x"></i></SpkButton>
        </SpkAlert>
)}// End Prism Code//`,o=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert, Button} from "react-bootstrap";

<SpkButton type="button" className='mt-2' onClick={handleShowAlert}>
	Show live alert
							</SpkButton>
<Alert variant='warning' className="alert-dismissible fade show" role="alert" show={show} onClick={toggleShow}>
<strong>Holy guacamole!</strong> You should check in on some of those fields
below.
<SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="alert"
aria-label="Close"><i className="bi bi-x"></i></SpkButton>
</Alert> // End Prism Code//`,s=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert, Button} from "react-bootstrap";

 {alerts.map((alert) => (
        <SpkAlert variant="success" CustomClass="alert-dismissible" key={alert.id}>
            <strong>Nice, </strong> you triggered this alert message!
            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" onClickfunc={() => handleCloseAlert(alert.id)}>
                <i className="bi bi-x"></i>
            </SpkButton>
    </SpkAlert>
))}
    <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="mt-2" Buttonlabel="Close" onClickfunc={handleShowAlert}>
    Show live alert
</SpkButton> // End Prism Code//`,a=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {outlinealert} from "@/shared/data/ui-elements/alertsdata";

{outlinealert.map((idx,index) => (
    <Alert variant={idx.class} className="alert-dismissible fade show" key={index}>
        A simple outline primary alert—check it out!
        <SpkButton variant='' type="button" className="btn-close"
        onClick={() => handleRemove1(idx.id)} data-bs-dismiss="alert" 
        aria-label="Close"><i className="bi bi-x"></i></SpkButton>
    </Alert>
    ))} // End Prism Code//`,n=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {outlinealert} from "@/shared/data/ui-elements/alertsdata";

  {outlinealert.map((idx,index) => (
        <SpkAlert variant={idx.class} CustomClass="alert-dismissible" key={index}>
        {idx.text}
        <SpkButton Buttonvariant={idx.color} Buttontype="button" Customclass="btn-close" Buttonlabel="Close"  Buttondismiss="alert" onClickfunc={() => handleRemove1(idx.id)}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))} // End Prism Code//`,r=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert3 {
	id: number
	text: string
	color: string
	class: string
}
export const Outlinealerts: alert3[] = [
	{ id: 1, text: "A simple outline primary alert-check it out! ", class: "outline-primary", color: "" },
	{ id: 2, text: "A simple outline secondary alert-check it out!", class: "outline-secondary", color: "" },
	{ id: 3, text: "A simple outline danger alert-check it out! ", class: "outline-danger", color: "" },
	{ id: 4, text: "A simple outline warning alert-check it out! ", class: "outline-warning", color: "" },
	{ id: 5, text: "A simple outline success alert-check it out!", class: "outline-success", color: "" },
	{ id: 6, text: "A simple outline info alert-check it out!", class: "outline-info", color: "" },
	{ id: 7, text: "A simple outline light alert-check it out! ", class: "outline-light", color: "text-default" },
	{ id: 8, text: "A simple outline dark alert-check it out!", class: "outline-dark", color: "" },

]; // End Prism Code//`,i=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    {Shadowsolidalerts.map((idx) => (
    <Alert variant={idx.class} className={"alert shadow-{idx.size} alert-dismissible fade show"} key={idx.id}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
            onClick={() => handleRemove2(idx.id)}
            aria-label="Close"><i className="bi bi-x"></i></Button>
    </Alert>
))} // End Prism Code//`,d=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert4 {
    id: number
    text: string
    class: string
    size: string
}
export const Shadowsolidalerts :alert4[] = [
	{ id: 1, text: "A simple solid primary alert with small shadow—check it out! ", class: "solid-primary", size: "shadow-sm" },
	{ id: 2, text: "A simple solid primary alert with normal shadow—check it out! ", class: "solid-primary", size: "shadow" },
	{ id: 3, text: "A simple solid primary alert with large shadow—check it out! ", class: "solid-primary", size: "shadow-lg" },
	{ id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "solid-secondary", size: "shadow-sm" },
	{ id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "solid-secondary", size: "shadow" },
	{ id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "solid-secondary", size: "shadow-lg" },
  
]; // End Prism Code//`,l=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
  {Shadowsolidalerts.map((idx, index) => (
    <SpkAlerts variant={idx.class} CustomClass={&#96 &#9989{idx.size} alert-dismissible&#96} key={idx.id} show={alert[&#96 shadows&#9989{index}&#96]}>
        {idx.text}
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(&#96 shadows&#9989{index}&#96)}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlerts>
))}// End Prism Code//`,p=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Defaultsolidalerts} from "@/shared/data/ui-elements/alertsdata";

{Defaultsolidalerts.map((idx,index) => (
    <Alert variant={idx.class} className={idx.size} key={index}>
        {idx.text}
    </Alert>
))} // End Prism Code//`,m=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
    import {shadowsolidalert} from "@/shared/data/ui-elements/alertsdata";

{shadowsolidalert.map((idx,index) => (
    <SpkAlert variant={idx.class} CustomClass={'shadow-&#36;{idx.size} alert-dismissible'} key={index}>
        {idx.text}
        <SpkButton  Buttonvariant=""  Buttontype="button" Customclass="btn-close" Buttonlabel="Close"  Buttondismiss="alert" onClickfunc={() => handleRemove2(idx.id)}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))} // End Prism Code//`,c=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
   interface alert5 {
	text: string
	class: string
	size: string
}

export const Defaultsolidalerts: alert5[] = [
	{ text: "A simple solid primary alert with small shadow—check it out! ", class: "primary", size: "sm" },
	{ text: "A simple solid primary alert with normal shadow—check it out! ", class: "primary", size: "lg" },
	{ text: "A simple solid primary alert with large shadow—check it out! ", class: "primary", size: "lg" },
	{ text: "A simple solid secondary alert with small shadow—check it out!", class: "secondary", size: "sm" },
	{ text: "A simple solid secondary alert with normal shadow—check it out!", class: "secondary", size: "lg" },
	{ text: "A simple solid secondary alert with large shadow—check it out!", class: "secondary", size: "lg" },
];;
    `,u=`
    //<!-- Prism Code: This code is only used for showcode purpose -->//
    import {Alert} from "react-bootstrap";
    import {Defaultsolidalerts} from "@/shared/data/ui-elements/alertsdata";
    
    <Alert variant="primary">A simple primary alert—check it out!</Alert>
    <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
    <Alert variant="success">A simple success alert—check it out!</Alert>
    <Alert variant="danger">A simple danger alert—check it out!</Alert>
    <Alert variant="warning">A simple warning alert—check it out!</Alert>
    <Alert variant="info">A simple info alert—check it out!</Alert>
    <Alert variant="light">A simple light alert—check it out!</Alert>
    <Alert variant="dark">A simple dark alert—check it out!</Alert>
 // End Prism Code// `,g=`
    //<!-- Prism Code: This code is only used for showcode purpose -->//
      <SpkAlerts variant="primary">A simple primary alert—check it out!</SpkAlerts>
    <SpkAlerts variant="secondary">A simple secondary alert—check it out!</SpkAlerts>
    <SpkAlerts variant="success">A simple success alert—check it out!</SpkAlerts>
    <SpkAlerts variant="danger">A simple danger alert—check it out!</SpkAlerts>
    <SpkAlerts variant="warning">A simple warning alert—check it out!</SpkAlerts>
    <SpkAlerts variant="info">A simple info alert—check it out!</SpkAlerts>
    <SpkAlerts variant="light">A simple light alert—check it out!</SpkAlerts>
    <SpkAlerts variant="dark">A simple dark alert—check it out!</SpkAlerts>
// End Prism Code//`,b=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert2 {
	text1: string
	text2: string
	text3: string
	class: string
}
export const Linkalerts: alert2[] = [
{ text1: "A simple primary alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "primary" },
	{ text1: "A simple secondary alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "secondary" },
	{ text1: "A simple danger alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "danger" },
	{ text1: "A simple warning alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "warning" },
	{ text1: "A simple success alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "success" },
	{ text1: "A simple info alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "info" },
	{ text1: "A simple light alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "light" },
	{ text1: "A simple dark alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "dark" },

]; // End Prism Code//`,h=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Defaultalerts} from "@/shared/data/ui-elements/alertsdata";

{Defaultalerts.map((idx,index)=>(
    <Alert variant={idx.class} key={index} role="alert">
       {idx.text1} <Link to="#!" 
   className="alert-link">{idx.text2}</Link>{idx.text3}
    </Alert>
    ))} // End Prism Code//`,w=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {Linkalerts} from "@/shared/data/ui-elements/alertsdata";

{Linkalerts.map((idx,index) => (
<SpkAlert variant={idx.class} key={index}>{idx.text1} 
    <Link to="#!"  className="alert-link">{idx.text2}</Link>{idx.text3}
</SpkAlert>
))} // End Prism Code//`,k=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert3 {
	id: number
	text: string
	color: string
	class: string
}

export const Solidalerts: alert3[] = [
	{ id: 1, text: "A simple solid primary alert—check it out! ", class: "solid-primary", color: "" },
	{ id: 2, text: "A simple solid secondary alert—check it out!", class: "solid-secondary", color: "" },
	{ id: 3, text: "A simple solid info alert—check it out!", class: "solid-info", color: "" },
	{ id: 4, text: "A simple solid warning alert—check it out! ", class: "solid-warning", color: "" },
	{ id: 5, text: "A simple solid success alert—check it out!", class: "solid-success", color: "" },
	{ id: 6, text: "A simple solid danger alert—check it out! ", class: "solid-danger", color: "" },
	{ id: 7, text: "A simple solid light alert—check it out! ", class: "solid-light", color: "text-default" },
	{ id: 8, text: "A simple solid dark alert—check it out!", class: "solid-dark", color: "text-white" },

];; // End Prism Code//`,B=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert} from "react-bootstrap";
import {solidalert} from "@/shared/data/ui-elements/alertsdata";

{solidalert.map((idx,index) => (
 <Alert variant={idx.class} className="alert-dismissible fade show" key={index}>
      {idx.text}
        <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
   onClick={() => handleRemove(idx.id)}><i className="bi bi-x"></i></SpkButton>
     </Alert>
))} // End Prism Code//`,v=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {solidalert} from "@/shared/data/ui-elements/alertsdata";

   <SpkAlerts variant={idx.class} key={idx.id} CustomClass={'alert-dismissible &#36;{idx.color}'} show={alert['solid&#36;{index}']}>{idx.text}
        <SpkButton Buttonvariant="" Buttontype="button" Buttonlabel="Close" Buttondismiss="alert" Customclass={'btn-close &#36;{idx.color}'}
            onClickfunc={() => handleRemoveAlert('solid&#36;{index}')}><i className="bi bi-x"></i></SpkButton>
    </SpkAlerts>// End Prism Code//`,y=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

export const Roundedsolidalerts: alert1[] = [
    { id: 1, text: "A simple solid rounded primary alert—check it out! ", class: "solid-primary" },
    { id: 5, text: "A simple solid rounded secondary alert—check it out! ", class: "solid-secondary" },
    { id: 6, text: "A simple solid rounded warning alert—check it out! ", class: "solid-warning" },
    { id: 7, text: "A simple solid rounded danger alert—check it out!", class: "solid-danger" }
]; // End Prism Code//`,x=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {roundedsolidalert} from "@/shared/data/ui-elements/alertsdata";

{roundedsolidalert.map((idx,alt7)=>(
        <Alert variant={idx.class} show={alert['round&#36;{index}']} className="alert  rounded-pill alert-dismissible fade show" key={alt7}>
           {idx.text}
            <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
             onClickfunc={() => handleRemoveAlert('round&#36;{index}')}>
                <i className="bi bi-x"></i></SpkButton>
        </Alert>
        ))} // End Prism Code//`,f=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {roundedsolidalert} from "@/shared/data/ui-elements/alertsdata";

  {Roundedsolidalerts.map((idx, index) => (
    <SpkAlerts variant={idx.class} key={idx.id} CustomClass="rounded-pill alert-dismissible" show={alert['round&#36;{index}']}>{idx.text}
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Buttonlabel="Close" Buttondismiss="alert" Customclass="btn-close"
            onClickfunc={() => handleRemoveAlert('round&#36;{index}')}><i className="bi bi-x"></i></SpkButton>
    </SpkAlerts>
))} // End Prism Code//`,S=`
    //<!-- Prism Code: This code is only used for showcode purpose -->//
export const Roundedoutlinealerts: alert1[] = [
    { id: 1, text: "A simple outline rounded primary alert—check it out! ", class: "outline-primary" },
    { id: 5, text: "A simple outline rounded secondary alert—check it out! ", class: "outline-secondary" },
    { id: 6, text: "A simple outline rounded warning alert—check it out! ", class: "outline-warning" },
    { id: 7, text: "A simple outline rounded danger alert—check it out!", class: "outline-danger" }
]; // End Prism Code//`,N=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Roundedoutlinealerts} from "@/shared/data/ui-elements/alertsdata";

{Roundedoutlinealerts.map((idx,index) => (
    <Alert variant={idx.class} show={alert['rounded&#36;{index}']} className="alert rounded-pill alert-dismissible fade show" key={index}>
        {idx.text}
        <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
          onClickfunc={() => handleRemoveAlert('rounded&#36;{index}')}><i className="bi bi-x"></i></SpkButton>
    </Alert>
    ))} // End Prism Code//`,C=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {Roundedoutlinealerts} from "@/shared/data/ui-elements/alertsdata";

{Roundedoutlinealerts.map((idx, index) => (
<SpkAlerts show={alert['rounded&#36;{index}']} variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={idx.id}>
    {idx.text}
    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert('rounded&#36;{index}')}>
        <i className="bi bi-x"></i>
    </SpkButton>
</SpkAlerts>
))}// End Prism Code//`,D=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert1 {
    text: string
    class: string
    id: number
}
export const Roundedefaultalerts: alert1[] = [
    { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
    { id: 5, text: "A simple rounded secondary alert—check it out! ", class: "info" },
    { id: 6, text: "A simple rounded warning alert—check it out! ", class: "warning" },
    { id: 7, text: "A simple rounded danger alert—check it out!", class: "danger" }
];; // End Prism Code//`,P=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Roundedefaultalerts} from "@/shared/data/ui-elements/alertsdata";

{Roundedefaultalerts.map((idx,index) => (
    <Alert variant={idx.class} show={alert['default&#36;{index}']} className="alert rounded-pill alert-dismissible fade show" key={index}>
        {idx.text}
        <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClickfunc={() => handleRemoveAlert('default&#36;{index}')}
        ><i className="bi bi-x"></i></SpkButton>
    </Alert>
    ))} // End Prism Code//`,I=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {Roundedefaultalerts} from "@/shared/data/ui-elements/alertsdata";

    {Roundedefaultalerts.map((idx, index) => (
        <SpkAlerts variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={idx.id} show={alert['default&#36;{index}']}>
            {idx.text}
            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert('default&#36;{index}')}>
                <i className="bi bi-x"></i>
            </SpkButton>
        </SpkAlerts>
    ))} // End Prism Code//`,T=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert1 {
    text: string
    class: string
    id: number
}
];
export const Roundewithbtnalerts: alert1[] = [
    { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
    { id: 2, text: "A simple rounded secondary alert—check it out! ", class: "secondary" },
    { id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
    { id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
]; // End Prism Code//`,L=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {roundedwithbtnalert} from "@/shared/data/ui-elements/alertsdata";

  {Roundewithbtnalerts.map((idx, index) => (
    <SpkAlerts variant={idx.class} CustomClass="rounded-pill alert-dismissible custom-rounded-alerts" key={idx.id} show={alert['close&#36;{index}']}>
        {idx.text}
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close custom-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert('close&#36;{index}')}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlerts>
))} // End Prism Code//`,E=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert6 {
	id: number
	class1: string
	color: string
}

export const Customizedalert1: alert6[] = [
	{ id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", color: "primary" },
	{ id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", color: "secondary", },
	{ id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", color: "warning", },
	{ id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", color: "danger", },
];
 // End Prism Code//`,A=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert} from "react-bootstrap";
import {Customizedalert1} from "@/shared/data/ui-elements/alertsdata";

{Customizedalert1.map((idx,index) => (
    <Alert show={alert['svg&#36;{index}']} variant={idx.color} className={'alert alert-dismissible fade show custom-alert-icon shadow-sm svg-&#36;{idx.color}'} role="alert" key={index}>
        <svg className={'me-2 svg-&#36;{idx.color}'} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
        A customized {idx.color} alert with an icon
        <SpkButton variant='' onClickfunc={() => handleRemoveAlert('svg&#36;{index}')} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></SpkButton>
    </Alert>
))} // End Prism Code//`,G=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkAlerts from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {Customizedalert1} from "@/shared/data/ui-elements/alertsdata";

{Customizedalert1.map((idx, index) => (
    <SpkAlerts show={alert['svg&#36;{index}']} variant={idx.color} CustomClass={'alert-dismissible custom-alert-icon shadow-sm svg-&#36;{idx.color}'} key={idx.id}>
        <svg className={'me-2 svg-&#36;{idx.color}'} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
        A customized {idx.color} alert with an icon
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert('svg&#36;{index}')}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlerts>
))}
// End Prism Code//`,M=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert} from "react-bootstrap";

<Alert variant='primary' className="alert d-flex align-items-center svg-primary alert-primary" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
<div>
    An example alert with an icon
</div>
</Alert>
<Alert variant='success' className="alert  d-flex align-items-center svg-success" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
<div>
    An example success alert with an icon
</div>
</Alert>
<Alert variant='warning' className="alert  d-flex align-items-center svg-warning" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>
<div>
    An example warning alert with an icon
</div>
</Alert>
<Alert variant='danger' className="alert  d-flex align-items-center svg-danger" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>
<div>
    An example danger alert with an icon
</div>
</Alert> // End Prism Code//`,H=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkAlerts from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";

  <SpkAlerts variant='primary' CustomClass="alert d-flex align-items-center svg-primary">
    <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
    <div>
        An example alert with an icon
    </div>
</SpkAlerts>
<SpkAlerts variant='success' CustomClass="alert  d-flex align-items-center svg-success">
    <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
    <div>
        An example success alert with an icon
    </div>
</SpkAlerts>
<SpkAlerts variant='warning' CustomClass="alert  d-flex align-items-center svg-warning">
    <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>
    <div>
        An example warning alert with an icon
    </div>
</SpkAlerts>
<SpkAlerts variant='danger' CustomClass="alert  d-flex align-items-center svg-danger">
    <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
    <div>
        An example danger alert with an icon
    </div>
</SpkAlerts>// End Prism Code//`,z=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert7 {
	id: number
	src1: string
	color: string
	class: string
}

export const Imagealerts: alert7[] = [
	{ id: 1, src1: "../../assets/images/faces/3.jpg", color: "primary", class: "" },
	{ id: 2, src1: "../../assets/images/faces/5.jpg", color: "secondary", class: "" },
	{ id: 3, src1: "../../assets/images/faces/8.jpg", color: "warning", class: "" },
	{ id: 4, src1: "../../assets/images/faces/11.jpg", color: "danger", class: "" },
	{ id: 5, src1: "../../assets/images/faces/13.jpg", color: "info", class: "" },
	{ id: 6, src1: "../../assets/images/faces/10.jpg", color: "light", class: "" },
	{ id: 7, src1: "../../assets/images/faces/15.jpg", color: "dark", class: "text-muted" },
]; // End Prism Code//`,R=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Imagealerts} from "@/shared/data/ui-elements/alertsdata";


{Imagealerts.map((idx,index)=>(
    <Alert show={alert['images &#36;{index}']} variant={idx.color} className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap" role="alert" key={index}>
        <div className="avatar avatar-sm me-3 avatar-rounded">
            <img src={idx.src1} alt="img"/>
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClickfunc={() => handleRemoveAlert('images &#36;{index}')}
        ><i className="bi bi-x"></i></SpkButton>
    </Alert>
))} // End Prism Code//`,O=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {Imagealerts} from "@/shared/data/ui-elements/alertsdata";

{Imagealerts.map((idx, index) => (
        <SpkAlerts show={alert['images &#36;{index}']} variant={idx.color} CustomClass="alert-img alert-dismissible rounded-pill flex-wrap" key={idx.id}>
            <div className="avatar avatar-sm me-3 avatar-rounded">
                <img src={idx.src1} alt="img" />
            </div>
            <div>A simple {idx.color} alert with image—check it out!</div>
            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert('images &#36;{index}')}>
                <i className={'bi bi-x   &#36;{idx.class}'}></i>
            </SpkButton>
        </SpkAlerts>
    ))}
 // End Prism Code//`,j=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert8 {
	id: number
	src1: string
	color: string
	class: string
	class1: string
}
export const avatarsizealert: alert8[] = [
	{ id: 1, src1: "/assets/images/faces/3.jpg", color: "primary", class: "xs", class1: "" },
	{ id: 2, src1: "/assets/images/faces/5.jpg", color: "secondary", class: "sm", class1: "" },
	{ id: 3, src1: "/assets/images/faces/8.jpg", color: "warning", class: "", class1: "" },
	{ id: 4, src1: "/assets/images/faces/11.jpg", color: "danger", class: "md", class1: "" },
	{ id: 5, src1: "/assets/images/faces/13.jpg", color: "info", class: "lg", class1: "" },
	{ id: 6, src1: "/assets/images/faces/14.jpg", color: "dark", class: "xl", class1: "text-muted" },
]; // End Prism Code//`,V=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

import {Alert} from "react-bootstrap";
import {avatarsizealert} from "@/shared/data/ui-elements/alertsdata";

{avatarsizealert.map((idx,index) => (
    <Alert show={alert['different &#36;{index}']} variant={idx.color} className="alert alert-img alert-dismissible fase show flex-wrap" role="alert" key={index}>
        <div className={'avatar avatar-&#{idx.class} me-3'}>
            <img src={idx.src1} alt="img" />
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="alert"
            aria-label="Close" onClickfunc={() => handleRemoveAlert('different &#36;{index}')}><i className={'bi bi-x &#{idx.class1}'}></i></SpkButton>
    </Alert>
))} // End Prism Code//`,q=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {avatarsizealert} from "@/shared/data/ui-elements/alertsdata";

 {avatarsizealert.map((idx, index) => (
        <SpkAlerts show={alert['different &#36;{index}']} variant={idx.color} CustomClass="alert-img alert-dismissible flex-wrap" key={idx.id}>
            <div className={'avatar avatar- &#36;{idx.class} me-3'}>
                <img src={idx.src1} alt="img" />
            </div>
            <div>A simple {idx.color} alert with image—check it out!</div>
            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert('different &#36;{index}')}>
                <i className={'bi bi-x  &#36;{idx.class1}'}></i>
            </SpkButton>
        </SpkAlerts>
    ))}
// End Prism Code//`,F=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert10 {
	id: number
	class: string
	text1: string
	text2: string
	text3: string
}

export const Additionalcontentalerts: alert10[] = [
	{ id: 1, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "primary" },
	{ id: 2, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "secondary" },
	{ id: 3, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "success" },
	{ id: 4, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "warning" }
]; // End Prism Code//`,W=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Additionalcontentalerts} from "@/shared/data/ui-elements/alertsdata";

<Row className="gy-3">
{Additionalcontentalerts.map((idx,index) => (
    <Col xl={6} key={index}>
        <Alert variant={idx.class} show={alert['additional&#36;{index}']} className="overflow-hidden p-0" role="alert">
            <div className={'p-3 bg-&#{idx.class} text-fixed-white d-flex justify-content-between'}>
                <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                <SpkButton type="button" variant='' className="btn-close p-0 text-fixed-black"
                   onClickfunc={() => handleRemoveAlert('additional&#36;{index}')}
                    data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></SpkButton>
            </div>
            <hr className="my-0" />
            <div className="p-3">
                <p className="mb-0">{idx.text2} <Link to="#!"  className="fw-semibold text-decoration-underline">
                    {idx.text3}</Link></p>
            </div>
        </Alert>
    </Col>
))}
    </Row> // End Prism Code//`,K=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlerts from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alert";
import {Additionalcontentalerts} from "@/shared/data/ui-elements/alertsdata";

 <Row className="gy-3">
        {Additionalcontentalerts.map((idx, index) => (
            <Col xl={6} key={idx.id}>
                <SpkAlerts show={alert['additional&#36;{index}']} variant={idx.class} CustomClass="overflow-hidden p-0" key={idx.id}>
                    <div className={'p-3 bg-&#36;{idx.class} text-fixed-white d-flex justify-content-between'}>
                        <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close p-0 text-fixed-white" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert('additional&#36;{index}')}>
                            <i className="bi bi-x"></i>
                        </SpkButton>
                    </div>
                    <hr className="my-0" />
                    <div className="p-3">
                        <p className="mb-0">{idx.text2} <Link  to="#!" className="fw-medium  text-decoration-underline">
                            {idx.text3}</Link></p>
                    </div>
                </SpkAlerts>
            </Col>
        ))}
    </Row>
  // End Prism Code//`,Y=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

interface badge {
    id: number
    heading: string
    color: string
    class: string
}

export const Badgesdata: badge[] = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 5, heading: "Secondary", color: "secondary", class: "" },
    { id: 6, heading: "Success", color: "success", class: "" },
    { id: 7, heading: "Danger", color: "danger", class: "" },
    { id: 8, heading: "Warning", color: "warning", class: "" },
    { id: 9, heading: "Info", color: "info", class: "" },
    { id: 10, heading: "Light", color: "light", class: "text-dark" },
    { id: 11, heading: "Dark", color: "dark", class: "text-white" },
]; // End Prism Code//`,U=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 	
import {Badgesdata} from "@/shared/data/ui-elements/badgesdata";
import {Badge} from ""react-bootstrap;

{Badgesdata.map((badge,index) => (
    <Badge key={index} bg={badge.color} className={'badge bg-&#36;{badge.color} &#36;{badge.class}'}>{badge.heading}</Badge>
))} // End Prism Code//`,X=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 	
import {Badgesdata} from "@/shared/data/ui-elements/badgesdata";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";

 {Badgesdata.map((badge) => (
    <SpkBadge key={idx.id} variant={badge.color} Customclass={'bg-&#36;{badge.color} &#36;{badge.class}'}>{badge.heading}</SpkBadge>
))}// End Prism Code//`,J=`
    //<!-- Prism Code: This code is only used for showcode purpose -->//
interface outlinebadge {
    id: number
    heading: string
    color: string
    class: string
}
export const Outlinebadgesdata: outlinebadge[] = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 5, heading: "Secondary", color: "secondary", class: "" },
    { id: 6, heading: "Success", color: "success", class: "" },
    { id: 7, heading: "Danger", color: "danger", class: "" },
    { id: 8, heading: "Warning", color: "warning", class: "" },
    { id: 9, heading: "Info", color: "info", class: "" },
    { id: 10, heading: "Light", color: "light", class: "text-dark" },
    { id: 11, heading: "Dark", color: "dark", class: "" },
];
 // End Prism Code//`,$=`
    //<!-- Prism Code: This code is only used for showcode purpose -->//
    import {Outlinebadgesdata} from "@/shared/data/ui-elements/badgesdata";
    import {Badge} from ""react-bootstrap;
    
{Outlinebadgesdata.map((badge,index) => (
    <Badge key={index} variant={badge.color} className={'bg-&#36;{badge.color}-transparent &#36;{badge.class}'}>{badge.heading}</Badge>
))}// End Prism Code//`,Z=`
    //<!-- Prism Code: This code is only used for showcode purpose -->//
    import {Outlinebadgesdata} from "@/shared/data/ui-elements/badgesdata";
    import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";

    {Outlinebadgesdata.map((badge,index) => (
        <SpkBadge key={index} variant={badge.color} Customclass={'bg-&#36;{badge.color}-transparent &#36;{badge.class}'}>{badge.heading}</SpkBadge>
    ))}// End Prism Code//`,Q=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface badge {
    id: number
    heading: string
    color: string
    class: string
}

export const Badgesdata: badge[] = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 5, heading: "Secondary", color: "secondary", class: "" },
    { id: 6, heading: "Success", color: "success", class: "" },
    { id: 7, heading: "Danger", color: "danger", class: "" },
    { id: 8, heading: "Warning", color: "warning", class: "" },
    { id: 9, heading: "Info", color: "info", class: "" },
    { id: 10, heading: "Light", color: "light", class: "text-dark" },
    { id: 11, heading: "Dark", color: "dark", class: "text-white" },
]; // End Prism Code//`,_=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Badgesdata.map((badge,index) => (
    <Badge key={index} bg={badge.color} pill={true} className={badge.class}>{badge.heading}</Badge>
))} // End Prism Code//`,tt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Badgesdata.map((badge,index) => (
    <SpkBadge key={index} variant={badge.color} Pill={true} Customclass={badge.class}>{badge.heading}</SpkBadge>
))} // End Prism Code//`,et=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface outlinebadge {
    id: number
    heading: string
    color: string
    class: string
}
export const Outlinebadgesdata: outlinebadge[] = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 5, heading: "Secondary", color: "secondary", class: "" },
    { id: 6, heading: "Success", color: "success", class: "" },
    { id: 7, heading: "Danger", color: "danger", class: "" },
    { id: 8, heading: "Warning", color: "warning", class: "" },
    { id: 9, heading: "Info", color: "info", class: "" },
    { id: 10, heading: "Light", color: "light", class: "text-dark" },
    { id: 11, heading: "Dark", color: "dark", class: "" },
]; // End Prism Code//`,ot=`
//<!-- Prism Code: This code is only used for showcode purpose -->//	{Outlinebadgesdata.map((badge,index) => (
    <Badge key={index} bg={badge.color} pill={true} className={'bg-$&#36;{badge.color}-transparent &#36;{badge.class}'}>{badge.heading}</Badge>
))} // End Prism Code//`,st=`
//<!-- Prism Code: This code is only used for showcode purpose -->//	
 {Outlinebadgesdata.map((badge,index) => (
 <SpkBadge key={index} variant={badge.color} Pill={true} Customclass={'bg-$&#36;{badge.color}-transparent &#36;{badge.class}'}>{badge.heading}</SpkBadge>
))}// End Prism Code//`,at=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {badgesdata} from "@/shared/data/ui-elements/badgesdata";
import {Badge} from ""react-bootstrap;

{badges1.map((badge1,index) => (
    <Badge key={index} className={'bg-&#36;{badge1.color}-gradient'}>{badge1.heading}</Badge>
))} // End Prism Code//`,nt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {badges1} from "@/shared/data/ui-elements/badgesdata";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";

{badges1.map((badge1,index) => (
    <SpkBadge key={index} Customclass={'bg-&#36;{badge1.color}-gradient'}>{badge1.heading}</SpkBadge>
))}
 // End Prism Code//`,rt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface badge1 {
    id: number
    heading: string
    color: string
}
export const badges1: badge1[] = [
    { id: 1, heading: "Primary", color: "primary" },
    { id: 2, heading: "secondary", color: "secondary" },
    { id: 3, heading: "Success", color: "success" },
    { id: 4, heading: "Danger", color: "danger" },
    { id: 5, heading: "Warning", color: "warning" },
    { id: 6, heading: "Info", color: "info" },
    { id: 7, heading: "orange", color: "orange" },
    { id: 8, heading: "purple", color: "purple" },
];// End Prism Code//`,it=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
 {badges1.map((badge1,index) => (
    <SpkBadge key={index} className={'bg-&#36;{badge1.color}-gradient'} pill={true}>{badge1.heading}</SpkBadge>
))} // End Prism Code//`,dt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
 {badges1.map((badge1,index) => (
    <SpkBadge key={index} Customclass={'bg-&#36;{badge1.color}-gradient'} Pill={true}>{badge1.heading}</SpkBadge>
))} // End Prism Code//`,lt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface outlinebadge {
    id: number
    heading: string
    color: string
    class: string
}
export const Outlinebadgesdata: outlinebadge[] = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 5, heading: "Secondary", color: "secondary", class: "" },
    { id: 6, heading: "Success", color: "success", class: "" },
    { id: 7, heading: "Danger", color: "danger", class: "" },
    { id: 8, heading: "Warning", color: "warning", class: "" },
    { id: 9, heading: "Info", color: "info", class: "" },
    { id: 10, heading: "Light", color: "light", class: "text-dark" },
    { id: 11, heading: "Dark", color: "dark", class: "" },
]; // End Prism Code//`,pt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge,index) => (
    <Badge key={index} bg=variant={'outline-&#36;{badge.color}'}  className={badge.class}>{badge.heading}</Badge>
))} // End Prism Code//`,mt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Outlinebadgesdata.map((badge,index) => (
<SpkBadge key={index} variant={'outline-&#36;{badge.color}'} Customclass={badge.class}>{badge.heading}</SpkBadge>
))}// End Prism Code//`,ct=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge,index) => (
    <Badge key={index} bg={'outline-&#36;{badge.color}'} pill={true} className={badge.class}>{badge.heading}</Badge>
))} // End Prism Code//`,ut=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Outlinebadgesdata.map((badge,index) => (
    <SpkBadge key={index} variant={'outline-&#36;{badge.color}'} Pill={true} Customclass={badge.class}>{badge.heading}</SpkBadge>
))} // End Prism Code//`,gt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
<SpkButton variant='secondary' type="button" className="my-1 me-2">
Notifications <Badge bg="primary" className=" ms-2 text-white">7</Badge>
</SpkButton>
<SpkButton variant='success' type="button" className="my-1 me-2">
Notifications <Badge bg="danger" className=" ms-2 text-white">12</Badge>
</SpkButton>
<SpkButton variant='info' type="button" className="my-1 me-2">
Notifications <Badge bg="warning" className=" ms-2 text-white">32</Badge>
</SpkButton> // End Prism Code//`,bt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="primary" Customclass=" ms-2 text-fixed-white">4</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="primary" Customclass=" ms-2 text-fixed-white">7</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='success' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="danger" Customclass=" ms-2 text-fixed-white">12</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='info' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="warning" Customclass=" ms-2 text-fixed-white">32</SpkBadge>
</SpkButton> // End Prism Code//`,ht=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<SpkButton variant='outline-primary' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">4</Badge>
</SpkButton>
<SpkButton variant='outline-secondary' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">7</Badge>
</SpkButton>
<SpkButton variant='outline-success' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">12</Badge>
</SpkButton>
<SpkButton variant='outline-info' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">32</Badge>
</SpkButton> // End Prism Code//`,wt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<SpkButton Buttonvariant='outline-primary' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">4</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='outline-secondary' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">7</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='outline-success' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">12</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='outline-info' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">32</SpkBadge>
</SpkButton> // End Prism Code//`,kt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    import {Button} from ""react-bootstrap;
    import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

    <SpkButton type="button" className="btn  position-relative">
    Inbox
    <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
        99+
        <span className="visually-hidden">unread messages</span>
    </span>
    </SpkButton>
    <SpkButton variant='secondary' type="button" className="position-relative">
    Profile
    <span
        className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
    </SpkButton>
    <span className="avatar">
    <img src={face2} alt="img" />
    <span
        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
    </span>
    <span className="avatar avatar-rounded">
    <img src={face15} alt="img" />
    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light  rounded-pill">
        <span className="visually-hidden">New alerts</span>
    </span>
    </span>
    <span className="avatar avatar-rounded">
    <img src={face10} alt="img" />
    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
        <span className="visually-hidden">New alerts</span>
    </span>
    </span> // End Prism Code//`,Bt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
<SpkButton Buttontype="button" Customclass="position-relative">
    Inbox
    <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
        99+
        <span className="visually-hidden">unread messages</span>
    </span>
</SpkButton>
<SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="position-relative">
    Profile
    <span
        className="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
</SpkButton>
<span className="avatar">
    <img src={face2} alt="img" />
    <span
        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
</span>
<span className="avatar avatar-rounded">
    <img src={face15} alt="img" />
    <span className="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light  rounded-pill">
        <span className="visually-hidden">New alerts</span>
    </span>
</span>
<span className="avatar avatar-rounded">
    <img src={face10} alt="img" />
    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
        <span className="visually-hidden">New alerts</span>
    </span>
</span>// End Prism Code//`,vt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="mb-xxl-0 badge bg-outline-info custom-badge fs-15 me-5">
<i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
<p className="mb-xxl-0 badge bg-success custom-badge fs-15 me-5">
<i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
<p className="mb-xxl-0 icon-badge me-5">
<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px"
 viewBox="0 0 24 24" width="24px" fill="#000000">
 <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.
 5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
<span className="badge rounded-pill bg-success">14</span>
</p>
<p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
<p className="mb-xxl-0 text-badge me-5">
<span className="text fs-18">Inbox</span>
<Badge className="badge rounded-pill bg-success">32</Badge>
</p> // End Prism Code//`,yt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
	<p className="mb-xxl-0 badge bg-outline-secondary custom-badge fs-15 me-5">
    <i className="ti ti-flame me-1 me-1 d-inline-flex"></i>Hot</p>
<p className="mb-xxl-0 icon-badge me-5">
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
    <span className="badge rounded-pill bg-success">14</span>
</p>
<p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
<p className="mb-xxl-0 text-badge me-5">
    <span className="text fs-18">Inbox</span>
    <SpkBadge variant="success" Pill={true}>32</SpkBadge>
</p> // End Prism Code//`,xt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
<h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
<h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
<h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
<h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
<h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6> // End Prism Code//`,ft=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<h1>Example heading <SpkBadge variant="primary">New</SpkBadge></h1>
<h2>Example heading <SpkBadge variant="primary">New</SpkBadge></h2>
<h3>Example heading <SpkBadge variant="primary">New</SpkBadge></h3>
<h4>Example heading <SpkBadge variant="primary">New</SpkBadge></h4>
<h5>Example heading <SpkBadge variant="primary">New</SpkBadge></h5>
<h6>Example heading <SpkBadge variant="primary">New</SpkBadge></h6>// End Prism Code//`,St=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<Breadcrumb>
    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
</Breadcrumb>
</nav>
<nav aria-label="breadcrumb">
<Breadcrumb>
    <Breadcrumb.Item to="#!" >Home</Breadcrumb.Item>
    <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
</Breadcrumb>
</nav>
<nav aria-label="breadcrumb"><Breadcrumb className="mb-0">
    <Breadcrumb.Item to="#!" >Home</Breadcrumb.Item>
    <Breadcrumb.Item to="#!" >Library</Breadcrumb.Item>
    <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
</Breadcrumb>
</nav> // End Prism Code//`,Nt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<SpkBreadcrumb>
    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
</SpkBreadcrumb>

<nav aria-label="breadcrumb">
    <SpkBreadcrumb>
        <Breadcrumb.Item to="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
    </SpkBreadcrumb>
</nav>

<nav aria-label="breadcrumb">
    <SpkBreadcrumb Customclass="mb-0 custom-breadcrumb">
        <Breadcrumb.Item to="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item to="#!">Library</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
    </SpkBreadcrumb>
</nav>
 // End Prism Code//`,Ct=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
 <SpkBreadcrumb Customclass="breadcrumb-example1">
     <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
 </SpkBreadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <SpkBreadcrumb Customclass="breadcrumb-example1">
     <Breadcrumb.Item to="#!">Home</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
 </SpkBreadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <SpkBreadcrumb Customclass="breadcrumb-example1 breadcrumb-second mb-0">
     <Breadcrumb.Item to="#!">Home</Breadcrumb.Item>
     <Breadcrumb.Item to="#!">Library</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
 </SpkBreadcrumb>
 </nav> // End Prism Code//`,Dt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb-example1">
     <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
 </Breadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb-example1">
     <Breadcrumb.Item to="#!" >Home</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
 </Breadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb-example1 mb-0">
     <Breadcrumb.Item to="#!" >Home</Breadcrumb.Item>
     <Breadcrumb.Item to="#!" >Library</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
 </Breadcrumb>
 </nav> // End Prism Code//`,Pt=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav 
 aria-label="breadcrumb">
    <Breadcrumb className="mb-0">
        <Breadcrumb.Item><a to="#!" >Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav> // End Prism Code//`,It=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav aria-label="breadcrumb">
    <SpkBreadcrumb Customclass="breadcrumb-style1 breadcrumb-second mb-0">
        <Breadcrumb.Item to="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item to="#!">Library</Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
    </SpkBreadcrumb>
</nav> // End Prism Code//`,Tt=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav
 aria-label="breadcrumb" className='svg-breadcrumb'>
 <Breadcrumb className=" mb-0">
     <Breadcrumb.Item to="#!" >Home</Breadcrumb.Item>
     <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
 </Breadcrumb>
</nav> // End Prism Code//`,Lt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<SpkBreadcrumb Customclass="breadcrumb-style2 breadcrumb-second mb-0">
    <Breadcrumb.Item to="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
    <Breadcrumb.Item to="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
</SpkBreadcrumb>
</nav> // End Prism Code//`,Et=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
    <Breadcrumb.Item to="#!" >Home</Breadcrumb.Item>
    <Breadcrumb.Item to="#!" >Library</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
</Breadcrumb>
</nav> // End Prism Code//`,At=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav
aria-label="breadcrumb" className='divider-breadcrumb'>
<SpkBreadcrumb Customclass="breadcrumb-second mb-0">
    <Breadcrumb.Item to="#!">Home</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
</SpkBreadcrumb>
</nav>// End Prism Code//`,Gt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
    <Breadcrumb.Item to="#!" ><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
    <Breadcrumb.Item to="#!" ><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
</Breadcrumb>
</nav> // End Prism Code//`,Mt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<nav
aria-label="breadcrumb" className='svg-breadcrumb'>
<SpkBreadcrumb Customclass="breadcrumb-second mb-0">
    <Breadcrumb.Item to="#!">Home</Breadcrumb.Item>
    <Breadcrumb.Item active className="active " aria-current="page">Library</Breadcrumb.Item>
</SpkBreadcrumb>
</nav>// End Prism Code//`,Ht=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group" role="group" aria-label="Basic example">
<SpkButton variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-backward"></i></SpkButton>
<SpkButton variant="info" type="button" className="btn btn-wave"><i className="bi bi-pause"></i></SpkButton>
<SpkButton variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-forward"></i></SpkButton>
</ButtonGroup> // End Prism Code//`,zt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

<SpkButtongroup Buttongrplabel="Basic example">
    <SpkButton Buttonvariant="info" Buttontype="button"><i className="bi bi-skip-backward"></i></SpkButton>
    <SpkButton Buttonvariant="info" Buttontype="button"><i className="bi bi-pause"></i></SpkButton>
    <SpkButton Buttonvariant="info" Buttontype="button"><i className="bi bi-skip-forward"></i></SpkButton>
</SpkButtongroup> // End Prism Code//`,Rt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
<input type="checkbox" className="btn-check" id="btncheck1" />
<label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

<input type="checkbox" className="btn-check" id="btncheck2" />
<label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

<input type="checkbox" className="btn-check" id="btncheck3" />
<label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
</ButtonGroup> // End Prism Code//`,Ot=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

<SpkButtongroup Buttongrplabel="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" id="btncheck1" />
    <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

    <input type="checkbox" className="btn-check" id="btncheck2" />
    <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

    <input type="checkbox" className="btn-check" id="btncheck3" />
    <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
</SpkButtongroup> // End Prism Code//`,jt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group">
<SpkButton variant='primary' active href="#!" className="btn  active btn-wave" aria-current="page">Active
    link</SpkButton>
<SpkButton variant='primary' href="#!" className="btn">Link</SpkButton>
<SpkButton variant='primary' href="#!" className="btn ">Link</SpkButton>
</ButtonGroup> // End Prism Code//`,Vt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

<SpkButtongroup>
    <SpkButton Buttonvariant='primary' Active={true} Navigate="#!" >Active link</SpkButton>
    <SpkButton Buttonvariant='primary' Navigate="#!">Link</SpkButton>
    <SpkButton Buttonvariant='primary' Navigate="#!" >Link</SpkButton>
</SpkButtongroup>// End Prism Code//`,qt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group1" role="group" aria-label="Basic outlined example">
<SpkButton Buttonvariant="outline-primary" Buttontype="button" Customclass="btn btn-wave">Left</SpkButton>
<SpkButton Buttonvariant="outline-primary" Buttontype="button" Customclass="btn btn-wave">Middle</SpkButton>
<SpkButton Buttonvariant="outline-primary" Buttontype="button" Customclass="btn btn-wave">Right</SpkButton>
</ButtonGroup> // End Prism Code//`,Ft=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

 <SpkButtongroup Buttongrplabel="Basic outlined example">
    <SpkButton Buttonvariant="outline-primary" Buttontype="button">Left</SpkButton>
    <SpkButton Buttonvariant="outline-primary" Buttontype="button">Middle</SpkButton>
    <SpkButton Buttonvariant="outline-primary" Buttontype="button">Right</SpkButton>
</SpkButtongroup> // End Prism Code//`,Wt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group2" role="group" aria-label="Basic radio toggle button group">
<input type="radio" className="btn-check" name="btnradio" id="btnradio1"
    defaultChecked />
<label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio2"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio3"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
</ButtonGroup> // End Prism Code//`,Kt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

 <SpkButtongroup  Buttongrplabel="Basic radio toggle button group">
<input type="radio" className="btn-check" name="btnradio" id="btnradio1"
    defaultChecked />
<label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio2"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio3"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
</SpkButtongroup> // End Prism Code//`,Yt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//	<SpkButtonGroup className="btn-group" role="group" aria-label="Basic mixed styles example">
<SpkButton Buttonvariant="danger" Buttontype="button" Customclass="btn btn-wave">Left</SpkButton>
<SpkButton Buttonvariant="warning" Buttontype="button" Customclass="btn btn-wave">Middle</SpkButton>
<SpkButton Buttonvariant="success" Buttontype="button" Customclass="btn btn-wave">Right</SpkButton>
</ButtonGroup> // End Prism Code//`,Ut=`
//<!-- Prism Code: This code is only used for showcode purpose -->//	<SpkButtongroup  Buttongrplabel="Basic mixed styles example">
<SpkButton Buttonvariant="danger" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="warning" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="success" Buttontype="button">Right</SpkButton>
</SpkButtongroup> // End Prism Code//`,Xt=`//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup vertical role="group" aria-label="Vertical button group">
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
</ButtonGroup>`,Jt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

 <div className="row gap-2">
    <Col sm={3}>
        <SpkButtongroup Vertical={true}  Buttongrplabel="Vertical button group">
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </SpkButtongroup>
    </Col>
    <Col sm={3}>
        <SpkButtongroup Vertical={true} Buttongrplabel="Vertical button group">
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
        </SpkButtongroup>
    </Col>
    <Col sm={3}>
        <SpkButtongroup Vertical={true} Buttongrplabel="Vertical radio toggle button group">
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
                defaultChecked />
            <label className="btn btn-outline-primary3" htmlFor="vbtn-radio1">Radio 1</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
            />
            <label className="btn btn-outline-primary3" htmlFor="vbtn-radio2">Radio 2</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
            />
            <label className="btn btn-outline-primary3" htmlFor="vbtn-radio3">Radio 3</label>
        </SpkButtongroup>
    </Col>
</div>`,$t=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";

<SpkButtonToolbar className="mb-4" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
    <SpkButton variant="primary" type="button" className="btn">1</SpkButton>
    <SpkButton variant="primary" type="button" className="btn">2</SpkButton>
    <SpkButton variant="primary" type="button" className="btn">3</SpkButton>
    <SpkButton variant="primary" type="button" className="btn">4</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group me-2 my-1" role="group" aria-label="Second group">
    <SpkButton variant="secondary" type="button" className="btn">5</SpkButton>
    <SpkButton variant="secondary" type="button" className="btn">6</SpkButton>
    <SpkButton variant="secondary" type="button" className="btn">7</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group my-1" role="group" aria-label="Third group">
    <SpkButton variant="info" type="button" className="btn btn-info">8</SpkButton>
</ButtonGroup>
</ButtonToolbar>
<SpkButtonToolbar className="mb-3" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
    <SpkButton variant="outline-secondary" type="button" className="btn">1</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">2</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">3</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">4</SpkButton>
</ButtonGroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon" />
</InputGroup>
</ButtonToolbar>
<SpkButtonToolbar className="justify-content-between" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtonGroup className="btn-group my-1" role="group" aria-label="First group">
    <SpkButton variant="outline-secondary" type="button" className="btn">1</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">2</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">3</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">4</SpkButton>
</ButtonGroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2" />
</InputGroup>
</ButtonToolbar> // End Prism Code//`,Zt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonToolbar} from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

   <SpkButtonToolbar className="mb-4" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtongroup Customclass="me-2 my-1" Buttongrplabel="First group">
    <SpkButton Buttonvariant="primary" Buttontype="button">1</SpkButton>
    <SpkButton Buttonvariant="primary" Buttontype="button">2</SpkButton>
    <SpkButton Buttonvariant="primary" Buttontype="button">3</SpkButton>
    <SpkButton Buttonvariant="primary" Buttontype="button">4</SpkButton>
</SpkButtongroup>
<SpkButtongroup Customclass="me-2 my-1" Buttongrplabel="Second group">
    <SpkButton Buttonvariant="secondary" Buttontype="button">5</SpkButton>
    <SpkButton Buttonvariant="secondary" Buttontype="button">6</SpkButton>
    <SpkButton Buttonvariant="secondary" Buttontype="button">7</SpkButton>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1" Buttongrplabel="Third group">
    <SpkButton Buttonvariant="info" Buttontype="button">8</SpkButton>
</SpkButtongroup>
</ButtonToolbar>
<SpkButtonToolbar className="mb-3" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtongroup Customclass="me-2 my-1" Buttongrplabel="First group">
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">1</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">2</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">3</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">4</SpkButton>
</SpkButtongroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon" />
</InputGroup>
</ButtonToolbar>
<SpkButtonToolbar className="justify-content-between" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtongroup Customclass="my-1" Buttongrplabel="First group">
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">1</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">2</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">3</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">4</SpkButton>
</SpkButtongroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2" />
</InputGroup>
</ButtonToolbar>// End Prism Code//`,Qt=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup} from "react-bootstrap";

<SpkButtonGroup className="btn-group" role="group"
aria-label="Button group with nested dropdown">
<SpkButton variant="" type="button" className="btn btn-primary">1</SpkButton>
<SpkButton variant="" type="button" className="btn btn-primary">2</SpkButton>

<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
</ButtonGroup> // End Prism Code//`,_t=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

<SpkButtongroup Customclass="" Buttongrplabel="Button group with nested dropdown">
<SpkButton Buttonvariant="primary" Buttontype="button">1</SpkButton>
<SpkButton Buttonvariant="primary" Buttontype="button">2</SpkButton>

<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
</SpkButtongroup> // End Prism Code//`,te=`
//<!-- Prism Code: This code is only used for showcode purpose -->//interface SocialIcon {
	id: number
	class: string
	class1: string;
}
export const SocialIconButtons: SocialIcon[] = [
	{ id: 1, class: "facebook", class1: "facebook" },
	{ id: 2, class: "twitter-x", class1: "twitter" },
	{ id: 3, class: "instagram", class1: "instagram" },
	{ id: 4, class: "github", class1: "github" },
	{ id: 5, class: "youtube", class1: "youtube" },
	{ id: 5, class: "google", class1: "google" },

]; // End Prism Code//`,ee=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup} from "react-bootstrap";
import { SocialIconButtons } from "@/shared/data/ui-elements/buttonsdata";

<SpkButtonGroup className="btn-group" role="group" aria-label="Basic example">
{SocialIconButtons.map((idx,index) => (
    <SpkButton variant={idx.class1} className="btn btn-icon btn-wave" key={index}>
        <i className={'ri-&#{idx.class}-line'}></i>
    </SpkButton>
))}
</ButtonGroup> // End Prism Code//`,oe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";
import { SocialIconButtons } from "@/shared/data/ui-elements/buttonsdata";

<SpkButtongroup Buttongrplabel="Basic example">
    {SocialIconButtons.map((idx,index) => (
        <SpkButton Buttonvariant={idx.class1} Customclass="btn-icon" key={index}>
            <i className={'ri-&#{idx.class}-line'}></i>
        </SpkButton>
    ))}
</SpkButtongroup> // End Prism Code//`,se=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup} from "react-bootstrap";

<SpkButtonGroup className="btn-group btn-group-lg my-1 me-3" role="group" aria-label="Large button group">
<SpkButton variant="outline-success" type="button" className="btn">Left</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Middle</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Right</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group my-1 me-3" role="group" aria-label="Default button group">
<SpkButton variant="outline-success" type="button" className="btn">Left</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Middle</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Right</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group btn-group-sm my-1 me-1" role="group" aria-label="Small button group">
<SpkButton variant="outline-success" type="button" className="btn">Left</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Middle</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Right</SpkButton>
</ButtonGroup>`,ae=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";

 <SpkButtongroup Size="lg" Customclass="my-1 me-3" Buttongrplabel="Large button group">
<SpkButton Buttonvariant="outline-success" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Right</SpkButton>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-3" Buttongrplabel="Default button group">
<SpkButton Buttonvariant="outline-success" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Right</SpkButton>
</SpkButtongroup>
<SpkButtongroup  Size="sm" Customclass="my-1 me-1" Buttongrplabel="Small button group">
<SpkButton Buttonvariant="outline-success" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Right</SpkButton>
</SpkButtongroup>`,ne=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const DefaultButtons: buttons1[] = [
	{ id: 1, class: "primary", text: " Primary" },
	{ id: 2, class: "secondary", text: "  Secondary" },
	{ id: 3, class: "success", text: " Success" },
	{ id: 4, class: "danger", text: "  Danger" },
	{ id: 5, class: "warning", text: "  Warning" },
	{ id: 6, class: "info", text: "Info" },
	{ id: 7, class: "light", text: " Light" },
	{ id: 8, class: "dark", text: "  Dark" },
	{ id: 9, class: "link", text: "Link" },
]; // End Prism Code//`,re=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

import { Button } from "react-bootstrap";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

{DefaultButtons.map((idx,index) => (
    <SpkButton variant={idx.class} type="button" className="btn-wave waves-effect waves-light me-2"
     key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,ie=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {DefaultButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="waves-effect waves-light me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`,de=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

{DefaultButtons.map((idx,index) => (
    <SpkButton variant={idx.class} type="button" className="rounded-pill btn-wave me-2" key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,le=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {DefaultButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`,pe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";

<SpkButton type="button" variant="primary-light" className="me-2">Primary</SpkButton>
<SpkButton type="button" variant="secondary-light" className="me-2">Secondary</SpkButton>
<SpkButton type="button" variant="success-light" className="me-2">Success</SpkButton>
<SpkButton type="button" variant="danger-light" className="me-2">Danger</SpkButton>
<SpkButton type="button" variant="warning-light" className="me-2">Warning</SpkButton>
<SpkButton type="button" variant="info-light" className="me-2">Info</SpkButton>
<SpkButton type="button" variant="purple-light" className="me-2">Purple</SpkButton>
<SpkButton type="button" variant="teal-light" className="me-2">Teal</SpkButton>
<SpkButton type="button" variant="orange-light" className="me-2">Orange</SpkButton>

// End Prism Code//`,me=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="me-2">Primary</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="me-2">Secondary</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="me-2">Success</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="me-2">Danger</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="warning-light" Customclass="me-2">Warning</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="info-light" Customclass="me-2">Info</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="purple-light" Customclass="me-2">Purple</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="teal-light" Customclass="me-2">Teal</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="orange-light" Customclass="me-2">Orange</SpkButton>
</div>

// End Prism Code//`,ce=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const LightButtons: buttons1[] = [
	{ id: 1, class: "primary-light", text: " Primary" },
	{ id: 2, class: "secondary-light", text: "  Secondary" },
	{ id: 3, class: "success-light", text: " Success" },
	{ id: 4, class: "danger-light", text: "  Danger" },
	{ id: 5, class: "warning-light", text: "  Warning" },
	{ id: 6, class: "info-light", text: "Info" },
	{ id: 7, class: "purple-light", text: " purple" },
	{ id: 8, class: "teal-light", text: "  teal" },
	{ id: 9, class: "orange-light", text: "orange" }
]; // End Prism Code//`,ue=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 

import { Button } from "react-bootstrap";
import {LightButtons } from "@/shared/data/ui-elements/buttonsdata";

{LightButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn rounded-pill btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,ge=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import {LightButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {LightButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`,be=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}

export const OutlineButtons: buttons1[] = [
	{ id: 1, class: "outline-primary", text: " Primary" },
	{ id: 2, class: "outline-secondary", text: "  Secondary" },
	{ id: 3, class: "outline-success", text: " Success" },
	{ id: 4, class: "outline-danger", text: "  Danger" },
	{ id: 5, class: "outline-warning", text: "  Warning" },
	{ id: 6, class: "outline-info", text: "Info" },
	{ id: 7, class: "outline-light", text: " Light" },
	{ id: 8, class: "outline-dark", text: "  Dark" },
]; // End Prism Code//`,he=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button } from "react-bootstrap";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

{DefaultButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,we=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {OutlineButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`,ke=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button } from "react-bootstrap";
import {OutlineButtons } from "@/shared/data/ui-elements/buttonsdata";

{OutlineButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn rounded-pill btn-wave me-2"
     key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,Be=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import {OutlineButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {OutlineButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass=" rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div>// End Prism Code//`,ve=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const GradientButtons: buttons1[] = [
	{ id: 1, class: "primary-gradient", text: "Primary" },
	{ id: 2, class: "secondary-gradient", text: "Secondary" },
	{ id: 3, class: "success-gradient", text: "Success" },
	{ id: 4, class: "danger-gradient", text: "Danger" },
	{ id: 5, class: "warning-gradient", text: "Warning" },
	{ id: 6, class: "info-gradient", text: "Info" },
	{ id: 7, class: "orange-gradient", text: " Orange" },
	{ id: 8, class: "purple-gradient", text: "Purple" },
	{ id: 9, class: "teal-gradient", text: "  teal" },
]; // End Prism Code//`,ye=`
//<!-- Prism Code: This code is only used for showcode purpose -->//  
import { Button } from "react-bootstrap";
import {GradientButtons } from "@/shared/data/ui-elements/buttonsdata";

{GradientButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,xe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//  
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import {GradientButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {GradientButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`,fe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const GradientButtons: buttons1[] = [
	{ id: 1, class: "primary-gradient", text: "Primary" },
	{ id: 2, class: "secondary-gradient", text: "Secondary" },
	{ id: 3, class: "success-gradient", text: "Success" },
	{ id: 4, class: "danger-gradient", text: "Danger" },
	{ id: 5, class: "warning-gradient", text: "Warning" },
	{ id: 6, class: "info-gradient", text: "Info" },
	{ id: 7, class: "orange-gradient", text: " Orange" },
	{ id: 8, class: "purple-gradient", text: "Purple" },
	{ id: 9, class: "teal-gradient", text: "  teal" },
]; // End Prism Code//`,Se=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";
import {GhostButtons } from "@/shared/data/ui-elements/buttonsdata";

{GradientButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,Ne=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import { GradientButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {GradientButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div>// End Prism Code//`,Ce=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const GhostButtons: buttons1[] = [
	{ id: 1, class: "primary-ghost", text: "Primary" },
	{ id: 2, class: "secondary-ghost", text: "Secondary" },
	{ id: 3, class: "success-ghost", text: "Success" },
	{ id: 4, class: "danger-ghost", text: "Danger" },
	{ id: 5, class: "warning-ghost", text: "Warning" },
	{ id: 6, class: "info-ghost", text: "Info" },
	{ id: 5, class: "orange-ghost", text: "orange" },
	{ id: 6, class: "purple-ghost", text: "Purple" },
	{ id: 6, class: "teal-ghost", text: "Teal" },
]; // End Prism Code//`,De=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";
import {GhostButtons } from "@/shared/data/ui-elements/buttonsdata";

{GhostButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`,Pe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
{GhostButtons.map((idx,index) => (
    <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
))}
</div> // End Prism Code//`,Ie=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";

<div className="btn-list">
<SpkButton variant='primary' className="btn  btn-wave" to="#!"  role="button">Link</SpkButton>
<SpkButton variant='secondary' className="btn  btn-wave" type="submit">Button</SpkButton>
<SpkButton variant='info' as="input" className="btn " type="button" value="Input" />
<SpkButton variant='warning' as="input" className="btn" type="submit" value="Submit" />
<SpkButton variant='success' as="input" className="btn " type="reset" value="Reset" />
</div> // End Prism Code//`,Te=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<SpkButton Buttontype="button" Buttonvariant="primary" Navigate={"#!"} >Link</SpkButton>
<SpkButton Buttontype="submit" Buttonvariant="secondary" >Button</SpkButton>
<SpkButton as="input" Buttontype="button" Buttonvariant="info"  Value="Input"/>
<SpkButton as="input" Buttontype="submit" Buttonvariant="warning" />
<SpkButton as="input" Buttontype="reset" Buttonvariant="success" />
</div>// End Prism Code//`,Le=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<div className="mb-4">
    <SpkButton type="button" variant='primary' className="btn" disabled>Primary
        button</SpkButton>
    <SpkButton type="button" variant='secondary' className="btn" disabled>Button</SpkButton>
    <SpkButton type="button" variant='outline-primary' className="btn b" disabled>Primary
        button</SpkButton>
    <SpkButton type="button" variant='outline-secondary' className="btn " disabled>Button</SpkButton>
</div>

<div>
    <SpkButton variant='primary'disabled className="btn" role="button">Primary
        link</SpkButton>
    <SpkButton variant='secondary' disabled className="btn" role="button">Link</SpkButton>
</div>
</div> // End Prism Code//`,Ee=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<div className="mb-4">								
    <SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}> Primary Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}> Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="outline-primary" Disabled={true}>Primary Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="outline-secondary" Disabled={true}>Button</SpkButton>
</div>

<div>
<SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}>Primary Link</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}>Link</SpkButton>
</div> // End Prism Code//`,Ae=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<div className="mb-4">
    <SpkButton type="button" variant='primary' className="btn btn-wave"
    >Toggle button</SpkButton>
    <SpkButton type="button" variant='secondary' active className="btn  btn-wave">
        Active toggle button</SpkButton>
    <SpkButton type="button" variant='teal' className="btn btn-wave" disabled>Disabled toggle
        button</SpkButton>
</div>
<div>
    <SpkButton variant='primary' to="#!"  className="btn btn-wave" role="button" >Toggle
        link</SpkButton>
    <SpkButton to="#!"  variant='secondary' active className="btn btn-wave" role="button">
        Active toggle link</SpkButton>
    <SpkButton variant='teal' className="btn  btn-wave" role="button" disabled>Disabled toggle link</SpkButton>
</div>
</div> // End Prism Code//`,Ge=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<div className="mb-4">
<SpkButton Buttontype="button" Buttonvariant="primary">Toggle button</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary">Active toggle button</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="teal" Disabled={true}>Disabled toggle button</SpkButton>
</div>
<div>
    <SpkButton Buttontype="button" Buttonvariant="primary" Navigate={"#!"}>Toggle link</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="secondary" Navigate={"#!"}>Active toggle link</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="teal" Disabled={true} Navigate={"#!"}>Disabled toggle link</SpkButton>
</div>
</div> // End Prism Code//`,Me=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton variant='primary' disabled className="btn" tabIndex={-1} role="button">Primary link</SpkButton>
<SpkButton variant='secondary' disabled className="btn" tabIndex={-1} role="button">Link</SpkButton>
</div> // End Prism Code//`,He=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
    <SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}>Primary link</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}>Link</SpkButton>
</div> // End Prism Code//`,ze=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list d-md-flex flex-wrap">
<SpkButton variant='primary' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>
<SpkButton variant='outline-secondary' className="btn btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>
<SpkButton variant='info-transparent' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
</SpkButton>
<SpkButton variant='warning-transparent' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
</SpkButton>
<SpkButton variant='success' className="btn btn-loader" disabled>
    <span className="me-2">Disabled</span>
    <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
</SpkButton>
</div> // End Prism Code//`,Re=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list d-md-flex flex-wrap">

<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="outline-secondary" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="info-transparent" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="warning-transparent" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="success" Customclass="btn-loader" Disabled={true}>
    <span className="me-2">Disabled</span>
    <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
</SpkButton>
</div>// End Prism Code//`,Oe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list d-md-flex d-block">
<div className="mb-md-0 mb-2">
    <SpkButton variant="primary" className="btn btn-icon  btn-wave">
        <i className="ri-bank-fill"></i>
    </SpkButton>
    <SpkButton variant="info" className="btn btn-icon  btn-wave">
        <i className="ri-medal-line"></i>
    </SpkButton>
    <SpkButton variant="danger" className="btn btn-icon  btn-wave">
        <i className="ri-archive-line"></i>
    </SpkButton>
    <SpkButton variant="warning" className="btn btn-icon  btn-wave me-5">
        <i className="ri-calendar-2-line"></i>
    </SpkButton>
</div>
<div className="mb-md-0 mb-2">
    <SpkButton variant="primary-transparent" className="btn btn-icon rounded-pill btn-wave">
        <i className="ri-home-smile-line"></i>
    </SpkButton>
    <SpkButton variant="secondary-transparent" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-delete-bin-line"></i>
    </SpkButton>
    <SpkButton variant="success-transparent" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-notification-3-line"></i>
    </SpkButton>
    <SpkButton variant="danger-transparent" className="btn btn-icon  rounded-pill btn-wave me-5">
        <i className="ri-chat-settings-line"></i>
    </SpkButton>
</div>
<div className="">
    <SpkButton variant="outline-primary" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-phone-line"></i>
    </SpkButton>
    <SpkButton variant="outline-teal" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-customer-service-2-line"></i>
    </SpkButton>
    <SpkButton variant="outline-success" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-live-line"></i>
    </SpkButton>
    <SpkButton variant="outline-secondary" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-save-line"></i>
    </SpkButton>
</div>
</div> // End Prism Code//`,je=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list d-md-flex d-block">
<div className="mb-md-0 mb-2">
<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-icon">
    <i className="ri-bank-fill"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-icon">
    <i className="ri-medal-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="danger" Customclass="btn-icon">
    <i className="ri-archive-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="warning" Customclass="btn-icon me-5">
    <i className="ri-calendar-2-line"></i>
</SpkButton>
</div>
<div className="mb-md-0 mb-2">
<SpkButton Buttontype="button" Buttonvariant="primary-transparent" Customclass="rounded-pill btn-icon">
    <i className="ri-home-smile-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary-transparent" Customclass="rounded-pill btn-icon">
    <i className="ri-delete-bin-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="success-transparent" Customclass="rounded-pill btn-icon">
    <i className="ri-notification-3-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="danger-transparent" Customclass="rounded-pill btn-icon me-5">
    <i className="ri-chat-settings-line"></i>
</SpkButton>
</div>
<div className="">
<SpkButton Buttontype="button" Buttonvariant="outline-primary" Customclass="rounded-pill btn-icon">
    <i className="ri-phone-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="outline-teal" Customclass="rounded-pill btn-icon">
    <i className="ri-customer-service-2-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="outline-success" Customclass="rounded-pill btn-icon">
    <i className="ri-live-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="outline-secondary" Customclass="rounded-pill btn-icon">
    <i className="ri-save-line"></i>
</SpkButton>
</div>
</div>`,Ve=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button} from "react-bootstrap";

<div className="btn-list d-md-flex d-block gap-5">
<div className="mb-md-0 mb-2">
    <SpkButton className="btn btn-sm btn-icon btn-primary btn-wave">
        <i className="ri-bank-fill"></i>
    </SpkButton>
    <SpkButton className="btn btn-icon btn-info btn-wave">
        <i className="ri-medal-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-lg btn-icon btn-danger btn-wave">
        <i className="ri-archive-line"></i>
    </SpkButton>
</div>
<div className="mb-md-0 mb-2">
    <SpkButton className="btn btn-sm btn-icon btn-primary-light rounded-pill btn-wave">
        <i className="ri-home-smile-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-icon btn-secondary-light rounded-pill btn-wave">
        <i className="ri-delete-bin-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-lg btn-icon btn-success-light rounded-pill btn-wave">
        <i className="ri-notification-3-line"></i>
    </SpkButton>
</div>
<div className="">
    <SpkButton className="btn btn-sm btn-icon btn-outline-primary rounded-pill btn-wave">
        <i className="ri-phone-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-icon btn-outline-teal rounded-pill btn-wave">
        <i className="ri-customer-service-2-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-lg btn-icon btn-outline-success rounded-pill btn-wave">
        <i className="ri-live-line"></i>
    </SpkButton>
</div>
</div>`,qe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list d-md-flex d-block gap-5">
<div className="mb-md-0 mb-2">
    <SpkButton Size="sm" Buttontype="button" Buttonvariant="primary" Customclass="btn-icon">
        <i className="ri-bank-fill"></i>
    </SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="info" Customclass="btn-icon">
        <i className="ri-medal-line"></i>
    </SpkButton>
    <SpkButton Size="lg"  Buttontype="button" Buttonvariant="danger" Customclass="btn-icon">
    <i className="ri-archive-line"></i>
    </SpkButton>
</div>
<div className="mb-md-0 mb-2">
    <SpkButton Size="sm" Buttontype="button" Buttonvariant="primary" Customclass="rounded-pill btn-icon">
        <i className="ri-home-smile-line"></i>
    </SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="secondary-light" Customclass="rounded-pill btn-icon">
    <i className="ri-delete-bin-line"></i>
    </SpkButton>
    <SpkButton Size="lg"  Buttontype="button" Buttonvariant="info-light" Customclass="rounded-pill btn-icon">
    <i className="ri-notification-3-line"></i>
    </SpkButton>
</div>
<div className="">
    <SpkButton Size="sm" Buttontype="button" Buttonvariant="outline-primary" Customclass="rounded-pill btn-icon">
        <i className="ri-phone-line"></i>
    </SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="outline-teal" Customclass="rounded-pill btn-icon">
        <i className="ri-customer-service-2-line"></i>
    </SpkButton>
    <SpkButton Size="lg"  Buttontype="button" Buttonvariant="outline-success" Customclass="rounded-pill btn-icon">
        <i className="ri-live-line"></i>
    </SpkButton>
</div>
</div> // End Prism Code//`,Fe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
 interface SocialIcon {
     id: number
     class: string
     class1: string;
 }
 export const SocialIconButtons: SocialIcon[] = [
     { id: 1, class: "facebook", class1: "facebook" },
     { id: 2, class: "twitter-x", class1: "twitter" },
     { id: 3, class: "instagram", class1: "instagram" },
     { id: 4, class: "github", class1: "github" },
     { id: 5, class: "youtube", class1: "youtube" },
     { id: 5, class: "google", class1: "google" },
 
 ]; // End Prism Code//`,We=`
//<!-- Prism Code: This code is only used for showcode purpose -->//

 import { Button} from "react-bootstrap";
 
 <SpkButton className="btn btn-icon btn-facebook btn-wave waves-effect waves-light">
 <i className="ri-facebook-line"></i>
 </SpkButton>
 <SpkButton className="btn btn-icon btn-twitter btn-wave waves-effect waves-light">
  <i className="ri-twitter-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-instagram btn-wave waves-effect waves-light">
 <i className="ri-instagram-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-github btn-wave waves-effect waves-light">
      <i className="ri-github-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-youtube btn-wave waves-effect waves-light">
      <i className="ri-youtube-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-google btn-wave waves-effect waves-light">
      <i className="ri-google-line"></i>
  </SpkButton> // End Prism Code//`,Ke=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

{SocialIconButtons.map((idx,index) => (
    <SpkButton   Buttontype="button" Buttonvariant={idx.class1} Customclass="waves-effect waves-light m-1 btn-icon" key={index}>
        <i className={'ri-{idx.class}-line'}></i>
    </SpkButton>
))}// End Prism Code//`,Ye=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton type="button" variant='primary' className="btn  btn-sm btn-wave">Small
    button</SpkButton>
<SpkButton type="button" variant='secondary' className="btn  btn-wave">Default
    button</SpkButton>
<SpkButton type="button" variant='success' className="btn  btn-lg btn-wave">Large
    button</SpkButton>
</div> // End Prism Code//`,Ue=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<SpkButton Size="sm"  Buttontype="button" Buttonvariant="primary" Customclass="">
    Small button
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="">
    Default button
</SpkButton>
<SpkButton Size="lg"  Buttontype="button" Buttonvariant="success" Customclass="">
    Large button
</SpkButton>
</div> // End Prism Code//`,Xe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton type="button" variant='primary' className="btn btn-w-xs btn-wave">XS</SpkButton>
<SpkButton type="button" variant='secondary' className="btn btn-w-sm btn-wave">SM</SpkButton>
<SpkButton type="button" variant='warning' className="btn btn-w-md btn-wave">MD</SpkButton>
<SpkButton type="button" variant='info' className="btn btn-w-lg btn-wave">LG</SpkButton>
</div> // End Prism Code//`,Je=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-w-xs">XS</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn-w-sm">SM</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="warning" Customclass="btn-w-md">MD</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-w-lg">LG</SpkButton>
</div>// End Prism Code//`,$e=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list d-flex">
<div className="me-5">
    <SpkButton variant='primary' className="btn  shadow-sm btn-wave">Button</SpkButton>
    <SpkButton variant='primary' className="btn btn-primary shadow btn-wave">Button</SpkButton>
    <SpkButton variant='primary' className="btn btn-primary shadow-lg btn-wave">Button</SpkButton>
</div>
<div>
    <SpkButton variant='secondary' className="btn  btn-sm shadow-sm btn-wave">Button</SpkButton>
    <SpkButton variant='info' className="btn  shadow btn-wave">Button</SpkButton>
    <SpkButton variant='success' className="btn btn-lg  shadow-lg btn-wave">Button</SpkButton>
</div>
</div> // End Prism Code//`,Ze=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
<div className="btn-list d-flex">
<div className="me-5">
    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow-sm">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow-lg">Button</SpkButton>
</div>
<div>

    <SpkButton Size="sm" Buttontype="button" Buttonvariant="secondary" Customclass="shadow-sm">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="info" Customclass="shadow">Button</SpkButton>
    <SpkButton Size="lg" Buttontype="button" Buttonvariant="success" Customclass="shadow-lg">Button</SpkButton>
</div>
</div>// End Prism Code//`,Qe=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface coloredbtn {
	id: number
	class: string
}
export const ColoredButtons: coloredbtn[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" },
	{ id: 6, class: "purple" },
	{ id: 6, class: "orange" },

]; // End Prism Code//`,_e=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";
import {ColoredButtons } from "@/shared/data/ui-elements/buttonsdata";

{ColoredButtons.map((idx,index) => (
    <SpkButton variant={idx.class} className={btn shadow-{idx.class} btn-wave} key={index}>Button</SpkButton>
))} // End Prism Code//`,to=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import {ColoredButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {ColoredButtons.map((idx,index) => (
        <SpkButton  Buttontype="button" Buttonvariant={idx.class} Customclass={shadow-{idx.class}} key={index}>Button</SpkButton>
    ))}
</div> // End Prism Code//`,eo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface coloredbtn {
	id: number
	class: string
}
export const ColoredButtons: coloredbtn[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" },
	{ id: 6, class: "purple" },
	{ id: 6, class: "orange" },

]; // End Prism Code//`,oo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
    {ColoredButtons.map((idx,index) => (
        <SpkButton  Buttontype="button" Buttonvariant={idx.class} Customclass="btn-raised-shadow" key={index}>Button</SpkButton>
    ))}
</div> // End Prism Code//`,so=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";
import {ColoredButtons } from "@/shared/data/ui-elements/buttonsdata";

{ColoredButtons.map((idx.map((idx)) => (
    <SpkButton variant={idx.class} className="btn  btn-raised-shadow btn-wave" 
    key={index}>Button</SpkButton>
))} // End Prism Code//`,ao=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton className="btn btn-primary label-btn">
    <i className="ri-chat-smile-line label-btn-icon me-2"></i>
    Primary
</SpkButton>
<SpkButton className="btn btn-secondary label-btn">
    <i className="ri-settings-4-line label-btn-icon me-2"></i>
    Secondary
</SpkButton>
<SpkButton className="btn btn-warning label-btn rounded-pill">
    <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
    Warning
</SpkButton>
<SpkButton className="btn btn-info label-btn rounded-pill">
    <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
    Info
</SpkButton>
<SpkButton className="btn btn-success label-btn label-end">
    Success
    <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
</SpkButton>
<SpkButton className="btn btn-danger label-btn label-end rounded-pill">
    Cancel
    <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
</SpkButton>
</div> // End Prism Code//`,no=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<SpkButton  Buttontype="button" Buttonvariant="primary" Customclass="label-btn">
    <i className="ri-chat-smile-line label-btn-icon me-2"></i>
    Primary
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary" Customclass="label-btn">
<i className="ri-settings-4-line label-btn-icon me-2"></i>
    Secondary
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="warning" Customclass="label-btn rounded-pill">
<i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
    Warning
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="info" Customclass="label-btn rounded-pill">
<i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
    Info
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="success" Customclass="label-btn label-end">
<i className="ri-thumb-up-line label-btn-icon ms-2"></i>
    Success
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="danger" Customclass="label-btn label-end rounded-pill">
    <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
    Cancel
</SpkButton>
</div> // End Prism Code//`,ro=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton variant='info' className="btn  custom-button rounded-pill">
    <span className="custom-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
    Twitter
</SpkButton>
<SpkButton variant='teal-light' className="btn  btn-border-down">Border</SpkButton>
<SpkButton variant='secondary-light' className="btn  btn-border-start">Border</SpkButton>
<SpkButton variant='purple-light' className="btn  btn-border-end">Border</SpkButton>
<SpkButton variant='warning-light' className="btn  btn-border-top">Border</SpkButton>
<SpkButton variant='secondary' className="btn  btn-glare"><span>Glare Button</span></SpkButton>
<SpkButton variant='danger' className="btn  btn-hover btn-hover-animate">Like</SpkButton>
<SpkButton variant='success' className="btn  btn-darken-hover">Hover</SpkButton>
<SpkButton variant='orange' className="btn  btn-custom-border">Hover</SpkButton>
</div> // End Prism Code//`,io=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";

<div className="btn-list">
<SpkButton  Buttontype="button" Buttonvariant="info" Customclass="custom-button rounded-pill">
    <span className="custom-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
    Twitter
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="teal-light" Customclass="btn-border-down">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-border-start">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="purple-light" Customclass="btn-border-end">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="warning-light" Customclass="btn-border-top">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary" Customclass="btn-glare"> Glare Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="danger" Customclass="btn-hover btn-hover-animate">Like</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="success" Customclass="btn-darken-down">Hover</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="orange" Customclass="btn-custom-down">Hover</SpkButton>
</div> // End Prism Code//`,lo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<div className="d-grid gap-2 mb-4">
    <SpkButton variant='primary' className="btn  btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='secondary' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-block">
    <SpkButton variant='info' className="btn  btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='success' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
    <SpkButton variant='danger' className="btn  btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='warning' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <SpkButton variant='teal' className="btn me-md-2 btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='purple' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
</div> // End Prism Code//`,po=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
<div className="btn-list">
<div className="d-grid gap-2 mb-4">
<SpkButton  Buttontype="button" Buttonvariant="primary">Button</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-block">

    <SpkButton  Buttontype="button" Buttonvariant="info">Button</SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="success">Button</SpkButton>
</div>
<div className="d-grid gap-2 col-6 mx-auto">

    <SpkButton  Buttontype="button" Buttonvariant="danger">Button</SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="warning">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">

    <SpkButton  Buttontype="button" Buttonvariant="teal">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="purple">Button</SpkButton>
</div>
</div> // End Prism Code//`,mo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropdown">
 <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
     id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     Dropdown button
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
     <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown>
<Dropdown className="dropdown">
 <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" to="#!"  role="button"
     id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
     Dropdown link
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
     <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`,co=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<div className="btn-list d-flex align-items-center flex-wrap">
<SpkDropdown Id="dropdownMenuButton1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Dropdown button">
        <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
</SpkDropdown>
<SpkDropdown Id="dropdownMenuButton1" Togglevariant="secondary" Navigate="#!" Menulabel="dropdownMenuLink" Toggletext="Dropdown link">
        <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
</SpkDropdown>
</div> // End Prism Code//`,uo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}
export const OutlineButtons: split[] = [
	{ id: 1, class: "outline-primary" },
	{ id: 2, class: "outline-secondary" },
	{ id: 3, class: "outline-success" },
	{ id: 4, class: "outline-info" },
	{ id: 5, class: "outline-warning" },
	{ id: 6, class: "outline-danger" }
]; // End Prism Code// // End Prism Code//`,go=`
//<!-- Prism Code: This code is only used for showcode purpose -->//	
import { Dropdown } from "react-bootstrap";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{OutlineButtons.map((idx,index) => (
    <div className="btn-group me-0" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div> // End Prism Code//`,bo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//	
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{OutlineButtons.map((idx,index) => (
    <SpkButtongroup key={index}>
        <SpkDropdown Togglevariant={idx.class} Navigate="#!"  Toggletext="Action" Menuas="ul">
                <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
    </SpkButtongroup>
))}
</div> // End Prism Code//`,ho=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}

export const SingleButtons: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" }
]; // End Prism Code// // End Prism Code//`,wo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

{SingleButtons.map((idx,index) => (
    <div className="btn-group" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" to="#!" >Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))} // End Prism Code//`,ko=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
    {SingleButtons.map((idx,index) => (
        <SpkButtongroup  key={index}>
            <SpkDropdown  Togglevariant={idx.class} Navigate="#!"  Toggletext="Action" Menuas="ul">
                    <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                    <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                    <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div> // End Prism Code//`,Bo=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Dropdown } from "react-bootstrap";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

{OutlineButtons.map((idx,index) => (
    <div className="btn-group" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" to="#!" >Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))} // End Prism Code//`,vo=`
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
    {OutlineButtons.map((idx,index) => (
        <SpkButtongroup Customclass="me-0" key={index}>
            <SpkDropdown  Togglevariant={idx.class}  Customtoggleclass="rounded-pill" Toggletext="Action" Menuas="ul">
                    <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                    <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                    <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                    <Dropdown.Divider className="dropdown-divider" />
                    <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div>// End Prism Code//`,yo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}
export const SingleButtons: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" }
]; // End Prism Code//`,xo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{SingleButtons.map((idx,index) => (
    <div className="btn-group" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>`,fo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{SingleButtons.map((idx,index) => (
    <SpkButtonGroup key={index}>
        <SpkDropdown  Togglevariant={idx.class}  Customtoggleclass="rounded-pill" Toggletext="Action" Menuas="ul">
                <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
    </ButtonGroup>
))}
</div>`,So=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}
export const SplitButtonsdata: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "info" },
	{ id: 4, class: "success" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" }
]; // End Prism Code// // End Prism Code//`,No=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";
import { SplitButtonsdata } from "@/shared/data/ui-elements/dropdownsdata";

{SplitButtonsdata.map((idx,index) => (
    <SplitButton key={index} className='me-2 my-1'
        variant={idx.class}
        title="Action"
    >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
            Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
))} // End Prism Code//`,Co=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { SplitButtonsdata } from "@/shared/data/ui-elements/dropdownsdata";

{SplitButtonsdata.map((idx,index) => (
    <SplitButton key={index} className='me-2 my-1'
        variant={idx.class}
        title="Action"
    >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
            Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
))} // End Prism Code//`,Do=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<div className="btn-group my-1 me-2">
<Dropdown>
    <Dropdown.Toggle variant='' className="btn btn-primary btn-lg dropdown-toggle" type="button"
        data-bs-toggle="dropdown" aria-expanded="false">
        Large button
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div> // End Prism Code//`,Po=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown  Togglevariant="primary"  Size="lg" Toggletext="Large button" Menuas="ul">
                <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown as={ButtonGroup} Buttontag={true} Buttonposition="before" Buttontext="Large split button" color="light" Togglevariant="light" Split={true} 
            Customtoggleclass="btn-lg" Menuas="ul" Id="dropdown-split-basic">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown as={ButtonGroup} Togglevariant="primary" Size="sm" Menuas="ul" Toggletext="Small button">
                <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown as={ButtonGroup} Buttontag={true} Buttontext="Small split button" Buttonposition="before" Id="dropdown-split-basic"
            Togglevariant="light" color="light" Size="sm" Menuas="ul" Split={true} >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup> // End Prism Code//`,Io=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown>
    <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    	data-bs-toggle="dropdown" aria-expanded="false">
    	Dropstart
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
    	<Dropdown.Item as="li" to="#!">Regular link</Dropdown.Item>
    	<Dropdown.Item className="dropdown-item disabled" to="#!" aria-current="true">Active
    		link</Dropdown.Item>
    	<Dropdown.Item as="li" to="#!">Another link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown> // End Prism Code//`,To=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<SpkDropdown Toggletext="Dropstart" Togglevariant="primary"  Menuas="ul">
        <Dropdown.Item as="li" to="#!">Regular link</Dropdown.Item>
        <Dropdown.Item className="dropdown-item disabled" to="#!" aria-current="true">Active
            link</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another link</Dropdown.Item>
</SpkDropdown> // End Prism Code//`,Lo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
  interface autoclose {
      id: number
      text: string
      class: string
  }
  export const AutocloseButtons: autoclose[] = [
      { id: 1, class: "primary", text: "Default dropdown" },
      { id: 2, class: "secondary", text: "Clickable  outside" },
      { id: 3, class: "info", text: "Clickable  inside" },
      { id: 4, class: "warning", text: "Manual  close" },
  ]; // End Prism Code//`,Eo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
  import { Dropdown } from "react-bootstrap";
  import { AutocloseButtons } from "@/shared/data/ui-elements/dropdownsdata";
  
  <div className="btn-list">
      {AutocloseButtons.map((idx,index) => (
          <div className="btn-group" key={index}>
              <Dropdown>
                  <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle" type="button"
                      id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
                      aria-expanded="false">
                      {idx.text}
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
                      <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                      <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                      <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          </div>
      ))}
  </div> // End Prism Code//`,Ao=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { AutocloseButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{AutocloseButtons.map((idx,index) => (
    <SpkButtongroup key={index}>
    <SpkDropdown Toggletext={idx.text} Togglevariant={idx.class}  Menuas="ul" Id="defaultDropdown">
                <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
    </SpkDropdown>
    </SpkButtongroup>
))}
</div> // End Prism Code//`,Go=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu">
    <Form className="px-4 py-3">
        <div className="mb-3">
            <Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
                address</Form.Label>
            <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
                placeholder="email@example.com" />
        </div>
        <div className="mb-3">
            <Form.Label htmlFor="exampleDropdownFormPassword1"
                className="form-label">Password</Form.Label>
            <Form.Control type="password" className="form-control"
                id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <div className="mb-3">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                    Remember me
                </label>
            </div>
        </div>
        <SpkButton variant='' type="submit" className="btn btn-primary">Sign in</SpkButton>
    </Form>
    <div className="dropdown-divider"></div>
    <Dropdown.Item as="li" to="#!">New around here? Sign up</Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Forgot password?</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> // End Prism Code//`,Mo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<SpkDropdown Toggletext="Dropdown" Togglevariant="secondary"  Menuas="ul" Id="dropdownMenu2">
<Form className="px-4 py-3">
    <div className="mb-3">
        <Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
            address</Form.Label>
        <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
            placeholder="email@example.com" />
    </div>
    <div className="mb-3">
        <Form.Label htmlFor="exampleDropdownFormPassword1"
            className="form-label">Password</Form.Label>
        <Form.Control type="password" className="form-control"
            id="exampleDropdownFormPassword1" placeholder="Password" />
    </div>
    <div className="mb-3">
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
            <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
            </label>
        </div>
    </div>
    <SpkButton Buttonvariant='primary' Buttontype="submit">Sign in</SpkButton>
</Form>
<div className="dropdown-divider"></div>
<Dropdown.Item as="li" to="#!">New around here? Sign up</Dropdown.Item>
<Dropdown.Item as="li" to="#!">Forgot password?</Dropdown.Item>
</SpkDropdown> // End Prism Code//`,Ho=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropdown-center">
	<Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
		id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
		Centered dropdown
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul" aria-labelledby="dropdownCenterBtn">
		<Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
		<Dropdown.Item as="li" to="#!">Action two</Dropdown.Item>
		<Dropdown.Item as="li" to="#!">Action three</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown> // End Prism Code//`,zo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
</p>
<SpkDropdown Drop="down-centered" Toggletext="Centered dropdown" Togglevariant="primary"  Menuas="ul" Id="dropdownCenterBtn" Menulabel="dropdownCenterBtn">
        <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Action two</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Action three</Dropdown.Item>
</SpkDropdown> // End Prism Code//`,Ro=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropup-center dropup" drop="up">
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
    id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
    <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Action two</Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Action three</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`,Oo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
dropdown items.</p>
<SpkDropdown Toggletext="Dropdown" Togglevariant="info"  Menuas="ul" Id="dropdownMenu1" Menulabel="dropdownMenu1">
    <Dropdown.Item as="li">Action</Dropdown.Item>
    <Dropdown.Item as="li">Another action
    </Dropdown.Item>
    <Dropdown.Item as="li">Something else here</Dropdown.Item>
</SpkDropdown>`,jo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropdown">
	<Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
		id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
		Dropdown
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
		<Dropdown.Item as="li">Action</Dropdown.Item>
		<Dropdown.Item as="li">Another action
		</Dropdown.Item>
		<Dropdown.Item as="li">Something else
			here
		</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown> // End Prism Code//`,Vo=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<Dropdown className="dropdown">
	<Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
		id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
		Dropdown
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
		<Dropdown.Item as="li">Action</Dropdown.Item>
		<Dropdown.Item as="li">Another action
		</Dropdown.Item>
		<Dropdown.Item as="li">Something else
			here
		</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown> // End Prism Code//`,qo=`
import { Dropdown } from "react-bootstrap";

<p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
 the location of the dropdown.</p>
 <div className="d-flex align-items-center flex-wrap">
 <Dropdown className="dropdown me-1 mt-1">
     <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
         id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
         data-bs-offset="10,20">
         Offset
     </Dropdown.Toggle>
     <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
         <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
         <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
         <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
     </Dropdown.Menu>
 </Dropdown>
 <SpkButtonGroup className="btn-group custom-btn-group mt-1">
     <SpkButton variant='' type="button" className="btn btn-info">Reference</SpkButton>
     <Dropdown>
         <Dropdown.Toggle variant='' type="button"
             className="btn btn-info dropdown-toggle dropdown-toggle-split"
             id="dropdownMenuReference" data-bs-toggle="dropdown"
             aria-expanded="false" data-bs-reference="parent">
             <span className="visually-hidden">Toggle Dropdown</span>
         </Dropdown.Toggle>
         <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuReference">
             <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
             <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
             <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
             <Dropdown.Divider className="dropdown-divider" />
             <Dropdown.Item as="li" to="#!" >Separated link</Dropdown.Item>
         </Dropdown.Menu>
     </Dropdown>
 </ButtonGroup>
 </div> // End Prism Code//`,Fo=`
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
    the location of the dropdown.</p>
<div className="d-flex align-items-center flex-wrap">
<SpkDropdown Toggletext="Offset" Customclass="me-1 mt-1" Togglevariant="primary"  Menuas="ul" Id="dropdownMenuOffset" Menulabel="dropdownMenuOffset">
    <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
</SpkDropdown>

<SpkDropdown as={ButtonGroup} Drop="up" Buttontag={true} Buttonposition="before"  Buttontext="Reference" color="info" Customtoggleclass="dropdown-toggle-split" Customclass=" my-1" 
    Togglevariant="info" Split={true}  Menuas="ul">
            <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
            <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
            <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider" />
            <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</SpkDropdown>
</div> // End Prism Code//`,Wo=`

 import { Dropdown } from "react-bootstrap";

 <Dropdown drop="up" className="btn-group dropup my-1 me-2">
 <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
     data-bs-toggle="dropdown" aria-expanded="false">
     Dropup
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul">
     <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item as="li" to="#!" >Separated link</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown>
<Dropdown drop="up" className="btn-group dropup my-1">
 <SpkButton variant='' type="button" className="btn btn-info">
     Split dropup
 </SpkButton>
 <Dropdown.Toggle variant='' type="button"
     className="btn btn-info dropdown-toggle dropdown-toggle-split"
     data-bs-toggle="dropdown" aria-expanded="false">
     <span className="visually-hidden">Toggle Dropdown</span>
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul">
     <Dropdown.Item as="li" to="#!" >Action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Another action</Dropdown.Item>
     <Dropdown.Item as="li" to="#!" >Something else here</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item as="li" to="#!" >Separated link</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`,Ko=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <SpkDropdown as={ButtonGroup} Drop="up"  Toggletext="Dropup" Customclass="my-1 me-2" 
Togglevariant="primary" Menuas="ul">
        <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</SpkDropdown>
<SpkDropdown as={ButtonGroup} Drop="up" Buttontag={true} Buttontext="Split dropup" Buttonposition="before" Customclass="my-1" color="info" Split={true}
Togglevariant="info" Menuas="ul">
    <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</SpkDropdown> // End Prism Code//`,Yo=`

 import { Dropdown } from "react-bootstrap";

 <Dropdown className="btn-group dropend my-1 me-2" drop="end">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
	data-bs-toggle="dropdown" aria-expanded="false">
	Dropright
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
	<Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
	<Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
	<Dropdown.Divider className="dropdown-divider" />
	<Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
						</Dropdown>
						<Dropdown drop="end" className="btn-group dropend my-1">
<SpkButton variant='' type="button" className="btn btn-info">
	Split dropend
</SpkButton>
<Dropdown.Toggle variant='' type="button"
	className="btn btn-info dropdown-toggle dropdown-toggle-split"
	data-bs-toggle="dropdown" aria-expanded="false">
	<span className="visually-hidden">Toggle Dropright</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
	<Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
	<Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
	<Dropdown.Divider className="dropdown-divider" />
	<Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
	</Dropdown> // End Prism Code//`,Uo=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <SpkDropdown as={ButtonGroup} Drop="end"  Toggletext="Dropright" Customclass="my-1 me-2" Togglevariant="primary" Menuas="ul">
<Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</SpkDropdown>
<SpkDropdown as={ButtonGroup} Drop="end" Buttontag={true} Buttontext="Split dropend" Buttonposition="before" Customclass="my-1" color="info" Split={true}
    Togglevariant="info" Menuas="ul">
        <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</SpkDropdown> // End Prism Code//`,Xo=`

 import { Dropdown } from "react-bootstrap";

 <Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
	data-bs-toggle="dropdown" aria-expanded="false">
	Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" to="#!">Regular link</Dropdown.Item>
	<Dropdown.Item className="dropdown-item active" to="#!" aria-current="true">Active
		link
	</Dropdown.Item>
	<Dropdown.Item as="li" to="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> // End Prism Code//`,Jo=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <SpkDropdown Toggletext="Dropstart" Togglevariant="primary" Menuas="ul">
    <Dropdown.Item as="li" to="#!">Regular link</Dropdown.Item>
    <Dropdown.Item className="dropdown-item active" to="#!" aria-current="true">Active
        link
    </Dropdown.Item>
    <Dropdown.Item as="li" to="#!">Another link</Dropdown.Item>
</SpkDropdown>// End Prism Code//`,$o=`

 import { Dropdown } from "react-bootstrap";

 <Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
	data-bs-toggle="dropdown" aria-expanded="false">
	Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" to="#!">Regular link</Dropdown.Item>
	<Dropdown.Item className="dropdown-item active" to="#!" aria-current="true">Active
		link
	</Dropdown.Item>
	<Dropdown.Item as="li" to="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> // End Prism Code//`,Zo=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<SpkDropdown as={ButtonGroup} Drop="start"  Toggletext="Dropleft" Customclass="my-1 me-2" Togglevariant="primary" Menuas="ul">
        <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</SpkDropdown>
<SpkButtongroup>
<SpkDropdown as={ButtonGroup} Drop="start" Customclass="my-1" Split={true} Buttontag={true} Buttontext="Split dropstart" color="info" Togglevariant="info" Menuas="ul">
            <Dropdown.Item as="li" to="#!">Action</Dropdown.Item>
            <Dropdown.Item as="li" to="#!">Another action</Dropdown.Item>
            <Dropdown.Item as="li" to="#!">Something else here</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider" />
            <Dropdown.Item as="li" to="#!">Separated link</Dropdown.Item>
</SpkDropdown>
</SpkButtongroup>// End Prism Code//`,Qo=`//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alignment {
	id: number
	text: string
	class: string
	dir: string
}
export const AlignmentButtons: alignment[] = [
	{ id: 1, class: "primary", text: "Dropdown", dir: "" },
	{ id: 2, class: "secondary", text: "Right-aligned menu", dir: "" },
	{ id: 3, class: "info", text: "Left-aligned, right-aligned lg", dir: "" },
	{ id: 4, class: "warning", text: "Right-aligned, left-aligned lg", dir: "" },
	{ id: 5, class: "success", text: "Dropstart", dir: "start" },
	{ id: 6, class: "danger", text: "Dropend", dir: "end" },
	{ id: 7, class: "teal", text: "Dropup", dir: "up" }
]; // End Prism Code//`,_o=`

 import { Dropdown } from "react-bootstrap";

 <div className="btn-list">
 {AlignmentButtons.map((idx,index) => (
     <div className="btn-group" key={index}>
         <Dropdown drop={idx.dir}>
             <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
                 id="dropdownMenuButton" data-bs-toggle="dropdown"
                 aria-expanded="false">
                 {idx.text}
             </Dropdown.Toggle>
             <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
                 <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                 <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                 <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
             </Dropdown.Menu>
         </Dropdown>
     </div>
 ))}
</div> // End Prism Code//`,ts=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <div className="btn-list">
{AlignmentButtons.map((idx,index) => (
    <SpkButtongroup key={index}>
        <SpkDropdown Drop={idx.dir} Customclass="mb-0" Togglevariant={idx.class} Toggletext={idx.text} Menuas="ul" Id="dropdownMenuButton" Menulabel="dropdownMenuButton">
                    <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li" to="#!">Menu item</Dropdown.Item>
        </SpkDropdown>
    </SpkButtongroup>
))}
</div> // End Prism Code//`,es=`

 import { Dropdown } from "react-bootstrap";

 <Dropdown>
 <Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
     id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
     Dropdown button
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-dark">
     <Dropdown.Item as="li"><Link to="#!">Action</Link></Dropdown.Item>
     <Dropdown.Item as="li"><Link to="#!">Another action</Link></Dropdown.Item>
     <Dropdown.Item as="li"><Link to="#!">Something else here</Link></Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`,os=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <SpkDropdown Togglevariant="dark" Toggletext="Dropdown button" Menuas="ul" Menuclass="dropdown-menu-dark" Id="dropdownMenuButton3" Menulabel="dropdownMenuButton3">
        <Dropdown.Item as="li"><Link to="#!">Action</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link to="#!">Another action</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link to="#!">Something else here</Link></Dropdown.Item>
</SpkDropdown> // End Prism Code//`,ss=`

 import { Dropdown } from "react-bootstrap";

 <div className="bd-example">
 <Dropdown.Menu className="dropdown-menu" show>
     <Dropdown.Item as="li"><span className="dropdown-item-text px-0">Dropdown item text</span>
     </Dropdown.Item>
     <Dropdown.Item to="#!">Action</Dropdown.Item>
     <Dropdown.Item to="#!">Another action</Dropdown.Item>
     <Dropdown.Item to="#!">Something else here
     </Dropdown.Item>
 </Dropdown.Menu>
</div> // End Prism Code//`,as=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 	<p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
<div className="bd-example">
    <Dropdown.Menu className="dropdown-menu" show>
        <Dropdown.Item as="li"><span className="dropdown-item-text px-0">Dropdown item text</span>
        </Dropdown.Item>
        <Dropdown.Item to="#!">Action</Dropdown.Item>
        <Dropdown.Item to="#!">Another action</Dropdown.Item>
        <Dropdown.Item to="#!">Something else here
        </Dropdown.Item>
    </Dropdown.Menu>
</div>// End Prism Code//`,ns=`

 import { Dropdown } from "react-bootstrap";

 <div className="bd-example">
 <Dropdown.Menu show>
     <Dropdown.Header>
         <h6 className="dropdown-header px-0">Dropdown header</h6>
     </Dropdown.Header>
     <Dropdown.Item className="dropdown-item" to="#!">Action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" to="#!">Another action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" to="#!">Something else here</Dropdown.Item>
 </Dropdown.Menu>
</div> // End Prism Code//`,rs=`

 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
<div className="bd-example">
    <Dropdown.Menu show>
        <Dropdown.Header>
            <h6 className="dropdown-header px-0">Dropdown header</h6>
        </Dropdown.Header>
        <Dropdown.Item className="dropdown-item" to="#!">Action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" to="#!">Another action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" to="#!">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</div> // End Prism Code//`,is=`
 import { Dropdown } from "react-bootstrap";
 
 <div className="bd-example">
 <Dropdown.Menu className="dropdown-menu" show>
     <Dropdown.Header>Heading</Dropdown.Header>
     <Dropdown.Item className="dropdown-item" to="#!">Action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" to="#!">Another action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" to="#!">Something else here</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item className="dropdown-item" to="#!">Separated link</Dropdown.Item>
 </Dropdown.Menu>
</div> // End Prism Code//`,ds=`
 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
 
	<div className="bd-example">
<Dropdown.Menu className="dropdown-menu" show>
    <Dropdown.Header>Heading</Dropdown.Header>
    <Dropdown.Item className="dropdown-item" to="#!">Action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" to="#!">Another action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" to="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item className="dropdown-item" to="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</div> // End Prism Code//`,ls=`
 import { Dropdown } from "react-bootstrap";

 <div className="bd-example">
 <Dropdown.Menu show className="dropdown-menu p-4 text-muted" style={{ maxWidth: 200 }}>
     <p>
         Some example text that's free-flowing within the dropdown menu.
     </p>
     <p className="mb-0">
         And this is more example text.
     </p>
 </Dropdown.Menu>
</div> // End Prism Code//`,ps=`
 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<div className="bd-example">
    <Dropdown.Menu show className="dropdown-menu p-4 text-muted" style={{ maxWidth: 200 }}>
        <p>
            Some example text that's free-flowing within the dropdown menu.
        </p>
        <p className="mb-0">
            And this is more example text.
        </p>
    </Dropdown.Menu>
</div> // End Prism Code//`,ms=`
 import { Dropdown } from "react-bootstrap";

 <Dropdown>
 <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
     data-bs-toggle="dropdown" aria-expanded="false">
     Right-aligned menu example
 </Dropdown.Toggle>
 <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
     <Dropdown.Item as="li">Action
     </Dropdown.Item>
     <Dropdown.Item as="li">Another
         action</Dropdown.Item>
     <Dropdown.Item as="li">Something else
         here
     </Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`,cs=`
 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<SpkDropdown Menualign="end"  Toggletext="Right-aligned menu example" Customclass="d-inline-block" Togglevariant="primary" Customtoggleclass="d-inline-block"  Menuas="ul">
    <Dropdown.Item as="li">Action</Dropdown.Item>
    <Dropdown.Item as="li">Another	action</Dropdown.Item>
    <Dropdown.Item as="li">Something else here</Dropdown.Item>
</SpkDropdown> // End Prism Code//`,us=`
 import { Dropdown } from "react-bootstrap";

 <div className="btn-group text-wrap">
 <DropdownButton variant="secondary" as={ButtonGroup} align={{ lg: "end" }} title="Left-aligned but right aligned when large screen text-wrap" id="dropdown-menu-align-responsive-1" className="text-wrap">
     <Dropdown.Item to="#!">Action</Dropdown.Item>
     <Dropdown.Item to="#!">Another action</Dropdown.Item>
     <Dropdown.Item to="#!">Something else here
     </Dropdown.Item>
 </DropdownButton>
</div> // End Prism Code//`,gs=`
 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <SpkButtongroup>
    <SpkDropdown as={ButtonGroup} Align={{ lg: "end" }} Toggletext="Left-aligned but right aligned when large screen" Id="dropdown-menu-align-responsive-1" Customclass="text-wrap" Togglevariant="secondary"   Menuas="ul">
        <Dropdown.Item to="#!">Action</Dropdown.Item>
        <Dropdown.Item to="#!">Another action</Dropdown.Item>
        <Dropdown.Item to="#!">Something else here</Dropdown.Item>
    </SpkDropdown>
</SpkButtongroup>// End Prism Code//`,bs=`
 import { Dropdown } from "react-bootstrap";

 <div className="btn-group text-wrap">
	<DropdownButton variant="info" as={ButtonGroup} align={{ lg: "start" }} title="Left-aligned but right aligned when large screen" className="text-wrap" id="dropdown-menu-align-responsive-1">
		<Dropdown.Item to="#!">Action</Dropdown.Item>
		<Dropdown.Item to="#!">Another action</Dropdown.Item>
		<Dropdown.Item to="#!">Something else here
		</Dropdown.Item>
	</DropdownButton>
</div> // End Prism Code//`,hs=`
 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <SpkButtongroup>
    <SpkDropdown as={ButtonGroup} Toggletext="Left-aligned but right aligned when large screen" Id="dropdown-menu-align-responsive-1" Customclass="text-wrap" Togglevariant="info"   Menuas="ul">
        <Dropdown.Item to="#!">Action</Dropdown.Item>
        <Dropdown.Item to="#!">Another action</Dropdown.Item>
        <Dropdown.Item to="#!">Something else here</Dropdown.Item>
    </SpkDropdown>
</SpkButtongroup> // End Prism Code//`,ws=`//<!-- Prism Code: This code is only used for showcode purpose -->//
interface custombutton {
	id: number
	text: string
	class: string
	class1: string
	class2: string
}
export const CustomButtons: custombutton[] = [
	{ id: 1, class: "primary", text: "Primary", class1: "menu-primary", class2: "" },
	{ id: 2, class: "secondary", text: "Secondary", class1: "menu-secondary", class2: "" },
	{ id: 3, class: "warning", text: "warning", class2: "item-warning", class1: "" },
	{ id: 4, class: "info", text: "info", class2: "item-info", class1: "" },
	{ id: 5, class: "success-light", text: "success", class2: "dropmenu-light-success", class1: "" },
	{ id: 6, class: "danger-light", text: "danger", class2: "dropmenu-light-danger", class1: "" }
]; // End Prism Code//`,ks=`
 import { Dropdown } from "react-bootstrap";

 <div className="btn-list">
 {CustomButtons.map((idx,index) => (
     <div className="btn-group" key={index}>
         <Dropdown>
             <Dropdown.Toggle variant={idx.class} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 {idx.text}
             </Dropdown.Toggle>
             <Dropdown.Menu className={'dropdown-menu-&#{idx.class} dropdown-&#{idx.class1} dropmenu-&#{idx.class2}}'}>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item" to="#!">Action</Dropdown.Item>
                 </li>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item" to="#!">Another action</Dropdown.Item>
                 </li>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item active" to="#!">Active</Dropdown.Item>
                 </li>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item" to="#!">Something else here</Dropdown.Item>
                 </li>
             </Dropdown.Menu>
         </Dropdown>
     </div>
 ))}
</div> // End Prism Code//`,Bs=`
 import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

<div className="btn-list">
    {CustomButtons.map((idx,index) => (
        <SpkButtongroup key={index}>
            <SpkDropdown Togglevariant={idx.class} Toggletext={idx.text} Menuas="ul" Menuclass={idx.class1}>
                    <li>
                        <Dropdown.Item as="a" className="dropdown-item" to="#!">Action</Dropdown.Item>
                    </li>
                    <li>
                        <Dropdown.Item as="a" className="dropdown-item" to="#!">Another action</Dropdown.Item>
                    </li>
                    <li>
                        <Dropdown.Item as="a" className="dropdown-item" to="#!">Something else here</Dropdown.Item>
                    </li>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div> // End Prism Code//`,vs=`//<!-- Prism Code: This code is only used for showcode purpose -->//
interface ghost {
	id: number
	text: string
	class: string
}
export const GhostButtons: ghost[] = [
	{ id: 1, class: "primary-ghost", text: "Primary" },
	{ id: 2, class: "secondary-ghost", text: "Secondary" },
	{ id: 3, class: "warning-ghost", text: "warning" },
	{ id: 4, class: "info-ghost", text: "info" },
	{ id: 5, class: "success-ghost", text: "success" },
	{ id: 6, class: "danger-ghost", text: "danger" }
]; // End Prism Code//`,ys=`
 import { Dropdown } from "react-bootstrap";

 <div className="btn-list">
 {GhostButtons.map((idx,index) => (
     <div className="btn-group" key={index}>
         <Dropdown>
             <Dropdown.Toggle variant={idx.class} type="button" className="btn btn-primary-ghost dropdown-toggle"
                 data-bs-toggle="dropdown" aria-expanded="false">
                 {idx.text}
             </Dropdown.Toggle>
             <Dropdown.Menu>
                 <Dropdown.Item className="dropdown-item" to="#!">Action</Dropdown.Item>
                 <Dropdown.Item className="dropdown-item" to="#!">Another action</Dropdown.Item>
                 <Dropdown.Item className="dropdown-item" to="#!">Something else here</Dropdown.Item>
                 <Dropdown.Divider className="dropdown-divider" />
                 <Dropdown.Item className="dropdown-item" to="#!">Separated link</Dropdown.Item>
             </Dropdown.Menu>
         </Dropdown>
     </div>
 ))}
</div> // End Prism Code//`,xs=`
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";

 <div className="btn-list">
    {GhostButtons.map((idx,index) => (
        <SpkButtongroup key={index}>
            <SpkDropdown Togglevariant={idx.class} Toggletext={idx.text} Menuas="ul">
                    <Dropdown.Item className="dropdown-item" to="#!">Action</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" to="#!">Another action</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" to="#!">Something else here</Dropdown.Item>
                    <Dropdown.Divider className="dropdown-divider" />
                    <Dropdown.Item className="dropdown-item" to="#!">Separated link</Dropdown.Item>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div>// End Prism Code//`,fs=` <img className="rounded mx-auto d-block" 
src={media55} alt="..."/> // End Prism Code//`,Ss=' <img className="rounded float-end" src={media54} alt="..."/> // End Prism Code//',Ns=` <div className="text-center">
<img src={media58} className="img-fluid" alt="..."/>
</div> // End Prism Code//`,Cs=`<div className="text-center">
<img src={media49}  className="img-fluid rounded" alt="..."/>
</div> // End Prism Code//`,Ds=` <div className="text-center">
    <img src={media58} className="img-fluid" alt="..." />
</div> // End Prism Code//`,Ps=` <div className="text-center">
<img src={media50} className="img-fluid rounded-pill" alt="..."/>
</div> // End Prism Code//`,Is=` <p className="card-title mb-3">Use <code> .img-thumbnail 
</code>to give an image a rounded 1px border.</p>
 <div className="text-center">
     <img src={media51}
      className="img-thumbnail" alt="..."/>
 </div> // End Prism Code//`,Ts=` <div className="text-center">
<img src={media52}
 className="img-thumbnail rounded-pill" alt="..."/>
</div> // End Prism Code//`,Ls=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body d-flex justify-content-between gap-2">
<figure className="figure">
    <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={media56} alt="..."/>
    <figcaption className="figure-caption mt-2">A caption for the above image.
    </figcaption>
</figure>
<figure className="figure float-end">
    <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={media57} alt="..."/>
    <figcaption className="figure-caption text-end mt-2">A caption for the above image.
    </figcaption>
</figure>
</div>`,Es=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface basicbtn {
	id: number
	src: string
	text: string
}

export const BasicButtons: basicbtn[] = [
	{ id: 1, src: face1, text: "Isha Bella" },
	{ id: 2, src: face3, text: "Elsa Urena" },
	{ id: 3, src: face16, text: "Flora Mary" },
	{ id: 4, src: face15, text: "Gatin Leo" },
	{ id: 5, src: face13, text: "Raja Ryder" },
]; // End Prism Code//`,As=`import { ListGroup } from "react-bootstrap";
import {BasicButtons} from "@/shared/data/ui-elements/listgroupdata";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

{BasicButtons.map((idx,index)=>(
<ListGroup.Item as="li" key={index}>
    <div className="d-flex align-items-center">
        <span className="avatar avatar-sm">
            <img src={idx.src} alt="img"/>
        </span>
        <div className="ms-2 fw-semibold">
            {idx.text}
        </div>
    </div>
</ListGroup.Item>
))} // End Prism Code//`,Gs=` 
    import { ListGroup } from "react-bootstrap";
    import {BasicButtons} from "@/shared/data/ui-elements/listgroupdata";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

<SpkListgroup as="ul">
{BasicButtons.map((idx,index) => (
        <ListGroup.Item as="li" key={index}>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-sm">
                    <img src={idx.src} alt="img" />
                </span>
                <div className="ms-2 fw-semibold">
                    {idx.text}
                </div>
            </div>
        </ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`,Ms=` import { ListGroup } from "react-bootstrap";

<ListGroup as="ul">
<ListGroup.Item as="li"className="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
</ListGroup.Item>
<ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
</ListGroup> // End Prism Code//`,Hs=` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
<SpkListgroup as="ul">
<ListGroup.Item as="li" disabled className="" aria-disabled="true">A disabled item meant to be disabled
</ListGroup.Item>
<ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
</SpkListgroup>// End Prism Code//`,zs=`import { ListGroup } from "react-bootstrap";

<ListGroup variant='flush' className="">
<ListGroup.Item className="fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
</ListGroup> // End Prism Code//`,Rs=`
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";

<SpkListgroup Variant='flush'>
    <ListGroup.Item className="fw-semibold"><i className="ri-home-2-line fs-15 lh-1 align-center me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-cloud-line fs-15 lh-1 align-center me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-global-line fs-15 lh-1 align-center me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-stack-line fs-15 lh-1 align-center me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-gift-2-line fs-15 lh-1 align-center me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
</SpkListgroup> // End Prism Code//`,Os=`//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface activebtn {
        id: number
        text: string
        class: string
        class1: string
    }
    export const ActiveButtons: activebtn[] = [
        { id: 1, class: "house-door", text: "Home", class1: "active" },
        { id: 2, class: "bell", text: "Notifications", class1: "" },
        { id: 3, class: "gift", text: "Sent Messages", class1: "" },
        { id: 4, class: "person", text: "New Requests", class1: "" },
        { id: 5, class: "trash3", text: "Deleted Messages", class1: "" },
    ]; // End Prism Code//`,js=`  import { ListGroup } from "react-bootstrap";
import {ActiveButtons} from "@/shared/data/ui-elements/listgroupdata";

<ListGroup as="ul">
{ActiveButtons.map((idx) => (
    <ListGroup.Item as="li" className={'list-group-item &#{idx.class1}'} aria-current="true" key={index}>
        <div className="d-flex align-items-center">
            <div>
                <span className="fs-15">
                    <i className={'bi bi-&#{idx.class}'}></i>
                </span>
            </div>
            <div className="ms-2">
                {idx.text}
            </div>
        </div>
    </ListGroup.Item>
))}
</ListGroup> // End Prism Code//`,Vs=` 
        import { ListGroup } from "react-bootstrap";
        import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
        import {ActiveButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup as="ul">
{ActiveButtons.map((idx,index) => (
    <ListGroup.Item as="li" className={list-group-item {idx.class1}} aria-current="true" key={index}>
        <div className="d-flex align-items-center">
            <div>
                <span className="fs-15">
                    <i className={bi bi-{idx.class}}></i>
                </span>
            </div>
            <div className="ms-2">
                {idx.text}
            </div>
        </div>
    </ListGroup.Item>
))}
</SpkListgroup> // End Prism Code//`,qs=` import { ListGroup } from "react-bootstrap";

<ListGroup className="list-group">
<ListGroup.Item type="button" className="list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
</ListGroup> // End Prism Code//`,Fs=`import { ListGroup } from "react-bootstrap";
import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";

<SpkListgroup>
    <ListGroup.Item type="button" className="list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
</SpkListgroup> // End Prism Code//`,Ws=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface linkbtn {
	id: number
	text: string
	text1: string
	color: string
	class: string
	class1: string
}
export const LinksButtons: linkbtn[] = [
	{ id: 1, class: "white", text: "California", class1: "active", text1: "C", color: "default" },
	{ id: 2, class: "secondary", text: "New Jersey", class1: "", text1: "N", color: "" },
	{ id: 3, class: "info", text: "Los Angeles", class1: "", text1: "L", color: "" },
	{ id: 4, class: "warning", text: "Miami Florida", class1: "", text1: "M", color: "" },
	{ id: 5, class: "success", text: "Washington D.C", class1: "disabled", text1: "W", color: "" },
]; // End Prism Code//`,Ks=`import { ListGroup } from "react-bootstrap";
    import {LinksButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup className="list-group">
    {LinksButtons.map((idx,index) => (
        <ListGroup.Item action className={'list-group-item-action &#{idx.class1}'} key={index}
            aria-current="true">
            <div className="d-flex align-items-center">
                <div>
                    <span className={'avatar avatar-xs bg-&#{idx.class} text-&#{idx.color} avatar-rounded'}>
                        {idx.text1}
                    </span>
                </div>
                <div className="ms-2">{idx.text}</div>
            </div>
        </ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`,Ys=`import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
    import {LinksButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup>
{LinksButtons.map((idx,index) => (
    <ListGroup.Item action className={'list-group-item-action {idx.class1}'} key={index}
        aria-current="true">
        <div className="d-flex align-items-center">
            <div>
                <span className={'avatar avatar-xs bg-{idx.class} text-{idx.color} avatar-rounded'}>
                    {idx.text1}
                </span>
            </div>
            <div className="ms-2">{idx.text}</div>
        </div>
    </ListGroup.Item>
))}
</SpkListgroup> // End Prism Code//`,Us=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface subheading {
	id: number
	text1: string
	text2: string
	text3: string
	class: string
}
export const SubheadingsButtons: subheading[] = [
	{ id: 1, text1: "What Happened?", text2: "Many experts have recently suggested may exist.", text3: "32 Views", class: "primary-transparent" },
	{ id: 2, text1: "It Was Amazing!", text2: " His idea involved taking red.", text3: "52 Views", class: "secondary-transparent" },
	{ id: 3, text1: "News Is A Great Weapon.", text2: "News can influence in many ways.", text3: "1,204 Views", class: "success-transparent" },
	{ id: 4, text1: "majority have suffered.", text2: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.", text3: "14 Views", class: "danger-transparent" }
]; // End Prism Code//`,Xs=`import { ListGroup } from "react-bootstrap";
import {SubheadingsButtons} from "@/shared/data/ui-elements/listgroupdata";
    
    <ListGroup as="ol" numbered>
{SubheadingsButtons.map((idx,index)=>(
<ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={index}>
    <div className="ms-2 me-auto text-muted">
        <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
        {idx.text2}
    </div>
    <Badge bg={idx.class}>{idx.text3}</Badge>
</ListGroup.Item>
))}</ListGroup> // End Prism Code//`,Js=`import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
    import {SubheadingsButtons} from "@/shared/data/ui-elements/listgroupdata";
    
<SpkListgroup as="ol" Numbered={true}>
    {SubheadingsButtons.map((idx,index) => (
        <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={index}>
            <div className="ms-2 me-auto text-muted">
                <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
                {idx.text2}
            </div>
            <SpkBadge variant={idx.class}>{idx.text3}</SpkBadge>
        </ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`,$s=` import { ListGroup } from "react-bootstrap";

<ListGroup as="ol" numbered>
<ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
<ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
<ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
</ListGroup> // End Prism Code//`,Zs=` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
<SpkListgroup as="ol" Numbered={true}>
    <ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
    <ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
    <ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
    <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
    <ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
    <ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
</SpkListgroup> // End Prism Code//`,Qs=`  import { ListGroup } from "react-bootstrap";

    <ListGroup as="ul">
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        New Admin Launched.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</ListGroup> // End Prism Code//`,_s=` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";

<SpkListgroup as="ul">
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked />
    Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked />
    Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked />
    New Admin Launched.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</SpkListgroup> // End Prism Code//`,ta=`
    import { ListGroup } from "react-bootstrap";

    <ListGroup className="list-group">
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        New Admin Launched.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</ListGroup> // End Prism Code//`,ea=`
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";

<SpkListgroup>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" defaultChecked />
    Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" defaultChecked />
    Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" defaultChecked />
    Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" />
    New Admin Launched.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" />
    To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" />
    To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</SpkListgroup> // End Prism Code//`,oa=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface listbtn {
	id: number
	text1: string
	text2: string
	class: string
	color: string
}
export const ListbadgesButtons: listbtn[] = [
	{ id: 1, text1: "Groceries", text2: "Available", class: "primary", color: "" },
	{ id: 2, text1: "Furniture", text2: "Buy", class: "secondary", color: "" },
	{ id: 3, text1: "Beauty", text2: "32", class: "danger", color: "" },
	{ id: 4, text1: "Books", text2: "New", class: "light", color: "text-default" },
	{ id: 5, text1: "Toys", text2: "Hot", class: "info-gradient", color: "" },
	{ id: 6, text1: "Mobiles", text2: "Sold Out", class: "warning", color: "" },
]; // End Prism Code//`,sa=` 
    import { ListGroup } from "react-bootstrap";
    import {ListbadgesButtons} from "@/shared/data/ui-elements/listgroupdata";

    {ListbadgesButtons.map((idx,index) => (
    <ListGroup.Item key={index}
        className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
        {idx.text1}
        <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
    </ListGroup.Item>
    ))} // End Prism Code//`,aa=` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
    import {ListbadgesButtons} from "@/shared/data/ui-elements/listgroupdata";

 <SpkListgroup as="ul">
    {ListbadgesButtons.map((idx,index) => (
        <ListGroup.Item as="li" key={index}
            className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            {idx.text1}
            <SpkBadge variant={idx.class} Customclass={idx.color}>{idx.text2}</SpkBadge>
        </ListGroup.Item>
    ))}
</SpkListgroup>// End Prism Code//`,na=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface horizontal {
        id: number
        class: string
    }
    export const HorizontalButtons: horizontal[] = [
        { id: 1, class: "" },
        { id: 2, class: "-sm" },
        { id: 3, class: "-md" },
        { id: 4, class: "-lg" },
        { id: 5, class: "-xl" },
        { id: 6, class: "-xxl" },
    ]; // End Prism Code//`,ra=` 
import { ListGroup } from "react-bootstrap";
import {HorizontalButtons} from "@/shared/data/ui-elements/listgroupdata";

{HorizontalButtons.map((idx,index) => (
    <ListGroup as="ul" className={'list-group-horizontal &#{idx.class} mb-3'} key={index}>
        <ListGroup.Item as="li">An item</ListGroup.Item>
        <ListGroup.Item as="li">A second item</ListGroup.Item>
        <ListGroup.Item as="li">A third item</ListGroup.Item>
    </ListGroup>
))} // End Prism Code//`,ia=` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
    import {HorizontalButtons} from "@/shared/data/ui-elements/listgroupdata";

{HorizontalButtons.map((idx,index) => (
    <SpkListgroup as="ul" CustomClass={list-group-horizontal{idx.class} mb-2} key={index}>
        <ListGroup.Item as="li">An item</ListGroup.Item>
        <ListGroup.Item as="li">A second item</ListGroup.Item>
        <ListGroup.Item as="li">A third item</ListGroup.Item>
    </SpkListgroup>
))} // End Prism Code//`,da=`
//<!-- Prism Code: This code is only used for showcode purpose -->//interface custombtn {
        id: number
        heading: string
        text1: string
        text2: string
        text3: string
        class1: string
        class2: string
        color: string;
    }
    export const CustomButtons: custombtn[] = [
        { id: 1, heading: "Web page editors now use Lorem Ipsum?", text1: "3 days ago", class1: "active", text2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.", text3: "24,Nov 2022", class2: "", color: "text-fixed-black" },
        { id: 2, heading: "Richard McClintock, a Latin professor?", text1: "4 hrs ago", class1: "", text2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.", text3: "30,Nov 2022.", class2: "text-muted", color: "" },
        { id: 3, heading: "It uses a dictionary of over 200 Latin words?", text1: "15 hrs ago", class1: "", text2: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.", text3: "4,Nov 2022.", class2: "text-muted", color: "" },
        { id: 4, heading: "The standard Lorem Ipsum used since the 1500s?", text1: "45 mins ago", class1: "", text2: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", text3: "28,Oct 2022.", class2: "text-muted", color: "" },
    ]; // End Prism Code//`,la=` import { ListGroup } from "react-bootstrap";
import {CustomButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup className="list-group">
    {CustomButtons.map((idx,index) => (
        <ListGroup.Item action className={'list-group-item-action &#{idx.class1}'} key={index}
            aria-current="true">
            <div className="d-flex w-100 justify-content-between gap-1">
                <h6 className={'mb-1 fw-semibold &#{idx.color}'}>{idx.heading}</h6>
                <small className={idx.class2}>{idx.text1}</small>
            </div>
            <p className="mb-1">{idx.text2}</p>
            <small>{idx.text3}.</small>
        </ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`,pa=` import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
    import {CustomButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup>
    {CustomButtons.map((idx,index) => (
        <ListGroup.Item action className={list-group-item-action {idx.class1}} key={index}
            aria-current="true">
            <div className="d-flex w-100 justify-content-between gap-1">
                <h6 className={mb-1 fw-semibold {idx.color}}>{idx.heading}</h6>
                <small className={idx.class2}>{idx.text1}</small>
            </div>
            <p className="mb-1">{idx.text2}</p>
            <small>{idx.text3}.</small>
        </ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`,ma=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface contextualbtn {
	id: number
	text: string
	class: string
	class1: string
}
export const ContextualButtons: contextualbtn[] = [
	{ id: 1, text: "A simple default list group item", class: "light", class1: "" },
	{ id: 2, text: "A simple primary list group item", class: "primary", class1: "" },
	{ id: 3, text: "A simple secondary list group item", class: "secondary", class1: "" },
	{ id: 4, text: "A simple success list group item", class: "success", class1: "" },
	{ id: 5, text: "A simple danger list group item", class: "danger", class1: "" },
	{ id: 6, text: "A simple warning list group item", class: "warning", class1: "" },
	{ id: 7, text: "A simple info list group item", class: "info", class1: "" },
	{ id: 8, text: "A simple light list group item", class: "light", class1: "" },
	{ id: 9, text: "A simple dark list group item", class: "dark", class1: "text-white" }
]; // End Prism Code//`,ca=`
    import { ListGroup } from "react-bootstrap";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item className={'list-item-solid-&#{idx.class} &#{idx.class1}'} as="li" key={index}>{idx.text}</ListGroup.Item>
    ))}

</ListGroup> // End Prism Code//`,ua=`
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
    import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item className={list-item-solid-{idx.class} {idx.class1}} as="li" key={index}>{idx.text}</ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`,ga=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface contextualbtn {
	id: number
	text: string
	class: string
	class1: string
}
export const ContextualButtons: contextualbtn[] = [
	{ id: 1, text: "A simple default list group item", class: "light", class1: "" },
	{ id: 2, text: "A simple primary list group item", class: "primary", class1: "" },
	{ id: 3, text: "A simple secondary list group item", class: "secondary", class1: "" },
	{ id: 4, text: "A simple success list group item", class: "success", class1: "" },
	{ id: 5, text: "A simple danger list group item", class: "danger", class1: "" },
	{ id: 6, text: "A simple warning list group item", class: "warning", class1: "" },
	{ id: 7, text: "A simple info list group item", class: "info", class1: "" },
	{ id: 8, text: "A simple light list group item", class: "light", class1: "" },
	{ id: 9, text: "A simple dark list group item", class: "dark", class1: "text-white" }
]; // End Prism Code//`,ba=` 
    import { ListGroup } from "react-bootstrap";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup>
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item variant={idx.class} action className=" list-group-item-action" key={index}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`,ha=` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
    import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

<ListGroup>
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item variant={idx.class} action className=" list-group-item-action" key={index}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`,wa=`
import { ListGroup } from "react-bootstrap";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";
    <ListGroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item as="li" variant={idx.class} key={index}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`,ka=`
import { ListGroup } from "react-bootstrap";
import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item as="li" variant={idx.class} key={index}>{idx.text}</ListGroup.Item>
    ))}
</SpkListgroup>// End Prism Code//`,Ba=`//<!-- Prism Code: This code is only used for showcode purpose -->//
interface contextualbtn {
	id: number
	text: string
	class: string
	class1: string
}
export const ContextualButtons: contextualbtn[] = [
	{ id: 1, text: "A simple default list group item", class: "light", class1: "" },
	{ id: 2, text: "A simple primary list group item", class: "primary", class1: "" },
	{ id: 3, text: "A simple secondary list group item", class: "secondary", class1: "" },
	{ id: 4, text: "A simple success list group item", class: "success", class1: "" },
	{ id: 5, text: "A simple danger list group item", class: "danger", class1: "" },
	{ id: 6, text: "A simple warning list group item", class: "warning", class1: "" },
	{ id: 7, text: "A simple info list group item", class: "info", class1: "" },
	{ id: 8, text: "A simple light list group item", class: "light", class1: "" },
	{ id: 9, text: "A simple dark list group item", class: "dark", class1: "text-white" }
]; // End Prism Code//`,va=' <img src={media28} className="object-fit-contain border rounded" alt="..." /> // End Prism Code//',ya='<img src={media28} className="object-fit-cover border rounded" alt="..." /> // End Prism Code//',xa='<img src={media28} className="object-fit-fill border rounded" alt="..." /> // End Prism Code//',fa=' <img src={media28} className="object-fit-scale border rounded" alt="..." /> // End Prism Code//',Sa=' <img src={media28} className="object-fit-none border rounded" alt="..." /> // End Prism Code//',Na=' <img src={media28} className="object-fit-sm-contain border rounded" alt="..." /> // End Prism Code//',Ca=' <img src={media28} className="object-fit-md-contain border rounded" alt="..." /> // End Prism Code//',Da=' <img src={media28} className="object-fit-lg-contain border rounded" alt="..." /> // End Prism Code//',Pa='<img src={media28} className="object-fit-xl-contain border rounded" alt="..." /> // End Prism Code//',Ia=' <img src={media28} className="object-fit-xxl-contain border rounded" alt="..." /> // End Prism Code//',Ta='  <video src={video} className="object-fit-contain rounded border" autoPlay loop muted></video> // End Prism Code//',La=' <video src={video} className="object-fit-fill rounded border" autoPlay loop muted></video> // End Prism Code//',Ea='<video src={video} className="object-fit-fill rounded border" autoPlay loop muted></video> // End Prism Code//',Aa='<video src={video} className="object-fit-fill rounded border" autoPlay loop muted></video> // End Prism Code//',Ga='<video src={video} className="object-fit-fill rounded border" autoPlay loop muted></video> // End Prism Code//',Ma=`<nav aria-label="Page navigation">
<Pagination as="ul" className="pagination mb-0">
<Pagination.Item as="li" disabled to="#!" >Previous
</Pagination.Item>
<Pagination.Item as="li" to="#!" >1</Pagination.Item>
<Pagination.Item as="li" to="#!" >2</Pagination.Item>
<Pagination.Item as="li" to="#!" >Next</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`,Ha=` <Pagination className="pagination mb-0">
<Pagination.Item className="page-item" as="li" to="#!"  aria-label="Previous">
        <span aria-hidden="true"><i className="bi bi-caret-left"></i></span></Pagination.Item>
<Pagination.Item as="li" to="#!" >1</Pagination.Item>
<Pagination.Item as="li" to="#!" >2</Pagination.Item>
<Pagination.Item as="li" to="#!" >3</Pagination.Item>
<Pagination.Item as="li" className="page-item" to="#!"  aria-label="Next">
 <span aria-hidden="true"><i className="bi bi-caret-right"></i></span></Pagination.Item> 
</Pagination> // End Prism Code//`,za=`<nav aria-label="..." className="me-3">
<Pagination className="pagination">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item  to="#!" >1</Pagination.Item>
    <Pagination.Item active  aria-current="page"to="#!" >2
    </Pagination.Item>
    <Pagination.Item  to="#!" >Next
    </Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination className="pagination">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item  to="#!" >1</Pagination.Item>
    <Pagination.Item active aria-current="page">2
    </Pagination.Item>
    <Pagination.Item  to="#!" >Next
    </Pagination.Item>
</Pagination>
</nav> // End Prism Code//`,Ra=`<nav aria-label="Page navigation">
<Pagination className="justify-content-center">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item to="#!" >1</Pagination.Item>
    <Pagination.Item to="#!" >2</Pagination.Item>
    <Pagination.Item to="#!" >3</Pagination.Item>
    <Pagination.Item  to="#!" >Next
    </Pagination.Item>
</Pagination>
</nav>
<nav aria-label="Page navigation">
<Pagination className="justify-content-end mb-0">
    <Pagination.Item disabled >Previous
    </Pagination.Item>
    <Pagination.Item to="#!" >1</Pagination.Item>
    <Pagination.Item to="#!" >2</Pagination.Item>
    <Pagination.Item to="#!" >3</Pagination.Item>
    <Pagination.Item  to="#!" >Next
    </Pagination.Item>
</Pagination>
</nav> // End Prism Code//`,Oa=`<nav aria-label="...">
<Pagination as="ul" className="pagination pagination-sm mb-0">
	<Pagination.Item as="li" active aria-current="page">
		1
	</Pagination.Item>
	<Pagination.Item as="li" to="#!" >2</Pagination.Item>
	<Pagination.Item as="li" to="#!" >3</Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination as="ul" className="pagination mb-0">
	<Pagination.Item as="li" active aria-current="page">
		1
	</Pagination.Item>
	<Pagination.Item as="li" to="#!" >2</Pagination.Item>
	<Pagination.Item as="li" to="#!" >3</Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination className="pagination pagination-lg mb-0">
	<Pagination.Item as="li" className=" active" aria-current="page">
		1
	</Pagination.Item>
	<Pagination.Item as="li" to="#!" >2</Pagination.Item>
	<Pagination.Item as="li" to="#!" >3</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`,ja=`<nav aria-label="Page navigation" className="pagination-style-1">
<Pagination className="pagination mb-0">
<Pagination.Item disabled to="#!" >
<i className="ri-arrow-left-s-line align-middle"></i>       
</Pagination.Item>
<Pagination.Item to="#!" >1</Pagination.Item>
<Pagination.Item active to="#!" >2</Pagination.Item>
<Pagination.Item to="#!" >
<i className="bi bi-three-dots"></i>
</Pagination.Item>
<Pagination.Item to="#!" >21</Pagination.Item>
<Pagination.Item to="#!" >
<i className="ri-arrow-right-s-line align-middle"></i>
</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`,Va=`<nav aria-label="Page navigation" className="pagination-style-1">
<Pagination className="pagination mb-0">
<Pagination.Item disabled to="#!" >
<i className="ri-arrow-left-s-line align-middle"></i>       
</Pagination.Item>
<Pagination.Item to="#!" >1</Pagination.Item>
<Pagination.Item active to="#!" >2</Pagination.Item>
<Pagination.Item to="#!" >
<i className="bi bi-three-dots"></i>
</Pagination.Item>
<Pagination.Item to="#!" >21</Pagination.Item>
<Pagination.Item to="#!" >
<i className="ri-arrow-right-s-line align-middle"></i>
</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`,qa=`<nav aria-label="Page navigation" className="pagination-style-3">
<Pagination className=" mb-0 flex-wrap">
<Pagination.Item as="li" disabled>Prev
</Pagination.Item>
<Pagination.Item as="li"  active to="#!" >1</Pagination.Item>
<Pagination.Item as="li"  to="#!" >2</Pagination.Item>
<Pagination.Item as="li"  to="#!" >
<i className="bi bi-three-dots"></i>        
</Pagination.Item>
<Pagination.Item as="li"  to="#!" >16</Pagination.Item>
<Pagination.Item as="li" className="pagination-next"
to="#!" >next
</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`,Fa=`<nav aria-label="Page navigation"className="pagination-style-4">
<Pagination className="mb-0 flex-wrap">
<Pagination.Item as="li"  disabled to="#!" >
 Prev
</Pagination.Item>
<Pagination.Item as="li"  active to="#!" >1</Pagination.Item>
<Pagination.Item as="li" to="#!" >2</Pagination.Item>
<Pagination.Item as="li"  to="#!" >
<i className="bi bi-three-dots"></i>   
</Pagination.Item>
<Pagination.Item as="li" to="#!" >16</Pagination.Item>
<Pagination.Item as="li" to="#!" >17</Pagination.Item>
<Pagination.Item as="li" className="pagination-next" to="#!" >
 next       
</Pagination.Item>
</Pagination></nav> // End Prism Code//`,Wa=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface defaultalerts {
	id: number
	text: string
	class: string
}
export const Defaultalerts: defaultalerts[] = [
	{ id: 1, text: "Top", class: "top" },
	{ id: 2, text: "Right", class: "auto" },
	{ id: 3, text: "Bottom", class: "bottom" },
	{ id: 4, text: "Left", class: "left" },
]; // End Prism Code//`,Ka=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list">
  {Defaultalerts.map((idx) => (
    <OverlayTrigger trigger="click" placement={idx.class} key={idx.id}
        overlay={<Popover>
            <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
            <Popover.Body>
                And here's some amazing content. It's very engaging. Right?
            </Popover.Body>
        </Popover>}>
        <Button variant='' to="#!" className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
    </OverlayTrigger>
))}
</div>
// End Prism Code//`,Ya=`
<div className="btn-list">
    {Defaultalerts.map((idx, index) => (
        <SpkPopovers trigger="click" placement={idx.class} key={index} title={'Popover &#36;{idx.text}'} content={'And here's some amazing content. It's very engaging.&#36;{idx.text}?'}>
            <SpkButton Buttonvariant='outline-primary'>Popover {idx.text}</SpkButton>
        </SpkPopovers>
    ))}
</div>`,Ua=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface colorheader {
        id: number
        text: string
        class: string
        color: string
        color1: string
        color2: string
    }
    export const Colorheaderalerts: colorheader[] = [
        { id: 1, text: "Primary", class: "top", color: "outline-primary", color1: "primary", color2: "" },
        { id: 2, text: "Secondary", class: "right", color: "outline-secondary", color1: "secondary", color2: "" },
        { id: 3, text: "Info", class: "bottom", color: "outline-info", color1: "info", color2: "bs-popover-auto" },
        { id: 4, text: "Warning", class: "left", color: "outline-warning", color1: "warning", color2: "" },
        { id: 4, text: "Success", class: "top", color: "outline-success", color1: "success", color2: "" },
        { id: 4, text: "Danger", class: "top", color: "outline-danger", color1: "danger", color2: "" },
    ]; // End Prism Code//`,Xa=`//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
{Colorheaderpopovers.map((idx) => (
<OverlayTrigger trigger="click" placement={idx.class} key={idx.id}
    // autoclose='true' 
    overlay={<Popover className={header-{idx.color1} {idx.color2}}>
        <Popover.Header as="h3" data-bs-custom-class={header-{idx.color1}}> Color Header</Popover.Header>
        <Popover.Body>
        Popover with primary header.
        </Popover.Body>
    </Popover>}>
    <Button variant={idx.color} to="#!" className="btn btn-wave">Header {idx.text}</Button>
</OverlayTrigger>
))}
</div>
// End Prism Code//`,Ja=`
{Colorheaderalerts.map((idx,index) => (
    <SpkPopovers trigger="click" placement={idx.class} key={index} popoverClass={'header-&#60{idx.color1} &#60{idx.color2}'} title="Color Header" content={;Popover with &#60{idx.color1} header.'} data-bs-custom-classname={'header-&#60{idx.color1}'}>
        <SpkButton Buttonvariant={idx.color}>Header {idx.text}</SpkButton>
    </SpkPopovers>
))}`,$a=`
//<!-- Prism Code: This code is only used for showcode purpose -->//interface coloralerts {
      id: number
      text: string
      class: string
      color1: string
  }
  export const Colredalerts: coloralerts[] = [
      { id: 1, text: "Primary", class: "top", color1: "primary" },
      { id: 2, text: "Secondary", class: "right", color1: "secondary" },
      { id: 3, text: "Info", class: "bottom", color1: "info" },
      { id: 4, text: "Warning", class: "left", color1: "warning" },
      { id: 5, text: "Success", class: "top", color1: "success" },
      { id: 6, text: "Danger", class: "right", color1: "danger" },
      { id: 7, text: "Teal", class: "bottom", color1: "teal" },
      { id: 8, text: "Purple", class: "left", color1: "purple" },
  ]; // End Prism Code//`,Za=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
{Colredalerts.map((idx) => (
    <OverlayTrigger key={idx.id} placement={idx.class} trigger="click" 
    overlay={<Popover className={popover-{idx.color1}}>
        <Popover.Header as="h3">Color Background</Popover.Header>
        <Popover.Body>Popover with {idx.text} background.</Popover.Body>
    </Popover>}>
        <Button variant={idx.color1}>{idx.text} </Button>
    </OverlayTrigger>
))}
</div>
// End Prism Code//`,Qa=`
{Colredalerts.map((idx,index) => (
    <SpkPopovers trigger="click" placement={idx.class} key={index} popoverClass={'popover-&#60{idx.color1}'} title="Color Background" content={'Popover with &#60{idx.text} background.'}>
        <SpkButton Buttonvariant={idx.color1}>{idx.text} </SpkButton>
    </SpkPopovers>
))}`,_a=`//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
      {Colredalerts.map((idx) => (
          <OverlayTrigger key={idx.id} placement={idx.class} trigger="click" 
          overlay={<Popover className={popover-{idx.color1}-light} id="tooltip-disabled">
              <Popover.Header as="h3">Light Background</Popover.Header>
              <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
          </Popover>}>
              <Button variant='' className={btn btn-{idx.color1}-light btn-wave}>{idx.text} </Button>
          </OverlayTrigger>
      ))}
  </div>
// End Prism Code//`,tn=`
{Colredalerts.map((idx,index) => (
    <SpkPopovers trigger="click" placement={idx.class} key={index} popoverClass={'popover-&#60{idx.color1}-light'} title="Light Background" content={'Popover with light &#60{idx.text} background.'}>
        <SpkButton Buttonvariant='' Customclass={'btn btn-&#60{idx.color1}-light btn-wave'}>{idx.text} </SpkButton>
    </SpkPopovers>
))}`,en=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
    <Popover.Body>Disabled Popover!</Popover.Body>
</Popover>}>
    <span className="d-inline-block mb-3 mb-sm-1 me-2">
        <Button variant="primary" disabled>
            Disabled button
        </Button>
    </span>
</OverlayTrigger>
// End Prism Code//`,on=`
 <SpkPopovers placement="right" content="Disabled Popover!">
 <span className="d-inline-block mb-3 mb-sm-1 me-2">
     <SpkButton Buttonvariant="primary" Disabled={true}>
         Disabled button
     </SpkButton>
 </span>
</SpkPopovers>`,sn=`<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-secondary only-body' id="tooltip-disabled">
    <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
    <Link className="me-4" to="#!">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
    </Link>
</OverlayTrigger> // End Prism Code//`,an=`
<SpkPopovers trigger="click" placement="top" popoverClass="popover-primary only-body" content="This popover is used to provide details about this icon." >
<Link className="me-4 svg-primary" to="#!" >
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
</Link>
</SpkPopovers>
<SpkPopovers trigger="click" placement="left" popoverClass="popover-secondary only-body" content="This popover is used to provide details about this icon." >
<Link className="me-4 svg-secondary" to="#!"  >
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
</Link>
</SpkPopovers>`,nn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
{Dismissiblealerts.map((idx) => (
  <OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={idx.id}
      overlay={<Popover>
          <Popover.Header as="h3"> Dismissible Popover</Popover.Header>
          <Popover.Body>
              And here's some amazing content. It's very engaging. Right?
          </Popover.Body>
      </Popover>}>
      <Button variant={idx.color} className="btn  btn-wave m-1">Popover Dismiss</Button>
  </OverlayTrigger>
))}
// End Prism Code//`,rn=`
{Dismissiblealerts.map((idx,index) => (
    <SpkPopovers trigger="click" rootClose={true} placement={idx.class} key={index} title="Dismissible Popover" content={'And here's some amazing content. It's very engaging. &#60{idx.class}?'}>
        <SpkButton Buttonvariant={idx.color} Customclass="m-1">Popover Dismiss</SpkButton>
    </SpkPopovers>
))}`,dn=`<ProgressBar variant="" now={0} className="progress mb-3" />
<ProgressBar variant="" now={25} className="progress mb-3" />
<ProgressBar variant="" now={50} className="progress mb-3" />
<ProgressBar variant="" now={75} className="progress mb-3" />
<ProgressBar variant="" now={100} className="progress mb-0" /> // End Prism Code//`,ln=`
	{progressdata.map((idx,index) => (
    <SpkProgress key={index} variant="primary" now={idx.data} mainClass="progress mb-3" />
))}`,pn=`<ProgressBar striped variant='primary' now={10} className="progress mb-3" />
<ProgressBar striped variant='secondary' now={25} className="progress mb-3" />
<ProgressBar striped variant='success' now={50} className="progress mb-3" />
<ProgressBar striped variant='info' now={75} className="progress mb-3" />
<ProgressBar striped variant='warning' now={100} className="progress mb-0" /> // End Prism Code//`,mn=`
{Stripeddata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} striped={true} now={idx.data} mainClass="progress mb-3" />
))}`,cn=`<ProgressBar variant='primary' now={10} label={10} className="progress mb-3" />
<ProgressBar variant='secondary' now={20} label={20} className="progress mb-3" />
<ProgressBar variant='success' now={40} label={40%} className="progress mb-3" />
<ProgressBar variant='info' now={60} label={60}% className="progress mb-3" />
<ProgressBar variant='warning' now={80} label={80%} className="progress mb-0" /> // End Prism Code//`,un=`
{Stripeddata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} label={'&#60{idx.data}%'} now={idx.data} mainClass="progress mb-3" />
))}`,gn=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface multiple {
    now1: number
    now2: number
    now3: number
    size: string
    class1: string
    class2: string
    class3: string
}
export const Multipleprogress: multiple[] = [
    { class1: "primary", class2: "secondary", class3: "success", now1: 5, now2: 10, now3: 15, size: "xs" },
    { class1: "warning", class2: "info", class3: "danger", now1: 10, now2: 15, now3: 20, size: "sm" },
    { class1: "info", class2: "success", class3: "primary", now1: 15, now2: 20, now3: 25, size: "" },
    { class1: "purple", class2: "teal", class3: "orange", now1: 20, now2: 25, now3: 30, size: "lg" },
    { class1: "success", class2: "danger", class3: "warning", now1: 25, now2: 30, now3: 35, size: "xl" },

]; // End Prism Code//`,bn=`
{Multipleprogress.map((idx,index) => (
    <ProgressBar className={'progress-stacked progress-&#60{idx.size} mb-3'} key={index}>
        <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
        <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
        <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
    </ProgressBar>
))}`,hn=`
    import { Multipleprogress } from "@/shared/data/ui-elements/progressdata";
    import { ProgressBar } from "react-bootstrap";

    {Multipleprogress.map((idx,index) => (
        <ProgressBar className={'progress-stacked progress-&#{idx.size} mb-3'} key={index}>
            <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
            <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
            <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
        </ProgressBar>
    ))} // End Prism Code//`,wn=`<ProgressBar  variant='primary' now={10} className="progress progress-xs mb-3" />
<ProgressBar  variant='primary' now={25} className="progress progress-sm mb-3" />
<ProgressBar  variant='primary' now={50} className="progress  mb-3" />
<ProgressBar  variant='primary' now={75} className="progress progress-lg mb-3" />
<ProgressBar  variant='primary' now={100}className="progress progress-xl mb-0" /> // End Prism Code//`,kn=`
{Heightdata.map((idx,index) => (
    <SpkProgress key={index} variant="primary" now={idx.data} mainClass={idx.class} />
))}`,Bn=`<ProgressBar  variant='secondary' now={20} className="progress mb-3" />
<ProgressBar  variant='warning' now={40} className="progress mb-3" />
<ProgressBar  variant='info' now={60} className="progress mb-3" />
<ProgressBar  variant='success' now={80} className="progress mb-3" />
<ProgressBar  variant='danger' now={100} className="progress mb-0" /> // End Prism Code//`,vn=`	{Coloreddata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} now={idx.data} mainClass="progress mb-3" />
))}`,yn=`<div className="progress progress-sm progress-custom mb-5 progress-animate">
<h6 className="progress-bar-title">Mobiles</h6>
<div className='progress-bar bg-primary custom-height1' style={{width: "50%"}}>
    <div className='progress-bar-value bg-primary'>50%</div>
</div>
</div>
<div className="progress progress-sm progress-custom mb-5 progress-animate">
<h6 className="progress-bar-title">Mobiles</h6>
<div className='progress-bar bg-secondary custom-height1' style={{width: "60%"}}>
    <div className='progress-bar-value bg-secondary'>50%</div>
</div>
</div>
<div className="progress progress-sm progress-custom mb-5 progress-animate">
<h6 className="progress-bar-title">Mobiles</h6>
<div className='progress-bar bg-success custom-height1' style={{width: "70%"}}>
    <div className='progress-bar-value bg-success'>50%</div>
</div>
</div> // End Prism Code//`,xn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
interface custom2 {
    now: number
    class: string
    class1: string
    class2: string
    class3:string
}
export const CustomProgress2data: custom2[] = [
    { class: "primary", now: 50, class1: "", class2: "", class3:"mb-4" },
    { class: "secondary", now: 60, class1: "", class2: "secondary", class3:"mb-4" },
    { class: "success", now: 70, class1: "", class2: "success", class3:"mb-4" },
    { class: "info", now: 80, class1: "info", class2: "info", class3:"mb-4" },
    { class: "warning", now: 90, class1: "warning", class2: "warning", class3:"" },
]; // End Prism Code//`,fn=`	
    import { CustomProgress2data } from "@/shared/data/ui-elements/progressdata";
    import { ProgressBar } from "react-bootstrap";

    {CustomProgress2data.map((idx,index) => (
        <div className={'progress progress-bar progress-sm &#{idx.class3}'} key={index} >
            <div className={'progress-item-1 bg-&#{idx.class}'}></div>
            <div className={'progress-item-2 bg-&#{idx.class2}'}></div>
            <div className={'progress-item-3 bg-&#{idx.class1}'}></div>
            <ProgressBar variant={idx.class} now={idx.now} />
        </div>
    ))} // End Prism Code//`,Sn=`<ProgressBar className="progress progress-lg mb-5 custom-progress-3 progress-animate">

<ProgressBar variant="" now={50} />
<div className="progress-bar-value">50%</div>

</ProgressBar>
<ProgressBar className="progress progress-lg mb-5 custom-progress-3 progress-animate">
<ProgressBar variant="secondary" now={60} />
<div className="progress-bar-value secondary">60%</div>
</ProgressBar>
<ProgressBar className="progress progress-lg custom-progress-3 progress-animate">
<ProgressBar variant="success" now={70} />
<div className="progress-bar-value success">70%</div>
</ProgressBar> // End Prism Code//`,Nn=`<ProgressBar className="progress progress-xl mb-3 progress-animate custom-progress-4">
<ProgressBar variant='secondary-gradient' now={20} />
<div className="progress-bar-label">20%</div>
</ProgressBar> // End Prism Code//`,Cn=`<h6 className="fw-semibold mb-2">Project Dependencies</h6>
<ProgressBar className="progress-stacked progress-xl mb-5" >
   <ProgressBar  variant="primary" now={25} label={25%} key={1} />
   <ProgressBar  variant="secondary" now={35} label={35%} key={2} />
   <ProgressBar  variant="danger" now={40} label={40%} key={3} />    
</ProgressBar>
<Row className="justify-content-center">
    <Col xl={5}>
        <div className="border p-3">
            <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%<
            /span></p>
            <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="primary" now={25} />   
            <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%
            </span></p>
            <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="secondary" now={35} />  
            <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%
            </span></p>
            <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="danger" now={40} />  
        </div>
    </Col>
</Row> // End Prism Code//`,Dn=`<ProgressBar  variant='primary-gradient' className="progress mb-3" animated now={10} />
<ProgressBar  variant='secondary-gradient' className="progress mb-3" animated now={20} />
<ProgressBar  variant='success-gradient' className="progress mb-3" animated now={40} />
<ProgressBar  variant='info-gradient' className="progress mb-3" animated now={60} />
<ProgressBar  variant='warning-gradient' className="progress" animated now={80} /> // End Prism Code//`,Pn=`
	{Animatedata.map((idx,index) => (
    <SpkProgress key={index} variant={'&#60{idx.color}-gradient'} mainClass={'progress &#60{idx.class}'} animated={true} now={idx.data} />
))}`,In=`<ProgressBar  variant='primary' className="progress mb-3" animated now={10} />
<ProgressBar  variant='secondary' className="progress mb-3" animated now={20} />
<ProgressBar  variant='success' className="progress mb-3" animated now={40} />
<ProgressBar  variant='info' className="progress mb-3" animated now={60} />
<ProgressBar  variant='warning' className="progress" animated now={80} /> // End Prism Code//`,Tn=`
{Animatedata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} mainClass={'progress &#60{idx.class}'} animated={true} now={idx.data} />
))}`,Ln=`<ProgressBar  variant='primary-gradient' className="progress mb-3 progress-animate" animated now={10} />
<ProgressBar  variant='secondary-gradient' className="progress mb-3 progress-animate" animated now={20} />
<ProgressBar  variant='success-gradient' className="progress mb-3 progress-animate" animated now={40} />
<ProgressBar  variant='info-gradient' className="progress mb-3 progress-animate" animated now={60} />
<ProgressBar  variant='warning-gradient' className="progress  progress-animate" animated now={80} /> // End Prism Code//`,En=`
{Animatedata.map((idx,index) => (
    <SpkProgress key={index} variant={'&#60{idx.color}-gradient'} mainClass={'progress progress-animate &#60{idx.class}'} animated={true} now={idx.data} />
))}`,An=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface colorspinner {
	id: number
	color: string
}

export const Colorspinner: colorspinner[] = [
	{ id: 1, color: "primary" },
	{ id: 2, color: "secondary" },
	{ id: 3, color: "success" },
	{ id: 4, color: "danger" },
	{ id: 5, color: "warning" },
	{ id: 6, color: "info" },
	{ id: 7, color: "light" },
	{ id: 8, color: "dark" }
]; // End Prism Code//`,Gn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Colorspinner } from "@/shared/data/ui-elements/spinnersdata";
    
 {Colorspinner.map((idx,index) => (
    <div className={'spinner-border me-2 text-&#60{idx.color}'} role="status" key={index}>
        <span className="visually-hidden">Loading...</span>
    </div>
))}// End Prism Code//`,Mn=`//<!-- Prism Code: This code is only used for showcode purpose -->//   
 {Colorspinner.map((idx,index) => (
    <div className={'spinner-grow me-1 text-&#60{idx.color}'} role="status" key={index}>
        <span className="visually-hidden">Loading...</span>
    </div>
))} // End Prism Code//`,Hn=`<div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
</div>// End Prism Code//`,zn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="d-flex justify-content-center mb-4">
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>
<div className="d-flex align-items-center">
    <strong>Loading...</strong>
    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div> // End Prism Code//`,Rn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="clearfix mb-4">
<div className="spinner-border text-primary float-end" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
<div className="clearfix">
<div className="spinner-border text-primary float-start" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div> // End Prism Code//`,On=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface btnspinner {
	id: number
	color: string
	class: string
}
export const Buttonspinner: btnspinner[] = [
	{ id: 1, color: "primary-light", class: "" },
	{ id: 2, color: "secondary-light", class: "" },
	{ id: 3, color: "success-light", class: "" },
	{ id: 4, color: "info-light", class: "" },
	{ id: 5, color: "warning-light", class: "" },
	{ id: 6, color: "danger-light", class: "" },
	{ id: 7, color: "light", class: "" },
	{ id: 8, color: "dark", class: "text-dark" }
]; // End Prism Code//`,jn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
<SpkButton variant='primary-light' className="btn" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
</SpkButton>
<SpkButton variant='primary-light' className="btn" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span>
    Loading...
</SpkButton>
<SpkButton variant='primary-light' className="btn" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
</SpkButton>
{Buttonspinner.map((idx,index) => (
<SpkButton variant={idx.color} className="" type="button" disabled key={index}>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span>
    Loading...
</SpkButton>
))}
</div> // End Prism Code//`,Vn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="spinner-border text-dark m-5" role="status">
    <span className="visually-hidden">Loading...</span>
</div> // End Prism Code//`,qn=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="text-center">
    <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div> // End Prism Code//`,Fn=`<div className="spinner-border text-primary spinner-border-sm me-4" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-primary spinner-grow-sm me-4" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-primary me-4" style={{ width: '3rem', height: '3rem' }}
role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
<span className="visually-hidden">Loading...</span>
</div> // End Prism Code//`,Wn=` 
    import { Toast } from "react-bootstrap";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

     //basic example
     const [show, setShow] = useState(true);
     const toggleShow = () => setShow(!show);

     <Toast show={show} onClose={toggleShow} className="toast show"
     role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
     <Toast.Header className="text-default">
         <img src={favicon} alt="" className="me-2" height="18" />
         <strong className="me-auto">Xintra</strong>
         <small>11 mins ago</small>
     </Toast.Header>
     <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
 </Toast> // End Prism Code//`,Kn=`
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

 <SpkToast show={toasts['basic']} onClose={() => handleToasts('basic')} title="Innovative" message="Hello, world! This is a toast message." timestamp="11 mins ago" imgSrc={favicon} ToastHeader={true} toastClass="custom-toast" headerClass="text-default" imgClass="custom-img-class" autohide={false} />`,Yn=`  
    import { Button, Toast, ToastContainer } from "react-bootstrap";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
    //live example
    const [show, setShow] = useState(false);

    <SpkButton type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => setShow(true)}>Show live
    toast</SpkButton>
<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
    <Toast id="liveToast" className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header className="text-default">
            <img className="bd-placeholder-img rounded me-2" src={favicon} alt="..." />
            <strong className="me-auto">Xintra</strong> <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body className=""> Hello, world! This is a toast message. </Toast.Body>
    </Toast>
</ToastContainer> // End Prism Code//`,Un=` 
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

<SpkButton Buttontype="button" Buttonvariant="primary" Id="liveToastBtn" onClickfunc={() => setShow(true)}>Show live
toast</SpkButton>
<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
<SpkToast show={show} onClose={() => setShow(false)} title="Xintra" message="Hello, world! This is a toast message." timestamp="11 min ago" imgSrc={togglelogo} ToastHeader={true} toastClass="custom-toast" headerClass="text-default" imgClass="custom-img-class" autohide={false} />
</ToastContainer>`,Xn=`
    import { Button, Toast, ToastContainer } from "react-bootstrap";
    import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
    //Stacking
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

<ToastContainer className="toast-container position-static">
                            <Toast show={show} onClose={toggleShow} className="toast fade show">
                                <Toast.Header className="toast-header text-default">
                                    <img src={favicon} alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Xintra</strong>
                                    <small>just now</small>
                                </Toast.Header>
                                <Toast.Body> See? Just like this.</Toast.Body>
                            </Toast>
                            <Toast show={show} onClose={toggleShow} className="toast fade show">
                                <Toast.Header className="toast-header text-default">
                                    <img src={favicon} alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Xintra</strong>
                                    <small>2 seconds ago</small>
                                </Toast.Header>
                                <Toast.Body> Heads up, toasts will stack automatically</Toast.Body>
                            </Toast>
                        </ToastContainer> // End Prism Code//`,Jn=` 
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

<ToastContainer className="toast-container position-static">

<SpkToast show={show} onClose={toggleShow} ToastHeader={true} toastClass="fade show" headerClass="text-default" imgSrc={togglelogo} imgClass="me-2" title="Xintra" timestamp="jsut now" message={"See? Just like this."} />
<SpkToast show={show} onClose={toggleShow} ToastHeader={true} toastClass="fade show" headerClass="text-default" imgSrc={togglelogo} imgClass="me-2" title="Xintra" timestamp="2 seconds ago" message={" Heads up, toasts will stack automatically"} />

</ToastContainer>`,$n=`
    import { Button, Toast, ToastContainer } from "react-bootstrap";
    
    //color schemes
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    <Toast className="toast align-items-center text-bg-primary border-0 fade show mb-4" show={show}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is Primary toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow}></CloseButton>
    </div></Toast>

<Toast className="toast align-items-center text-bg-secondary border-0 fade show mb-4" show={show}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is Secondary toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow}></CloseButton>
    </div></Toast>

<Toast className="toast align-items-center text-bg-success border-0 fade show mb-4" show={show}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is Success toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow}></CloseButton>
    </div></Toast>

<Toast className="toast align-items-center text-bg-info border-0 fade show mb-4" show={show}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is info toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow}></CloseButton>
    </div></Toast> // End Prism Code//`,Zn=` 
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

 <SpkToast toastClass="align-items-center text-bg-primary border-0 fade show mb-4" show={show} message="Hello, world! This is Primary toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow} ToastBtn={true} ToastHeader={false} />
<SpkToast toastClass="align-items-center text-bg-secondary border-0 fade show mb-4" show={show} message="Hello, world! This is Secondary toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow} ToastBtn={true} ToastHeader={false} />
<SpkToast toastClass="align-items-center text-bg-warning border-0 fade show mb-4" show={show} message="Hello, world! This is Warning toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow} ToastBtn={true} ToastHeader={false} />
<SpkToast toastClass="align-items-center text-bg-info border-0 fade show mb-4" show={show} message="Hello, world! This is Info toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow} ToastBtn={true} ToastHeader={false} />`,Qn=`<ToastContainer  className="toast-container position-fixed top-0 start-0 p-3">
<Toast id="topleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
 onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
        <SpkButton type="button" className="btn-close" data-bs-dismiss="toast"
            aria-label="Close"></SpkButton>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
<Toast id="topcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-0 end-0 p-3">
<Toast id="topright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
 onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
<Toast id="middleleft-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
   onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-50 start-50 translate-middle">
<Toast id="middlecenter-Toast" className="toast colored-toast bg-primary-transparent text-primary"
  onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
<Toast id="middleright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
  onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed bottom-0 start-0 p-3">
<Toast id="bottomleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
<Toast id="bottomcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
 onClose={() => setShow0(false)} show={show0} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed bottom-0 end-0 p-3">
<Toast id="bottomright-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
 onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer> // End Prism Code//`,_n=`
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

<SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow(true)} Customclass="me-2" Id="topleftToastBtn">Top Left</SpkButton>
<ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow(false)} show={show} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>`,tr=`<Toast id="primaryToast" bg="primary-transparent" className="toast colored-toast" 
onClose={() => setShow(false)} show={show} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="secondaryToast" className="toast colored-toast bg-secondary-transparent" 
role="alert" aria-live="assertive"
    aria-atomic="true"  onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-secondary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="warningToast" className="toast colored-toast bg-warning-transparent" 
role="alert" aria-live="assertive"
onClose={() => setShow(false)} show={show} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-warning text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="infoToast" className="toast colored-toast bg-info-transparent" 
role="alert" aria-live="assertive"
 onClose={() => setShow(false)} show={show} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="bg-info text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="successToast" className="toast colored-toast bg-success-transparent" 
role="alert" aria-live="assertive"
onClose={() => setShow(false)} show={show} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="bg-success text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="dangerToast" className="toast colored-toast bg-danger-transparent" 
role="alert" aria-live="assertive"
 onClose={() => setShow(false)} show={show} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-danger text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast> // End Prism Code//`,er=`
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

 <SpkButton Buttontype="button" Buttonvariant='primary-light' Customclass="btn me-2" Id="primaryToastBtn" onClickfunc={() => setShow(true)}>Primary</SpkButton>
 <SpkToast ToastHeader={true} bg="primary-transparent" toastClass="colored-toast" onClose={() => setShow(false)} show={show} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />`,or=`<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
<Toast id="solid-primaryToast" className="toast colored-toast bg-primary text-fixed-white"
  onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-secondaryToast" className="toast colored-toast bg-secondary text-fixed-white"  
onClose={() => setShow(false)} show={show} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-secondary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-warningToast" className="toast colored-toast bg-warning text-fixed-white"  
onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-warning text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-infoToast" className="toast colored-toast bg-info text-fixed-white" 
onClose={() => setShow0(false)} show={show0} delay={3000} autohide>
    <Toast.Header className="toast-header bg-info text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-successToast" className="toast colored-toast bg-success text-fixed-white" 
onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-success text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-dangerToast" className="toast colored-toast bg-danger text-fixed-white"
 onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="toast-header bg-danger text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" 
    src={toggledark} alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer> // End Prism Code//`,sr=`
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="me-2" Id="solidprimaryToastBtn" onClickfunc={() => setShow(true)}>Primary</SpkButton>
<SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary" bodyClass="text-fixed-white" onClose={() => setShow(false)} show={show} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
`,ar=`<Toast show={showA} onClose={toggleShowA} className="toast show"
role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
 <Toast.Header>
            <img src={fav} alt="" className="me-2" height="18" />
 <strong className="me-auto">Velvet</strong>
 <small>11 mins ago</small>
 </Toast.Header>
 <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
</Toast> // End Prism Code//`,nr=`
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

 <SpkToast ToastHeader={true} show={show} onClose={toggleShow} toastClass="show" headerClass="text-default" imgClass="me-2" imgSrc={togglelogo} title="Xintra" timestamp="11 mins ago" message="Hello, world! This is a toast message." />`,rr=`<Toast role="alert" 
className="toast align-items-center fade show mb-3" show={showI}>
<div className="d-flex">
<Toast.Body className="text-dark">Hello, world! This is a toast message.
</Toast.Body>
   <CloseButton type="button" className="btn-close me-2 m-auto" 
    onClick={toggleShowI}>
   </CloseButton>
</div>
</Toast>
<div>
<span className="my-4 text-muted">
   Alternatively, you can also add additional controls and components to
   toasts.
</span>
</div>
<Toast className="toast fade show mt-2" show={showJ}>
<Toast.Body>
   Hello, world! This is a toast message.
<div className="mt-2 pt-2 border-top">
<SpkButton type="button"  className="btn btn-primary btn-sm btn-wave">Take
 action</SpkButton>
 <SpkButton type="button" className="btn btn-secondary btn-sm btn-wave" 
 onClick={toggleShowJ}>Close</SpkButton>
 </div>
</Toast.Body>
</Toast> // End Prism Code//`,ir=`
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

<SpkToast ToastHeader={false} toastClass="lign-items-center fade show mb-3" show={show0} ToastBtn={true} message="Hello, world! This is Primary toast message. " btnClass="btn-close me-2 m-auto" onclick={toggleShow0} />`,dr=`<div className="bd-example bg-light bd-example-toasts d-flex p-0 px-3">
<div aria-live="polite" aria-atomic="true"
    className="d-flex justify-content-center align-items-center w-100">
    <Toast show={showK} onClose={toggleShowK} className="toast fade show shadow-lg">
        <Toast.Header className="text-default">
            <img src={fav} alt="" className="bd-placeholder-img rounded me-2" />
            <strong className="me-auto">Velvet</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
    </Toast>
</div>
</div> // End Prism Code//`,lr=`
import SpkToast from "@/shared/@spk-reusable-components/reusable-uiElements/spk-toast";

<SpkToast ToastHeader={true} show={show2} onClose={toggleShow2} toastClass="fade show shadow-lg" headerClass="text-default" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglelogo} title="Xintra" timestamp="11 mins ago" message="Hello, world! This is a toast message." />`,pr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
interface direction {
	id: number
	text: string
}
export const Tooltipdirtooltip: direction[] = [
	{ id: 1, text: "top" },
	{ id: 2, text: "right" },
	{ id: 3, text: "bottom" },
	{ id: 4, text: "left" }
]; // End Prism Code//`,mr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
{Tooltipdirtooltip.map((idx) => (
<OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={idx.id}>
    <Button type="button" className="btn btn-primary btn-wave">
        Tooltip on {idx.text}
    </Button>
</OverlayTrigger>
))}
</div>
    ))} // End Prism Code//`,cr=`
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";

<div className="btn-list">
{Tooltipdirtooltip.map((idx, index) => (
    <SpkTooltips placement={idx.text} title={'Tooltip on &#60{idx.text}'} key={index} >
        <SpkButton Buttontype="button" Buttonvariant="primary">
            Tooltip on {idx.text}
        </SpkButton>
    </SpkTooltips>
))}
</div>`,ur=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="text-muted mb-0">
Hover on the link to view the
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
    <Link to="#!" className="text-primary ms-1 d-inline-flex">Tooltip</Link>
</OverlayTrigger>
</p>
// End Prism Code//`,gr=`
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";

 <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Link Tooltip ">
<Link to="#!"  className="text-primary ms-1 d-inline-flex">Tooltip</Link>
</SpkTooltips>`,br=`
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface svg {
	id: number
	class: string
	color: string
	text: string
}
export const SVGtooltip: svg[] = [
	{ id: 1, class: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z", color: "primary", text: "Home" },
	{ id: 2, class: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z", color: "secondary", text: "Message" },
	{ id: 3, class: "M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56  C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37, 0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z", color: "warning", text: "Add User" },
	{ id: 4, class: "M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z", color: "info", text: "Send File" },
	{ id: 5, class: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", color: "success", text: "Action" },
]; // End Prism Code//`,hr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
{SVGtooltip.map((idx) => (
<OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip className={tooltip-{idx.color}}>{idx.text} </Tooltip>}>
  <a to="#!" className={me-3 svg-{idx.color}} >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" /><path
              d={idx.class} /></svg>
  </a>
</OverlayTrigger>
))}
// End Prism Code//`,wr=`
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";

 {SVGtooltip.map((idx,index) => (
    <SpkTooltips key={index} placement="top" tooltipClass={'tooltip-&#60{idx.color}'} title={idx.text}>
        <Link to="#!"  className={'me-3 svg-&#60{idx.color}'}>
            <svg xmlns="http://www.w3.org/2000/svg" className={'svg-&#60{idx.color}'} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none" /><path
                    d={idx.class} /></svg>
        </Link>
    </SpkTooltips>
))}`,kr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
 <Button type="button" variant='primary' className="btn  btn-wave">
     Primary Tooltip
 </Button>
</OverlayTrigger>
<OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
 <Button type="button" variant='secondary' className="btn  btn-wave">
     Secondary Tooltip
 </Button>
</OverlayTrigger>
<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
 <Button type="button" variant='warning' className="btn  btn-wave">
     Warning Tooltip
 </Button>
</OverlayTrigger>

<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
 <Button type="button" variant='info' className="btn  btn-wave">
     Info Tooltip
 </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
 <Button type="button" variant='success' className="btn  btn-wave">
     Success Tooltip
 </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
 <Button type="button" variant='danger' className="btn  btn-wave">
     Danger Tooltip
 </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-light'>Light Tooltip </Tooltip>}>
 <Button type="button" variant='light' className="btn  btn-wave">
     Light Tooltip
 </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
 <Button type="button" variant='dark' className="btn  btn-wave">
     Dark Tooltip
 </Button>
</OverlayTrigger>
</div>
// End Prism Code//`,Br=` 
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";

 <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="primary Tooltip " trigger={['hover', 'focus']} >
<SpkButton Buttontype="button" Buttonvariant='primary'>
    Primary Tooltip
</SpkButton>
</SpkTooltips>`,vr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled tooltip</Tooltip>}>
<span className="d-inline-block">
   <Button disabled style={{ pointerEvents: "none" }}>
       Disabled button
   </Button>
</span>
</OverlayTrigger>
// End Prism Code//`,yr=` 
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";

 <SpkTooltips id="tooltip-disabled" title="Disabled tooltip" trigger={['hover', 'focus']} >
<span className="d-inline-block">
    <SpkButton Disabled={true} Style={{ pointerEvents: "none" }}>
        Disabled button
    </SpkButton>
</span>
</SpkTooltips>`,xr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
<Link to="#!"
    className="avatar avatar-md me-2 online avatar-rounded">
     <img src={faces12} alt="img" />
</Link>
</OverlayTrigger>

<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
<Link to="#!"
    className="avatar avatar-lg me-2 online avatar-rounded">
   <img src={faces3} alt="img" />
</Link>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
<Link to="#!"
    className="avatar avatar-xl me-2 online avatar-rounded">
     <img src={faces15} alt="img" />
</Link>
</OverlayTrigger>
// End Prism Code//`,fr=` 
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";

 <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Alex Carey">
<Link to="#!" 
    className="avatar avatar-md me-2 online avatar-rounded">
    <img src={face12} alt="img" />
</Link>
</SpkTooltips>`,Sr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
    <h1 className="mb-3">h1. Bootstrap heading</h1>
    <h2 className="mb-3">h2. Bootstrap heading</h2>
    <h3 className="mb-3">h3. Bootstrap heading</h3>
    <h4 className="mb-3">h4. Bootstrap heading</h4>
    <h5 className="mb-3">h5. Bootstrap heading</h5>
    <h6 className="mb-0">h6. Bootstrap heading</h6>
// End Prism Code//`,Nr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
    <p className="h1 mb-3">h1. Bootstrap heading</p>
    <p className="h2 mb-3">h2. Bootstrap heading</p>
    <p className="h3 mb-3">h3. Bootstrap heading</p>
    <p className="h4 mb-3">h4. Bootstrap heading</p>
    <p className="h5 mb-3">h5. Bootstrap heading</p>
    <p className="h6 mb-0">h6. Bootstrap heading</p>
// End Prism Code//`,Cr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
    <h1 className="display-1">Display 1</h1>
    <h1 className="display-2">Display 2</h1>
    <h1 className="display-3">Display 3</h1>
    <h1 className="display-4">Display 4</h1>
    <h1 className="display-5">Display 5</h1>
    <h1 className="display-6">Display 6</h1>
// End Prism Code//`,Dr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<h3>
    Fancy display heading
    <small className="text-muted">With faded secondary text</small>
</h3>
// End Prism Code//`,Pr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del>
    </p>
    <p><s>This line of text is meant to be treated as no longer
            accurate.</s>
    </p>
    <p><ins>This line of text is meant to be treated as an addition to the
            document.</ins></p>
    <p><u>This line of text will render as underlined.</u></p>
    <p><small>This line of text is meant to be treated as fine
            print.</small>
    </p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p className="mb-0"><em>This line rendered as italicized text.</em></p>
// End Prism Code//`,Ir=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="fs-1 mb-2">.fs-1 text</p>
<p className="fs-2 mb-2">.fs-2 text</p>
<p className="fs-3 mb-2">.fs-3 text</p>
<p className="fs-4 mb-2">.fs-4 text</p>
<p className="fs-5 mb-2">.fs-5 text</p>
<p className="fs-6 mb-0">.fs-6 text</p>
// End Prism Code//`,Tr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="lead mb-0">
<b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
</p>
// End Prism Code//`,Lr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <figure className="blockquote-container">
<blockquote className="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption>
</figure>
// End Prism Code//`,Er=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <figure className="blockquote-container text-end">
<blockquote className="blockquote mb-2">
<h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption>
</figure>
// End Prism Code//`,Ar=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="blockquote custom-blockquote primary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`,Gr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <blockquote className="blockquote custom-blockquote secondary mb-0 text-center">
    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
    <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
    <span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`,Mr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="blockquote custom-blockquote warning mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`,Hr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="blockquote custom-blockquote success mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`,zr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="blockquote custom-blockquote info mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`,Rr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="blockquote custom-blockquote danger mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`,Or=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <dl className="row mb-0">
<dt className="col-sm-3">Description lists</dt>
<dd className="col-sm-9">A description list is perfect for defining terms.</dd>

<dt className="col-sm-3">Term</dt>
<dd className="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
</dd>

<dt className="col-sm-3">Another term</dt>
<dd className="col-sm-9">This definition is short, so no extra paragraphs or
    anything.</dd>

<dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd className="col-sm-9">This can be useful when space is tight. Adds an
    ellipsis at
    the end.</dd>

<dt className="col-sm-3">Nesting</dt>
<dd className="col-sm-9 mb-0">
    <dl className="row mb-0">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8 mb-0">I heard you like definition lists. Let me put a
            definition list inside your definition list.</dd>
    </dl>
</dd>
</dl>
// End Prism Code//`,jr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ul className="list-unstyled">
<li>This is a list.</li>
<li>It appears completely unstyled.</li>
<li>Structurally, it's still a list.</li>
<li>However, this style only applies to immediate child elements.</li>
<li className="mb-2">Nested lists:
    <ul>
        <li>are unaffected by this style</li>
        <li>will still show a bullet</li>
        <li>and have appropriate left margin</li>
    </ul>
</li>
<li>This may still come in handy in some situations.</li>
</ul>
// End Prism Code//`,Vr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p><abbr title="attribute">attr</abbr></p>
<p className="mb-0"><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
// End Prism Code//`,qr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <ul className="list-inline mb-0">
    <li className="list-inline-item">This is a list item.</li>
    <li className="list-inline-item">And another one.</li>
    <li className="list-inline-item">But they're displayed inline.</li>
</ul>
// End Prism Code//`,Fr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
<div className="text-success">
<hr/>
</div>
<p className=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>

<hr className="text-danger border-2 opacity-50"/>
<p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
<hr className="border-primary border-3 opacity-75"/>
// End Prism Code//`,Wr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="text-lowercase">Lowercased text.</p>
<p className="text-uppercase">Uppercased text.</p>
<p className="text-capitalize mb-0">CapiTaliZed text.</p>
// End Prism Code//`,Kr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="text-decoration-underline">This text has a line underneath it.
</p>
<p className="text-decoration-line-through">This text has a line going
through
it.
</p>
<a to="#!" className="text-decoration-none">This link has its text
decoration
removed
</a>
// End Prism Code//`,Yr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="fw-bold">Bold text.</p>
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-medium">Semibold weight text.</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p className="fst-italic">Italic text.</p>
<p className="fst-normal mb-0">Text with normal font style</p>
// End Prism Code//`,Ur=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="lh-1">This is a long paragraph written to show how the line-height of
    an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
</p>
<p className="lh-sm">This is a long paragraph written to show how the line-height of
    an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
</p>
<p className="lh-base">This is a long paragraph written to show how the line-height
    of
    an element is affected by our utilities. Classes are applied to the element
    itself or sometimes the parent element. These classes can be customized as
    needed with our utility API.
</p>
<p className="lh-lg mb-0">This is a long paragraph written to show how the
    line-height
    of an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
</p>
// End Prism Code//`,Xr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="font-monospace mb-0">This is in monospace</p>
// End Prism Code//`,Jr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="text-muted mb-0">
    Muted text with a <a to="#!" className="text-reset text-decoration-underline text-dark">reset link</a>.
</p>
// End Prism Code//`,$r=`//<!-- Prism Code: This code is only used for showcode purpose -->//
   <p className="visible mb-0">This is visible text</p>
// End Prism Code//`,Zr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="invisible mb-0">This is invisible text</p>
// End Prism Code//`,Qr=`//<!-- Prism Code: This code is only used for showcode purpose -->//
owCode title="Text alignment" customCardClass="custom-card" customCardBodyClass="" code={typography29}>
<p className="text-start">Start aligned text on all viewport sizes.</p>
<p className="text-center">Center aligned text on all viewport sizes.</p>
<p className="text-end">End aligned text on all viewport sizes.</p>

<p className="text-sm-start">Start aligned text on viewports sized SM (small) or
    wider.
</p>
<p className="text-md-start">Start aligned text on viewports sized MD (medium) or
    wider.
</p>
<p className="text-lg-start">Start aligned text on viewports sized LG (large) or
    wider.
</p>
<p className="text-xl-start">Start aligned text on viewports sized XL (extra-large)
    or
    wider.</p>
// End Prism Code//`,_r=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="badge bg-primary text-wrap mb-3" style={{width: "6rem"}}>
    This text should wrap.
</div>
<p className="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
<div className="text-nowrap bg-light border" style={{width: "8rem"}}>
    This text should overflow the parent.
</div>
// End Prism Code//`,ti=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="text-break mb-0">
    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
</p>
// End Prism Code//`,ei=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p><Link className="link-opacity-10-hover" to="#!" >Link opacity 10</Link></p>
<p><Link className="link-opacity-25-hover" to="#!" >Link opacity 25</Link></p>
<p><Link className="link-opacity-50-hover" to="#!" >Link opacity 50</Link></p>
<p><Link className="link-opacity-75-hover" to="#!" >Link opacity 75</Link></p>
<p className="mb-0"><Link className="link-opacity-100" to="#!" >Link opacity 100</Link></p>
</div> // End Prism Code//`,oi=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body">
<p><Link to="#!"  className="text-decoration-underline">Default link</Link></p>
<p><Link className="link-offset-1 text-decoration-underline" to="#!" >Offset 1 link</Link></p>
<p><Link className="link-offset-2 text-decoration-underline" to="#!" >Offset 2 link</Link></p>
<p className="mb-0"><Link className="link-offset-3 text-decoration-underline" to="#!" >Offset 3 link</Link></p>
</div> // End Prism Code//`,si=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body">
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" to="#!" >Underline opacity 0</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" to="#!" >Underline opacity 10</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" to="#!" >Underline opacity 25</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" to="#!" >Underline opacity 50</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" to="#!" >Underline opacity 75</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" to="#!" >Underline opacity 100</Link></p>
</div> // End Prism Code//`,ai=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p><Link to="#!"  className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary link</Link></p>
<p><Link to="#!"  className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Secondary link</Link></p>
<p><Link to="#!"  className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Success link</Link></p>
<p><Link to="#!"  className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Danger link</Link></p>
<p><Link to="#!"  className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Warning link</Link></p>
<p><Link to="#!"  className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Info link</Link></p>
<p><Link to="#!"  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Light link</Link></p>
<p><Link to="#!"  className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Dark link</Link></p>
<p className="mb-0"><Link to="#!"  className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline ">Emphasis link</Link></p>
</div> // End Prism Code//`,ni=`
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body">
<p><Link className="pe-none text-primary fw-medium text-decoration-underline" tabIndex={-1} aria-disabled="true" href={""}>This link</Link> can not be clicked.</p>
<p><Link to="#!"  className="pe-auto text-primary fw-medium text-decoration-underline">This link</Link> can be clicked (this is default behavior).</p>
<p className="pe-none mb-0"><Link tabIndex={-1} className="text-primary fw-medium text-decoration-underline" aria-disabled="true" href={""}>This link</Link> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <Link to="#!"  className="pe-auto">this link</Link> has a <code>pe-auto</code> class and can be clicked.</p>
</div> // End Prism Code//`,ri=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p className="user-select-auto">This paragraph has default select behavior.</p>
<p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
</div> // End Prism Code//`,ii=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline" to="#!" >
    Underline opacity 0
</Link>
</div> // End Prism Code//`,di=`
//<!-- Prism Code: This code is only used for showcode purpose -->//  <p><Link className="link-opacity-10" to="#!" >Link opacity 10</Link></p>
<p><Link className="link-opacity-25" to="#!" >Link opacity 25</Link></p>
<p><Link className="link-opacity-50" to="#!" >Link opacity 50</Link></p>
<p><Link className="link-opacity-75" to="#!" >Link opacity 75</Link></p>
<p className="mb-0"><Link className="link-opacity-100" to="#!" >Link opacity 100</Link></p> // End Prism Code//`,li=`
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p><Link to="#!"  className="link-underline-primary text-decoration-underline">Primary underline</Link></p>
<p><Link to="#!"  className="link-underline-secondary text-decoration-underline">Secondary underline</Link></p>
<p><Link to="#!"  className="link-underline-success text-decoration-underline">Success underline</Link></p>
<p><Link to="#!"  className="link-underline-danger text-decoration-underline">Danger underline</Link></p>
<p><Link to="#!"  className="link-underline-warning text-decoration-underline">Warning underline</Link></p>
<p><Link to="#!"  className="link-underline-info text-decoration-underline">Info underline</Link></p>
<p><Link to="#!"  className="link-underline-light text-decoration-underline">Light underline</Link></p>
<p className="mb-0"><Link to="#!"  className="link-underline-dark text-decoration-underline">Dark underline</Link></p>
</div> // End Prism Code//`;export{K as $,u as A,k as B,v as C,B as D,y as E,f as F,x as G,S as H,C as I,N as J,D as K,I as L,P as M,T as N,L as O,E as P,G as Q,A as R,H as S,M as T,z as U,O as V,R as W,j as X,q as Y,V as Z,F as _,ni as a,Ne as a$,W as a0,Y as a1,X as a2,U as a3,Z as a4,J as a5,$ as a6,tt as a7,Q as a8,_ as a9,Dt as aA,At as aB,Et as aC,Mt as aD,Gt as aE,It as aF,Pt as aG,Lt as aH,Tt as aI,ie as aJ,re as aK,ne as aL,le as aM,de as aN,me as aO,pe as aP,ge as aQ,ue as aR,ce as aS,we as aT,he as aU,be as aV,Be as aW,ke as aX,xe as aY,ye as aZ,ve as a_,st as aa,et as ab,ot as ac,nt as ad,rt as ae,at as af,dt as ag,it as ah,mt as ai,lt as aj,pt as ak,ut as al,ct as am,bt as an,gt as ao,wt as ap,ht as aq,Bt as ar,kt as as,yt as at,vt as au,ft as av,xt as aw,Nt as ax,St as ay,Ct as az,di as b,co as b$,Se as b0,fe as b1,Pe as b2,De as b3,Ce as b4,Te as b5,Ie as b6,Ee as b7,Le as b8,Ge as b9,io as bA,ro as bB,po as bC,lo as bD,zt as bE,Ht as bF,Vt as bG,jt as bH,Ut as bI,Yt as bJ,Ft as bK,qt as bL,Ot as bM,Rt as bN,Kt as bO,Wt as bP,ae as bQ,se as bR,Zt as bS,$t as bT,_t as bU,Qt as bV,oe as bW,te as bX,ee as bY,Jt as bZ,Xt as b_,Ae as ba,He as bb,Me as bc,Re as bd,ze as be,je as bf,Oe as bg,qe as bh,Ve as bi,Ke as bj,We as bk,Fe as bl,Ue as bm,Ye as bn,Je as bo,Xe as bp,Ze as bq,$e as br,to as bs,Qe as bt,_e as bu,oo as bv,eo as bw,so as bx,no as by,ao as bz,ii as c,ps as c$,mo as c0,ko as c1,ho as c2,wo as c3,fo as c4,xo as c5,yo as c6,bo as c7,go as c8,uo as c9,Vo as cA,jo as cB,Fo as cC,qo as cD,ts as cE,Qo as cF,_o as cG,os as cH,es as cI,cs as cJ,ms as cK,gs as cL,us as cM,hs as cN,bs as cO,Bs as cP,ks as cQ,ws as cR,xs as cS,ys as cT,vs as cU,as as cV,ss as cW,rs as cX,ns as cY,ds as cZ,is as c_,vo as ca,Bo as cb,Co as cc,So as cd,No as ce,Po as cf,Do as cg,Ko as ch,Wo as ci,Uo as cj,Yo as ck,Jo as cl,Xo as cm,Zo as cn,$o as co,To as cp,Io as cq,Ao as cr,Lo as cs,Eo as ct,Mo as cu,Go as cv,zo as cw,Ho as cx,Oo as cy,Ro as cz,li as d,Ta as d$,ls as d0,Ds as d1,Cs as d2,Ps as d3,Ns as d4,fs as d5,Ss as d6,Ls as d7,Is as d8,Ts as d9,da as dA,la as dB,Js as dC,Us as dD,Xs as dE,Zs as dF,$s as dG,_s as dH,Qs as dI,ea as dJ,ta as dK,aa as dL,sa as dM,oa as dN,ia as dO,ra as dP,na as dQ,va as dR,ya as dS,xa as dT,fa as dU,Sa as dV,Na as dW,Ca as dX,Da as dY,Pa as dZ,Ia as d_,Gs as da,As as db,Es as dc,Vs as dd,Os as de,js as df,Hs as dg,Ms as dh,Rs as di,zs as dj,Ys as dk,Ws as dl,Ks as dm,Fs as dn,qs as dp,ka as dq,Ba as dr,wa as ds,ha as dt,ga as du,ba as dv,ua as dw,ca as dx,ma as dy,pa as dz,oi as e,Vn as e$,La as e0,Ea as e1,Aa as e2,Ga as e3,Ma as e4,Ha as e5,za as e6,ja as e7,Va as e8,qa as e9,kn as eA,wn as eB,un as eC,cn as eD,bn as eE,hn as eF,gn as eG,Tn as eH,In as eI,Pn as eJ,Dn as eK,En as eL,Ln as eM,yn as eN,xn as eO,fn as eP,Sn as eQ,Nn as eR,Cn as eS,Hn as eT,Mn as eU,Gn as eV,An as eW,zn as eX,Rn as eY,qn as eZ,Fn as e_,Fa as ea,Oa as eb,Ra as ec,Ya as ed,Ka as ee,Wa as ef,Ja as eg,Xa as eh,Ua as ei,Qa as ej,Za as ek,$a as el,tn as em,_a as en,rn as eo,nn as ep,on as eq,en as er,an as es,sn as et,ln as eu,dn as ev,vn as ew,Bn as ex,mn as ey,pn as ez,si as f,Zr as f$,jn as f0,On as f1,Un as f2,Yn as f3,Kn as f4,Wn as f5,nr as f6,ar as f7,Zn as f8,$n as f9,Sr as fA,Nr as fB,Cr as fC,Dr as fD,Pr as fE,Ir as fF,Tr as fG,Lr as fH,Er as fI,Ar as fJ,Gr as fK,Mr as fL,Hr as fM,zr as fN,Rr as fO,Or as fP,jr as fQ,Vr as fR,qr as fS,Fr as fT,Wr as fU,Kr as fV,Yr as fW,Ur as fX,Xr as fY,Jr as fZ,$r as f_,ir as fa,rr as fb,Jn as fc,Xn as fd,lr as fe,dr as ff,er as fg,tr as fh,sr as fi,or as fj,_n as fk,Qn as fl,cr as fm,mr as fn,pr as fo,Br as fp,kr as fq,gr as fr,ur as fs,wr as ft,hr as fu,br as fv,yr as fw,vr as fx,fr as fy,xr as fz,ei as g,Qr as g0,_r as g1,ti as g2,ai as h,t as i,s as j,o as k,ri as l,r as m,n,a as o,b as p,w as q,e as r,h as s,d as t,l as u,i as v,c as w,m as x,p as y,g as z};
