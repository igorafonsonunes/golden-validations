import {validateCpf} from '../src/cpf.validation';

describe('Testing CPFs', () =>{
    test('shold return true for this cpf', ()=>{
        const cpf = '57723285060'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeTruthy();
    })
})