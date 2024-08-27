import './cardEstado.css'

interface CardEstadoProps{
    nome: string,
    regiao: string,
    sigla: string
}


export default function CardEstado(props: CardEstadoProps){

    return(
    <div className={"card"}>
        <div>Código IBGE: {props.nome}</div>
        <div>Região: {props.regiao}</div>
        <div>Sigla: {props.sigla}</div>
        
    </div>
    )
}