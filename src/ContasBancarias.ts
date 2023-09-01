import prompt from 'prompt-sync';

class ContaBancaria implements OperacoesBancarias{
    private _numeroConta: String;
    protected titular: String;
    private _saldo: number;

    constructor (numeroConta: String, titular: String, saldo: number) {
        this._numeroConta = numeroConta;
        this.titular = titular;
        this._saldo = saldo;
    }
//------------------------------------------- Getters e Setters -------------------------------------
    get numeroConta(): String {
        return this._numeroConta;
    }

    set numeroConta(numeroConta : String){
        this._numeroConta = numeroConta;
    }
    
    get saldo(): number {
        return this._saldo;
    }

    set saldo(saldo: number){
        this._saldo = saldo;
    }

//--------------------------------------------- Métodos ---------------------------------------------
    consultarSaldo(): number {
        return this.saldo;
    }

    sacar(valorSaque:number): number {
        if (isNaN(valorSaque)) {
            console.log("Valor inválido!");
        }
        else if (valorSaque > this._saldo){
            console.log("Saldo insuficiente!");
        }
        else {
            this._saldo -= valorSaque;
            console.log(`Seu saldo agora é de: ${this._saldo}`);
        }
        return this.saldo;
    }

    depositar(valorDeposito:number): number {
        if (isNaN(valorDeposito) || valorDeposito <= 0) {
            console.log("Valor inválido!!")
        } else {
            this._saldo += valorDeposito;
            console.log(`Seu saldo agora é de: ${this._saldo}`);
        }
        return this.saldo;
    }
}

//-------------------------- Classe Poupanca que herda da classe ContaBancaria. ---------------------------------------------
class ContaPoupanca extends ContaBancaria implements OperacoesBancarias{
    private juros: number;

    constructor(numeroConta: String, titular: String, saldo: number, juros: number){
        super(numeroConta, titular, saldo)
        this.juros = juros;
    }
    
    consultarSaldo(): number {
        const saldoComJuros = this.saldo + this.saldo * this.juros;
        return saldoComJuros;
    }
}

interface OperacoesBancarias {
    sacar(valorSaque:number): number;
    depositar(valorDeposito:number): number
}

let scanner = prompt();
const conta = new ContaBancaria("53674", "Gyan", 1000);
const contaPoupanca = new ContaPoupanca("73649", "Messi", 1300, 0.1);

const isContaPoupaca = () => {
    const opcao = Number(scanner("[1] saque - [2] deposito: - [3] consultar saldo: "));
    if (opcao === 1) {
        let valorSaque = Number(scanner("Digite o valor que deseja sacar: "));
        contaPoupanca.sacar(valorSaque);
    }
    else if (opcao === 2) {
        let valorDeposito = Number(scanner("Digite o valor que deseja depositar: "));
        contaPoupanca.depositar(valorDeposito);
    }
    else if (opcao === 3) {
        console.log(`Seu saldo é R$${contaPoupanca.consultarSaldo()}`);
    }
    else {
        console.log("Opção Inválida!!");
    }
}
const isContaNormal = () => {
    const opcao = Number(scanner("[1] saque - [2] deposito: - [3] consultar saldo: "));
    if (opcao === 1) {
        let valorSaque = Number(scanner("Digite o valor que deseja sacar: "));
        conta.sacar(valorSaque);
    }
    else if (opcao === 2) {
        let valorDeposito = Number(scanner("Digite o valor que deseja depositar: "));
        conta.depositar(valorDeposito);
    }
    else if (opcao === 3) {
        console.log(`Seu saldo é R$${conta.consultarSaldo()}`);
    }
    else {
        console.log("Opção Inválida!!");
    }
}

console.log("\nQual conta você deseja acessar??")
console.log("-------------------------------------------------------------");
const opcao = Number(scanner("[1] conta padrão - [2] conta poupança: "));
console.log("-------------------------------------------------------------");
if (opcao === 1) {
    isContaNormal();
}
else if (opcao === 2) {
    isContaPoupaca();
}
else{
    console.log("Opção inválida!!!")
}
console.log("-------------------------------------------------------------");