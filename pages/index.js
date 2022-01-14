import { useEffect } from 'react'
import { 
  useDispatch, 
  useSelector
} from 'react-redux'
import Container from '@mui/material/Container'
import { getFarms } from 'actions'

import FarmsSelect from 'components/FarmsSelect'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFarms)
  }, [dispatch])

  const state = useSelector((state) => state)
  console.log(state)
  return (
    <Container style={{height: "90vh"}}>
      <FarmsSelect farms={state.farms} mode="full" />
    </Container>
  )
}

export default Index