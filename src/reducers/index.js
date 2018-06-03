import { combineReducers } from "redux";
import searchVideo from "./search_video";

export default combineReducers({
    videos: searchVideo
})