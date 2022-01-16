import { useEffect, useState } from 'react'
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
import PageControls from 'components/PageControls'
import SensorChart from 'components/SensorChart'

const FarmData = (props) => {
  const { farms, sensors, farm_id, dates } = props
//  const [dates, setDates] = useState([null, null]);

  console.log(dates)

  const router = useRouter()
  let data = []
  const farm = farms.filter(f => f.farm_id===farm_id)[0]

  if(sensors.length && sensors.find(i => i.farm_id === farm_id).data.length){
    data = sensors.find(d => d.farm_id === farm_id).data
  }

  if(dates[0] && dates[1]){
    console.log("dates")
    data = data.filter(d => {
        const dateTime = new Date(d.datetime).getTime()
        const dates0 = new Date(dates[0]).getTime()
        const dates1 = new Date(dates[1]).getTime()
        return dateTime < dates1 && dateTime > dates0
    })
    /* data = data.filter(d => {
      if(dates[0]){
        const dateTime = new Date(d.datetime).getTime()
        const dates0 = new Date(dates[0]).getTime()
        return dateTime > dates0
      }
      if(dates[1]){
        const dateTime = new Date(d.datetime).getTime()
        const dates1 = new Date(dates[1]).getTime()
        return dateTime < dates1
        }
    }) */

    console.log(data)
  }

  data.sort((first, second)=>{
    const firstDate = new Date(first.datetime).getTime() 
    const secondDate = new Date(second.datetime).getTime() 
    return firstDate-secondDate
  })
  
  useEffect(()=>{
    if(!farms.length){
      router.push('/')
    }
  })

  console.log(farms)
  const charts = ["Rainfall", "Ph", "Temperature"]

  console.log(dates)

  return (
    <Container>
      <FarmsSelect mode="nav" farms={farms} farmId={farm_id} />
      <PageControls />
      {data.length && farms.length && (
        <Grid container spacing={{xs:2}} columns={{ xs: 4, sm: 8, md: 12 }}>
          {charts.map(chart =>
            <Grid item xs={2} sm={4} md={6} key={chart} sx={{ display:"flex"}}>
              <SensorChart 
                title={chart}
                farm={farms.find(f=>f.farm_id===farm_id)}
                data={data.filter(s => s.sensor_type === chart.toLowerCase())} 
                />
            </Grid>
          )}
        </Grid>
      )}
      <Grid container direction="row" spacing={2}>
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
