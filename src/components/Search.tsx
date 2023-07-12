import Main from "./Main";
import { useEffect, useState } from "react";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const endpoint = "https://graphql.stg.promofarma.com/graphql";

  const headers = {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  const graphqlQuery = {
    operationName: "SearchProducts",
    query: `query SearchProducts($productName:String!, $categoryIds:[String], $brandIds:[String]) {
    response: searchProducts(
      productName: $productName
      categoryIds: $categoryIds
      brandIds: $brandIds
      productHasStock: null
      productState: null
      size: 32
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
  }`,
    variables: {
      productName: search,
      categoryIds: categories,
      brandIds: brands,
    },
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  useEffect(() => {
    if (!data) return;

    const fetchData = async () => {
      if (search.length === 0 || search.length > 4) {
        try {
          setLoading(true);

          const response = await fetch(endpoint, options);
          const _data = await response.json();

          setData(_data.data.response.products);
          setLoading(false);
        } catch (err: any) {
          setError(err);
        }
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, categories, brands]);

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // ? filter handling

  const resetFilters = (e: React.MouseEvent<HTMLElement>) => {
    setCategories([]);
    setBrands([]);

    Array.from(document.querySelectorAll("div.filters-box input")).forEach(
      (_obj) => {
        const _target = _obj as HTMLInputElement;
        _target.checked = false;
      }
    );
  };

  const removeValueFromState = (id: string, arr: string) => {
    if (arr === "categories") {
      const newCategories = categories.filter((value) => value !== id);
      setCategories(newCategories);
    } else {
      const newBrands = brands.filter((value) => value !== id);
      setBrands(newBrands);
    }
  };

  const updateCategoriesFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _target = e.target as Element;

    if (e.target.checked) {
      setCategories((arr: string[]) => [
        ...arr,
        _target.getAttribute("data-id") as string,
      ]);
    } else {
      removeValueFromState(
        _target.getAttribute("data-id") as string,
        "categories"
      );
    }
  };

  const updateBrandsFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _target = e.target as Element;

    if (e.target.checked) {
      setBrands((arr: string[]) => [
        ...arr,
        _target.getAttribute("data-id") as string,
      ]);
    } else {
      removeValueFromState(_target.getAttribute("data-id") as string, "brands");
    }
  };

  // ? UX for filter panel

  const toggleFilters = (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    document.querySelector("div.filters")?.classList.contains("hidden")
      ? document.querySelector("div.filters")?.classList.remove("hidden")
      : document.querySelector("div.filters")?.classList.add("hidden");
  };

  return (
    <>
      <section className="search absolute z-10 mx-auto w-full">
        <div className="searcher with-shadow relative w-[80%] lg:w-[54.625rem] h-[5.25rem] rounded-[0.5rem] bg-white flex flex-row items-center mx-auto translate-y-[-3.25rem]">
          {!loading ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[2.625rem] cursor-pointer hidden lg:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 9.02326C2 5.28207 5.11169 2.2093 9 2.2093C12.8883 2.2093 16 5.28207 16 9.02326C16 12.7644 12.8883 15.8372 9 15.8372C5.11169 15.8372 2 12.7644 2 9.02326ZM9 0.209305C4.05175 0.209305 0 4.13339 0 9.02326C0 13.9131 4.05175 17.8372 9 17.8372C11.1201 17.8372 13.0756 17.1169 14.6184 15.9089L18.3012 19.5061C18.6963 19.892 19.3294 19.8845 19.7153 19.4894C20.1012 19.0943 20.0938 18.4612 19.6987 18.0753L16.0463 14.5079C17.268 13.0056 18 11.1017 18 9.02326C18 4.13339 13.9482 0.209305 9 0.209305Z"
                fill="#13201E"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[2.625rem] spinner hidden lg:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0L9.99624 1.47223e-05C7.22213 0.0104506 4.55946 1.0929 2.56496 3.02104L2.55289 3.0329L2 3.58579V1.00001C2 0.447723 1.55228 7.62939e-06 1 7.62939e-06C0.447715 7.62939e-06 0 0.447723 0 1.00001V5.99983V6.00001C0 6.1356 0.0269855 6.26488 0.0758788 6.38279C0.124319 6.49987 0.195951 6.60961 0.290776 6.70499L0.295017 6.70923C0.3904 6.80406 0.500141 6.87569 0.617216 6.92413C0.735123 6.97302 0.86441 7.00001 1 7.00001H6C6.55228 7.00001 7 6.55229 7 6.00001C7 5.44772 6.55228 5.00001 6 5.00001H3.41421L3.96097 4.45326C5.58329 2.88786 7.7473 2.00898 10.0019 2.00001C12.1229 2.0005 14.157 2.8433 15.6569 4.34315C17.1571 5.84344 18 7.87828 18 10C18 10.5523 18.4477 11 19 11C19.5523 11 20 10.5523 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92894C15.1957 1.05358 12.6522 7.62939e-06 10 0ZM1 9.00001C1.55228 9.00001 2 9.44772 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84297 17.1567 7.87701 17.9995 9.99803 18C12.2526 17.9911 14.4167 17.1122 16.039 15.5468L16.5858 15H14C13.4477 15 13 14.5523 13 14C13 13.4477 13.4477 13 14 13H18.9993H19C19.001 13 19.002 13 19.003 13C19.1375 13.0004 19.2657 13.0274 19.3828 13.0759C19.5007 13.1247 19.6112 13.197 19.7071 13.2929C19.8902 13.476 19.9874 13.7123 19.9989 13.952C19.9996 13.968 20 13.984 20 14C20 14.0003 20 14.0007 20 14.001V19C20 19.5523 19.5523 20 19 20C18.4477 20 18 19.5523 18 19V16.4142L17.4471 16.9671L17.435 16.979C15.4405 18.9071 12.7779 19.9896 10.0038 20L10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 9.44772 0.447715 9.00001 1 9.00001Z"
                fill="#13201E"
              />
            </svg>
          )}
          <input
            type="search"
            placeholder="Buscar aquí..."
            onChange={updateSearch}
            value={search}
            className="h-full ml-[2.125rem] pr-4 max-w-[39.25rem] w-full text-[#13201E] rounded-[0.500rem] lg:rounded-0 focus:outline-none placeholder:italic placeholder:text-[#D4D4D4] search-cancel:appearance-none"
          />
          <div
            className="h-[50%] cursor-pointer items-center justify-between border-l-[0.063rem] border-[#D4D4D4] hidden lg:flex"
            onClick={toggleFilters}
          >
            <div className="font-[700] text-[#13201E] ml-[1.563rem] relative">
              <div>Filtrar</div>
            </div>
            <div className="ml-[1.250rem]">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1ZM4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H8Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="filters with-shadow z-100 max-w-[66.750rem] w-full h-[36.000rem] bg-white bg-opacity-[0.95] mx-auto relative rounded-[0.500rem] top-[-1.05rem] hidden">
          <span
            className="block pt-[2.375rem] underline mx-auto w-full text-center text-[#00463D] font-[700] text-[0.63rem] cursor-pointer transition duration-250 hover:text-[#00D264]"
            onClick={resetFilters}
          >
            quitar todos los filtros
          </span>
          <div className="filters-box flex flex-col items-center mt-[2.75rem]">
            <div className="filters-row flex flex-row justify-between max-w-[54.625rem] w-full font-[600] text-[#13201E]">
              <div className="filters-row-left">
                <h3 className="font-[600] text-[1.375rem] text-[#00463D]">
                  Categorias
                </h3>
                <div className="filter-categoria flex flex-row mt-[2.75rem]">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Solar</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="f6738502-b893-4fed-9cf1-75d85f3b34c7"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Vitaminas</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="80deddbd-25e0-457d-b60a-2457e5ef9ed0"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Tratamiento D&iacute;a</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="b7e60509-f744-45be-ae10-ce8d243fbb1d"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Digital</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="141177e3-77eb-41f2-9b0d-b1dccd5102bf"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Repelentes</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="1344fb56-db15-4dae-9e02-37046f1528e2"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Contorno Ojos</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="2c94f1d4-8adc-4b6e-b22a-69869989536c"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Anticaries</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="87fd61a5-2f3c-42b8-b031-b36c62a3295d"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Piel Normal</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="956dece3-de67-4eae-bb2b-bd9771e846fd"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Limpieza</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="87d23087-00e6-46e2-9668-6e7e5898d723"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Cuidado facial y corporal</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="7e66f243-78e7-43ff-bbc9-b5db89ef048a"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>De 0 a 6 meses</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] category"
                        data-id="adb4f0ca-4bae-47f0-b2ab-ad65a20c4ce5"
                        onChange={updateCategoriesFilter}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters-row-right">
                <h3 className="font-[600] text-[1.375rem] text-[#00463D]">
                  Marcas
                </h3>
                <div className="filter-categoria flex flex-row mt-[2.75rem]">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Heliocare</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="e085d7b5-6a97-4b33-990d-f92d95475e62"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Zamb&oacute;n</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="c816375c-eafa-45b3-a506-3a2dd00f42ea"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Caudalie</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="2f82d06b-b35c-49c7-85d1-36811a7d8397"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Aposan</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="5865da73-8048-40b3-94db-96e9a9182d5d"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Relec</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="ade9f43c-7d65-4fe0-b592-3aff4aafed72"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Isdin</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="fdff0064-6a42-441d-a565-5b74f8274d91"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Lacer</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="ff09b217-88db-4c08-b005-3d5492059796"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Vichy</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="858a1a2c-c6d7-4847-9d20-fab4a595aeb1"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>La Roche Posay</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="44e4398e-8e29-412e-aacb-f5fa90d5b77e"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Cocosolis</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="6cf5c2b6-48b7-46fa-b936-ea206f7bb42b"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-categoria flex flex-row">
                  <div className="flex flex-row w-[17.375rem] justify-between">
                    <div>
                      <span>Almir&oacute;n</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-[1rem] h-[1rem] brand"
                        data-id="4230b86a-1fce-4a7c-97f2-66f860cb3936"
                        onChange={updateBrandsFilter}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-button w-full">
            <button
              className="mx-auto block w-[17.313rem] h-[3rem] bg-[#00965A] font-[600] mt-[2.625rem] text-white rounded-[0.500rem] transition duration-250 linear hover:bg-[#00D264]"
              onClick={toggleFilters}
            >
              Volver
            </button>
          </div>
        </div>
      </section>
      {error && (
        <p className="max-w-[110.750rem] w-full mx-auto text-center mt-[4rem]">
          {error}
        </p>
      )}
      {!loading && data && <Main products={data} loading={loading} />}
    </>
  );
};

export default Search;
