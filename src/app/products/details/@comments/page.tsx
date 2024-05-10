import React from "react"

const ProductComments = () => {
  return (
    <div>
      <h1 className="text-4xl">Product Comments</h1>
      <div className="flex flex-col gap-4 w-2/3 mx-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i.toString()}
            className="col-span-1 bg-gray-400 min-h-10 flex items-center justify-center"
          >
            Comment #{i}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductComments
