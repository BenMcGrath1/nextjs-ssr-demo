import React from 'react';
import { getAlbumsByArtistId } from '../lib/albums'
import utilStyles from '../styles/utils.module.css'
import AlbumCard from './AlbumCard';

const JOHNNY_CASH_ID = '6kACVPfCOnqzgfEF5ryl0x'
const THE_CLASH_ID = '5fsDcuclIe8ZiBD5P787K1'

class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.accessToken !== this.props.accessToken ) {
      getAlbumsByArtistId(this.props.accessToken, THE_CLASH_ID)
        .then(data => {
          this.setState({
            albums: data.items
          })
        });
    }
  }

  render() {
    return (
      <div>
        <ul className={utilStyles.list}>
          {this.state.albums ? this.state.albums.map(album => 
          <li>
            <AlbumCard album={album} />         
          </li>) : null }
        </ul>
      </div>
    )

  }
}

export default AlbumsList;