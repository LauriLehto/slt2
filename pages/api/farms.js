const apiUrl =  "http://localhost:8080/v1/farms"

const getSensorData = async(farm_id) => {
  try {
    const url = `${apiUrl}/${farm_id}/stats`
    const result = await fetch(url)
    const data = await result.json()
    return data.measurements
    
  }catch(error){
    console.error('error', error.message)
  }
}

export default async function handler(req, res) {

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
