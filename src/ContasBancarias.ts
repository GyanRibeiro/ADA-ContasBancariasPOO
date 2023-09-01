export default class ContaBancaria implements OperacoesBancarias{
    private _numeroConta: String;
    private titular: String;
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
export class ContaPoupanca extends ContaBancaria implements OperacoesBancarias{
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