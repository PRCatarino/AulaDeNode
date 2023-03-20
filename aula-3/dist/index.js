"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let next;
let registeredCustomers = [];
function register() {
    let validCpf = prompt("Escreva seu CPF: ");
    while (validCpf.length != 11) {
        console.log(`O cpf ${validCpf} é inválido`);
        next = prompt('deseja continuar: ');
        if (next == 'sim') {
            validCpf = prompt("Escreva seu CPF: ");
        }
        else {
            return;
        }
    }
    let myClients = {
        Cpf: validCpf,
        Name: prompt("Escreva seu nome: "),
        Age: Number(prompt("Escreva seu idade: ")),
        MaritalStatus: prompt("Escreva seu Estado Civil: "),
        Address: prompt("Escreva sua endereço: "),
        City: prompt("Escreva sua cidade: "),
        State: prompt("Escreva seu estado: "),
    };
    registeredCustomers.push(myClients);
    console.table(registeredCustomers);
}
register();
