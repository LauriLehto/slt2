const apiUrl =  "http://localhost:8080/v1/farms"

const getSensorData = async(farm_id) => {
  console.log(`fetching farm data ${farm_id}`)
  try {
    const url = `${apiUrl}/${farm_id}/stats`
    console.log(url)
    const result = await fetch(url)
    const data = await result.json()
    console.log("received", data.measurements.length, url)
    return data.measurements
    
  }catch(error){
    console.error('error', error.message)
  }
}

export default async function handler(req, res) {

  console.log(req.query)
  try {
    if(req.query.farm_id){
      const data = await getSensorData(req.query.farm_id)
      res.status(200).json(data)
    } else {
      const result = await fetch(apiUrl)
      const data = await result.json()
  
      res.status(200).json(data)
  
    }

  }catch(error){
    res.status(500).json({error})
  }
}
