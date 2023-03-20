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
let registeredCustomers: Array<customers> = [];
function register() {
  function registered() {
    let validCpf: string = prompt("Escreva seu CPF: ");
    
    if (validCpf.length === 11) {
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
    } else {
      console.log("cpf inválido");
      register();
    }
  }
  registered();
}
register();
