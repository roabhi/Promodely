import { useQuery, gql } from '@apollo/client'
import { SearchData, Product } from '../types/Promofarma'

const SEARCH_PRODUCTS = gql`
  query SearchProducts {
    response: searchProducts(
      productName: "crema"
      productHasStock: null
      productState: null
      size: 100
    ) {
      products {
        product_id
        updated_at
        name
        product_state
        has_stock
        recommended_prices {
          amount
          currency
        }
        manufacturer {
          manufacturer_name
        }

        brand {
          brand_id
          name
        }
        main_category {
          category_id
          category_name
        }
      }
      metadata {
        totalProducts
      }
    }
  }
`

const TestComponent = () => {
  const { loading, error, data } = useQuery(SEARCH_PRODUCTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  //console.log(data)

  const res: SearchData = data

  return (
    <>
      <h1 className="text-2xl text-blue-800">
        Total matches {res.response.metadata.totalProducts}
      </h1>
      {res.response.products.map((product: Product) => (
        <div key={product.product_id}>
          <h4 className="font-semibold text-neutral-500 py-5">
            {product.name}
          </h4>
        </div>
      ))}
    </>
  )

  // return data.response.products.map((product: Product) => (
  //   <div key={product.product_id}>
  //     <h3>{product.name}</h3>
  //   </div>
  // ))
}

export default TestComponent
