import { useState } from 'react'
import { Product } from '../types/Promofarma'
import OverlayProduct from './OverlayProduct'

interface MainProps {
  products: Product[]
  loading: boolean
}

const Main = ({ products, loading }: MainProps) => {
  const [overlayName, setOverlayName] = useState('')
  const [overlayManufacturer, setOverlayManufacturer] = useState('')
  const [overlayCategory, setOverlayCategory] = useState('')
  const [overlayStock, setOverlayStock] = useState('false')
  const [overlayPrice, setOverlayPrice] = useState('')

  const showProductOverlay = (e: React.MouseEvent<HTMLElement>) => {
    document.querySelector('section.overlay')?.classList.add('show')

    const _target = e.target as Element

    setOverlayName(
      _target.parentNode?.parentNode?.parentNode?.querySelector('.product-name')
        ?.textContent!
    )
    setOverlayManufacturer(_target.getAttribute('data-manufacturer')!)
    setOverlayCategory(_target.getAttribute('data-category')!)
    setOverlayStock(_target.getAttribute('data-stock')!)
    setOverlayPrice(
      _target.parentNode?.parentNode?.parentNode?.querySelector(
        '.product-price'
      )?.textContent!
    )
  }

  return (
    <>
      <section className="main container max-w-[110.750rem] w-full flex flex-row flex-wrap items-center justify-center gap-[1.250rem] mt-[8.250rem] mx-auto">
        {products.length ? (
          products.map((product: Product) =>
            product.recommended_prices.length ? (
              <div
                key={product.product_id}
                className="product-thumb w-[26.75rem] h-[21.75rem] mb-[3.750rem]"
              >
                <div className="product-thumb-img-container w-full h-[18.75rem] rounded-[0.500rem] bg-[#F3F3F4] relative z-0">
                  <div className="product-thumb-img w-full h-full cursor-pointer"></div>
                  <ul className="product-thumb-actions absolute z-0 right-[1.31rem] bottom-[1.5rem] flex items-center gap-2">
                    <li
                      className="product-thumb-action open-card w-[2.250rem] h-[2.250rem] bg-[#D9D9D9] rounded-[0.500rem] flex items-center cursor-pointer"
                      onClick={showProductOverlay}
                      data-manufacturer={product.manufacturer.manufacturer_name}
                      data-category={product.main_category.category_name}
                      data-stock={product.has_stock}
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto pointer-events-none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 1.06128C9 0.508995 8.55229 0.0612793 8 0.0612793C7.44772 0.0612793 7 0.508995 7 1.06128V7.06128H1C0.447715 7.06128 0 7.50899 0 8.06128C0 8.61356 0.447715 9.06128 1 9.06128H7V15.0613C7 15.6136 7.44772 16.0613 8 16.0613C8.55229 16.0613 9 15.6136 9 15.0613V9.06128H15C15.5523 9.06128 16 8.61356 16 8.06128C16 7.50899 15.5523 7.06128 15 7.06128H9V1.06128Z"
                          fill="black"
                        />
                      </svg>
                    </li>
                    <li className="product-thumb-action add-fav w-[2.250rem] h-[2.250rem] bg-[#D9D9D9] rounded-[0.500rem] flex items-center cursor-pointer">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto pointer-events-none"
                      >
                        <path
                          d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z"
                          stroke="#13201E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className="product-info text-[1rem] mt-[1.5rem] font-[700] w-[90%] leading-[1.5rem]">
                  <p className="product-name text-[#00463D] w-full truncate">
                    {product.name}
                  </p>
                  <span className="product-price inline-block text-[#E6007E]">
                    {product.recommended_prices[0].amount} &euro;
                  </span>
                </div>
              </div>
            ) : null
          )
        ) : (
          <>{!loading && <div> No results found</div>}</>
        )}
      </section>
      <OverlayProduct
        name={overlayName}
        manufacturer={overlayManufacturer}
        category={overlayCategory}
        stock={overlayStock}
        price={overlayPrice}
      />
    </>
  )
}

export default Main
