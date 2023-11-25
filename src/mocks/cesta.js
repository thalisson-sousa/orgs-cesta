import logo from '../../assets/logo.png';

import Abóbora from '../../assets/frutas/Abóbora.png';
import Batata from '../../assets/frutas/Batata.png';
import Brócolis from '../../assets/frutas/Brócolis.png';
import Pepino from '../../assets/frutas/Pepino.png';
import Tomate from '../../assets/frutas/Tomate.png';

const cesta = {
    topo: {
        titulo: "Detalhes da Cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: Tomate,
            },
            {
                nome: "Abóbora",
                imagem: Abóbora,
            },
            {
                nome: "Batata",
                imagem: Batata,
            },
            {
                nome: "Brócolis",
                imagem: Brócolis,
            },
            {
                nome: "Pepino",
                imagem: Pepino,
            },
        ]
    }
}

export default cesta;