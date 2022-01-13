import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FarmsSelect = ({farms}) => {
  console.log(farms)
  return (
      <Grid container spacing={2} alignItems={'center'} justifyContent={'center'} style={{height: "100%"}}>
        {farms.map(farm => 
          <Link href={`/farms/${farm.farm_id}`}>
            <Grid item xs={6} key={farm.farm_id} id={farm.farm_id}>
              {/* Mapbox */}
              <Item>{farm.name}</Item>
              <Item>{farm.location}</Item>
            </Grid>
          </Link>
        )}
      </Grid>
  )
}

export default FarmsSelect
