export function getId(value) {
    switch (value) {
        case '/':
        return 'divide';
        case '*':
        return 'multiply';
        case '-':
        return 'subtract';
        case '+':
        return 'add';
        case '7':
        return 'seven';
        case '8':
        return 'eight';
        case '9':
        return 'nine';
        case '4':
        return 'four';
        case '5':
        return 'five';
        case '6':
        return 'six';
        case '2':
        return 'two';
        case '3':
        return 'three';
        case '0':
        return 'zero';
        case '.':
        return 'decimal';
        case '=':
        return 'equals';
        case 'Clear':
        return 'clear';
        case '1':
        return 'one';
        default:
        return null;
    }
}