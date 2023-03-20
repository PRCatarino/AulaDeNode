import promptSync from "prompt-sync";
let prompt = promptSync();

interface customers {
  Cpf: string;
  Name: string;
  Age: number;
  MaritalStatus: string;
  Address: any;
  City: string;
  State: string;
}
let next: string;
let registeredCustomers: Array<customers> = [];
function register() {
  let validCpf: string = prompt("Escreva seu CPF: ");
  while (validCpf.length != 11) {
    console.log(`O cpf ${validCpf} é inválido`);
    next = prompt("deseja continuar: ");
    if (next == "sim") {
      validCpf = prompt("Escreva seu CPF: ");
    } else {
      return;
    }
  }
  let myClients: customers = {
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
