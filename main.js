////          1) На forEach:
//- Дан массив с числами. Создайте новый массив,
// состоящий из квадратов этих чисел
//- Дан массив с числами. Найдите сумму этих чисел.

const number = [1,2,3,4,5];
const  newArr = [];
number.forEach((item,idx,arr)=>{
    const num = item*item;
    newArr.push(num);
})
console.log(newArr)
// let num = 0;
// const number = [1,2,3,4,5];
// number.forEach((item,idx,arr)=>{
//      num = item + num;
// })
// console.log(num);

////          2) На map:
// - Дан массив с числами. Сделайте из него массив,
// состоящий из квадратов этих чисел.

// const numbers = [1,2,3];
// const nums = numbers.map(function (item){
//     return item * item
// })
// console.log(nums)


///           3) На reverse:
// - Дан массив с днями недели ['Понедельник', 'Вторник'...].
// Сделайте так, что он начинался с
// воскресенья и заканчивался понедельником.
// const weeks = ['Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресения'];
// weeks.reverse();
// console.log(weeks);

///          4) На split и join:
//- C помощью метода join превратить массив [3, 2, 1] в строку
// "3 больше, чем 2 больше, чем 1"
//- Дана строка 'я учу javascript!'. С помощью метода split
// запишите каждое слово этой строки в отдельный элемент массива.
//- В переменной date лежит дата в формате '2025-12-31'.
// Преобразуйте эту дату в формат '31.12.2025'.

// const  methods = [3,2,1];
// const qwerty = methods.join(' больше , чем ');
// console.log(qwerty);

// const  str = 'я учу javascript!';
// const asd = str.split(' ')
// console.log(asd);

// const date = '2025-12-31';
// const dateResalt = date.split('-').reverse().join('.');
// console.log(dateResalt);



///          5) На filter:
// - Дан массив с числами. Оставьте в нем только отрицательные числа.
// В отдельную переменную положите количество
// отрицательных чисел в этом массиве.
//- Дан массив со строками. Оставьте в нем только те строки,
// длина которых больше 5-ти символов.

// const numbers = [1,2,-3,-4,7,-2];
// const numFilter = numbers.filter(item =>{
//     if (item < 0){
//         return item;
//     }
// });
// const resalt = numFilter.length
// console.log(resalt);
// console.log((numFilter));

// const str = ['qwe', 'qwerty','qwertyu','qw'];
// const strLine = str.filter(item =>{
//     if (item.length > 5 ){
//         return item;
//     }
// });
// const qwerty = strLine.length
// console.log(qwerty);


