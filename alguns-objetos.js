class Carro {
    marca;
    cor;
    ano;

    constructor(marca, cor, ano) {
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
    }

    descrever(){
        console.log(`Um ${this.marca}, cor ${this.cor}, lançado em ${this.ano}`);
    }

}

function compararAno(c1, c2) {
    if (c1.ano < c2.ano) {
        console.log(`${c1.marca} é mais antigo que ${c2.marca}`);
    } else if (c2.ano < c1.ano) {
        console.log(`${c2.marca} é mais antigo que ${c1.marca}`);
    } else {
        console.log(`${c1.marca} e ${c2.marca} foram lançados no mesmo ano`);
    }
}



const bmw = new Carro('BMW', 'azul', 1995);
const ferrari = new Carro('Ferrari', 'vermelha', 1998);

compararAno(bmw, ferrari);
