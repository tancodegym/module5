function fibonaci(n) {
    if (n <= 0) {
        return -1;
    }
    else if (n == 0 || n == 1) {
        return n;
    }
    else {
        return fibonaci(n - 1) + fibonaci(n - 2);
    }
}
var sum = 0;
for (var i = 2; i <= 11; i++) {
    console.log(fibonaci(i));
    sum += fibonaci(i);
}
console.log("Tổng của 10 số fibonaci đầu tiên là : " + sum);
