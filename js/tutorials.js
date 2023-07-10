// single comment

/*
multiple comment
*/

// console.log("loglama")
// console.info("info")
// console.error("error")
// console.warn("warn")
//
// alert("pop-up bilgilendirme-1")
// window.alert("pop-up bilgilendirme-2")
//
// document.writeln("ekrana yazı yazdır")
// window.document.writeln("ekrana yazı yazdır")

// Variable
// var result = "JS öğreniyorum"
// console.log(typeof result + " -> " + result)
//
// var result = 4423
// console.log(typeof result + " -> " + result)
//
// var result = 44.23
// console.log(typeof result + " -> " + result)
//
// var result = true
// console.log(typeof result + " -> " + result)


// Naming Convention
// var deneme = "JS Data"
// console.log(deneme)
//
// var deneme23 = "JS Data"
// console.log(deneme23)
//
// var $deneme = "JS Data"
// console.log($deneme)
//
// var _deneme = "JS Data"
// console.log(_deneme)
//
// // var &~deneme = "JS Data"  // hatalı


// Whoisting
// result2=23
// var result2;
// console.log(result2)


// Operators
/*

+ - * ** / %

! Değil
&& ve
|| veya

x++
x--
++x
--x

=    atama
==   eşit (türüne bakma)
===  eşit (türüne bak)

*/

// var number1 = 40;
// var number2 = 5;
//
// console.log(number1 + number2)
// console.log(number1 - number2)
// console.log(number1 * number2)
// console.log(number1 / number2)
// console.log(number1 % number2)


// Cast
// var userData = Number(prompt("Lütfen bir sayı giriniz: "))
// console.log(userData)
// console.log(userData + 45)


// undefined
// var result3;
// console.log(result3)
//
// // NaN: Not a Number
// var result4 = "abc"/23
// console.log(result4)
//
// // isNaN
// var result5 = 23
// console.log(isNaN(result5))  // false (sayıdır)
//
// // Infinity
// console.log(3/0)


// Math
// console.log(Math.PI)
// console.log(Math.E)
//
// console.log(Math.min(3,5,1,9,37,21,8))
// console.log(Math.max(3,5,1,9,37,21,8))
//
// console.log(Math.sqrt(64))
// console.log(Math.abs(-64))
// console.log(Math.pow(4,3))
//
// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.1))
// console.log(Math.round(6.4))
// console.log(Math.round(6.5))


// Number
// var sayi1 = 15000
// console.log(sayi1)
//
// var sayi2 = 1.5E+4
// console.log(sayi2)
//
// // binary, octal, decimal, hexadecimal
//
// // binary: 0 1
// var binary = 0b000111
// console.log(binary)
//
// // octal: 0 1 2 3 4 5 6 7
// var octal = 0o7632
// console.log(octal)
//
// // decimal: 0 1 2 3 4 5 6 7 8 9
// var decimal = 1234
// console.log(decimal)
//
// // hexadecimal: 0 1 2 3 4 5 6 7 8 9 A B C D E F
// var hexadecimal = 0xffa
// console.log(hexadecimal)


// Cast
// console.log(Number("20") + 10)
// console.log(parseInt("20") + 10)
//
// console.log(String(20) + 10)
// var number = 20
// console.log(number.toString() + 10)


// var let const
// var data1 = 11
// console.log(data1)
//
// var data1 = 22
// console.log(data1)
//
// let data2 = 33
// console.log(data2)
//
// // let data2 = 33  // hata verir çünkü let datalar tekrarlanamaz
// let data3 = 33
// data3 = 44
// console.log(data3)
//
// const data4 = 55
// // data4 = 32 // hata verir çünkü const datalar değiştirilemez
// console.log(data4)


// String
// let str = "Js öğreniyorum Js "
// console.log(str)
// console.log(str.length)
// console.log(str.trim())
// console.log(str.trim().length)
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
//
// console.log(str.charAt(1))
// console.log(str.indexOf("Js"))
// console.log(str.lastIndexOf("Js"))
//
// console.log(str.concat("sona ekle"))
// console.log(str.replace(str, "değiştir"))
//
// console.log(str.substring(1))
// console.log(str.substring(0,4))


// Functions

// Normal Function
// function normal() {}
// normal()
//
// function returnsuzParametresiz() {
//     console.log("returnsuzParametresiz")
// }
// returnsuzParametresiz()
//
// function returnsuzParametreli(adi) {
//     console.log("returnsuzParametreli -> " + adi)
// }
// returnsuzParametreli("Abdulhakim")  // Argüman: Abdulhakim
//
// function returnluParametresiz() {
//     return "returnluParametresiz"
// }
// let result = returnluParametresiz()
// console.log(result)
//
// function returnluParametreli(soyadi) {
//     return "returnluParametreli -> " + soyadi
// }
// let result2 = returnluParametreli("KAYA")
// console.log(result2)
//
//
// // Anonymous Function
// let anonymous = function () {}
// anonymous()
//
// // Arrow Function
// let arrow = () => {}
// arrow()


// Immedia Function ()();
// (function () {
//     console.log("Immedia Function")
// })();

// Conditions
// const condition=()=>{
//     let number = 5
//     if (number>=3){
//         console.log("sayı büyüktür")
//     }
//     else {
//         console.log("sayı küçüktür")
//     }
// }
// condition()
//
// const condition2=()=>{
//     let number = 5
//     if (number>=3)
//         console.log("sayı büyüktür")
//     else
//         console.log("sayı küçüktür")
// }
// condition2()
//
// const condition3=()=>{
//     let number = 5
//     let result = (number>=3) ? "sayı büyüktür" : "sayı küçüktür"
//     console.log(result)
// }
// condition3()
//
// const condition4=()=>{
//     let number = 5
//     if (number===1){
//         console.log("1")
//     }
//     else if(number===2){
//         console.log("2")
//     }
//     else if(number===3){
//         console.log("3")
//     }
//     else if(number===4){
//         console.log("4")
//     }
//     else{
//         console.log("0 < sayı < 5 aralığında değildir")
//     }
// }
// condition4()
//
// const condition5=()=>{
//     let number = 5
//     // break -> döngü kırmak
//     // return -> metot kırmak
//     // continue -> 1 kerelik es geç sonra döngüye devam et
//     switch (number) {
//         case 1:
//             console.log("1")
//             break
//         case 2:
//             console.log("2")
//             break
//         case 3:
//             console.log("3")
//             break
//         case 4:
//             console.log("4")
//             break
//         default:
//             console.log("0 < sayı < 5 aralığında değildir")
//             break
//     }
// }
// condition5()
//
// let isOddEven=()=>{
//     const number = 4
//     const result = (number %2=== 0) ? "çifttir" : "tektir"
//     console.log(result)
// }
// isOddEven()


// Loops
// let loop = () => {
//     for (let i = 0; i < 10; i++) {
//         document.writeln(i + " ")
//     }
// }
// loop()
// document.writeln("<br/>")
//
// let loop2 = () => {
//     let number = 1
//     while (number <= 10) {
//         document.writeln(number + " ")
//         number++
//     }
//
// }
// loop2()
// document.writeln("<br/>")
//
// let loop3 = () => {
//     let number = 1
//     do {
//         document.writeln(number + " ")
//         number++
//     }
//     while (number >= 10)
//
// }
// loop3()


// try catch
// let tryCatchTutorial = () => {
//     try {
//         alertx("deneme")
//     }
//     catch (error){
//         console.log("hata mesajı: " + error.message)
//         console.log("hata mesajı: " + error.name)
//         console.error(error)
//     }
//     finally {
//         console.log("db.close")
//         console.log("port.close")
//     }
//     console.log("son satır")
// }
// tryCatchTutorial()


// Debug
// const debugData=()=>{
//     let sum = 0
//     for (let i = 0; i < 10; i++) {
//         sum = sum + i
//     }
//     console.log("Toplam = " + sum)
// }
// debugData()

// Example
// let sumExamplesData = () => {
//     let commonSum = 0
//     let oddSum = 0, oddCounter = 0, oddNumber = ""
//     let evenSum = 0, evenCounter = 0, evenNumber = ""
//     // user data
//     let userData = Number(prompt("Lütfen bitiş sayısını yazınız: "))
//     for (let i = 0; i < userData; i++) {
//         if (userData === 21){
//             console.log("secret key number failed " + userData)
//             break
//         }
//
//         if (i === 50){
//             console.log("en fazla 50 sayısına kadar hesaplanır " + userData)
//             break
//         }
//
//         if (i === 7){
//             console.log("7 sayısını toplama " + userData)
//             continue
//         }
//
//         if (i %2===0){
//             evenSum += 1
//             evenCounter ++
//             evenNumber = evenNumber + " " + i
//         }
//         else {
//             oddSum += 1
//             oddCounter ++
//             oddNumber = oddNumber + " " + i
//         }
//         commonSum += i
//     }
//     console.log("Toplam: " + commonSum)
//
//     console.log("Tek sayılar: " + oddNumber)
//     console.log("Tek sayıların adedi: " + oddCounter)
//     console.log("Tek sayıların toplamı: " + oddSum)
//
//     console.log("Çift sayılar: " + evenNumber)
//     console.log("Çift sayıların adedi: " + evenCounter)
//     console.log("Çift sayıların toplamı: " + evenSum)
// }
// sumExamplesData()


// Example
// let firstNameAndLastNameMasking = () => {
//     const firstNameAndLastName = prompt("Lütfen adınızı ve soyadınızı giriniz");
//
//     const userIndex = firstNameAndLastName.indexOf(" ");
//     let firstName = firstNameAndLastName.substring(0, userIndex);
//     for (let i = 1; i < firstName.length; i++) {
//         firstName = firstName.replace(firstName.charAt(i), "*");
//     }
//     firstName = firstName.toUpperCase()
//     console.log(firstName.toUpperCase());
//
//     let lastName = firstNameAndLastName.substring(userIndex + 1, firstNameAndLastName.length).toUpperCase();
//     for (let i = 3; i <= firstName.length; i++) {
//         lastName = lastName.replace(lastName.charAt(i), "*");
//     }
//     console.log(lastName);
//     console.log(firstName.concat(" ").concat(lastName));
// }
// firstNameAndLastNameMasking();

        if (i %2===0){
            evenSum += 1
            evenCounter ++
            evenNumber = evenNumber + " " + i
        }
        else {
            oddSum += 1
            oddCounter ++
            oddNumber = oddNumber + " " + i
        }
        commonSum += i
    }
    console.log("Toplam: " + commonSum)

    console.log("Tek sayılar: " + oddNumber)
    console.log("Tek sayıların adedi: " + oddCounter)
    console.log("Tek sayıların toplamı: " + oddSum)

    console.log("Çift sayılar: " + evenNumber)
    console.log("Çift sayıların adedi: " + evenCounter)
    console.log("Çift sayıların toplamı: " + evenSum)
}
sumExamplesData()
