import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from '../data/index';
import { actionSelectMovie } from '../redux/actions/index';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }

  componentDidMount() { // método par acessar o DOM
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    const { dispatch } = this.props;

    return (
      <aside className="movies">
        {categories.map((category) => (
          <section key={ category.id } className="movie">
            <h3 className="movie-name">{category.name}</h3>
            <ul className="movie-list">
              {category.movies.map((movie) => (
                <li
                  key={ movie.id }
                  role="menuitem"
                  onKeyDown={ () => dispatch(seletectMovie(category, movie)) }
                  onClick={ () => dispatch(actionSelectMovie(category, movie)) }
                >
                  {movie.title}
                  , lançado em
                  {' '}
                  {movie.released}
                </li>
              ))}
            </ul>
          </section>
        ))}

      </aside>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Sidebar);
