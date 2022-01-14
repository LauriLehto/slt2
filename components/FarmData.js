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

const FarmData = (props) => {
  const { farms, sensors, farm_id} = props
  const router = useRouter()
  const farmSensors = sensors.find(d => d.farm_id === farm_id)
  const farm = farms.filter(f => f.farm_id===farm_id)[0]
  
  useEffect(()=>{
    if(!farms.length){
      router.push('/')
    }
  })

  console.log(farms.length)

  return (
    <Container>
      <FarmsSelect mode="nav" farms={farms} farmId={farm_id} />
      <Grid container direction="row">
        <Grid item xs={8}>
          {farmSensors && (<Datatable data={farmSensors.sensors} />)}
        </Grid>
        <Grid item xs={4}>
         {farm && (<FarmCard farm={farm} useMap />)}
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  farms: state.farms,
  sensors: state.sensors
})


export default connect(mapStateToProps)(FarmData)
