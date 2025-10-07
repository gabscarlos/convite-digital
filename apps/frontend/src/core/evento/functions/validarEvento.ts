import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
    const erros: string[] = [];

    if(!evento.alias) {
        erros.push("O alias é obrigatório");
    }

    if (!evento.nome) {
        erros.push("O nome é obrigatório");
    }

    if (!evento.descricao) {
        erros.push("A descrição é obrigatória");
    }

    if (!evento.data) {
        erros.push("A data é obrigatória");
    }

    if (!evento.local) {
        erros.push("O local é obrigatório");
    }

    if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
        erros.push("O público esperado é obrigatório");
    }

    if (!evento.imagem) {
        erros.push("A imagem é obrigatória");
    }

    if (!evento.imagemBackground) {
        erros.push("A imagem de background é obrigatória");
    }

    return erros;
}