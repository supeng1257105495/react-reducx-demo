import React, { Component } from 'react';
import { changeInputAction, addItem, deleteItem, getTodoList } from '../store/actionCreators';
import store from '../store';

import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 获取 数据
    this.state = store.getState();
    // 监听input输入事件
    this.changeInputValue = this.changeInputValue.bind(this);
    // 鉴定 点击事件
    this.clickBtn = this.clickBtn.bind(this);
    // 监听删除事件
    this.deleteItem = this.deleteItem.bind(this);

    // 订阅 数据改变
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  componentDidMount() {
    // ajax redux - thunk
    const action = getTodoList();
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }

  clickBtn() {
    const action = addItem();
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = deleteItem(index);
    store.dispatch(action);
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }
}
export default TodoList;
