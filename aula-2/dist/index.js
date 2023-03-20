"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let registered = [];
;
let Name = prompt('Digite Seu Nome: ');
let Email = prompt('Digite Seu Email: ');
let Age = Number(prompt('Digite Seu Idade:'));
let Sex = prompt('Digite Seu Sex: ');
registered.push({ name: Name, email: Email, age: Age, sex: Sex });
console.table(registered);
