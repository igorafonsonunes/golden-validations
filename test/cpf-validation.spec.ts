import { validateCpf, removeMask, verifyNumbersEquals } from '../src/cpf-validation';

describe('Testing validateCpf', () =>{
    test('shold return true for this cpf without mask', ()=>{
        const cpf = '57723285060'; 
        const validation = validateCpf(cpf);
        expect(validation).toBeTruthy();
    });

    test('shold return true for this cpf with mask', ()=>{
        const cpf = '886.386.440-35'; 
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
});

describe('Testing verifyNumbersEquals' , () =>{
    test('shold return false for this number: 00000000000', () => {
        const cpf = '00000000000';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 11111111111', () => {
        const cpf = '11111111111';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 22222222222', () => {
        const cpf = '22222222222';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 33333333333', () => {
        const cpf = '33333333333';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 44444444444', () => {
        const cpf = '44444444444';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 55555555555', () => {
        const cpf = '55555555555';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 66666666666', () => {
        const cpf = '66666666666';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 77777777777', () => {
        const cpf = '77777777777';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 88888888888', () => {
        const cpf = '88888888888';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return false for this number: 99999999999', () => {
        const cpf = '99999999999';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeFalsy();
    });
    test('shold return true for this number: 99999989999', () => {
        const cpf = '99999989999';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeTruthy();
    });
    test('shold return false for this number: 99999659999', () => {
        const cpf = '99999659999';
        const result = verifyNumbersEquals(cpf);
        expect(result).toBeTruthy();
    });
});

describe('Testing removeMask',() =>{
    test('shold return true for this cpf with mask', ()=>{
        const cpf = '577.232.850-60'; 
        const validation = removeMask(cpf);
        expect(validation === '57723285060').toBeTruthy();
    });

    test('shold return false for this cpf without correct mask', ()=>{
        const cpf = '886.386.44035'; 
        const validation = removeMask(cpf);
        expect(validation === '88638644035').toBeFalsy();
    });
});