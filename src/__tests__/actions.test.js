import { searchValue } from "../actions/search_video";
import { SEARCH_VALUE } from "../actions/types";

describe("Actions", () => {
    it("search value from input", () => {
        const payload = "searched value";
        const type = SEARCH_VALUE;
        const expectedAction = { type, payload };

        expect(searchValue(payload)).toEqual({type, payload});
    });
});