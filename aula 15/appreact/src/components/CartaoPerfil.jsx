import './CartaoPerfil.css'

function CartaoPerfil() {
    const nome = "Alexandre Villela"
    const cargo = "Estudante do Senac RJ"
    const bio = "Sou um estudante dedicado, apaixonado por tecnologia e sempre em busca de novos desafios. Tenho experiência em desenvolvimento web e estou ansioso para aprender mais sobre programação e design. Meu objetivo é me tornar um profissional de destaque na área de TI e contribuir para projetos inovadores."

    return (
        <div className='cartao'>
            <img className='cartao-foto'
            src='https://placehold.co/100x100'
            alt={`Foto de ${nome}`} />  
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo}</p>
            <p className='cartao-bio'>{bio}</p>

        </div>
    )
}

export default CartaoPerfil