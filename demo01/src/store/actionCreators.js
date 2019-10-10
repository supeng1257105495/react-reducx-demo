import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addItem = () => ({
  type: ADD_ITEM
});

export const deleteItem = index => ({
  type: DELETE_ITEM,
  index
});

export const getListAction = data => ({
  type: GET_LIST,
  data
});

// Reducx - thunk
export const getTodoList = () => {
  return dispatch => {
    axios.get('https://randomuser.me/api/?results=3&inc=name,gender,email,nat&noinfo').then(res => {
      const data = ['无边落木萧萧下', '不尽长江滚滚来'];
      const action = getListAction(data);
      dispatch(action);
    });
  };
};
