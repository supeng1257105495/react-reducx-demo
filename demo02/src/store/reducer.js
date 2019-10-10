const defalutState = {
  inputValue: '测试测试',
  list: ['测试测试']
};

export default (state = defalutState, action) => {
  // input
  if (action.type === 'change_input') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  // button
  if (action.type === 'click_button') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, ...[newState.inputValue]];
    newState.inputValue = '';
    return newState;
  }

  if (action.type === 'delete_item') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    newState.inputValue = '';
    return newState;
  }
  return state;
};
