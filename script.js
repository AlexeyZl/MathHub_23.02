// ///confirm('Че каво?')



// const skill = document.getElementById('skill')

// const isLove = document.getElementById('isLove')

// // const skillText = prompt('какой язык учишь, паря?', 'не ебу')

// // const isLoveValue = confirm('Любишь его аки сорока любит золото блестющее?')

// // skill.innerText = skillText

// // isLove.innerText = isLoveValue

// // console.log(isLoveValue);

// const string = document.getElementById('string')

// string.innerHTML = "str"

// //string
// const str1 = 'i\'m OK'
// const str2 = `i am say ${str1}`

// //number
// const num1 = 13+15
// const rem = 7+8+ '5'
// //number принимает числа от -(2**53 -1) до (2**53 -1)

// //alert(num1)

// //console.log(rem);

// //bigint

// const bigint = 103n


// //boolean true/false

// const bool = 'a' > 'AAAAA'



// //null

// let empty = null

// // console.log(empty);

// //undefined
// let box = undefined

// console.log(box, typeof box);

//Symbol

// const uniq = Symbol('id')
// console.log(uniq, typeof uniq);

//Object

// const obj = {
//     name: "Lexa",
//     age: 19,
//     isHappy: true,
// }
// obj.job = 'google'

// // console.log(obj.name);
// // console.log(obj['name'])
// console.log(obj);

// const array = ["Ann", 18 , false]
// array[3] = "facebook"
// console.log(array);
// console.log(array[0]);

// numb = 576 / "8"

// console.log(numb);


//const variant = "option1"

// СРАВНЕНИЕ ПО ЗНАЧЕНИЮ. Оператор ==
//console.log(5 == "5");
//при выводе в браузер код приводит всегда в строку или булевое значение

// СРАВНЕНИЕ ПО ЗНАЧЕНИЮ И ТИПУ. Оператор ===
//console.log(5 === "5");


// Операторы >=

// console.log("abc" > 15);

// const go = false
// if(go) {
//     alert('GO GO GO')
// } else {
//     alert('stop')
// }
// пояснение для себя: здесь в условиях стоит просто go. 
//По умолчанию такая конструкция говорит о булевых значениях (true/false). 
//То есть, если мы внесем в переменную какое-либо значение не равное булевым, то он не сработает просто напросто.

// const go = confirm('Ты миллионер уже?')
// const go = prompt('куда побежим?', 'домой')

// if(go) {
//     alert('Да')
// } else {
//     alert('Пока еще нет')
// }

// const userName = prompt('Who are you?', 'anonim')

// if(userName === 'admin') {
//     alert('Hello, my greating boss Alexey!')
// } else if (userName === 'anonim') {
//     alert('Пшел прочь, собака анонистсткая!')
// } else if(!userName) { //Аналогично если записать userName == null
//     alert('ТЫ ШТО? НЕ СУЩЕСТВУЕШЬ?')
// } else {
//     alert(`Hi, ${userName}`)
// }
//тоже самое но с операторами или ||
// if(userName === 'admin') {
//     alert('Hello, my greating boss Alexey!')
// } else if (userName === 'anonim' || !userName) {
//     alert('Я тебя не знаю')
// }  else {
//     alert(`Hi, ${userName}`)
// }

// const counts = prompt('До скольких считаешь?', 20)
// let i = 20
// // while (i <= counts) {
// //     console.log(i)
// //     i = i + 1        // i++
// // }
// do {
//     console.log(i++)
// } while (i <= counts);
// console.log(i)

// const arr = []
// for (let i = 1; i <= 50; ++i) {
//     arr.push(i)

// }
//  //console.log(arr);

//  const newArr = []
//  for (elem of arr) {
//      const marker = elem % 3
//      if (!marker){
//          newArr.push(elem)
//      }
//  }
//  console.log(newArr);

// const obj = {
//     name: 'Sasha',
//     age: 16,
//     city: 'Moscow'

// }
// for (key in obj) {

//     console.log(key, obj[key]);
// }

//Виды функций
//declaration

// function scream() {   
// }

// //expression

// const wowScream = function () {

// }

// //arrow
// const arrow = () => { 
// }

//GAME
// нажав на кнопку начать игра запускается,
// пользователь может ввести ответ
// должна появиться кнопка "проверить"

//нажав кнопку проверить мы сравниваем ввод пользователя с ответом,
//вывести результат и правильное значение,
//сменить кнопку на "начать заново"

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    //    const randomNum1 = getRandomNumInRange(0, 100)
    //    const randomNum2 = getRandomNumInRange(0, 100) 
    //    let symbol
    //    if (Math.random() > 0.5) {
    //        symbol = "+" 
    //    } else {
    //        symbol = "-"
    //    }
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {

}

// console.log(getTask);

const gameElements = document.getElementById('my_game').children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,

}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        //генерируем задачу и ответ
        //const task = getTask()
        // показываю задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        gameState.taskInProcess = true
        //меняю кнопку
        //меняю состояние
    } else {
        // сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        //вывести поздравления
        title.innerText = (isRight) ? "Вы подебили" : "Вы проиграли"
        //поменять кнопку и состояние
        btnGame.innerText = "Начать заново"
        gameState.taskInProcess = false
    }
}
btnGame.addEventListener('click', startGameFunc)
userAnswer.addEventListener('keydown', (e) => {
    //  console.log(e);
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})




const choosedEl = document.querySelectorAll('.choosed_block_container > div')
const counterEl = document.querySelector('.choosed_block span')

const choosedState = {
    countElements: 0,
}
const changeCount = (value) => {
    choosedState.countElements += value
    counterEl.innerText = choosedState.countElements
}

const eventFunc = (e) => {

    //выбрать элемент, т.е. выделить его с помощью класса
    //choosedEl[i].className = 'choosed_element'
    //console.log(e);
    //e.target.className = 'choosed_element'
    //запустить счетчик
    //counterEl.innerText = +counterEl.innerText + 1
    if (e.target.className === "") {
        e.target.className = 'choosed_element'
        changeCount(1)
    } else {
        e.target.className = ''
        changeCount(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
//choosedEl[2].removeEventListener("click", eventFunc)

const timeIsOver = () => {
    alert("Время вышло!")
}
//setTimeout(timeIsOver, 2000)

//const alarm = setInterval (timeIsOver, 2000)


// const alarm = setInterval(() => {
// let wantSleep = confirm('Хотите спать?')
// if (wantSleep) {
//     console.log('tic');
// } else {
//     clearInterval(alarm)
// }
// }, 3000)

//clearInterval(alarm)

// console.log("1");
// setTimeout(() =>{
//     console.log("2"); 
// }, 0)
// console.log("3");
const postsBlock = document.querySelector(".posts_block-container")
const showPostsBTN = document.querySelector(".posts_block button")




function addPost(title, body) {
    const postsTitle = document.createElement("h3")
    const postsBody = document.createElement("span")
    const postItem = document.createElement("p")

    postsTitle.innerText = title
    postsBody.innerText = body


    postItem.append(postsTitle, postsBody)
    postsBlock.append(postItem)
}
function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        return res.json()
    })
    .then(data => {
        for(item of data) {
            addPost(item.title, item.body)
        }
    })
    .catch((err) => console.log(err.message))
}

// function createPost(title, body, userId) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({ 
//     title,
//     body,
//     userId,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }, 
// })
// .then( res => {
//     onsole.log(res)
//     return res.json()
// })
// }
// createPost('title', 'body', 15)

 showPostsBTN.onclick = getPost