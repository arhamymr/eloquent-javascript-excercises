// my solutiion for fizzbuz answer

function fizzBuzz(start, end) {
    let current = [];
    if (start == (end + 1)) {
        return current;
    }
    if ((start % 3) == 0 && (start % 5) != 0) {
        current.push(`${start} can divisible by 3`);
    } else if ((start % 5) == 0 && (start % 3) != 0) {
        current.push(`${start} cam divisible by 5 and not divisible by 3 `);
    } else if ((start % 5) == 0 && (start % 3) == 0) {
        current.push(`${start} can divisible by 5 and 3`);
    } else {
        current.push(`${start} number not qualified`);
    }
    console.log(current)
    fizzBuzz(start + 1, end);
}
fizzBuzz(1, 100)
console.log(fizzBuzz(1, 100));

for (let line = "#"; line.length < 8; line += "#") {
    let arr = []
    arr.push(line);
    console.log(arr)
}

function loopTriangle(current) {
    let arr = []
    if (current.length == 8) {
        console.log("excuted");
        return arr;
    }
    arr.push(current)
    current += "#";
    console.log(arr)
    return loopTriangle(current);
}
console.log(loopTriangle("#"));

for (let n = 1; n < 9; n++) {
    let arr = []
    if (n % 2 == 0) {
        for (let o = 1; o < 9; o++) {
            arr.push((o % 2 == 0)
                ? " "
                : "#");
        }
    } else {
        for (let o = 1; o < 9; o++) {
            arr.push((o % 2 != 0)
                ? " "
                : "#");
        }
    }

    console.log(arr)
}
let result = "";
for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
        if ((x + y) % 2 == 0) {
            result += " ";
        } else {
            result += "#";
        }
    }
    result += "\n";
}

console.log(Math.min(3, 2))

function mathMin(a, b) {
    return a < b
        ? a
        : b;
}

function countBs(_string,counter = 0 ,result = "") {
    if (_string.length == counter) {
        return result;
    }
    if (_string[counter] == "B") {
        return countBs(_string,counter += 1, result += "B");
    }
    return countBs(_string,counter += 1,result);
}


console.log(countBs("Nothing To Do B B B Bwith B").length)

function isEvenRecursion(n) {
    if (n == 0) 
        return true;
    else if (n == 1) 
        return false;
    else if (n < 0) {
        console.log(isEvenRecursion(-n))
        return isEvenRecursion(-n);
    } else {
        // console.log(isEvenRecursion(n-2))
        return isEvenRecursion(n - 2);
    }
}

console.log(isEvenRecursion(38))
function isEvent(n) {
    return (n % 2 == 0)
        ? true
        : false;
}

console.log(isEvent(4))
console.log(mathMin(5, 3))

function _chessBoard(w, h, current) {
    current += "#";
    console.log(current.length);

    if ((w * h) == current.length) {
        return current.length
    }
    return _chessBoard(8, 8, current);
}
console.log(_chessBoard(8, 8, "#"));

function test(base) {
    return base * 2;
}
test(1);

console.log((function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        console.log(base)
        console.log(exponent)
        return base * power(base, exponent - 1)
    }
})(2, 3))

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2)
console.log(twice(5))
for (let n = 1; n <= 7; n++) {
    let arr = []
    for (let o = 1; o <= n; o++) {
        arr.push("#");
    }
    console.log(arr);
}
