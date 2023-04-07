export default abstract class Cadastro {
    public abstract cadastrar(): void
    public abstract atualizar(chavePrimaria: string | number): void
    public abstract deletar(chavePrimaria: string | number): void
    public abstract cadastroAutomatico(lista: string[]): void
}