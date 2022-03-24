function sumDigits(n) {
    let sum = 0;
    while (n>0) {
        digit = n % 10;
        sum += digit; //3+2+1
        n = (n - digit) / 10;
    }
    return sum;
}
console.log(sumDigits (123));

let sum1 = 0;
let num = 1234;
while (num>0) {
    sum1 += num%10;
    num/=10;
}
console.log(sum1);