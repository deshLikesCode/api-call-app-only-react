import { FETCH_POSTS, NEW_POST} from '../actions/types'

const intialState = {
	posts : [],
	post : {}
}

export default function (state = intialState, action) {
	switch (action.type) {
		case FETCH_POSTS :
			return {
				...state,
				posts : action.payload
			}
		case default : 
			return state;
	}
}