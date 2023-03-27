import express from 'express';

const app = express();
const port = 3000;

const json = [
  {
    'titulo': 'JSON x XML',
    'resumo': 'o duelo de dois modelos de representação de informações',
    'ano': 2012,
    'genero': ['aventura', 'ação', 'ficção']
  },
  {
    'titulo': 'JSON James',
    'resumo': 'a história de uma lenda do velho oeste',
    'ano': 2012,
    'genero': ['western']
  }
];

app.get('/', (req, res) => {
  res.send(json);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
