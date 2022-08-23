export const MOVIE_SELECTED = "MOVIE_SELECTED";

export const actionSelectMovie = (category, movie) => {
    return {
        type: MOVIE_SELECTED,
        category: category,
        movie: movie,
    }
};

// a action tem uma diferença no arquivo original