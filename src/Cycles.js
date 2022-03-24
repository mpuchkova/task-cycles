/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/

export function rangeSum(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            count += i;
        }
    }
    return count;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let count_cycle = 0;
    while (a > 0.1) {
        a = a / 2;
        count_cycle++;
    }
    return count_cycle;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let number = 0;
    let output = '';
    do {
        if ((1 + number) % 3 != 0) {
            output += message[number];
        } else {
            output += '_';
        }
        number++;
    } while (number < message.length);
    return output;
}
