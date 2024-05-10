import React from "react"

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-4xl">Products Page</h1>
      <div className="grid grid-cols-4 gap-4 w-2/3 mx-auto">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i.toString()}
            className="col-span-1 bg-gray-400 min-h-52 flex items-center justify-center"
          >
            Product #{i}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
