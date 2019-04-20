
import {combineReducers} from 'redux';
import changeName from './test.reducer';
import setMetadataSong from './song_upload/song_upload.reducer';
import wizardStep from './wizard_step';

export  const reducers = combineReducers(
    {
        changeName,
        setMetadataSong,
        wizardStep

    });