import './style.css'

// Запросите у пользователя число, возведите это число во
// 2-ю степень и выведите на экран.
// let input = prompt('Введите число', '0') 
// alert(input**2)

// Запросите у пользователя 2 числа и выведите среднее ариф-
// метическое этих чисел.
// let input = parseFloat( prompt('Введите число', '0') as string)
// let inputT = parseFloat( prompt('Введите число', '0') as string)
// alert((input + inputT)/2)

// зфдфние 3

// let user = prompt('Введите число', '0' )
// alert ( user * user)

// задание 4

// let input = prompt('Введите количесво километров', '0')
// const mili = 0.621371
// alert (input * mili)

// задача 5

// let input = parseFloat( prompt( 'Введите число', '0') as string)
// let inputT = parseFloat( prompt('Введите число', '0') as string)

// alert(`${input + inputT} ${input - inputT} ${input * inputT} ${input / inputT}`)

// Зфдача 6

// let a = parseFloat(prompt('Введите число ','0') as string)
// let b = parseFloat(prompt('Введите число ','0') as string)

// alert(-b/a)

// Задача 7
// const tipH = 24
// const tipM = 60
// let hours = parseFloat(prompt('Введите текущий час ','0') as string)
// let minutes = parseFloat(prompt('Введите текущие минуты ','0') as string)
// let h = parseInt(`${(tipH*60-hours*60-minutes)/60}`)
// alert(`часов ${h}
// минут ${tipM-minutes}`)



// // Задание 1

// let name = prompt('Введите имя','')
// alert(`Привет, ${name}`)

// Задание 2

// const NowYear = 2023
// let BirthYear = prompt('Введите год своего рождения','')
// alert(NowYear - BirthYear)

// Задание 3

// let Square = prompt('Ввидите длину стороны квадрата','')
// alert(Square * 4)

// Задача 4

// let radius = prompt('Ввидите радиус окружности','')
// alert(3.14 * (radius**2))

// Задание 5

// let distance = prompt('Ввидите кол-во км между городами(в км)','')
// let time = prompt('Видите планируемое время поездки(в часах)','')
// alert(distance / time)

// Задание 6

// const eur = 1.12
// let usd = prompt('Введите сумму в $','')
// alert(usd/eur)

// Задание 7

// const file = 820
// let flash = prompt('Ввидите объем памяти в Гб','')
// let size = Math.round(flash * 1024 / file)
// alert(size);

// Задание 8

// let purse = prompt('Введите сумму в кошельке','')
// let chocolate = prompt('Введите стоймость одной плитки шоколада','')
// let size = Math.round(purse/chocolate)
// alert(`можешь купить шоколадок ${size}
// останется сдачи ${purse-(size*chocolate)}`)

// Задача 9




// Задание 10

// let a = prompt('Введите целое число','')
// alert(( a % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");



// let login = prompt('Кто там?')











// // Задача 1

// let intNumb = parseFloat( prompt('Ввидите число', '2')as string)
// if (intNumb > 0) {
//     alert( 1 )
// }
// else if ( intNumb < 0) {
//     alert( -1)
// }
// else {
//     alert ( 0 )
// }


// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

// let ageInt = parseFloat( prompt('Ввидите возраст','2') as string)
// if (ageInt<=12){
//     alert('ребенок')
// }
// else if (ageInt<=18){
//     alert('подросток')
// }
// else if (ageInt<=60){
//     alert('Взрослый')
// }
// else {
//     alert('Сыпишся')
// }

// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).


// let numberInt = parseFloat( prompt('Ввидите число 0-10') as string)
// switch( numberInt){
//     case 1: 
//         alert('!')
//     break
//     case 2:
//         alert('@')
//     break
//     case 3:
//         alert('#')
//     break
//     case 4:
//         alert('$')
//     break
//     case 5:
//         alert('%')
//     break
//     case 6:
//         alert('^')
//     break
//     case 7:
//         alert('&')
//     break
//     case 8:
//         alert('*')
//     break
//     case 9:
//         alert('(')
//     break
//     default:
//         alert('зы сыс')
// }





// const number = +(prompt('Введите число между 0 и 3', '') as string)
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0')
//     break
//   case 1:
//     alert('Вы ввели число 1')
//     break
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, a может 3')
//     break
// }
// let age = +prompt('введите число','')
// if (age >=14 && age<=90){
//   alert(1)
// }
//  else if (!(age >=14 && age<=90))
// {alert(false)}

// if(age< 14 || age >90)
// {alert(3)}

// let age = +prompt('введите число','')
// if (age <=14 || age>=90)
// alert(true)



// let monthInt = +prompt('Введите номер месяца', '')
// switch (monthInt) {
//   case 1:
//     alert('январь')
//     break
//   case 2:
//     alert('февраль')
//     break
//   case 3:
//     alert('март')
//     break
//   case 4:
//     alert('фпрель')
//     break
//   case 5:
//     alert('май')
//     break
//   case 6:
//     alert('июнь')
//     break
//   case 7:
//     alert('июль')
//     break
//   case 8:
//     alert('фвгуст')
//     break
//   case 9:
//     alert('сентябрь')
//     break
//   case 10:
//     alert('октябрь')
//     break
//   case 11:
//     alert('ноябрь')
//     break
//   case 12:
//     alert('декабрь')
//     break
//     default:
//       alert("пока")
// }

// Реализовать калькулятор. Пользователь вводит 2 числа и
// знак (+ - * /). В зависимости от введенного знака решить
// пример и вывести результат.

// let a = +(prompt('Введите первое число', '1') as string)
// let b = +(prompt('Введите второе число', '5') as string)
// let c = prompt('Введите знак (+ - * /)', '+')
// switch (c) {
//   case '+':
//     alert(a + b)
//     break
//   case '-':
//     alert(a - b)
//     break
//   case '*':
//     alert(a * b)
//     break
//   case '/':
//           alert(a / b)
//     break
//     default:
//       alert()
// }


// Запросить 2 числа и вывести большее из них.

// let a = +prompt('Введите первое число','')
// let b = +prompt('Введите втрое число','')
// let c =






// let i= 0
// while(i < 3){
//     alert( `number ${i}!` );
//     i++
// }



// let i = 0
// while (i<=100){
//     i = +(prompt('Ввидите число больше 100','') as string);
//     if (!i) break;
// }





// while(false){
//     console.log('выполниться только раз, так как break')
//     break
// }



// let n = 10
// for( let i= 2; i<=n;i++){
//     let isSimple = true
//     for(let j = 2; j<i; j++){
//         if(i%j){
//             isSimple = false
//             break
//         }
//     }
// }


// 1.Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.

// let a= +(prompt('Введите первое число диапозона','') as string)
// let b = +(prompt('Введите второе число диапозона','') as string)
// let sum = 0

// while(a<= b){
//     sum+=a
//     a++
// }
// alert(sum)



// 2.Запросить 2 числа и найти только наибольший общий
// делитель.

// let a= +(prompt('Введите перове число','')as string)
// let b = +(prompt('Введите второе число','')as string)




// 3.Запросить у пользователя число и вывести все делители
// этого числа.

// let a= +(prompt('Ввидите число','') as string)


let uName = "";
let toDos = []
const appDiv = document.getElementById('app')

function render() {
    let isLogin = uName
    if (appDiv) appDiv.innerHTML = ''
    const pElement = document.createElement('p')
    pElement.textContent =uName ? `${uName}, Добро пожаловать`: `Добро пожаловать на сайт`
    
    let phrase = ""
    if (uName){
        phrase = uName + 'Добро пожаловать'
    } else {
        phrase = "Добро пожаловать на сайт"
    }
    if (appDiv) appDiv.appendChild(pElement)
    
    
    const button = document.createElement('button')
    button.textContent = isLogin ? 'LogOut' : 'Login'
    button.addEventListener('click',()=>{
        uName = isLogin ? '' : 'Aleksei'
        toDos = isLogin ? [] : ['проснуться','позавтракать','умыться','рфботать','лечь спать']
        render()
    })
    if (appDiv) appDiv.appendChild(button)
    if (isLogin){
        const olElement = document.createElement('ol') 
        for (let i=0;i<toDos.length;i++){
            const listElement = document.createElement('li')
            listElement.textContent = toDos[i]
            olElement.appendChild(listElement)
        }
        if (appDiv) appDiv.appendChild(olElement)
    }
}
render()