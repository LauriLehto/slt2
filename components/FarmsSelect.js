
import Link from 'next/link'
import Grid from '@mui/material/Grid';

import FarmCard from 'components/FarmCard'

const FarmsSelect = ({farms, mode, farmId}) => {
  //console.log(farms, mode)
  return (
      <Grid container spacing={2} alignItems={'center'} justifyContent={'center'} style={{height: "100%"}}>
        {farms.map(farm => {
          console.log(farm.farm_id===farmId)
          return (
            <Link href={`/farms/${farm.farm_id}`} key={farm.farm_id}>
              <Grid item xs={mode==="full" ? 6 : 3}>
                <FarmCard farm={farm} useMap={mode==="full" ? true : false} raised={farm.farm_id===farmId} />
              </Grid>
            </Link>
          )
        })}
      </Grid>
  )
}

export default FarmsSelect
