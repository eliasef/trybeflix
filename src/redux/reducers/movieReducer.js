import { MOVIE_SELECTED } from "../actions/index"

const INITIAL_STATE = {
    movieSelected: {},
    categorySelected: {},
}

export default function movieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIE_SELECTED:
            return {
                ...state,
                movieSelected: action.movie,
                categorySelected: action.category,
            };
    default:
        return state
    }
};

