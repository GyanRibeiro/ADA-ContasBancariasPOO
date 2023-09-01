import ContaBancaria, { ContaPoupanca } from "./ContasBancarias";
import prompt from 'prompt-sync';

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