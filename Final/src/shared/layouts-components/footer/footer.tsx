
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {

  let currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted"> Copyright © <span id="year">{currentYear} </span> <Link
            to="#!" className="text-dark fw-medium">Innovative</Link>.
             All
            rights
            reserved
          </span>
        </div>
      </footer>

    </Fragment>
  )
}

export default Footer;