import './CartaoPerfil.css'

function CartaoPerfil({nome, cargo, bio, habilidades, imagem}) {
    
    return (
        <div className='cartao'>
            <img className='cartao-foto'
            src={imagem || 'https://placehold.co/100x100'}
            alt={`Foto de ${nome}`} />  
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo}</p>
            <p className='cartao-bio'>{bio}</p>
            {habilidades.map(habilidade => (
                <li key ={habilidade}>{habilidade}</li>))}
            
        </div>
    )
}

export default CartaoPerfil