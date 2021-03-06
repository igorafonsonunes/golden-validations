export function validateCpf(cpf: string): boolean {
    if (cpf) {
        cpf = removeMask(cpf);
        const cpfBroked: Array<number> = cpf.split('').map(x => +x);
        let countValidation: number = cpfBroked[0] * 10 + cpfBroked[1] * 9 + cpfBroked[2] * 8
            + cpfBroked[3] * 7 + cpfBroked[4] * 6 + cpfBroked[5] * 5 + cpfBroked[6] * 4
            + cpfBroked[7] * 3 + cpfBroked[8] * 2;
        let restOfDivision = countValidation * 10 % 11;

        if (restOfDivision === cpfBroked[9]) {
            countValidation = cpfBroked[0] * 11 + cpfBroked[1] * 10 + cpfBroked[2] * 9
                + cpfBroked[3] * 8 + cpfBroked[4] * 7 + cpfBroked[5] * 6 + cpfBroked[6] * 5
                + cpfBroked[7] * 4 + cpfBroked[8] * 3 + cpfBroked[9] * 2;

            restOfDivision = countValidation * 10 % 11;
            if (restOfDivision === 10 && 0 === cpfBroked[10] || restOfDivision === cpfBroked[10]) {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    }
    return false;
}

function removeMask(cpf: string): string {
    if (cpf.includes('.') && cpf.includes('-')) {
        if (cpf.split('.').length === 3 && cpf.split('-').length === 2) {
            cpf = cpf.split('.')[0] + cpf.split('.')[1] + cpf.split('.')[2];
            cpf = cpf.split('-')[0] + cpf.split('-')[1];
        }
    }
    return cpf;
}