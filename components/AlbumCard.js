import Image from 'next/image'
import styles from './AlbumCard.module.css';

const AlbumCard = ({ album }) => (
  <div className={styles.albumCard}>
    <div className={styles.albumCardContainer}>
      <Image
        src={album.images[0].url}
        alt="an Album Cover"
        width={300}
        height={300}
      />
      <h3>{album.name}</h3>
      <div>Release Date: {album.release_date}</div><br />
      <div>Number of Tracks: {album.total_tracks}</div>
    </div>
  </div>
);  

export default AlbumCard;