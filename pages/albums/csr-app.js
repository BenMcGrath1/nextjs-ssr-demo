import React from 'react';
import { getAccessToken } from '../../lib/albums';
import AlbumsList from '../../components/AlbumsList';
import Layout from '../../components/Layout';

class CSRApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: ''
    };
  }

  componentDidMount() {
    getAccessToken()
      .then(data => {
        this.setState({
          access_token: data.access_token
        })
      });
  }

  render() {
    return (
      <div>
        <Layout>
          <AlbumsList accessToken={this.state.access_token} />
        </Layout>
      </div>
    )
  }
}

export default CSRApp;