import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';

const defaultState = {
  inputValue: 'Write Something',
  list: []
};

// state: 指的是原始仓库里的状态。
// action: 指的是action新传递的状态。
export default (state = defaultState, action) => {
  // 获取axios 内容
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data; //复制性的List数组进去
    return newState;
  }

  // input 输入
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }

  // button push
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.list = [...newState.list, ...[newState.inputValue]];
    return newState;
  }

  // delete
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1); //删除数组中对应的值
    return newState;
  }

  return state;
};
