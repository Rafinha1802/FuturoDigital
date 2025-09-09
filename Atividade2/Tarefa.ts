//Pessoa
//class Pessoa{
    //public nome: String;
    //public idade: Number;
    //public cabelo: String;
    //public familia: string;
    //public altura: Number;
   //private cpf: Number

   //constructor(nome,idade,cabelo,familia,altura,cpf){
   //this.nome = nome;
   //this.idade = idade;
   //this.cabelo = cabelo
   //this.familia = familia
   //this.altura = altura
   //this.cpf = cpf

   //}
   
    //dorme(){
    //console.log("zzzzzzzzz")
    //}
    //come(){
    //console.log("hummy hummy")
    //}
    //corre(){
    //console.log("uff uff")
    //}
    //trabalha(){
    //console.log("que canseira")
    //}
    //execicio(){
    //console.log("quero faltar")
    //}
    //pinta(){
    //console.log("uhuuu")
    //}
   //const pessoa1 = new Pessoa('Ana', '30', 'ruiva', 'Monteiro', 1.50, 2090305960)
   //const pessoa2 = new Pessoa('Joaquim', '10', 'loiro', 'Barbosa',1.20, 675849439567 )
   //const pessoa3 = new Pessoa('Raquel', '23', 'castanho', 'Aroeira', 1.65, '57543428201')

//}
//Celular
//class Celular{
    //public modelo: string;
    //public marca: string;
    //public camera: string;
    //public cor: string;
    //private aplicativos: string;
    //private bateria: number

    //constructor(modelo, marca, camera, cor, aplicativos, bateria){
    //this.modelo = modelo
    //this.marca = marca
    //this.camera = camera
    //this.cor = cor
    //this.aplicativos = aplicativos
    //this.bateria = bateria
    //}


    //ligar(){
    //console.log("Hello")
    //}
    //ligacao(){
    //console.log("trim trim")
    //}
    //foto(){
    //console.log("tic tic")
    //}
    //filmar(){
    //console.log("zoom zomm")
   // }
    //executar(){
    //console.log("entrar no aplicativo")
    //}
    //acessar(){
    //console.log("zimmm")
//}
//const celular1 = new Celular('17', 'Iphone', '48 megapixel', 'preto', 'vários aplicativos', '3.600 mAh')
    //const celular2 = new Celular('S23', 'Samsung', '50 megapixel', 'azul', 'vários aplicativos','4,500 mAh')
    //const celular3 = new Celular('14', 'Iphone','12 megapixel', 'branco', 'vários aplicativos, '3.279 mAh')

//Animal

class Gato{
    public nome: string;
    public especie: string
    public idade: number;
    public pelagem: String;
    public genero: string;
    public peso: number;

    constructor(nome, especie, idade, pelagem, genero, peso){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.pelagem = pelagem;
        this.genero = genero;
        this.peso = peso;
    }
   
    arranha(){
        console.log("rang rang")
    }
    mia(){
        console.log("miau miau")
    }
    come(){
        console.log("hummy hummy")
    }
    bebe(){
        console.log("bebe bebe")
    }
    coco(){
        console.log("fede")
    }
    brinca(){
        console.log("fofo fofo")
    }

    
}
 const Gato1 = new Gato('Bob', 'Siamês', 10, 'preto', 'macho', 8)
    const Gato2 = new Gato('Andy', 'Persa', 3, 'cinza', 'macho', 4)
    const Gato3 = new Gato('Eliza', 'Norueguês',5, 'branco', 'fêmea', 6)

