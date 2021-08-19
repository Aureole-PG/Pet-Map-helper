import React, {useRef, useState, useEffect} from 'react';
import Api from './utils/api'
import {Map} from './sections/Map'
import {Header} from './sections/Header'
import './styles/myStyles.css'
function App() {
  const marker = useRef(null);
  const [position, setPosition] =useState({ lat: 0, lng: 0 })
  const [data, setData] = useState({gps_id: "144s5dwewqwe", latitud:"", longitud:""})
  const [selectedPet, setSelectedPet] = useState(false);
  const[petsData, setPetsData] = useState([])
  const getPosition=(e)=>{
    console.log(typeof e.latLng.lat())
    setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng()})
    setData({
      ...data,
      latitud: `${e.latLng.lat()}`,
      longitud:`${e.latLng.lng()}`
    })
  }
  const getId = (id)=>{
    setData({
      gps_id: id,
      ...data
    })
    setSelectedPet(true)
    console.log(id)
  }

  const send = () =>{
    Api.get(`/gps/get/${data.gps_id}/${data.latitud}/${data.longitud}`).then(()=>{
      alert("datos guardados")
    }).catch(()=>{
      alert("error")
    })
  }
  useEffect(()=>{
    Api.get('/petInfo').then(e=>{
      
      const {petInfo} = e.data
      console.log(petInfo)
      setPetsData(petInfo)
    }) 
  },[])

  
  return (
    <div className="App max-Heigth">
      <div className="row no-margin header">
        <div className="col s12 no-padding">
          <Header position={position} getId={getId} selectedPet={selectedPet} petsData={petsData}/>
        </div>
        
      </div>
      <div className="row no-margin body">
        <div className="col s12 no-padding">
          <Map marker={marker} getPosition={getPosition} position={position}/>
        </div>
      </div>
    </div>
  );
}


export default App;
