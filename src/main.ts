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


let numberInt = parseFloat( prompt('Ввидите число 0-10') as string)
switch( numberInt){
    case 1: 
        alert('!')
    break
    case 2:
        alert('@')
    break
    case 3:
        alert('#')
    break
    case 4:
        alert('$')
    break
    case 5:
        alert('%')
    break
    case 6:
        alert('^')
    break
    case 7:
        alert('&')
    break
    case 8:
        alert('*')
    break
    case 9:
        alert('(')
    break
    default:
        alert('зы сыс')
}
