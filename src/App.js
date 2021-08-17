import React, {useRef, useState} from 'react';
import Api from './utils/api'
import {Map} from './sections/Map'
import './styles/myStyles.css'
function App() {
  const marker = useRef(null);
  const [position, setPosition] =useState({ lat: 0, lng: 0 })
  const [data, setData] = useState({gps_id: "144s5dwewqwe", latitud:"", longitud:""})
  const getPosition=(e)=>{
    console.log(typeof e.latLng.lat())
    setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng()})
    setData({
      ...data,
      latitud: `${e.latLng.lat()}`,
      longitud:`${e.latLng.lng()}`
    })
  }

  const enviarGet = () =>{
    setData({
      ...data,
      latitud: `${position.lat}`,
      longitud:`${position.lng}`
    })
    Api.get(`/gps/get/${data.gps_id}/${data.latitud}/${data.longitud}`).then(()=>{
      alert("datos guardados")
    }).catch(()=>{
      alert("error")
    })
  }
  const onIdchange=(id)=>{
    setData({
      ...data,
      gps_id: id
    })
  }
  return (
    <div className="App max-Heigth">
      <div className="row no-margin header">
        <div className="col s12 no-padding">
          <div className="card darken-1 ">
            <div className="card-content ">
              <span className="card-title">Pet Map Helper</span>
              <p>
                This site is for emulate an gps for Pet map page
              </p>
              <div className="row">
                <div className="input-field col s6">
                  <input value={data.gps_id} placeholder="_" onChange={e=> onIdchange(e.target.value)} id="gpsId" type="text" />
                  <label htmlFor="gpsId">Gps id</label> 
                </div>
                <div className="col s6">
                  <label>Latitud </label> 
                  <div class="chip">{position.lat}</div>
                </div>
                <div className="col s6">
                  <label>Longitud </label>
                  <div class="chip">{position.lng}</div>
                </div>
                <button onClick={enviarGet} className=" btn-large waves-effect waves-light red"> Guardar  <i className="material-icons right">send</i></button>
              </div>
            </div>
            {/* <div className="card-action">
              <button onClick={enviarGet} className=" btn-large waves-effect waves-light red"> Guardar  <i className="material-icons right">send</i></button>
            </div> */}
          </div>
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
