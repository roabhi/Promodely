// import useLocalStorage from '../hooks/useLocalStorage'
import { Favorite } from '../types/Globals'

interface OverlayProps {
  name: string
  manufacturer: string
  category: string
  stock: string
  price: string
  id: string
  faved: string | boolean
}

const OverlayProduct = ({
  name,
  manufacturer,
  category,
  stock,
  price,
  id,
  faved,
}: OverlayProps) => {
  let storage: Favorite[]

  if (localStorage.getItem('promofarma-favorites')) {
    storage = JSON.parse(localStorage.getItem('promofarma-favorites')!)
  } else {
    localStorage.setItem('promofarma-favorites', JSON.stringify([]))
  }

  // const [favorites, setFavorites] = useLocalStorage(
  //   'promofarma-favorites',
  //   currentFavs
  // )

  const alreadyFaved = (_id: string | null): boolean => {
    let alreadyFaved = false

    if (storage[0]) {
      storage.forEach((_obj: Favorite, i: number) => {
        if (_obj.id === _id) {
          alreadyFaved = true
        }
      })
    }

    return alreadyFaved
  }

  const removeFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    let index = 0

    storage.forEach((_obj: Favorite, i: number) => {
      if (_obj.id === id) index = i
    })

    storage.splice(index, 1)

    setTimeout(() => {
      localStorage.setItem('promofarma-favorites', JSON.stringify(storage))

      Array.from(document.querySelectorAll('div.product-thumb')).forEach(
        (_obj: Element) => {
          if (
            _obj.querySelector('li.open-card')?.getAttribute('data-id') === id
          ) {
            _obj.setAttribute('data-faved', 'false')
          }
        }
      )

      document.querySelector('section.overlay')?.classList.remove('show')
    }, 250)
  }

  const addFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`storage is ${storage.length} items long`)

    let isFaved = alreadyFaved(id)

    if (!isFaved) {
      const favoriteObject = {
        id: id as string,
        manufacturer: manufacturer as string,
        category: category as string,
        stock: stock as string,
      }
      // setFavorites([...favorites, favoriteObject])

      storage = [...storage, favoriteObject]

      setTimeout(() => {
        localStorage.setItem('promofarma-favorites', JSON.stringify(storage))

        const favIndicator = document.querySelector(
          'div.nav-faved-icon span'
        ) as Element

        if (favIndicator) {
          if (favIndicator.classList.contains('hidden')) {
            favIndicator.classList.remove('hidden')
          }

          favIndicator.textContent = storage.length.toString()
        }

        Array.from(document.querySelectorAll('div.product-thumb')).forEach(
          (_obj: Element) => {
            if (
              _obj.querySelector('li.open-card')?.getAttribute('data-id') === id
            ) {
              _obj.setAttribute('data-faved', 'true')
            }
          }
        )

        document.querySelector('section.overlay')?.classList.remove('show')
      }, 250)
    }
  }

  const hideOverlay = (e: React.MouseEvent<HTMLElement>) => {
    document.querySelector('section.overlay')?.classList.remove('show')
  }

  return (
    <section
      className="overlay fixed z-10 top-0 left-0 w-full h-full flex items-center"
      data-id={id}
    >
      <div className="overlay-bg absolute top-0 left-0 w-full h-full bg-black opacity-[0.65]"></div>
      <div className="overlay-content with-shadow w-[54.75rem] h-[39.75rem] bg-white mx-auto">
        <div className="overlay-content-container flex items-center w-full h-full relative">
          <div className="overlay-content-left bg-[#F3F3F4] w-1/2 h-full">
            <div className="product-thumb-img w-full h-full"></div>
          </div>
          <div className="overlay-content-right bg-white w-1/2 h-full px-8">
            <h3 className="text-[#CACACA] text-[0.875rem] font-[600] leading-[2.25rem] uppercase tracking-[0.0875rem] mt-[1.65rem]">
              fabricante : {manufacturer}
            </h3>
            <h1
              title={name}
              className="text-[#00463D] text-[1.75rem] font-['Playfair_Display'] leading-[2.25rem] mt-[1.8rem] font-[700] line-clamp-2"
            >
              {name}
            </h1>
            <h3 className="text-[#CACACA] text-[0.875rem] font-[600] leading-[2.25rem] mt-[1.3rem]">
              Categoria: {category}
            </h3>
            <p className="text-[0.875rem] text-[#13201E] leading-[1.5rem] mt-[1.125rem]">
              Lorem ipsum dolor sit amet consectetur. Consequat quam phasellus
              elementum congue felis augue nulla volutpat. In amet ipsum etiam
              semper.
              <br />
              <br />
              Non feugiat in massa vulputate ipsum felis odio. Purus aenean eget
              id laoreet sed cursus elementum felis.
            </p>
            <div className="product-details flex items-center mt-[3.69rem] justify-between">
              <div className="product-details-price text-[#E6007E] text-[3rem] leading-[1.5rem]">
                <span>{price}</span>
              </div>
              <div className="product-details-stock flex items-center">
                <span className="text-[#0463D] text-[0.875rem] mr-[0.5rem]">
                  En stock
                </span>
                <span>
                  {stock === 'true' ? (
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L4.125 7.875L1 4.75"
                        stroke="#00D264"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                        fill="#E6007E"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="filter-button w-full">
              {faved === 'true' ? (
                <button
                  className="absolute bottom-[2.25rem] mx-auto block max-w-[23.3125rem] w-full h-[3rem] bg-[#E6007E] font-[600] mt-[3.250rem] text-white rounded-[0.500rem] transition duration-250 linear hover:bg-[#ff0000]"
                  onClick={removeFavorite}
                >
                  Quitar de favoritos
                </button>
              ) : (
                <button
                  className="absolute bottom-[2.25rem] mx-auto block max-w-[23.3125rem] w-full h-[3rem] bg-[#00965A] font-[600] mt-[3.250rem] text-white rounded-[0.500rem] transition duration-250 linear hover:bg-[#00D264]"
                  onClick={addFavorite}
                >
                  A&ntilde;adir a favoritos
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          className="overlay-content-closer bg-[#13201E] w-[2.875rem] h-[2.875rem] rounded-full absolute right-[-1.44rem] top-[-1.44rem] flex items-center origin-center rotate-0 transition hover:rotate-180 cursor-pointer"
          onClick={hideOverlay}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683418 13.7071 0.292894C13.3166 -0.0976306 12.6834 -0.0976306 12.2929 0.292894L7 5.58579L1.70711 0.292894C1.31658 -0.0976306 0.683418 -0.0976306 0.292894 0.292894C-0.0976306 0.683418 -0.0976306 1.31658 0.292894 1.70711L5.58579 7L0.292894 12.2929C-0.0976306 12.6834 -0.0976306 13.3166 0.292894 13.7071C0.683418 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default OverlayProduct
