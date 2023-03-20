import promptSync from 'prompt-sync';
let prompt = promptSync();

interface Register{
    name:string,
    email:string,
    age:number,
    sex:string
}
let registered:Array<Register> = [ ];;

let Name:string = prompt('Digite Seu Nome: ');
let Email:string = prompt('Digite Seu Email: ');
let Age:number = Number(prompt('Digite Seu Idade:'));
let Sex:string = prompt('Digite Seu Sexo: ');

registered.push({name:Name, email:Email, age:Age,sex:Sex});


console.table(registered);
