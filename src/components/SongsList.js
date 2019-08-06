import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className='conent'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divded list'>{this.renderList()}</div>;
  }
}

//convention to name this function mapStateToProps
//take our state object (all the data) to eventually show up as props in our component
//return our state as props to our component.
const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

//             This syntax is valid; used
//              call connect(pass in our function)(call our component)
export default connect(
  mapStateToProps,
  { selectSong: selectSong }
)(SongList);
