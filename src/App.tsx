import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useState } from "react";
import './app.css';
import { ListCity } from './component/listcity';

function App() {
 

  const [estadoUF, setEstadoUf] = useState('AC');
  const [municipio, setMunicipio] = useState('Selecione um município<');
  



  return (
    <>
      <div>
      <div className='titulo'>Consumo de JSON no ReactJS</div>
      
      
    </div>
    <hr />
    {/* https://api.setup4d.com.br/cep/ver.1.0.1/ibge/cidade/S%C3%A3o%20PaUlo/estado/sp */}
    <div className="TituloMun">Selecione o Estado e município</div>
    <div className="EstMun">
    <div>
    <FormControl >
          <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white'}}>
            Estado
          </InputLabel>
          <NativeSelect
            onChange={(w)=>setEstadoUf(w.target.value)}
            sx={{ color: 'white' }}
            value={estadoUF}
          >
              {ListCity.map((item) =>{
                return(
                  <option key={item.ibge} className='opSelect' value={item.ibge}>{item.nome}</option>
                )
              })}
              </NativeSelect>
        </FormControl>
    </div>

    <div>
    <FormControl >
          <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white'}}>
            Município
          </InputLabel>
          <NativeSelect
            onChange={(w)=>setMunicipio(w.target.value)}
            sx={{ color: 'white' }}
            value={estadoUF}
          >
          
        return(
          <option className='opSelect' value={municipio}>Selecione um município</option>
        )
      
          

          </NativeSelect>
        </FormControl>
    </div>
    </div>
    
    </>
  );
}

export default App;
