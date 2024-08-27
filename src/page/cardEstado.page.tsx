import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useEffect, useState } from "react";
import CardEstado from "../component/cardEstado";



function CardEstadoPage(){
    const [estado, setEstado] = useState('AC');
    const [consultaCep, setConsultaCep] = useState({id:'', nome:'', sigla:'', regiao: ''});
    

    useEffect(() => {
        async function buscaDados() {
          try {
            const resultado = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}`);
            if (resultado.ok) {
              const resultadoFinal = await resultado.json();
              const regiao = resultadoFinal.regiao.nome;
              const {id, sigla, nome} = resultadoFinal;
              setConsultaCep({id, sigla, nome, regiao});
              
              
              
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
            <option className='opSelect' value='AC'>Acre</option>
            <option className='opSelect' value='AL'>Alagoas</option>
            <option className='opSelect' value='AP'>Amapá</option>
            <option className='opSelect' value='AM'>Amazonas</option>
            <option className='opSelect' value='BA'>Bahia</option>
            <option className='opSelect' value='CE'>Ceará</option>
            <option className='opSelect' value='DF'>Distrito Federal</option>
            <option className='opSelect' value='ES'>Espírito Santo</option>
            <option className='opSelect' value='GO'>Goiás</option>
            <option className='opSelect' value='MA'>Maranhão</option>
            <option className='opSelect' value='MT'>Mato Grosso</option>
            <option className='opSelect' value='MS'>Mato Grosso do Sul</option>
            <option className='opSelect' value='MG'>Minas Gerais</option>
            <option className='opSelect' value='PA'>Pará</option>
            <option className='opSelect' value='PB'>Paraíba</option>
            <option className='opSelect' value='PR'>Paraná</option>
            <option className='opSelect' value='PE'>Pernambuco</option>
            <option className='opSelect' value='PI'>Piauí</option>
            <option className='opSelect' value='RJ'>Rio de Janeiro</option>
            <option className='opSelect' value='RN'>Rio Grande do Norte</option>
            <option className='opSelect' value='RS'>Rio Grande do Sul</option>
            <option className='opSelect' value='RO'>Rondônia</option>
            <option className='opSelect' value='RR'>Roraima</option>
            <option className='opSelect' value='SC'>Santa Catarina</option>
            <option className='opSelect' value='SP'>São Paulo</option>
            <option className='opSelect' value='SE'>Sergipe</option>
            <option className='opSelect' value='TO'>Tocantins</option>

          </NativeSelect>
        </FormControl>
      </div>

      
    
        
        <div className='cardEstado'>
          
          <CardEstado nome={consultaCep.id} regiao={consultaCep.regiao} sigla={consultaCep.sigla} />
        </div>
    
        </div>
    )
}export default CardEstadoPage;