/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import netflix from '../img/netflix.png';
import op from '../img/op.jpg';
import jojo from '../img/jojo.png';
import attack from '../img/attack.jpg';
import sonic from '../img/sonic.jpg';
import witcher from '../img/witcher.jpg';

class Player extends React.Component {
  render() {
    const { movie, category } = this.props;

    let src = netflix;

    switch (movie.title) {
    case 'One Piece':
      src = op;
      break;
    case 'JoJo\'s Bizarre Adventure':
      src = jojo;
      break;
    case 'Attack on Titan':
      src = attack;
      break;
    case 'Sonic - O Filme':
      src = sonic;
      break;
    case 'The Witcher':
      src = witcher;
      break;
    case 'Vikings':
      src = 'https://i.pinimg.com/originals/ca/b0/4e/cab04eb005a79d621a9eb602e4657467.jpg';
      break;
    default:
      break;
    }

    return (
      <section className="player">
        <h1 className="title">{movie.title || 'Escolha um filme 🎬'}</h1>
        <section>
          <img className="boximg" alt="img" src={ src } width={ 420 } height={ 315 } />
        </section>

        <h3 className="bio">
          {category.name ? `${category.name} -` : ''}
          {' '}
          {movie.released}
        </h3>
      </section>
    );
  }
}

Player.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    released: PropTypes.number,
  }).isRequired,
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movieSelected,
  category: state.movieReducer.categorySelected,
});

export default connect(mapStateToProps)(Player);
