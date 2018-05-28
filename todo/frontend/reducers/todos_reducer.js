import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODO:
      const newState = merge({},state);
      newState[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach(todo =>  {
        newState[todo.id] = todo;
      });
      return newState;
    default:
      return state;
  }
}

export default todosReducer;
