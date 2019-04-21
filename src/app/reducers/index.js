
import {combineReducers} from 'redux';
import user from './user_info/user.reduce';
import setMetadataSong from './song_upload/song_upload.reducer';
import wizardStep from './wizard_step';

export  const reducers = combineReducers(
    {
        user,
        setMetadataSong,
        wizardStep

    });