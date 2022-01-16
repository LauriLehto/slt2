import { useEffect } from 'react'
import { 
  useSelector,
  connect
} from 'react-redux'
import { useRouter } from 'next/router'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Datatable from 'components/DataTable'
import FarmCard from 'components/FarmCard'
import FarmsSelect from 'components/FarmsSelect'
import Navigation from 'components/Navigation'
import SensorChart from 'components/SensorChart'

const FarmData = (props) => {
  const { farms, sensors, farm_id } = props
  const router = useRouter()
  let data = []
  const farm = farms.filter(f => f.farm_id===farm_id)[0]

  if(sensors.length && sensors.find(i => i.farm_id === farm_id).data.length){
    data = sensors.find(d => d.farm_id === farm_id).data
  }
  
  useEffect(()=>{
    if(!farms.length){
      router.push('/')
    }
  })

  console.log(farms)
  const charts = ["Rainfall", "Ph", "Temperature"]

  return (
    <Container>
      <FarmsSelect mode="nav" farms={farms} farmId={farm_id} />
      <Navigation />
      {data.length && farms.length && (
        <Grid container spacing={{xs:2}} columns={{ xs: 4, sm: 8, md: 12 }}>
          {charts.map(chart =>
            <Grid item xs={2} sm={4} md={4} key={chart} sx={{ display:"flex"}}>
              <SensorChart 
                title={chart}
                farm={farms.find(f=>f.farm_id===farm_id)}
                data={data.filter(s => s.sensor_type === chart.toLowerCase())} 
                />
            </Grid>
          )}
        </Grid>
      )}
      <Grid container direction="row">
        <Grid item xs={8}>
          {data && (<Datatable data={data} />)}
        </Grid>
        <Grid item xs={4}>
         {farm && (<FarmCard farm={farm} useMap vertical />)}
        </Grid>
      </Grid>
    </Container>
  )
}


export default FarmData
