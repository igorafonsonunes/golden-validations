# Golden Validations
```
Esta é uma biblioteca que tem com o ituito facilitar a vida dos programadores
ao realizar algumas validações do dia a dia. Atualmente esta biblioteca faz a validação
apenas do CPF.

Existem outras validações que já estou em desenvolvimento, como por exemplo a de CNPJ.
E em breve ela também poderá ser utilizada por vocês. 

A biblioteca é coberta por testes e o seu desenvolvimento está sendo feito com o 
conceito do TDD.

A ideia deste projeto é para ajudar a comunidade, proporcionando uma lib de facil uso, 
e também aperfeiçoar os meus conhecimentos em typescript e em desenvolvimento em geral. 
```

## 1 - Instalando
```
Para fazer a instalação deste pacote npm no seu projeto execute a linha de 
código abaixo:

$ npm i golden-validations
```
### CPF:
```
Para utilizar o método que faz a validação do CPF no seu projeto você simplesmente precisa
fazer o import da função validateCpf a partir da biblioteca golden-validations.

JS: 
var { validateCpf } = require("golden-validations");

TS:
import {validateCpf} from 'golden-validations';
```