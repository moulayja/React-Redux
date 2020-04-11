import React from 'react';
import {selectSong} from '../actions'


const App =()=>{
    return(
        <div className='ui container'>React Redux App
        {selectSong}
        </div>
    )
}

export default App;