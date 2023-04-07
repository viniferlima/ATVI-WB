export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public getValor(): string {
        return this.valor
    }

    public setValor(valor: string) {
        this.valor = valor
    }

    public getDataEmissao(): Date {
        return this.dataEmissao
    }

    public setDataEmissao(data: Date) {
        this.dataEmissao = data;
    }
}