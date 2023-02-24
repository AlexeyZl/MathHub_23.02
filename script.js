
const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {

    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {

}


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
        title.innerText = "Игра началась! Сколько будет:"
        userAnswer.value = null

        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        gameState.taskInProcess = true
    } else {

        const isRight = gameState.rightAnswer == userAnswer.value

        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer

        title.innerText = (isRight) ? "Вы подебили" : "Вы проиграли"

        btnGame.innerText = "Начать заново"
        gameState.taskInProcess = false
    }
}
btnGame.addEventListener('click', startGameFunc)
userAnswer.addEventListener('keydown', (e) => {
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

const timeIsOver = () => {
    alert("Время вышло!")
}

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
            for (item of data) {
                addPost(item.title, item.body)
            }
        })
        .catch((err) => console.log(err.message))
}

showPostsBTN.onclick = getPost