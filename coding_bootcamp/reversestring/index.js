// 1)
//
//function reverse(str) {
//    const arr = str.split('');
//    arr.reverse();
//    return arr.join('');
//}

//module.exports = reverse;

//----------------------------------------------

// 2)
//
//function reverse(str) {
//    return str
//        .split('')
//        .reverse()
//        .join('');
//}

//module.exports = reverse;

//----------------------------------------------

// 3)
//
function reversed(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

module.exports = reversed;