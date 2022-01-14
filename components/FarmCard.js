import { useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Map = dynamic(
  () => import('components/mapbox/Map'), 
  { ssr: false }
)

export default function FarmCard({farm, useMap, raised}) {
  console.log(farm)
  const theme = useTheme();
  const [ mapProps, updateMapProps ] = useState({ lng:25, lat:60.5, zoom: 6})

  useEffect(()=> {
    async function getMapCenter(){
      const result = await fetch(`/api/mapbox?search=${farm.location}`)
      const data = await result.json()
      if(data){
        const newState = {...mapProps}
        newState.lng=data.features[0].center[0]
        newState.lat=data.features[0].center[1]
        updateMapProps(newState)
      }
    }
    getMapCenter()
  },[])

  return (
    <div style={{ display: 'flex', margin:"10px",position: "relative", width: "100%",paddingBottom: "50%" }} >
      <Card sx={{position: "absolute", width: "100%", height: "100%",display: "flex", alignItems:"center", justifyContent:"center", padding:"10px" }} raised={raised}>
      {useMap && (
        <Box
          sx={{ width: "50%", height:"75%" }}
          alt="Live from space album cover"
        >
          <Map style={{height:"100%", paddingBottom:"100%"}} updateMap={updateMapProps} mapProps={mapProps} useZoom={false} />
        </Box>
      )}
      <Box sx={{ flex: 1, margin:0, padding:0, display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto'}}>
          <Typography component="div" variant="h5" >
            {farm.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ paddingBottom: 0}}>
            {farm.location}
          </Typography>
        </CardContent>
      </Box>
      </Card>
    </div>
  );
}