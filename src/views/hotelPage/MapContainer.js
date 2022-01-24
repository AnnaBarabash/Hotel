import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  inset: '8px 0 0',
  height: 'auto',
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        containerStyle={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    )
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDkDjW8gYS_Lg9TUV1MZl2oMxUUMp8QJPs'
// })(MapContainer);
export default GoogleApiWrapper((props) => ({
  apiKey: props.apiKey,
}))(MapContainer)
