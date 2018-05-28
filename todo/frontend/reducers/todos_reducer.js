import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import { merge } from 'lodash';

export default const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODO:
      const newState = merge({},state);
      newState[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
    //we'll come back to you
    default:
      return state;
  }
}
