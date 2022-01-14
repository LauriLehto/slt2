export function filterSensors(sensors){
  const filtered = sensors.filter(s => {
    switch (s.sensor_type){
      case 'temperature':
        return s.value>=-50 && s.value<=100;
      case 'rainfall':
        return s.value>=0 && s.value<=500;
      case 'ph':
        return s.value>=0 && s.value<=14;
      default:
        return false
    }
  })
  return filtered
}