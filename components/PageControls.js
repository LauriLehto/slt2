import Link from 'next/link'
import {forwardRef} from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import DateRangePicker from 'components/DateRangePicker'
//import dynamic from 'next/dynamic'

//const DateRangePicker = dynamic(() => import('components/DateRangePicker'),{ ssr: false })

const PageControls = (props) => {


  /* const dateToString = (date) => {
    const newDate = new Date(dates.start)
    return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`
  }

  const startString = dateToString(dates.start)
  const endString = dateToString(dates.end)
  console.log(startString, endString) */
  const ref = forwardRef()
  return (
    <Grid container justifyContent="flex-end" spacing={4} direction="row" sx={{marginTop:"5px" ,height: "100px", width: "100%"}}>
      <DateRangePicker ref={ref} />
      <Grid item>
        <Link href="/farms/all">
          <Button variant="contained">All Farms</Button>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/">
          <Button variant="contained" color="success">Main Page</Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default PageControls
