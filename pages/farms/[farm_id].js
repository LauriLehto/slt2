import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { 
  useDispatch
} from 'react-redux'
import { getSensors } from 'actions'

import FarmData from 'components/FarmData'

const FarmsByIndex = () => {

  const router = useRouter()
  const { farm_id } = router.query

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(dispatch => getSensors({dispatch, farm_id}))
  }, [dispatch, farm_id])
  
  return (
    <div>
      {farm_id}
      <FarmData farm_id={farm_id} />
    </div>
  )
}

export default FarmsByIndex

