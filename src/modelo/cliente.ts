import Consumo from "./consumo"
import CPF from "./cpf"

export default class Cliente {
    public nome: string
    public idade: number
    public genero: string
    private cpf: CPF
    public dataCadastro: Date
    public totalConsumidoEmDinheiro: number
    public totalConsumidoEmQuantidade: number
    public consumos: Array<Consumo>

    constructor(nome: string, idade: number, cpf: CPF, genero: string) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.genero = genero;
        this.dataCadastro = new Date()
        this.totalConsumidoEmDinheiro = 0
        this.totalConsumidoEmQuantidade = 0
        this.consumos = []
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number) {
        this.idade = idade;
    }

    public getCpf(): CPF {
        return this.cpf;
    }

    public setCpf(cpf: CPF) {
        this.cpf = cpf;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string) {
        this.genero = genero;
    }

    public getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public setDataCadastro(dataCadastro: Date) {
        this.dataCadastro = dataCadastro;
    }

    public getTotalConsumidoEmDinheiro(): number {
        return this.totalConsumidoEmDinheiro;
    }

    public setTotalConsumidoEmDinheiro(totalConsumidoEmDinheiro: number) {
        this.totalConsumidoEmDinheiro = totalConsumidoEmDinheiro;
    }

    public getTotalConsumidoEmQuantidade(): number {
        return this.totalConsumidoEmQuantidade;
    }

    public set setTotalConsumidoEmQuantidade(totalConsumidoEmQuantidade: number) {
        this.totalConsumidoEmQuantidade = totalConsumidoEmQuantidade;
    }

    public getConsumos(): Array<Consumo> {
        return this.consumos;
    }

    public setConsumos(consumos: Array<Consumo>) {
        this.consumos = consumos;
    }
}