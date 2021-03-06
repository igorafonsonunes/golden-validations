import { validateCpf } from '../cpf-validation';

describe('Testing CPFs', () =>{
    test('shold return true for this cpf without mask', ()=>{
        const cpf = '57723285060'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeTruthy();
    });

    test('shold return true for this cpf with mask', ()=>{
        const cpf = '577.232.850-60'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeTruthy();
    });

    test('shold return false for this cpf without mask', ()=>{
        const cpf = '68135841060'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeFalsy();
    });

    test('shold return false for this cpf with mask', ()=>{
        const cpf = '681.358.410-60'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeFalsy();
    });

    test('shold return false for this cpf without all numbers', ()=>{
        const cpf = '68141060'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeFalsy();
    });

    test('shold return false for this cpf with the wrong mask', ()=>{
        const cpf = '577232.850-60'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeFalsy();
    });
})