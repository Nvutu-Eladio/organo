import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
           <label>{props.label}</label> 
           <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
            <option value=""></option>
            {/* Para cada item retorna uma option */}
            {/* props.itens.map(item =>{ return <option>{item}</option>}) */}
            {/* Cada option deve ter uma chave key, para poder identificar no momento da renderizacao */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
           </select>
        </div>
    )
}

export default ListaSuspensa