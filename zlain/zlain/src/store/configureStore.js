import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import nextRootReducer from '../reducers'

export default function configureStore(initialState){
	const store = createStore(rootReducer,initialState)

	if (module.hot){
		module.hot.accept('../reducers',()=>{
			store.replaceReducer(nextRootReducer)
		})
	}
	return store
}