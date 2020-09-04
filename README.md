# Function masks

Function masks to be used by any variable, like inputs in a website

## Pre-requisites

- node

## Installing

> npm i --save function-masks

or with yarn

> yarn add function-masks

## Usage

```javascript
import { onlyNumberMask, maxLengthMask } from 'function-masks'

const string1 = 'string with some numbers 123'
console.log(onlyNumberMask(string1)) // -> Output: 123

const string2 = "string-with more digits than it's permitted"
console.log(maxLengthMask(6)(string2)) // -> Output: string
```

## Functions

|name          |parameters|description                     |
|--------------|----------|--------------------------------|
|onlyNumberMask|(value: string)     |Returns string with only numbers|
|cpfMask|(value: string)     |Returns string with cpf format '000-000-000-00'|
|maxLengthMask|(length: number)(value: string)     |Returns string with limited length|
|onlyCharactersMask|(value: string)     |Returns string with only characters and special characters|
|celphoneMask|(value: string)     |Returns string with celphone format '(00) 00000-0000'|
|telephoneMask|(value: string)     |Returns string with telephone format '(00) 0000-0000'|
|onlyNumberStringToThreeDigit|(value: string)     |Returns string with three digit dots format '0,000'|
|percentageMask|(value: string)     |Returns string with only integer percentage format '0%'|
|cardNumberMask|(value: string)     |Returns string with card format '0000 0000 0000 0000'|
|moneyMask|(value: string)     |Returns string with br money format 'R$ 0,00'|
|cepMask|(value: string)     |Returns string with cep format '00000-000'|
