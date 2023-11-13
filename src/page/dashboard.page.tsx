
import '../css/dashboard.css';
import CardEstadoPage from "./cardEstado.page";
import CardEstadoMunicipioPage from './cardEstadoMunicipio.page';

export default function Dashboard() {

    return (
    <>
    <div>
    <div className='titulo'>Consumo de JSON no ReactJS - Willian Borges</div>
        <CardEstadoPage/>
    </div>
    <hr />
    {/* https://api.setup4d.com.br/cep/ver.1.0.1/ibge/cidade/S%C3%A3o%20PaUlo/estado/sp */}
    <div className="titulo">Selecione o Estado e município</div>
    
        <CardEstadoMunicipioPage />
    
    </>
);
}
