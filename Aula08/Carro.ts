class Carro{
    public marca: string;
    public cor: string;
    public placa: string;
    public modelo: string;
    public ano: number

    constructor(marca, cor, placa, ano, modelo){
        this.cor = cor;
        this.ano = ano;
        this.marca = marca;
        this.placa = placa;
        this.modelo= modelo;
    }

    ligar(){
        console.log("Ronc Ronc")
    }
    desligar(){
        console.log("zzzzzzzzz")
    }

}
const carro1 = new Carro('fit', 'rosa', 'pig123', 'porquinho', 2025)
const carro2 = new Carro('bat', 'azul', 'pil123', 'batmove', 1865)

carro1.ligar();
carro1.desligar();
console.log(carro1.ano);

carro2.ligar();