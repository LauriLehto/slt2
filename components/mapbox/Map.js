import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`

const Map = (props) => {
  const mapContainerRef = useRef(null);

  const { updateMap, mapProps, useZoom } = props
  const [lng, setLng] = useState(mapProps.lng);
  const [lat, setLat] = useState(mapProps.lat);
  const [zoomLevel, setZoom] = useState(mapProps.zoom);

  const marker = new mapboxgl.Marker()
  

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoomLevel
    });

    // Add navigation control (the +/- zoom buttons)
    if(useZoom){
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    map.on('move', () => {
      let lng = map.getCenter().lng.toFixed(4)
      let lat = map.getCenter().lat.toFixed(4)
      setLng(lng);
      setLat(lat);
      setZoom(map.getZoom().toFixed(2));
      marker.setLngLat([lng, lat]);
    });

    map.on('mouseup', () => {
      let lng = map.getCenter().lng.toFixed(4)
      let lat = map.getCenter().lat.toFixed(4)
      let zoom = map.getZoom().toFixed(2)
      console.log({lng,lat,zoom})
      //updateMap({lng,lat,zoom})
    })
    
    marker.setLngLat([lng, lat])
    .addTo(map);
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  

  return (
    
      <div className='map-container' style={{display: "flex", flex:1, height:"100px"}} ref={mapContainerRef} />
  );
};

export default Map;