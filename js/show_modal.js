let modals = document.getElementsByClassName('modal')
let closeAllModals = function (show) {
    for (const modal of modals) {
        modal.classList.remove(show);
    }
}

function createModal(modal, open, close, show) {
    let popup = document.querySelector(modal);
    let openPopupButton = document.querySelector(open);
    let closePopupButton = popup.querySelector(close)

    openPopupButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add(show)
    });

    closePopupButton.addEventListener('click', function (evt) {
        popup.classList.remove(show);
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.key === "Escape") {
            popup.classList.remove(show);
        }
    });
    console.log(popup)
}

closeAllModals("modal--show")

createModal("#contacts__modal", "#button__contacts__show", "#button__contacts__close", "modal--show")
createModal("#chat__modal", "#button__chat__show", "#button__chat__close", "modal--show")


const chatInputArea = document.getElementById("chat__input_area");

function isInputEmpty() {
    return chatInputArea.value.length === 0;
}

function addListAfterClick() {
    if (!isInputEmpty()) {
        postUserMessage()
        let sleep = function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        sleep(1000).then(() => postBotReply());
    }
}

function addListKeyPress(event) {
    if (!isInputEmpty() && event.which === 13) {
        postUserMessage();
        let sleep = function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        sleep(1000).then(() => postBotReply());
    }
}

function postUserMessage() {
    const btn = document.createElement("button");
    btn.className = "chat__msg_del";
    btn.innerHTML = "x";
    btn.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    });

    const nickname = document.createElement("div");
    nickname.className = "chat__nickname";
    nickname.innerText = "You: "

    const msg_txt = document.createElement("div");
    msg_txt.className = "chat__message_text";
    msg_txt.innerHTML = chatInputArea.value + " ";

    const msg = document.createElement("div");
    msg.className = "chat__user_message";
    msg.appendChild(nickname);
    msg.appendChild(msg_txt);
    msg.appendChild(btn);

    const msgArea = document.getElementById('chat__messages_area');
    msgArea.appendChild(msg);
    chatInputArea.value = "";
}

knowledge_base = {
    'greeting': ['q', 'кулити', 'приветствую', 'гритингс', 'здарова'],
    'appeal': ['смотрящий', 'работяга', 'душный', 'uml senior'],
    'the essence': ['как оно', 'налабал умль?', 'сколько регнул?', 'как завод?']
}

function postBotReply(str) {
    const nickname = document.createElement("div");
    nickname.className = "chat__nickname";
    nickname.innerText = "Bot: ";

    const msg_txt = document.createElement("div");
    msg_txt.className = "chat__message_text";
    let reply = "";
    if (str === undefined) {
        for (let item of Object.values(knowledge_base)) {
            reply += " " + item[Math.floor(Math.random() * item.length)];
        }
    } else {
        reply = str;
    }
    msg_txt.innerHTML = reply;

    const msg = document.createElement("div");
    msg.className = "chat__bot_message";
    msg.appendChild(nickname);
    msg.appendChild(msg_txt);

    const msgArea = document.getElementById('chat__messages_area');
    msgArea.appendChild(msg);
}

chatSendButton = document.getElementById('chat__button_send');
chatSendButton.addEventListener("click", addListAfterClick);
chatInputArea.addEventListener("keypress", addListKeyPress);

function calculate() {
    let str = chatInputArea.value;
    postUserMessage();
    postBotReply(eval(str));
}

chatCalculateButton = document.getElementById('chat__button_calculate');
chatCalculateButton.addEventListener('click', calculate);