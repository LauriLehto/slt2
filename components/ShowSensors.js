import { 
  useSelector,
  connect
} from 'react-redux'

import Datatable from 'components/DataTable'
const ShowSensors = (props) => {

  const { farms,sensors, farm_id} = props

  const state = useSelector((state) => state)
  console.log(state)
  const farm = sensors.find(d => d.farm_id === farm_id)

  console.log(farm_id, farm)

  return (
    <div>
      {farm &&(<Datatable data={farm.sensors} />)}
      {/* {farm.sensors.map(s => 
        <>
          <p key={s.datetime+s.sensor_type}>{s.datetime}{s.sensor_type}{s.value}</p><br/>
        </>
      )} */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  farms: state.farms,
  sensors: state.sensors
})


export default connect(mapStateToProps)(ShowSensors)
