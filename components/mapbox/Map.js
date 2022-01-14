import React, { useRef, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = (props) => {
  const mapContainerRef = useRef(null);

  const { updateMap, mapProps } = props
  console.log(props)
  const [lng, setLng] = useState(mapProps.lng);
  const [lat, setLat] = useState(mapProps.lat);
  const [zoom, setZoom] = useState(mapProps.zoom);

  const marker = new mapboxgl.Marker()
  

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

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
      updateMap({lng,lat,zoom})
    })
    
    marker.setLngLat([lng, lat])
    .addTo(map);
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  

  return (
    <Grid item>
      <div className='sidebar'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </Grid>
  );
};

export default Map;