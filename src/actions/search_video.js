import { SEARCH_VIDEO, SEARCH_VALUE } from "./types";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyBIiSrI5ugHvLgX4bKBN6Efy6eusTmgj00";


export const searchVideo = search => dispatch => {
    YTSearch(
        { key: API_KEY, term: search },
        videos => dispatch({
            type: SEARCH_VIDEO,
            payload: videos
        })
    );
}

export const searchValue = searchPhrase => {
    return {
        type: SEARCH_VALUE,
        payload: searchPhrase
    }
}