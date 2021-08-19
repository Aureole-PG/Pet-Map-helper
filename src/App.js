import React, {useRef, useState, useEffect} from 'react';
import Api from './utils/api'
import {Map} from './sections/Map'
import {Header} from './sections/Header'
import './styles/myStyles.css'
function App() {
  const marker = useRef(null);
  const [data, setData] = useState({name:"", owner: "", email:"", gps_id: "", latitud:"", longitud:""})
  const [selectedPet, setSelectedPet] = useState(false);
  const[petsData, setPetsData] = useState([])
  const [enableButton, setEnableButton] = useState(false)
  const getPosition=(e)=>{
    setEnableButton(true)
    setData({
      ...data,
      latitud: `${e.latLng.lat()}`,
      longitud:`${e.latLng.lng()}`
    })
  }
  const getId = (data)=>{
    setEnableButton(false)
    setData({
      gps_id: data.gps_id,
      name: data.name,
      owner: data.owner,
      ...data
    })
    setSelectedPet(true)
    console.log(data)
  }

  const send = () =>{
    const {name, owner, _id, email, ...rest} = data
    Api.post(`/gps`, rest).then(()=>{
      alert("datos guardados")
    }).catch(()=>{
      alert("error")
    })
  }
  useEffect(()=>{
    Api.get('/petInfo').then(e=>{
      
      const {petInfo} = e.data
      setPetsData(petInfo)
    }) 
  },[])

  
  return (
    <div className="App max-Heigth indigo lighten-5">
      <div className="row no-margin header">
        <div className="col s12 no-padding">
          <Header petData={getId} disabled={enableButton} send={send} selectedPet={selectedPet} petsData={petsData}/>
        </div>
        
      </div>
      <div className="row no-margin body">
        <div className="col s12 no-padding">
          <Map marker={marker} getPosition={getPosition}  data={data}/>
        </div>
      </div>
    </div>
  );
}


export default App;
