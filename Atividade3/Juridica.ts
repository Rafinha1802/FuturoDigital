import { Pessoas } from "./Pessoas";

export class Juridica extends Pessoas{
    public cnpj: string;
    public patrimonioEmpresa: string;
    public imposto: string;
    public licitacao: string;

    constructor(cnpj, patrimonioEmpresa, imposto, licitacao, nome, idade, proficao){
        super( nome, idade,  proficao)
        this.cnpj = cnpj;
        this.patrimonioEmpresa = patrimonioEmpresa;
        this.imposto = imposto;
        this.licitacao = licitacao;
    }
    ONG(){}
    Fundacao(){}
    
}