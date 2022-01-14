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

  const router = useRouter()
  const { farms, sensors, farm_id} = props
  const farm = sensors.find(d => d.farm_id === farm_id)
  useEffect(()=>{
    if(!farms.length){
      router.push('/')
    }
  })

  console.log(farms.length)

  return (
    <Container>
      <Grid container direction="row">
        <FarmsSelect mode="nav" farms={farms} farmId={farm_id} />
        {/* { farms && (farms.map(farm => {
          return (
            <Grid item xs={3} key={farm.farm_id}>
              <FarmCard farm={farm} useMap={false} raised />
            </Grid>
          )
        }))} */}
      </Grid>
      {farm && (<Datatable data={farm.sensors} />)}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  farms: state.farms,
  sensors: state.sensors
})


export default connect(mapStateToProps)(FarmData)
