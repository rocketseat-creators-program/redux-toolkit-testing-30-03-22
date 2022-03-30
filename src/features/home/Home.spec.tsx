import { rest } from "msw";
import { setupServer } from "msw/node";
import { resultsMock } from "../../mocks/results";
import { render, screen, fireEvent } from "../../test-utils";

import Home from "./Home";

const BASE_URL = "http://localhost:3001";

const { click, change } = fireEvent;
const { queryByText, getByText, getByTestId, getAllByTestId } = screen;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const handlers = [
  rest.get(`${BASE_URL}/results`, (_, res, ctx) => {
    return res(ctx.json(resultsMock), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

afterAll(() => server.close());
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());

describe("Home Component", () => {
  it("should show loading state", async () => {
    render(<Home />);
    expect(getByText(/loading../i)).toBeInTheDocument();
  });

  it("should render results", async () => {
    render(<Home />);
    await sleep(200);
    expect(queryByText(/loading.../i)).not.toBeInTheDocument();
    expect(getByText(/Yolanda Little/i)).toBeInTheDocument();
    expect(getByText(/South Tommiemouth/i)).toBeInTheDocument();
  });

  it("should filter results", async () => {
    render(<Home />);
    await sleep(200);
    change(getByTestId("search"), { target: { value: "Beach" } });
    expect(getAllByTestId("location-name")).toHaveLength(2);
  });

  it("should show empty list when no results found", async () => {
    render(<Home />);
    await sleep(200);
    change(getByTestId("search"), { target: { value: "xxxx" } });
    expect(getByText(/No results found/i)).toBeInTheDocument();
  });

  it("should filter list by favorites", async () => {
    render(<Home />);
    await sleep(200);
    click(getByText(/Show Favorites/i));
    expect(getByText(/No results found/i)).toBeInTheDocument();
    click(getByText(/Show All/i));
    expect(getAllByTestId("location-name")).toHaveLength(3);
  });
});
