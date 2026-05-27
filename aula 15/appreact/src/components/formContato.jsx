import { useState } from "react";

function FormContato() {
    // [VOCÊ]: Seus estados originais para armazenar os dados dos inputs e o status de envio
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);

    // [ADICIONADO - NÍVEL 1]: Função criada para limpar todos os campos de uma vez.
    // Chamamos os modificadores de estado (setters) passando uma string vazia.
    function handleLimpar() {
        setNome('');
        setEmail('');
        setMensagem('');
    }

    // [VOCÊ]: Sua função que gerencia o envio do formulário
    function handleSubmit(e) {
        e.preventDefault(); // [VOCÊ]: Evita que a página recarregue ao enviar

        // [VOCÊ]: Sua validação original que checa se algum campo ficou em branco
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return; // [VOCÊ]: Para a execução do código aqui se houver erro
        }

        // [ADICIONADO - NÍVEL 2]: Validação de tamanho mínimo.
        // O .length checa quantos caracteres foram digitados. Se for menor que 20, barra o envio.
        if (mensagem.length < 20) {
            alert('A mensagem deve ter pelo menos 20 caracteres.');
            return; // Para a execução e não deixa mudar o estado para 'enviado'
        }

        // [VOCÊ]: Se passar pelas validações, define enviado como verdadeiro
        setEnviado(true);
    }

    // [VOCÊ]: Sua tela de sucesso que aparece após o envio
    if (enviado) {
        return (
            <div>
                <h3>Mensagem enviada!</h3>
                <p>Obrigado por entrar em contato, {nome}.</p>
                <button onClick={() => {
                    setEnviado(false); // [VOCÊ]: Volta para a tela do formulário
                    handleLimpar();    // [ADICIONADO - NÍVEL 1]: Aproveita a função para limpar os campos antigos
                }}>enviar nova mensagem</button>
            </div>
        );
    }

    // [VOCÊ]: O retorno principal do seu formulário
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                {/* [VOCÊ]: Input controlado por você usando 'value' e 'onChange' */}
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome" />
            </label>
            
            <label>
                Email:
                {/* [VOCÊ]: Seu input de email */}
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
            </label>

            <label>
                Mensagem:
                {/* [VOCÊ]: Seu campo de texto para a mensagem */}
                <textarea 
                    value={mensagem} 
                    onChange={e => setMensagem(e.target.value)} 
                    placeholder="Digite sua mensagem"
                    maxLength={200} // [ADICIONADO - NÍVEL 2]: Atributo HTML que impede fisicamente o usuário de digitar mais de 200 caracteres
                />
                
                {/* [ADICIONADO - NÍVEL 2]: O contador dinâmico. 
                    - mensagem.length mostra o número atual de letras/espaços.
                    - O estilo 'color' muda para vermelho se for menor que 20. */}
                <small style={{ display: 'block', marginTop: '5px', color: mensagem.length < 20 ? 'red' : 'gray' }}>
                    {mensagem.length} / 200 caracteres 
                    {mensagem.length < 20 && " (Mínimo de 20 caracteres)"}
                </small>
            </label>

            {/* Agrupador visual para os botões ficarem lado a lado */}
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                {/* [VOCÊ]: Seu botão original de envio */}
                <button type="submit">Enviar</button>
                
                {/* [ADICIONADO - NÍVEL 1]: Botão de limpar.
                    - type="button" garante que ele NÃO envie o formulário.
                    - onClick ativa a função que criamos lá em cima. */}
                <button type="button" onClick={handleLimpar}>Limpar</button>
            </div>
        </form>
    );
}

export default FormContato;