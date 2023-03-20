import promptSync from 'prompt-sync';
let prompt = promptSync();

interface customers{
    Cpf:string,
    Name:string,
    Age:number,
    MaritalStatus:string,
    Address:any,
    City: string,
    State: string
}

let registeredCustomers:Array<customers> = []



function register(){
    let cpf :string = prompt('escreva seu cpf: ');

    function registration(){
        if(cpf.length != 11){
            console.log('CPF inválido');
            register();
        }else{
        let name :string = prompt('Escreva seu nome: ');
        let age :number = Number(prompt('Escreva sua idade: '));
        let maritalStatus :string = prompt('Escreva seu Estado Civil: ');
        let city : string = prompt('Escreva sua cidade: ');
        let State : string = prompt('Escreva seu estado: ');
        let address:number = Number(prompt('Escreva sua endereço: '));
        registeredCustomers.push({
            Cpf:cpf,
            Name:name,
            Age:age,
            MaritalStatus:maritalStatus,
            City:city,
            State:State,
            Address:address,
        })
        console.table(registeredCustomers)
        }
    }
    registration();
}

register();