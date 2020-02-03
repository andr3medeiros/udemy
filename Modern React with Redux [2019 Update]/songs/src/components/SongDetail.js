import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <h2>Select a song</h2>
    }

    return (<div>
            <h4>Song details for:</h4>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>)
}

const mapStateToProps =  state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);