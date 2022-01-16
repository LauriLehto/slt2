import { 
  useSelector
} from 'react-redux'

import Grid from '@mui/material/Grid'
import SensorChart from 'components/SensorChart'

const All = () => {

  const state = useSelector(state => state)
  console.log(state)
  const {sensors, farms} = state
  return (
    <>
    {farms.map(farm => <Grid><SensorChart sensors={sensors} /></Grid>)}
    </>
  )
}

export default All
