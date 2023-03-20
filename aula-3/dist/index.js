"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let registeredCustomers = [];
function register() {
    let cpf = prompt('escreva seu cpf: ');
    function registration() {
        if (cpf.length != 11) {
            console.log('CPF inválido');
            register();
        }
        else {
            let name = prompt('Escreva seu nome: ');
            let age = Number(prompt('Escreva sua idade: '));
            let maritalStatus = prompt('Escreva seu Estado Civil: ');
            let city = prompt('Escreva sua cidade: ');
            let State = prompt('Escreva seu estado: ');
            let address = Number(prompt('Escreva sua endereço: '));
            registeredCustomers.push({
                Cpf: cpf,
                Name: name,
                Age: age,
                MaritalStatus: maritalStatus,
                City: city,
                State: State,
                Address: address,
            });
            console.table(registeredCustomers);
        }
    }
    registration();
}
register();
