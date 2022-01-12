import { useEffect } from 'react'
import { 
  useDispatch, 
  /* useSelector, */ 
  connect 
} from 'react-redux'
import Container from '@mui/material/Container'
import { getFarms } from '../actions'

import FarmsSelect from '../components/FarmsSelect'

const Index = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFarms)
  }, [dispatch])

  /* const state = useSelector((state) => state)
  console.log(state) */
  return (
    <Container style={{height: "90vh"}}>
      <FarmsSelect farms={props.farms} />
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    farms: state.farms,
    sensors: state.sensors,
  }
}
export default connect(mapStateToProps)(Index)
//export default Index