import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import { logger } from 'react-redux';

const configureStore = () => createStore(rootReducer,logger);

export default configureStore;
