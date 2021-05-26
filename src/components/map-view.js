import React from 'react';
import GoogleMapReact from 'google-map-react';

const Bubble = ({ fullName,  email, number, address}) => {
   return <div className="mapView">
            <h3>{fullName}</h3>
            <span>
                <p> {email} </p>
                <p> {number} </p>
                <p> {address} </p>
            </span>
     </div>
}


function MapView() {
    const markers = localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : [];

    return(
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAyzUan0En_kVTQb5ZYUg1FB7d9f48EADY" }}
          defaultCenter={{ lat: 6.4698, lng: 3.5852}}
          defaultZoom={12}
          mapId={"ea67826235e193a5"}
        >
        {markers.map((marker)=>{
            return <Bubble
            lat={marker.latitude}
            lng={marker.longitude}
            fullName={marker.fullName}
            email={marker.email}
            number={marker.number}
            address={marker.address}
          />
        })}
          
        </GoogleMapReact>
      </div>
    )
}
export default MapView;