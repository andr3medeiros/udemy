import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Dyers eve', duration: '5:45' },
        { title: 'Five minutes alone', duration: '3:45' },
        { title: 'Rose of Saryn', duration: '6:22' },
        { title: 'Prowler', duration: '2:50' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})