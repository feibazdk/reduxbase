import { createStore } from 'redux';
import reducer from './reducer'

// creareStore -- 帮我们创建 store
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;                   