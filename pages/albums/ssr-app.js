import { getAccessToken, getAlbumsByArtistId } from "../../lib/albums";
import Layout from '../../components/Layout'
import utilStyles from '../../styles/utils.module.css'
import AlbumCard from "../../components/AlbumCard";

const JOHNNY_CASH_ID = '6kACVPfCOnqzgfEF5ryl0x'

function SSRApp({ albums }) {
  return (
    <div>
      <Layout>
        <ul className={ utilStyles.list }>
          {albums ? albums.map(album => 
          <li>
            <AlbumCard album={album}/>            
          </li>) : null }
        </ul>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getAccessToken();
  const albumsData = await getAlbumsByArtistId(data.access_token, JOHNNY_CASH_ID);
  const albums = albumsData.items;

  return { props: { data, albums }}
}

export default SSRApp;
