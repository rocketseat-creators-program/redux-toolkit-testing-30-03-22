// test home  reducer
import homeReducer, {
  HomeState,
  addFavorite,
  removeFavorite,
  setSearchQuery,
} from "./HomeSlice";

describe("Home reducer", () => {
  const state: HomeState = {
    query: "",
    results: [],
    favorites: [],
    status: "idle",
  };
  it("should handle initial state", () => {
    const initialState: HomeState = state;
    const action = { type: "unknown" };
    const expectedState = initialState;
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle setSearchQuery", () => {
    const initialState: HomeState = { ...state, query: "" };
    const action = setSearchQuery("test");
    const expectedState: HomeState = { ...state, query: "test" };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle addFavorite", () => {
    const initialState: HomeState = { ...state, favorites: [] };
    const action = addFavorite(1);
    const expectedState: HomeState = { ...state, favorites: [1] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle removeFavorite", () => {
    const initialState: HomeState = { ...state, favorites: [1] };
    const action = removeFavorite(1);
    const expectedState: HomeState = { ...state, favorites: [] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });
});
