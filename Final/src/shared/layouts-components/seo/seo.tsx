import type { FC } from "react"
import { Fragment } from "react/jsx-runtime"

interface SeoProps {
  title: string
}

const Seo: FC<SeoProps> = ({ title }) => {
  return (
    <Fragment>
      <title>{`Innovative - ${title}`}</title>
    </Fragment>
  )
}

export default Seo
