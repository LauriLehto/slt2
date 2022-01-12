import { useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import Link from 'next/link'
import { getFarms } from '../actions'

const Index = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFarms)
  }, [dispatch])

  const state = useSelector((state) => state)
  console.log(state)
  return (
    <>
    {props.farms.map(farm => <div key={farm.id}>{farm.name}</div>)}
      <Link href="/">
        
        <a>Click to see current Redux State</a>
      </Link>
    </>
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