import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchResultsRequest } from "./homeAPI";
import { Results } from "./types";
export interface HomeState {
  query: string;
  results: Results[];
  favorites: number[];
  status: "idle" | "loading" | "failed";
}

const initialState: HomeState = {
  query: "",
  results: [],
  favorites: [],
  status: "idle",
};

export const fetchResults = createAsyncThunk("home/fetchResults", async () => {
  const response = await fetchResultsRequest();
  return response;
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.status = "idle";
        state.results = action.payload;
      });
  },
});

export const selectQuery = (state: RootState) => state.home.query;
export const selectResults = (state: RootState) => state.home.results;
export const selectHomeStatus = (state: RootState) => state.home.status;
export const selectFavorites = (state: RootState) => state.home.favorites;

export const selectFavoritesResults = (state: RootState) => {
  return state.home.results.filter((result) =>
    state.home.favorites.includes(result.id)
  );
};

export const selectFilteredResults = (state: RootState) => {
  const query = state.home.query.toLowerCase();
  return state.home.results.filter((result) =>
    result.place.toLowerCase().includes(query)
  );
};

export const { setSearchQuery, addFavorite, removeFavorite } =
  homeSlice.actions;
export default homeSlice.reducer;
