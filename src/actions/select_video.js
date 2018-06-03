import { SELECT_VIDEO } from "./types";

export const selectVideo = selectVideo => dispatch => {
    selectVideo => dispatch({
        type: SELECT_VIDEO,
        payload: selectVideo
    });
}