import { SEARCH_VIDEO } from "../actions/types";

const initialState = {
    searchValue: "",
    selectedVideo: "",
	videos: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VIDEO:
            return {
                ...state,
                videos: action.payload
            };
    
        default:
            return initialState;
    }
}