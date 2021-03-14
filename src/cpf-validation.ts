export function validateCpf(cpf: string): boolean {
    if (cpf) {
        cpf = removeMask(cpf);
        if (verifyNumbersEquals(cpf)) {
            const cpfBroked: Array<number> = cpf.split('').map(x => +x);
            return makeCalculation(cpfBroked);
        }
    }
    return false;
};

export function removeMask(cpf: string): string {
    if (cpf.includes('.') && cpf.includes('-')) {
        if (cpf.split('.').length === 3 && cpf.split('-').length === 2) {
            cpf = cpf.split('.')[0] + cpf.split('.')[1] + cpf.split('.')[2];
            cpf = cpf.split('-')[0] + cpf.split('-')[1];
        }
    }
    return cpf;
};

export function verifyNumbersEquals(cpf: string): boolean {
    const arrayNumbers: Array<string> = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ];

    let verifyMapper: boolean = true;
    arrayNumbers.map(number => {
        if (number === cpf)
            verifyMapper = false;
    });

    return verifyMapper;
};

export function makeCalculation(cpf: Array<number>) {
    let countValidation: number = 0;
    let count: number = 10;
    cpf.map(numbers => {
        if (count >= 2) {
            countValidation = countValidation + (numbers * count);
            count = count - 1;
        }
    });

    let restOfDivision = countValidation * 10 % 11;
    if (restOfDivision === cpf[9]) {
        count = 11;
        countValidation = 0;
        cpf.map(numbers => {
            if (count >= 2) {
                countValidation = countValidation + (numbers * count);
                count = count - 1;
            }
        });

        restOfDivision = countValidation * 10 % 11;
        if (restOfDivision === 10 && 0 === cpf[10] || restOfDivision === cpf[10])
            return true;
    }
    return false;
};