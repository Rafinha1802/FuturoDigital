import { Pessoas } from "./Pessoas";


export class Fisica extends Pessoas{
    public cpf: string;
    public patrimonioPessoa: string;
    public impostos: string;
    public atucao: string;

    constructor(cpf, patrimonioPessoa, impostos, atuacao,nome, idade,proficao){
        super(nome, idade, proficao)
        this.cpf = cpf;
        this.patrimonioPessoa = patrimonioPessoa;
        this.impostos = impostos;
        this.atucao = atuacao;
    }
    pagaImposto(){}
    CLT(){}

}