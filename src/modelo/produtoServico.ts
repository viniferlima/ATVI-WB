export default class ProdutoServico {
    public id: number
    public tipo: string
    public nome: string
    public valor: number
    public genero: string
    public quantidade: number
    public quantidadeTotalConsumida: number

    constructor(id: number, nome: string, tipo: string, valor: number, genero: string) {
        this.id = id;
        this.nome = nome
        this.tipo = tipo
        this.valor = valor
        this.genero = genero
        this.quantidade = 0
        this.quantidadeTotalConsumida = 0
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string) {
        this.tipo = tipo;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number) {
        this.valor = valor;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string) {
        this.genero = genero;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number) {
        this.quantidade = quantidade;
    }

    public getQuantidadeTotalConsumida(): number {
        return this.quantidadeTotalConsumida;
    }

    public setQuantidadeTotalConsumida(quantidadeTotalConsumida: number) {
        this.quantidadeTotalConsumida = quantidadeTotalConsumida;
    }
}