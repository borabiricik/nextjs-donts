import faker from "@fakerjs/faker"
import React from "react"

const ProductDetailsPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl">
          Product Name: {faker().string({ length: 2 })}
        </h2>
        <p>Description: {faker().sentence({ words: 10 })}</p>
        <p>₺{faker().float({ min: 0.0, max: 99.99 }).toFixed(2)}</p>
        <button type="button" className="text-white">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetailsPage
