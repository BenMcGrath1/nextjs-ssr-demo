import AlbumCard from '../../components/AlbumCard';
import Layout from '../../components/Layout';
import { getAccessToken, getAlbumsByArtistId } from "../../lib/albums";
import utilStyles from '../../styles/utils.module.css'

const JOHNNY_CASH_ID = '6kACVPfCOnqzgfEF5ryl0x'

function SSGApp({ albums }) {
  return (
    <div>
      <Layout>
        <ul className={utilStyles.list}>
          {albums ? albums.map(album => 
          <li>
            <AlbumCard album={ album } />          
          </li>) : null }
        </ul>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getAccessToken();
  const albumsData = await getAlbumsByArtistId(data.access_token, JOHNNY_CASH_ID);
  const albums = albumsData.items;

  return { props: { data, albums }}
}

export default SSGApp;