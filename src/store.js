import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer,
  //!! if im in the brower and dev tools exis let go ahead and use that
  typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default store;