import Link from 'next/link'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const Navigation = () => {
  return (
    <Grid container justifyContent="flex-end" spacing={2} direction="row" sx={{height: "100px", width: "100%"}}>
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

export default Navigation
