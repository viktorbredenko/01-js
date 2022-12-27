const polindrom = (str) => {
    str = str.toLocaleLowerCase().split('').reverse().join('')

    return str == str.split('').reverse().join('');

}

console.log(polindrom('oloy'))