import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';


const Interactube = ({ Component, store }) => {
	return(
		<Provider store={store}>
			<Head>
				<title>Interactube</title>
				<link rel="shortcut icon" href="/public/static/interactube_icon.ico" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css" />
			</Head>
			<AppLayout>
				<Component />
			</AppLayout>
		</Provider>
	);
};

const configureStore = (initialState, options) => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const enhancer = process.env.NODE_ENV === 'production'
		? compose(applyMiddleware(...middlewares))
		: compose(
			applyMiddleware(...middlewares),
			!options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
		);
	const store = createStore(reducer, initialState, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
};

export default withRedux(configureStore)(Interactube);