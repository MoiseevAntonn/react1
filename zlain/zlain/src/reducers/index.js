const initialState = {
	numberOfClick: 0
};

export default function countState(state = initialState,action){
	switch (action.type){
		case 'INCREMENT':
			return {...state,numberOfClick: initialState.numberOfClick++};
		default :
			return state;
	}
	
}