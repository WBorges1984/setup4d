import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useEffect, useState } from "react";
import CardEstado from "../component/cardEstado";



function CardEstadoPage(){
    const [estado, setEstado] = useState('Acre');
    const [consultaCep, setConsultaCep] = useState({codigo_ibge:'', estado:'',sigla:''});

    useEffect(() => {
        async function buscaDados() {
          try {
            const resultado = await fetch(`https://api.setup4d.com.br/cep/ver.1.0.1/ibge/estado/${estado}`);
            if (resultado.ok) {
              const resultadoFinal = await resultado.json();
              setConsultaCep(resultadoFinal);
            } else {
              console.error('Erro ao buscar os dados da API');
            }
          } catch (error) {
            console.error('Erro na requisição da API:', error);
          }
        }
    
        buscaDados();
      }, [estado]);


    return(
        <div>
            <div className="principal">
        <label className="select" htmlFor="estado">Selecione o Estado</label>
        <FormControl >
          <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white'}}>
            Estado
          </InputLabel>
          <NativeSelect
            onChange={(w)=>setEstado(w.target.value)}
            sx={{ color: 'white' }}
            value={estado}
          >
            
            <option className='opSelect' value='Acre'>Acre</option>
            <option className='opSelect' value='Alagoas'>Alagoas</option>
            <option className='opSelect' value='Amapá'>Amapá</option>
            <option className='opSelect' value='Amazonas'>Amazonas</option>
            <option className='opSelect' value='Bahia'>Bahia</option>
            <option className='opSelect' value='Ceará'>Ceará</option>
            <option className='opSelect' value='Distrito Federal'>Distrito Federal</option>
            <option className='opSelect' value='Espírito Santo'>Espírito Santo</option>
            <option className='opSelect' value='Goiás'>Goiás</option>
            <option className='opSelect' value='Maranhão'>Maranhão</option>
            <option className='opSelect' value='Mato Grosso'>Mato Grosso</option>
            <option className='opSelect' value='Mato Grosso do Sul'>Mato Grosso do Sul</option>
            <option className='opSelect' value='Minas Gerais'>Minas Gerais</option>
            <option className='opSelect' value='Pará'>Pará</option>
            <option className='opSelect' value='Paraíba'>Paraíba</option>
            <option className='opSelect' value='Paraná'>Paraná</option>
            <option className='opSelect' value='Pernambuco'>Pernambuco</option>
            <option className='opSelect' value='Piauí'>Piauí</option>
            <option className='opSelect' value='Rio de Janeiro'>Rio de Janeiro</option>
            <option className='opSelect' value='Rio Grande do Norte'>Rio Grande do Norte</option>
            <option className='opSelect' value='Rio Grande do Sul'>Rio Grande do Sul</option>
            <option className='opSelect' value='Rondônia'>Rondônia</option>
            <option className='opSelect' value='Roraima'>Roraima</option>
            <option className='opSelect' value='Santa Catarina'>Santa Catarina</option>
            <option className='opSelect' value='São Paulo'>São Paulo</option>
            <option className='opSelect' value='Sergipe'>Sergipe</option>
            <option className='opSelect' value='Tocantins'>Tocantins</option>
          </NativeSelect>
        </FormControl>
      </div>

      {consultaCep ? (
        
        <div className='cardEstado'>
          <CardEstado nome={consultaCep.codigo_ibge} estado={consultaCep.estado} sigla={consultaCep.sigla} />
        </div>
    ) : ( 
      <p>Carregando dados...</p>
    )}
        </div>
    )
}export default CardEstadoPage;