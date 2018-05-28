import { combinedReducers } from 'redux';
import todosReducer from 'todos_reducer';

export default const rootReducer = combinedReducers({
  todos: todosReducer
});
