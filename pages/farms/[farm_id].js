import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { 
  useDispatch,
  connect
} from 'react-redux'
import { getSensors } from 'actions'

import FarmData from 'components/FarmData'

const FarmsByIndex = (props) => {

  let loading = true
  const { farms, sensors } = props


  const router = useRouter()
  const { farm_id } = router.query

  if(sensors.findIndex(s => s.farm_id===farm_id)!==-1){
    console.log("success", sensors.findIndex(s => s.farm_id===farm_id)!==-1)
    loading = false
  }
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(dispatch => getSensors({dispatch, farm_id}))
  }, [dispatch, farm_id])
  
  return (
    <>
      {!loading && (<FarmData farm_id={farm_id} farms={farms} sensors={sensors} />) }
    </>
  )
}

const mapStateToProps = (state) => ({
  farms: state.farms,
  sensors: state.sensors
})


export default connect(mapStateToProps)(FarmsByIndex)
