import ContaBancaria, { Banco, ContaPoupanca } from "./ContasBancarias";
import prompt from 'prompt-sync';

let scanner = prompt();
const meuBanco = new Banco();
const conta1 = new ContaBancaria("53674", "Gyan", 1000);
const contaPoupanca = new ContaPoupanca("73649", "Messi", 1300, 0.1);

meuBanco.adicionarContas(conta1);
meuBanco.adicionarContas(contaPoupanca);

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
        conta1.sacar(valorSaque);
    }
    else if (opcao === 2) {
        let valorDeposito = Number(scanner("Digite o valor que deseja depositar: "));
        conta1.depositar(valorDeposito);
    }
    else if (opcao === 3) {
        console.log(`Seu saldo é R$${conta1.consultarSaldo()}`);
    }
    else {
        console.log("Opção Inválida!!");
    }
}

console.log("\nQual conta você deseja acessar??")
console.log("-------------------------------------------------------------");
const opcao = Number(scanner("[1] conta padrão - [2] conta poupança - [3] listar todas as contas: "));
console.log("-------------------------------------------------------------");
if (opcao === 1) {
    isContaNormal();
}
else if (opcao === 2) {
    isContaPoupaca();
}
else if (opcao === 3) {
    meuBanco.listarContas()
}
else{
    console.log("Opção inválida!!!")
}
console.log("-------------------------------------------------------------");