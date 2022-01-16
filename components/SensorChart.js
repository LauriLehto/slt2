import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

const SensorChart = (props) => {

  const { title, data, farm } = props
  
  const chartData = data.map(d => {
    const unixTime = new Date(d.datetime).getTime()
    return [unixTime, d.value]
  })

  const options = {
    title: {
      text: `${title} - ${farm.name}`
    },
    xAxis:{
      type: "datetime"
    },
    series: [{
      name: title,
      data: chartData
    }]
  }
  
  return (
    <HighchartsReact
      //containerProps={{ style: {position: "relatice", flex: 1 } }}
      highcharts={Highcharts}
      options={options}
    />
  )
}

export default SensorChart
