// Redux - thunk;
import { createStore, applyMiddleware, compose } from 'redux'; //  引入createStore方法
import thunk from 'redux-thunk';
import reducer from './reducer';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 浏览器插件配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// 中间件
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer); // 创建数据存储仓库

export default store; //暴露出去
