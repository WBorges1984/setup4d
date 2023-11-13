import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useState } from "react";
import { ListCity } from '../component/listcity';

export default function CardEstadoMunicipioPage(){
    const [estadoUF, setEstadoUf] = useState('AC');
    const [municipio, setMunicipio] = useState('Selecione um município<');

    return(
        <div>
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
        </div>
    )
}