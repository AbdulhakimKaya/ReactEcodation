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

// Software Principle
// KISS, YAGNI, SOLID, CLEAN CODE, SPAGETTI CODE, DUMMY CODE


// Monad
// const birinci = () => {
//     let data = Number(prompt("Lütfen sayı giriniz: "))
//     return data
// }
//
// const ikinci = () => {
//     let data = birinci()
//     console.log(Math.sqrt(data))
// }
// ikinci()


// setTimeout(), setInterval()

// belirli zaman sonra tek bir kere çalışır ve durur
// setTimeout(function () {
//     console.log("setTimeOut çalıştı")
// },2000)
//
// // belirli zaman sonra çalışır ve sonsuza kadar belirli zaman aralığında kapanıp tekrar çalışır
// setInterval(function () {
//     console.log("setInterval çalıştı")
// },2000)


// callback function
// const birinci = (data) => {
//     console.log(Math.pow(2, data))
//     return data
// }
//
// const ikinci = (callbackFunction) => {
//     let number = Number(prompt("Lütfen sayı giriniz: "))
//     let data = callbackFunction(number)
//     console.log(data)
// }
// ikinci(birinci)


// promise
// const promiseTutorials = () => {
//     // 1 tane catch olmak zorunda
//     let data = new Promise((resolve, reject) => {
//         let status = 200
//         if (status === 400) {
//             resolve("çalıştı")
//         } else {
//             reject("çalışmadı")
//         }
//     })
//         .then(() => {
//             console.log("olumlu")
//         })
//         .catch((err) => {
//             console.error(err)
//         })
// }
// promiseTutorials()


// Dizi
// let arr = () => {
//     let numbers = [3,5,8,2,0,9]
//     return numbers
// }
//
// let arrResult = () => {
//     let data = arr()
// console.log(data)
// console.log(data[0])
// console.log(data[5])
// console.log(data[data.length-1])
//
// console.log("-------------------")
//
// // For Loop
// for (let i = 0; i < data.length; i++) {
//     console.log(data[i])
// }
//
// console.log("-------------------")
//
// // For in
// for (const dataKey in data) {
//     console.log(dataKey + " -> " + data[dataKey])
// }
//
// // For of
// console.log("-------------------")
//
// for (const dataValue of data) {
//     console.log(dataValue)
// }
//
// console.log("-------------------")

// For Each
// data.forEach(function (value, index, array){
//     console.log(index + " -> " + value)
// })


// filter
//     let result = data.filter((value, index, array) => {
//         return value %2===0
//     }).forEach((value, index, array) => {
//         document.writeln(`${index} => ${value} <br/>`)
//     })
//
//     // map
//     let result2 = data.map((value, index, array) => {
//         return value += 10
//     }).forEach((value, index, array) => {
//         document.writeln(`${index} => ${value} <br/>`)
//     })
//
//     // dizilere devam
//     document.writeln("Eleman sayısı: " + data.length)
//     data.push(99)  // sona eleman eklenir
//     data.unshift(11)  // başa eleman eklenir
//     console.log(data)
//
//     data.pop()    // sondan 1 eleman çıkartılır
//     data.shift()  // baştan 1 eleman çıkartılır
//     console.log(data)
//
//     data.sort()  // dizi sıralanır
//     console.log(data)
//
//     data.reverse()  // dizi sırası baştan sona değişir
//     console.log(data)
//
//     console.log(data.toString())  // dizi string'e çevirilir
//     console.log(data.toString().substring(0,3))
// }
// arrResult()


// callback - promise example
// let callbackFunctionComputer = () => {
//     // dizi içerisinde 5 tane random obje oluşturalım
//     const computerArray = []
//
//     for (let i = 0; i < 5; i++) {
//         let computerObject = {
//             computerName: `callback Computer + ${i + 1}`,
//             price: `${i + 1}` * `${Number(100)}`
//         }
//         computerArray.push(computerObject)
//     }
//     console.log(computerArray)
//
//     // bu dizi içindeki sadece computerName alanlarını gösterelim (map ile)
//     const arrayInComputerName = () => {
//         computerArray.map((value) => {
//             console.log(`${value.computerName}`)
//         })
//     }
//     arrayInComputerName()
//
//     // callback Function Price
//     const arrayInComputerPrice = (object, callbackFunction) => {
//         computerArray.push(object)
//         callbackFunction()
//     }
//     arrayInComputerPrice({computerName: "callback Computer 6", price: 6000}, arrayInComputerName)
// }
// callbackFunctionComputer()
//
//
// let promiseFunctionComputer = () => {
//     // dizi içerisinde 5 tane random obje oluşturalım
//     const computerArray = []
//
//     for (let i = 0; i < 5; i++) {
//         let computerObject = {
//             computerName: `callback Computer + ${i + 1}`,
//             price: `${i + 1}` * `${Number(100)}`
//         }
//         computerArray.push(computerObject)
//     }
//     console.log(computerArray)
//
//     // bu dizi içindeki sadece computerName alanlarını gösterelim (map ile)
//     const arrayInComputerName = () => {
//         computerArray.map((value) => {
//             console.log(`${value.computerName}`)
//         })
//     }
//     arrayInComputerName()
//
//     // promise Function Object
//     const arrayInComputerObject = (object, callbackFunction) => {
//         const promiseReturn = new Promise(() => {
//             computerArray.push(object)
//         })
//         return promiseReturn
//     }
//     arrayInComputerObject({computerName: "callback Computer 6", price: 6000})
//         .then((response) => {
//             console.log(response)})
//         .catch((err) => {
//             console.log(err)})
// }
// promiseFunctionComputer()


// object
// let objectTutorials = () => {
//     const personObject = {
//         "name": "Abdulhakim",
//         surname: "KAYA", // tırnak olmadan da yazabiliriz
//         "number": 99,
//         "isLogin": true,
//         "software": ["Html5", "Css3", "JS"],
//         fullName: function () {
//             return this.name + " " + this.surname
//         }
//     }
//     console.log(personObject)
//
//     // variable
//     console.log(personObject.name)
//     console.log(personObject.surname)
//     console.log(personObject.number)
//     console.log(personObject.isLogin)
//
//     // variable nested
//     console.log(personObject["name"])
//     console.log(personObject["surname"])
//     console.log(personObject["number"])
//     console.log(personObject["isLogin"])
//
//     // array
//     console.log(personObject.software)
//     console.log(personObject.software[0])
//
//     // object to string
//     const objectToString = JSON.stringify(personObject)
//     console.log(objectToString)
//
//     // string to object
//     const stringToObject = JSON.parse(objectToString)
//     console.log(stringToObject)
//     console.log(stringToObject.surname)
//
//     // Object variable
//     personObject.language = "English"
//     console.log(personObject)
//     console.log(personObject.language)
//
//     // function callback
//     console.log(personObject.fullName())
// }

// objectTutorials()


// object constructor
// let objectConstructor = () => {
//     let personConstructor = function (name, surname) {
//         this.name = name
//         this.surname = surname
//         console.log(this)
//     }
//     let personResult = new personConstructor("Abdulhakim", "KAYA")
//     console.log(personResult.name)
// }
// objectConstructor()


// call, apply, bind
// let noParameterCallApplyBind = () => {
//     // function
//     let functionOtherObject = function () {
//         document.writeln(`Parametresiz Function: ${this.adi} <br/>`)
//     }
//
//     // object
//     let objectData = {
//         "adi": "Spora gidiyorum."
//     }
//
//     functionOtherObject.call(objectData)
//     functionOtherObject.apply(objectData)
//
//     let example = functionOtherObject.bind(objectData)
//     example()
// }
// noParameterCallApplyBind()
//
// let parameterCallApplyBind = () => {
//     // function
//     let functionOtherObject = function (surname) {
//         document.writeln(`Parametreli Function: ${this.adi} => ${surname} <br/>`)
//     }
//
//     // object
//     let objectData = {
//         "adi": "Abdulhakim"
//     }
//
//     functionOtherObject.call(objectData, "KAYA")
//     functionOtherObject.apply(objectData, ["KAYA"])
//
//     let example = functionOtherObject.bind(objectData, "KAYA")
//     example()
// }
// parameterCallApplyBind()


// event
// let eventFunction = () => {
//     alert("deneme")
// }


// dom - Document Object Model (Sayfanın Obje Modeli)
// let newDateData = () => {
//     // let text = document.getElementById("text_data")
//
//     // Html
//     // text.innerHTML = "<b><mark>" + new Date().getFullYear() + "</mark></b>"
//     // text.innerHTML = `<b><mark> ${new Date().getFullYear()} </mark></b>`
//
//     // Query
//     let text = document.querySelector("#text_data")
//
//     // Text
//     // text.innerText = `<b><mark> ${new Date().getFullYear()} </mark></b>`
//     text.innerText = `${new Date().getFullYear()}`
//
//     // Css
//     text.style.color = "red"
//     text.style.backgroundColor = "black"
//     text.style.padding = "5px"
// }

// örnek -> paragrafın üzerine geldiğinde paragrafın altında yazı yazdırılsın
// let paragraphFunction = () => {
//     let text = document.getElementById("text_data2")
//     text.innerText = "paragrafın üzerine geldiniz"
// }
//
// let domData = () => {
//     // ID
//     let domUserData = document.getElementById("dom_id").innerText = "ID"
//
//     // Class
//     let domUserData2 = document.getElementsByClassName("dom_class")[0].innerText = "class data"
//
//     // Tag
//     let domUserData3 = document.getElementsByTagName("p")[1].innerText = "tag data"
// }

/*
örnek -> butona tıklandığında kullanıcıya soru sorulsun
farklı bir sayfaya gidilsin mi?
evet ise farklı bir sayfaya redirect
hayır ise alert versin
*/
// let outSite = () => {
//     let userInformation = window.confirm("Farklı bir sayfaya gitmek istiyor musunuz?")
//         ? window.location = ("https://ecodation.com")
//         : window.alert("Bu sayfada kaldınız..")
// }


// // listener
// let userListener = () => {
//     let listenerParagraph = document.getElementById("paragraf_id3")
//     listenerParagraph.addEventListener("click", function (e) {
//         // alert(e.preventDefault + " " + e.target)
//         document.getElementById("text_data3").innerHTML = "Okundu"
//     })
// }
// userListener()


// localStorage (Bireysel)
// veriler bizim için önemlidir
// verileri saklarız (Database, Browser..)
// let localStorageData = () => {
//     // Set
//     const adi = localStorage.setItem("name", "Abdulhakim")
//     const soyadi = localStorage.setItem("surname", prompt("Soyadınız: "))
//     console.log(localStorage)
//
//     // Get
//     const getAdi = localStorage.getItem("name")
//     alert(getAdi)
//
//     // Remove
//     localStorage.removeItem("name")
//
//     // Clear
//     localStorage.clear()
// }
// localStorageData()


// hangi tuşa bastığımı bana göstersin (jQuery)
// https://www.toptal.com/developers/keycode
// let userJqueryKey = () => {
//     // jQuery hazırlaması
//     $(document).ready(function () {
//         $(document).keydown(function (userButton) {
//             console.log(userButton)
//             console.log(userButton.keyCode)
//             console.log(typeof userButton.keyCode)
//
//             // browser sen bi şey yapma, yaparsam ben yaparım
//             userButton.preventDefault()
//
//             // keyCode (13) = enter
//             if (userButton.keyCode === 13) {
//                 alert("Enter'a bastınız")
//                 console.log("Enter'a bastınız")
//             }
//         })
//     })
// }
// userJqueryKey()


// Vücüt Kitle İndeksi Hesaplama

let vkiHesapla = () => {

    // eğer input içinde değer varsa hata mesajı silinsin
    // Kullanıcı sayı girmezse sayı girmediniz hatası versin (Regex)

    $(document).ready(function () {
        $("#submit_id").click(function (event) {
            // modal kapanmasın
            event.preventDefault()

            let weight, height, vki
            let getLocalWeight, getLocalHeight, getLocalVki, getLocalVkiResult

            weight = jQuery.trim($("#weight_id").val())

            if (weight === "") {
                $("#weight_validation").html("Bu alan boş geçilemez")
            } else if ($.isNumeric(weight) === false) {
                $("#weight_validation").html("Sayı giriniz")
            } else {
                localStorage.setItem("weight", weight)
                getLocalWeight = localStorage.getItem("weight")
                console.log(`Local Weight: ${getLocalWeight}`)
                // cast number
                getLocalWeight = Number(getLocalWeight)
            }

            height = jQuery.trim($("#height_id").val())

            if (height === "") {
                $("#height_validation").html("Bu alan boş geçilemez")
            } else if ($.isNumeric(height) === false) {
                $("#height_validation").html("Sayı giriniz")
            } else {
                localStorage.setItem("height", height)
                getLocalHeight = localStorage.getItem("height")
                console.log(`Local Height: ${getLocalHeight}`)
                // cast height
                getLocalHeight = Number(getLocalHeight)
            }

            vki = Number(getLocalWeight / (Math.pow((getLocalHeight / 100), 2))).toFixed(2)
            localStorage.setItem("vki", vki)
            getLocalVki = localStorage.getItem("vki")
            console.log(getLocalVki)

            // VKİ Result
            if (getLocalVki < 18.6) {
                $("#result_id").html(`${getLocalVki} -> Zayıf`)
                localStorage.setItem("vki_result", "Zayıf")
            }
            else if (18.6 <= getLocalVki && getLocalVki < 25) {
                $("#result_id").html(`${getLocalVki} -> Sağlıklı`)
                localStorage.setItem("vki_result", "Sağlıklı")
            }
            else if (25 <= getLocalVki && getLocalVki < 30) {
                $("#result_id").html(`${getLocalVki} -> Fazla Kilolu`)
                localStorage.setItem("vki_result", "Fazla Kilolu")
            }
            else if (30 <= getLocalVki) {
                $("#result_id").html(`${getLocalVki} -> Obez`)
                localStorage.setItem("vki_result", "Obez")
            }

            getLocalVkiResult = localStorage.getItem("vki_result")
            console.log(getLocalVkiResult)
        })
    })
}
vkiHesapla()
let clearLocaleStorageData = () => {
    if (window.confirm("Local Storage'ı silmek istediğinize emin misiniz?")) {
        localStorage.clear()
        alert("Silindi!")
    } else {
        alert("Silinmedi!")
    }
}



// KDV hesaplaması
// jquery ajax GET/POST

