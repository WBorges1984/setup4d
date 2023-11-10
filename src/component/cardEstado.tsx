import './cardEstado.css'

interface CardEstadoProps{
    nome: string,
    estado: string,
    sigla: string
}


export default function CardEstado(props: CardEstadoProps){
    return(
    <div className={"card"}>
       
        <div>Código IBGE: {props.nome}</div>
        <div>Estado: {props.estado}</div>
        <div>Sigla: {props.sigla}</div>
        
    </div>
    )
}