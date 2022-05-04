// ECMAScript
// ECMAScript 2015 - ES6+

// 1. Let, const
// const name = 'Khrystyna'
//
// function sayHello() {
//   const name = 'name2'
//   console.log(name)
// }
//
// console.log(name)

// 2. Arrow function () => {}
// 3. Class - for future
// 4. Promises - for future
// 5. Symbol
// 6. String - startsWith(), endsWith()
// 7. New Math methods
// 8. isInfinity, isNaN

// 9. Modules, import export
// Дозволяють розбивати код на декілька файлів
// import { fileName, getName } from "./get-name"
// import country from "./get-name"

// console.log(fileName)

// 10. new Map, new Set

// Map - колекція ключ/значення, подібне до об`єкту, ключі можуть бути будь-якого типу даних
// const map = new Map()
// const obj = { name: 'Khrystna' }
// map.set(true, 'sss').set(obj, [1,2,3]).set(1, undefined)
// const firstValue = map.get(true)
// console.log(firstValue)
// console.log(map.has(obj)) // true
// map.delete(1)
// map.clear()
// console.log(map.size)
// console.log(map)

// map[1] - НЕПРАВИЛЬНО
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// Set - унікальні значення
// const set = new Set()
// const obj = { name: 'aaaa' }
// set.add(1).add(2).add('sss').add(obj).add(obj).add(1).add(5).add('asdfs')
// set.delete(1)
// console.log(set.has(obj))
// set.clear()
// console.log(set.size)
// console.log(set)

// console.log(set.entries())
// set.forEach((item) => {
//   console.log('item', item)
// })

// const arr = [1, 1, 1, 4, 3, 5, 7, 4, 3, 3, 3, 7, 7]
// console.log(new Set([...arr]))

// let obj = { name: 'John' }
// const newObj = { copy: obj }
// obj = null // стає недосяжна
// Стирається з пам`яті


//WeakMap - ключі тільки об`єкти, слабкі посилання
// get, set, delete, has

// let obj = { name: 'Khrystyna' }
// let obj2 = { age: 21 }
// const weakMap = new WeakMap()
// weakMap.set(obj, obj2).set(obj2, obj)

// obj = null
// obj2 = null

// WeakSet - тільки об`єкти, слабкі посилання
// add, has, delete

// const weakSet = new WeakSet()
// weakSet.add(obj).add(obj2)

// obj = null
// obj2 = null
// 11. Destructuring - деструктуризація
// Дозволяє розпакувати певні дані з об`єкта або масива в змінні

// const arr = ['Khrystyna', 'Styslo']
// let [firstName, lastName] = arr
//
// console.log(`First name is ${arr[0]}, last name is ${arr[1]}`)
// console.log(`First name is ${firstName}, last name is ${lastName}`)

// const arr = ['str1', false, 1, 'str2', null, true]
// let [str, ,number] = arr
// console.log(str, number)

// Rest - залишок
// let [str, bool, ...rest] = arr
// console.log(str, bool, rest)

// const obj = {
//   name: 'Khrystyna',
//   lastName: 'Styslo',
//   city: 'Lviv',
//   age: 21,
//   birth: {
//     day: 4,
//     month: 2,
//     year: 2001,
//   },
// }

// const { city: c, age: a, birth: { day, month } } = obj
// console.log(day, month)
// console.log(firstName, a, c, objRest)
// let { city, age, name } = obj

// obj.name
// obj.birth.day

// Spread operator - розширення
// const arr = [2, 12, 45, 3, 76, 9, 50]
// console.log(...arr, arr)
// console.log(Math.max(...arr))
// console.log(Math.max(arr[0], arr[1], arr[2] ...))
// Math.max(2, 12, 45 ...)

// Об`єднювати
// const arr1 = [1, 2, 3]
// const arr2 = ['str', 'ssss', 'hhhh']

// const mergedArrays = arr1.concat(arr2)
// const mergedArrays = [...arr1, ...arr2]
// const mergedObj = { ...obj1, ...obj2 }
// console.log(mergedArrays)

// Копіювання
// const obj = { number: 1, string: 'str' }
// const copyObj = { ...obj }

// copyObj['bool'] = true
// console.log(obj, copyObj)

// const arr = [1, 2, 3, 4]
// const copyArr = [...arr]

// copyArr.push(5)
// console.log(arr, copyArr)
// 12. Default parameters in function
// function getMessage(name = '', text = 'default text') {
//   alert(`${name} says: ${text}`)
// }

// getMessage('Khrystyna', 'hello')
// getMessage()
// 13. Args in function
// function getSum(...args) {
//   alert(args.reduce((total, cur) => total + cur, 0))
// }
//
// getSum(2, 4, 6, 8, 9, 10, 8, 34, 90)
