import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useEffect, useState } from "react";
import { ListCitySigla } from "../component/listCitySigla";

export default function CardEstadoMunicipioPage(){
    const [estadoUF, setEstadoUf] = useState('12');
    const [municipio, setMunicipio] = useState([{sigla:'',cidade:'',ibge:'', nome:''}]);
    const [endMunicipio, setEndMunicipio] = useState('');

    useEffect(() => {
      async function buscaDados() {
        try {
         /*  const resultado = await fetch(`https://api.setup4d.com.br/cep/ver.1.0.1/regiao/estado/${estadoUF}/cidade/`); */
          const resultado = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoUF}/municipios`);
          if (resultado.ok) {
            const resultadoFinal = await resultado.json();
            setMunicipio(resultadoFinal);
        
          } else {
            console.error('Erro ao buscar os dados da API');
          }
        } catch (error) {
          console.error('Erro na requisição da API:', error);
        }
      }
      setEndMunicipio('12')
      buscaDados();
    }, [estadoUF]);
    return (
      <div>
        <div className="EstMun">
          <div>
            <FormControl>
              <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ color: 'white' }}>
                Estado
              </InputLabel>
              <NativeSelect
                onChange={(w) => setEstadoUf(w.target.value)}
                sx={{ color: 'white' }}
                value={estadoUF}
              >
                {ListCitySigla.map((item, index) => {
                  return (
                    <option key={index} className='opSelect' value={item.sigla}>{item.nome}</option>
                  )
                })}
              </NativeSelect>
            </FormControl>
          </div>
    
          <div>
            <FormControl>
              <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ color: 'white' }}>
                Município
              </InputLabel>
              <NativeSelect
                onChange={(w) => setEndMunicipio(w.target.value)}
                sx={{ color: 'white' }}
                value={endMunicipio}
              >
                {municipio.map((item, index) => {
                  
                  return (
                    <option key={index} className='opSelect' value={item.ibge}>{item.nome}</option>
                    )
                  })}
              </NativeSelect>
        </FormControl>
        
    </div>
        </div>
        </div>
        
    )
}