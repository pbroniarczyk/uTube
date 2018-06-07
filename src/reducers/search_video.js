import { SEARCH_VIDEO, SELECT_VIDEO } from "../actions/types";

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

        case SELECT_VIDEO:
            return {
                ...state,
                selectedVideo: action.payload
            }
    
        default:
            return initialState;
    }
}