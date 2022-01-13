import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { 
  useDispatch, 
  useSelector
} from 'react-redux'
import { getSensors } from 'actions'

const FarmsByIndex = () => {

  const router = useRouter()
  const { farm_id } = router.query

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(dispatch => getSensors({dispatch, farm_id}))
  }, [dispatch, farm_id])

  const { sensors } = useSelector((state) => state)


  const renderSensors = () => {
    console.log(sensors)  
    const found = sensors.find(farm => {
      return farm.farm_id === farm_id
    })
    if(found){
      return <div>sensors</div>
    }
    return <div></div>
  }

  return (
    <div>
      {farm_id}
      {renderSensors()}
    </div>
  )
}

export default FarmsByIndex

