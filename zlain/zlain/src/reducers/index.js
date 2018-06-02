const initialState = {
	numberOfClick: 0
};

export default function countState(state = initialState,action){
	switch (action.type){
		case 'INCREMENT':
			return {...state,numberOfClick: 1};
		default :
			return state;
	}
	
}