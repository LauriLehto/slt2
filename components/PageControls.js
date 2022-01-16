import Link from 'next/link'
import {forwardRef} from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import DateRangePicker from 'components/DateRangePicker'

const PageControls = () => {

  return (
    <Grid container justifyContent="flex-space-between" spacing={4} direction="row" sx={{marginTop:"5px" ,height: "100px", width: "100%"}}>
      <DateRangePicker />
      <Grid item sx={{flex:1}} ></Grid>
      <Grid item>
        <Link href="/">
          <Button variant="contained" color="success">Main Page</Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default PageControls
