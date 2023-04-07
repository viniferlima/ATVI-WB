import Consumo from "../modelo/consumo";

export default class ListagemConsumos {
    private consumos: Array<Consumo>

    constructor(consumos: Array<Consumo>) {
        this.consumos = consumos
    }

    public listar(): void {
        console.log(`\nLista de todos os consumos:\n`);
        this.consumos.forEach(consumo => {
            console.log(`ID: ` + consumo.getId());
            console.log(`Nome do cliente: ` + consumo.getCliente().getNome());
            console.log(`CPF do cliente: ` + consumo.getCliente().getCpf().getValor());
            console.log(`Data do consumo: ` + consumo.getData());
            console.log(`Valor total: ` + consumo.getValorTotal());
            console.log(`Produtos/Servicos: `)

            consumo.getProdutosServicos().forEach(ps => {
                console.log(ps.getId() + ` - ` + ps.getNome() + ` - (R$)` + ps.getValor() + ` - ` + ps.getQuantidade() + ` Un. - ` + ps.getTipo())
            })

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}