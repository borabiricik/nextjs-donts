import React, { type ReactNode, type PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
  details: ReactNode
  comments: ReactNode
}

const ProductsLayout = ({ details, comments }: Props) => {
  return (
    <>
      {details}
      {comments}
    </>
  )
}

export default ProductsLayout
