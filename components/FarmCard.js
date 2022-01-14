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
    <Card sx={{ display: 'flex', margin:"10px" }} raised={raised}>
      {useMap && (
        <Box
          sx={{ width: 151, height: 151 }}
          alt="Live from space album cover"
        >
          <Map updateMap={updateMapProps} mapProps={mapProps} useZoom={false} />
        </Box>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto',minHeight: '130px' }}>
          <Typography component="div" variant="h5" >
            {farm.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ paddingBottom: 0}}>
            {farm.location}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}