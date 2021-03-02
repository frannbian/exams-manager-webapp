import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import Loader from "./components/layouts/Loader";
import reducers from './reducers';

const store = createStore(
    reducers,
    compose(applyMiddleware(reduxThunk))
);


const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <LazyApp />
    </Suspense>
  </Provider>,
	document.getElementById("root")
);
