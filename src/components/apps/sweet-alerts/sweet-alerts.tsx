import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import media59 from '../../../assets/images/media/media-59.jpg'
import media19 from '../../../assets/images/media/media-19.jpg'

const SweetAlerts = () => {
    // BasicAlert
    function Basicsweetalert() {
        Swal.fire({
            title: "Hello this is Basic alert message",
            allowOutsideClick: true,
            confirmButtonColor: "#3085d6"
        });
    }
    // Titlealert
    function Titlealert() {
        Swal.fire(
            "The Internet ?",
            "That thing is still around ?",
            "question"
        );
    }
    //Footer
    function Footeralert() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href=\"\">Why do I have this issue?</a>"
        });
    }
    //Long window
    function Longwindow() {
        Swal.fire({
            imageUrl: "https://placeholder.pics/svg/300x1500",
            imageHeight: 1500,
            imageAlt: "A tall image"
        });
    }
    function Htmlexample() {
        Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html:
                "You can use <b>bold text</b>, " +
                "<a href=\"//sweetalert2.github.io\" target=\"_blank\">links</a> " +
                "and other HTML tags",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                "<i class=\"fe fe-thumbs-up\"></i> Great!",
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText:
                "<i class=\"fe fe-thumbs-down\"></i>",
            cancelButtonAriaLabel: "Thumbs down",
        });
    }

    function Multiplebuttons() {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: "Don't save",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    //position 

    function Positiondialog() {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    //confirmalert

    function Confirmalert() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                );
            }
        });
    }
    //parameter
    function Parameteralert() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                );
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                );
            }
        });
    }
    //image alert
    function Imagealert() {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: media59,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
        });
    }
    //Backgroundimage
    function Backgroundimage() {
        Swal.fire({
            title: "Custom width, padding, color, background",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: `#fff url(${media19})`,
        });
    }
    function Autoclose() {
        let timerInterval: number | undefined;

        Swal.fire({
            title: "Auto close alert!",
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer()?.querySelector("b"); // Use optional chaining here
                if (b) {
                    timerInterval = setInterval(() => {
                        const timerLeft = Swal.getTimerLeft()?.toString() || "0"; // Use optional chaining and provide a default value
                        b.textContent = timerLeft;
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
            }
        });
    }

    //Ajax
    function Ajaxalert() {
        Swal.fire({
            title: "Submit your Github username",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Look up",
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                });
            }
        });
    }
    // Custom sweetalerts
    function Customsuccess() {
        Swal.fire({
            html:
                '<div class="mt-3"><span class="svg-primary"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="60px" viewBox="0 0 24 24" width="60px" fill="#1f1f1f"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M18.49,9.88l0.08-0.85l0.18-1.95l-1.9-0.43l-0.84-0.19l-0.44-0.74l-0.99-1.68L12.79,4.8L12,5.14L11.21,4.8 L9.42,4.03L8.43,5.71L7.99,6.45L7.15,6.64l-1.9,0.43l0.18,1.94l0.08,0.85l-0.56,0.65l-1.29,1.48l1.29,1.47l0.56,0.65l-0.08,0.85 l-0.18,1.96l1.9,0.43l0.84,0.19l0.44,0.74l0.99,1.67l1.78-0.77L12,18.85l0.79,0.34l1.78,0.77l0.99-1.68l0.44-0.74l0.84-0.19 l1.9-0.43l-0.18-1.95l-0.08-0.85l0.56-0.65l1.29-1.47l-1.29-1.47L18.49,9.88z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" opacity=".3"/><path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/><polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/></g></g></svg></span><div class="mt-2 pt-2 fs-15"><h5 class="fw-semibold">Successful !</h5><p class="text-muted fs-14 mx-4 mb-0">You Have Approved Claim.</p></div></div>',
            showCancelButton: true,
            showConfirmButton: false,
            customClass: { cancelButton: "btn btn-primary btn-sm mb-1" },
            cancelButtonText: "Got To Back",
            buttonsStyling: false,
            showCloseButton: true
        });
    }
    function Customerror() {
        Swal.fire({
            html:
                '<div class="mt-3"><span class="svg-danger"><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.17L5.17 16H20V4H4v13.17zM11 6h2v4h-2V6zm0 6h2v2h-2v-2z" opacity=".3"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"/></svg><h5 class="mt-3 fw-semibold">Something went Wrong !</h5><p class="text-muted fs-14 mx-4 mb-0">Your email Address is invalid.</p></div></div>',
            showCancelButton: true,
            showConfirmButton: false,
            customClass: { cancelButton: "btn btn-danger btn-sm mb-1" },
            cancelButtonText: "Try Again",
            buttonsStyling: false,
            showCloseButton: true
        });
    }
    function Customwarning() {
        Swal.fire({
            html:
                '<div class="mt-3"><span class="svg-warning"><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z" opacity=".3"/><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg><h5 class="mt-3 fw-semibold">Delete Media !</h5><p class="text-muted fs-14 mx-4 mb-0">Are you sure you want delete media?</p></div></div>',
            showCancelButton: true,
            showConfirmButton: false,
            customClass: { cancelButton: "btn btn-warning btn-sm mb-1" },
            cancelButtonText: "Delete",
            buttonsStyling: false,
            showCloseButton: true
        });
    }
    function Customemail() {
        Swal.fire({
            html:
                '<div class="mt-3"><span><span  class="avatar avatar-xl avatar-rounded bg-light svg-secondary"><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 15.36l-8-5.02V18h16l-.01-7.63z" opacity=".3"/><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"/></svg></span><h5 class="mt-3 fw-semibold">Verify Your Email</h5><p class="text-muted fs-14 mx-4 mb-0">We have sent you a verification email <a href="javascript:void(0);" class="text-default text-decoration-underline">nehav123@gmail.com</a> please check it.</p></div></div>',
            showCancelButton: true,
            showConfirmButton: false,
            customClass: { cancelButton: "btn btn-secondary btn-sm mb-1" },
            cancelButtonText: "Verify Email",
            buttonsStyling: false,
            showCloseButton: true,
            footer: '<p class="fs-14 text-muted mb-0">Didn\'t receive an email? <a href="javascript:void(0);" class="fw-semibold  text-danger text-decoration-underline">Resend</a></p>',
        });
    }
    function Customnotification() {
        Swal.fire({
            html:
                '<div class="mt-3"><span class="svg-warning"><span  class="avatar avatar-xl avatar-rounded bg-light svg-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z" opacity=".3"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"/></svg></span><h5 class="mt-3 fw-semibold">Welcome Jock mellar !</h5><p class="text-muted fs-14 mx-4 mb-0">You Have <span class="text-primary fw-medium">32</span> Notificarions</p></div></div>',
            showCancelButton: true,
            showConfirmButton: false,
            customClass: { cancelButton: "btn btn-info btn-sm mb-1" },
            cancelButtonText: "View All",
            buttonsStyling: false,
            showCloseButton: true
        });
    }
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Sweet Alerts"} />
            <Pageheader title="Apps" currentpage="Sweet Alerts" activepage="Sweet Alerts" />
            {/* <!-- Page Header Close --> */}
            <div className="d-md-flex d-block align-items-center justify-content-between my-3">
                <div>
                    <p className="fw-semibold fs-18 mb-0">Basic Exmaple Alerts</p>
                </div>
            </div>
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 primary-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">Basic Alert</h6>
                            <SpkButton Buttonvariant="primary" Size="sm" Customclass="btn" Id="basic-alert" onClickfunc={Basicsweetalert}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 secondary-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold"> Title With Text Under</h6>
                            <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn " Id="alert-text" onClickfunc={Titlealert}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 danger-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">With Text,Error Icon & Footer</h6>
                            <SpkButton Buttonvariant="danger" Size="sm" Customclass="btn" Id="alert-footer" onClickfunc={Footeralert}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 warning-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">Alert With Long Window</h6>
                            <SpkButton Buttonvariant="warning" Size="sm" Customclass="btn" Id="long-window" onClickfunc={Longwindow}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 info-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">Custom HTML Description</h6>
                            <SpkButton Buttonvariant="info" Size="sm" Customclass="btn" Id="alert-description" onClickfunc={Htmlexample}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 orange-dash-border d-flex align-items-center custom-Multiplebuttons justify-content-between">
                            <h6 className="mb-0 fw-semibold">Alert With Multiple Buttons</h6>
                            <SpkButton Buttonvariant="orange" Size="sm" Customclass="btn" Id="three-buttons" onClickfunc={Multiplebuttons}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 pink-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">Custom Positioned Dialog Alert</h6>
                            <SpkButton Buttonvariant="pink" Size="sm" Customclass="btn" Id="alert-dialog" onClickfunc={Positiondialog}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 primary-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">  Confirm Alert</h6>
                            <SpkButton Buttonvariant="primary" Size="sm" Customclass="btn" Id="alert-confirm" onClickfunc={Confirmalert}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 secondary-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold"> Alert With Parameters</h6>
                            <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn" Id="alert-parameter" onClickfunc={Parameteralert}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 danger-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">Alert With Image</h6>
                            <SpkButton Buttonvariant="danger" Size="sm" Customclass="btn" Id="alert-image" onClickfunc={Imagealert}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 danger-dash-border d-flex align-items-center justify-content-between flex-wrap gap-1">
                            <h6 className="mb-0 fw-semibold">Alert With Background Image</h6>
                            <SpkButton Buttonvariant="danger" Size="sm" Customclass="btn" Id="alert-custom-bg" onClickfunc={Backgroundimage}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 warning-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">  Auto Close Alert</h6>
                            <SpkButton Buttonvariant="warning" Size="sm" Customclass="btn" Id="alert-auto-close" onClickfunc={Autoclose}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={4} sm={6}>
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 info-dash-border d-flex align-items-center justify-content-between">
                            <h6 className="mb-0 fw-semibold">  Ajax Request Alert</h6>
                            <SpkButton Buttonvariant="info" Size="sm" Customclass="btn" Id="alert-ajax" onClickfunc={Ajaxalert}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                <div>
                    <p className="fw-semibold fs-18 mb-0">Custom Sweetalert Example</p>
                </div>
            </div>
            <Row className="row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                <div className="col">
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 primary-dash-border text-center">
                            <div className="mb-3">
                                <h6 className="mb-1 fw-semibold">Success Message</h6>
                                <span className="fs-13 text-muted">Here is an example of a sweet alert with a success message.</span>
                            </div>
                            <SpkButton Buttonvariant="primary" Size="sm" Customclass="btn" Id="success-message" onClickfunc={Customsuccess}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 danger-dash-border text-center">
                            <div className="mb-3">
                                <h6 className="mb-1 fw-semibold">Error Message</h6>
                                <span className="fs-13 text-muted">Here is an example of a sweet alert with a error message.</span>
                            </div>
                            <SpkButton Buttonvariant="danger" Size="sm" Customclass="btn" Id="error-message" onClickfunc={Customerror}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 warning-dash-border text-center">
                            <div className="mb-3">
                                <h6 className="mb-1 fw-semibold">Warning Message</h6>
                                <span className="fs-13 text-muted">Here is an example of a sweet alert with a error message.</span>
                            </div>
                            <SpkButton Buttonvariant="warning" Size="sm" Customclass="btn" Id="warning-message" onClickfunc={Customwarning}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 secondary-dash-border text-center">
                            <div className="mb-3">
                                <h6 className="mb-1 fw-semibold">Email Verification</h6>
                                <span className="fs-13 text-muted">Here is an example of a sweet alert with a email verification field.</span>
                            </div>
                            <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn" Id="email-message" onClickfunc={Customemail}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="custom-card p-2">
                        <Card.Body className="p-3 info-dash-border text-center">
                            <div className="mb-3">
                                <h6 className="mb-1 fw-semibold">Notification Message</h6>
                                <span className="fs-13 text-muted">Here is an example of a sweet alert with a custom notification message.</span>
                            </div>
                            <SpkButton Buttonvariant="info" Size="sm" Customclass="btn" Id="notification-message" onClickfunc={Customnotification}>Click Me</SpkButton>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Fragment>
    );
};

export default SweetAlerts;