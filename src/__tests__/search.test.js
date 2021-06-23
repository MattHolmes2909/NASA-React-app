import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/search";

describe("Search", () => {
    const { asFragment } = render (<Search />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot;
    });
});

it("renders input correctly", () => {
    const { getByTestId } = render(
        <Search setSearchResults={validProps.setSearchResults} />
    );
    const input = getByTestId("search-input");
    expect(input).toBeTruthy();
});
