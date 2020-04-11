import { combineReducers } from "redux";

const songsReducer =()=>{
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'My Lady', duration: '2:50'},
        {title: 'Morning Light', duration: '3:25'},
        {title: 'See You', duration: '5:07'}
    ];
}

const selectedSongReducer =(selectedSong=null, action)=>{
    if(action.type === 'SONGSELECTED'){
        return action.payload;
    }
    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})