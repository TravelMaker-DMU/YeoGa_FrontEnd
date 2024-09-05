import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
    width: '100%',
    height: '400px'
    };

const center = {
    lat: 37.7749, // 위도
    lng: -122.4194 // 경도
    };


const Test1 = () => {
    return (
        <LoadScript googleMapsApiKey={apiKey}> {/* Google Maps API 키 사용 */}
          <div className="map-container"> {/* CSS 클래스 이름 적용 */}
            <GoogleMap
              mapContainerStyle={containerStyle} 
              center={center} 
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </LoadScript>
      );
    }

export default Test1;