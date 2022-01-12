const apiUrl =  "http://localhost:8080/v1/farms"


console.log(process.env.DATABASE_URL)

const updateFarm = async(farm, sensorData) => {
  try {
   
   
  }catch(error){
    console.log('error updating farm data', error.message)
  }
}

const getSensorData = async(farm) => {
  console.log(`fetching farm data ${farm.name}`)
  try {
    const result = await fetch(`${apiUrl}/${farm.farmId}/stats`)
    const data = await result.json()

    

    //console.log('created success'+data)

    return data
    
  }catch(error){
    console.error('error', error.message)
  }
}

export default async function handler(req, res) {

  console.log(req.query)
  try {
    const result = await fetch(apiUrl)
    const data = await result.json()
    //console.log(data)

    //const farmResults = await updateFarms(data)

    res.status(200).json(data)

  }catch(error){
    res.status(500).json({error})
  }
}
