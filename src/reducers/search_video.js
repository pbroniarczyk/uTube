import { SEARCH_VIDEO, SELECT_VIDEO, SEARCH_VALUE } from "../actions/types";

const initialState = {
    searchPhrase: "",
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

        case SELECT_VIDEO:
            return {
                ...state,
                selectedVideo: action.payload
            }

        case SEARCH_VALUE:
            return {
                ...state,
                searchPhrase: action.payload
            }
    
        default:
            return initialState;
    }
}