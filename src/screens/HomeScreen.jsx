import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CarCard from '../components/CarCard'

const HomeScreen = () => {
  const [cars, setCars] = useState([])

  const getData = () => {
    axios
    .get('/api/allCars')
    .then((res) => {
      console.log(res.data)
      setCars(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const carDisplay = cars.map((car, index) => {
    return <CarCard car={car} />
  })

  return (
    <div className='main-page'>
        <h1>HomeScreen</h1>
        <div className='car-container'>
          {carDisplay}
        </div>
    </div>
  )
}

export default HomeScreen