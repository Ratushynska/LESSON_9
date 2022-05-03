//-   створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
    let mas = [5,5,0,1];
    let f = (array) => {
        let sum = 0;
        for (const i of array) {
            sum += i;
        }
        return sum/array.length;
    }
    console.log (f(mas))
*/
/*-   створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, 
    а виводить найбільше (Math використовувати заборонено);*/
/*
    let f = (...numbers) => {
        let min = numbers[0];
        let max = numbers[0];
        for (const i of numbers) {
            if (i < min) {
                min = i
            }
            else if (i>max) {
                max = i
            }
        }
        console.log (max);
        return min;
    }
    
    console.log(f(1,2,3,4,5,6,7,8,9))
*/    
/*-   створити функцію яка заповнює масив рандомними числами
    (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) 
    та виводить його.*/
/*
    let f = () => {
        let array = [];
         for (let i=0; i<5; i++) {
            array.push(Math.round(Math.random()*100));
         }
        console.log(array)
    }

    f()
*/
/*-   створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. 
    limit - аргумент, який характеризує кінцеве значення діапазону.*/
/*
    let f = (limit) => {
        let array = [];
         for (let i=0; i<limit; i++) {
            array.push(Math.round(Math.random()*100));
         }
        console.log(array)
    }

    f(5)
*/
/*-   Функція приймає масив та робить з нього новий масив в зворотньому порядку. 
    [1,2,3] -> [3, 2, 1].*/
/*
    let array = [1,2,3,4,5,6,7,8,9];
    let f = (arr) => {
        reversArray = [];
        for (let i = arr.length-1; i>=0; i--) {
            reversArray.push(arr[i])
        }
        console.log(reversArray)
    }
    f(array)
*/
//-   створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями. 
/*
    let array = [{numb: 1},
                {numb: 2}];
    
    let f = (arr) => {
        reversArray = [];
        for (let i = arr.length-1; i>=0; i--) {
            reversArray.push(arr[i])
        }
        console.log(reversArray)
    }
   
    f(array)
*/


//Переробити на стрілочні функції з попереднього дз
//-   створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*
    let s = (a,b) => a*b;

    console.log (s(10,5))
*/
//-   створити функцію яка обчислює та повертає площу кола з радіусом r
/*
    let s = (r) => Math.PI * Math.pow(r, 2);

    console.log (s(15))
*/
//-   створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*
    let s = (r,h) => 2*Math.PI*r*h;

    console.log (s(4,6))
*/
//-   створити функцію яка приймає масив та виводить кожен його елемент
/*        
    let randomWords = ['picture','book','lamp','tree'];

    let f = (array) => {
        for (const i of array) {
            console.log(i);
        }
    };

    console.log(f(randomWords))
*/        
//-   створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*
    let f = (text) => document.write(`<p>${text}</p>`);

    f('qwertyuiopasdfghjlzxcvbnm');
*/
/*-   створити функцію яка створює ul з трьома елементами li. 
    Текст li задати через аргумент всім однаковий*/
/*
    let f = (x) => document.write (`<ul> <li>${x}</li> <li>${x}</li> <li>${x}</li> </ul>`);

    f('hello');
*/
/*-   створити функцію яка створює ul з трьома елементами li. 
    Текст li задати через аргумент всім однаковий. 
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
/*
    let f = (x,num) => {
        document.write ('<ul>');
            for (let i=0; i<num; i++) {
                document.write(`<li>${x}</li>`);
            }
        document.write ('</ul>')
    }
            
    f('hello',3);
*/
/*-   створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), 
    та будує для них список*/
/*
    let mass = ['hello',1234,true];
    let f = (array) => {
        for (let i=0; i<array.length; i++) {
            document.write (`<li>${array[i]}</li>`);
        }
    }

    f(mass)
*/
/*-   створити функцію яка приймає масив об'єктів з наступними полями 
    id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
/*
   let randomArray = [ {id:12345, name:'artur', age:24},
                        {id:85214, name:'anna', age:21},
                        {id:65412, name:'olga', age:23}];
    let f = (array) => {
        for (const i of array) {
            document.write (`<div>${i.id} ${i.name} ${i.age}</div>`);
        }
    }
    
    f(randomArray)
*/
//-   створити функцію яка повертає найменьше число з масиву
/*
    let mass = [25,52,21,0,1];
    let f = (array) => {
        let minNumb = array[0];
            for (const i of array) {
                if (i < minNumb) {
                    minNumb = i
                }
            }
        return minNumb
    }

    console.log (f(mass))
*/
/*-   створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. 
    Приклад [1,2,10]->13*/
/*
    let mass = [1,2,3];
    let f = (array) => {
        let sum = 0;
            for (const i of array) {
                sum += i
            }
        return sum
    }

    console.log (f(mass))
*/
