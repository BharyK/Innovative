import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import SpkButton from "../../@spk-reusable-components/reusable-uielements/spk-button"
import type { FC } from "react"

interface PageheaderProps {
    activepage?: string
    title?: string
    subtitle?: string | boolean
    currentpage?: string
}

const Pageheader: FC<PageheaderProps> = (props) => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div>
                    <h1 className="page-title fw-medium fs-18 mb-2">{props.activepage}</h1>
                    <div className="">
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="#!">{props.title}</a></li>
                                {props.subtitle && (
                                    <li className="breadcrumb-item">
                                        <Link to="#!">{props.subtitle}</Link>
                                    </li>
                                )}
                                <li className="breadcrumb-item active" aria-current="page">{props.currentpage}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="btn-list">
                   
                    <SpkButton Buttonvariant='secondary-light' Customclass="btn  btn-wave me-0">
                        <i className="ri-upload-cloud-line align-middle"></i> Export Report
                    </SpkButton>
                </div>
            </div>
            {/* <!-- Page Header Close --> */}
        </Fragment>
    )
}

export default Pageheader