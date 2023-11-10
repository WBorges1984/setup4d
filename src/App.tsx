import { FormControl, InputLabel, NativeSelect, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import './app.css';
import CardEstado from "./component/cardEstado";


function App() {
  const [consultaCep, setConsultaCep] = useState([]);
  const [estado, setEstado] = useState('Acre');
  const [estadoUF, setEstadoUf] = useState('AC');
  const [municipio, setMunicipio] = useState('33');
  

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

  const handleChange = (event: SelectChangeEvent<HTMLSelectElement>) => {
    const est = String(event.target.value) // Sua string "2022.09"
    setEstado(est)
    
};

const handleChangeUF = (event: SelectChangeEvent<HTMLSelectElement>) => {
  const est = String(event.target.value) // Sua string "2022.09"
  setEstadoUf(est)
  
};

const handleChangeMunicipio = (event: SelectChangeEvent<HTMLSelectElement>) => {
  const est = String(event.target.value) // Sua string "2022.09"
  setMunicipio(est)
  
};
  return (
    <>
      <div>
      <div className='titulo'>Consumo de JSON no ReactJS</div>
      <div className="principal">
        <label className="select" htmlFor="estado">Selecione o Estado</label>
        <FormControl >
          <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white'}}>
            Estado
          </InputLabel>
          <NativeSelect
            onChange={handleChange}
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
            onChange={handleChangeUF}
            sx={{ color: 'white' }}
            value={estadoUF}
          >
              <option className='opSelect' value='12'>Acre</option>
              <option className='opSelect' value='27'>Alagoas</option>
              <option className='opSelect' value='16'>Amapá</option>
              <option className='opSelect' value='13'>Amazonas</option>
              <option className='opSelect' value='29'>Bahia</option>
              <option className='opSelect' value='23'>Ceará</option>
              <option className='opSelect' value='53'>Distrito Federal</option>
              <option className='opSelect' value='32'>Espírito Santo</option>
              <option className='opSelect' value='52'>Goiás</option>
              <option className='opSelect' value='21'>Maranhão</option>
              <option className='opSelect' value='51'>Mato Grosso</option>
              <option className='opSelect' value='50'>Mato Grosso do Sul</option>
              <option className='opSelect' value='31'>Minas Gerais</option>
              <option className='opSelect' value='15'>Pará</option>
              <option className='opSelect' value='25'>Paraíba</option>
              <option className='opSelect' value='41'>Paraná</option>
              <option className='opSelect' value='26'>Pernambuco</option>
              <option className='opSelect' value='22'>Piauí</option>
              <option className='opSelect' value='33'>Rio de Janeiro</option>
              <option className='opSelect' value='24'>Rio Grande do Norte</option>
              <option className='opSelect' value='43'>Rio Grande do Sul</option>
              <option className='opSelect' value='11'>Rondônia</option>
              <option className='opSelect' value='14'>Roraima</option>
              <option className='opSelect' value='42'>Santa Catarina</option>
              <option className='opSelect' value='35'>São Paulo</option>
              <option className='opSelect' value='28'>Sergipe</option>
              <option className='opSelect' value='17'>Tocantins</option>
              </NativeSelect>    
        </FormControl>
    </div>
    <div>
    <FormControl >
          <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white'}}>
            Município
          </InputLabel>
          <NativeSelect
            onChange={municipio}
            sx={{ color: 'white' }}
            value={estadoUF}
          >
              <option className='opSelect' value='12'>Acre</option>
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
    </div>
    </>
  );
}

export default App;
