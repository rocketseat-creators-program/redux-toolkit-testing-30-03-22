import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addFavorite,
  fetchResults,
  setSearchQuery,
  removeFavorite,
  selectFavorites,
  selectHomeStatus,
  selectFilteredResults,
} from "./HomeSlice";
import { Item } from "./Item";
import { Search } from "../../components/Search";
import { Map } from "../../components/Map";

export default function Home() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const status = useAppSelector(selectHomeStatus);
  const results = useAppSelector(selectFilteredResults);
  const favoriteIdsList = useAppSelector(selectFavorites);
  const [favoriteFilter, setFavoriteFilter] = useState(false);

  const isInFavorites = (id: number) => {
    return favoriteIdsList.includes(id);
  };

  const resultsList = favoriteFilter
    ? results.filter((result) => isInFavorites(result.id))
    : results;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleToggleFavorite = (id: number) => {
    favoriteIdsList.includes(id)
      ? dispatch(removeFavorite(id))
      : dispatch(addFavorite(id));
  };

  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSearchQuery(search));
  }, [search, dispatch]);

  if (status === "loading") {
    return (
      <div className="py-10 px-2 h-screen bg-gray-200">
        <div className="overflow-hidden mx-auto max-w-md bg-gray-100 rounded-lg shadow-lg md:max-w-lg">
          <div className="md:flex">
            <div className="p-4 w-full">
              <div>Loading...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 px-2 bg-gray-200 max-w-[80%] m-auto">
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="mxw-12 flex-1">
            <div className="flex justify-between items-center">
              <Search onChangeHandle={handleSearch} />
              <div>
                <button
                  className="py-2 px-4 h-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  onClick={() => setFavoriteFilter(!favoriteFilter)}
                >
                  {favoriteFilter ? "Show All" : "Show Favorites"}
                </button>
              </div>
            </div>
            <ul
              className="max-h-screen overflow-scroll"
              data-testid="result-list"
            >
              {resultsList.length === 0 && (
                <div className="py-2">
                  <div className="p-4 bg-white rounded-lg ">
                    <div className="text-center text-xl">No results found</div>
                  </div>
                </div>
              )}
              {resultsList.map((result, index) => (
                <li key={index}>
                  <Item
                    name={result.name}
                    title={result.place}
                    image={result.image}
                    price={result.price}
                    isFavorite={isInFavorites(result.id)}
                    onCLickHandle={() => handleToggleFavorite(result.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2 px-8 items-center max-w-[800px] h-screen">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
