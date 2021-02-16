// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const pendingList = document.querySelector(".pendingList");
const finishedList = document.querySelector(".finishedList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let PENDING = [];
let FINISHED = [];

function deletePending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanPending = PENDING.filter(function (pending) {
        return pending.id !== parseInt(li.id);
    });
    PENDING = cleanPending;
    savePending();
}

function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanPending = FINISHED.filter(function (finished) {
        return finished.id !== parseInt(li.id);
    });
    FINISHED = cleanPending;
    saveFinished();
}

function savePending() {
    localStorage.setItem(PENDING_LS, JSON.stringify(PENDING));
}

function saveFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(FINISHED));
}

function paintPending(text) {
    const liPending = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    const pendingSpan = document.createElement("span");
    const newId = PENDING.length + 1;

    delBtn.innerText = "❌";
    checkBtn.innerText = "✔";

    delBtn.addEventListener("click", deletePending);
    checkBtn.addEventListener("click", addToFinished);

    pendingSpan.innerText = text;
    liPending.appendChild(pendingSpan);
    liPending.appendChild(delBtn);
    liPending.appendChild(checkBtn);
    liPending.id = newId;
    pendingList.appendChild(liPending);

    const toDoObj = {
        text: text,
        id: newId
    };
    PENDING.push(toDoObj);
    savePending();
}

function addToFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const spanText = li.childNodes[0].innerText;

    const liFinished = document.createElement("li");
    const backBtn = document.createElement("button");
    const finishedSpan = document.createElement("span");
    const newId = FINISHED.length + 1;

    backBtn.innerText = "⏪";
    backBtn.addEventListener("click", revertToPending);

    finishedSpan.innerText = spanText;
    liFinished.appendChild(finishedSpan);
    liFinished.appendChild(backBtn);
    liFinished.id = newId;
    finishedList.appendChild(liFinished);

    const toDoObj = {
        text: spanText,
        id: newId
    };
    FINISHED.push(toDoObj);
    saveFinished();
    deletePending(event);
}

function revertToPending(event){
    const btn = event.target;
    const li = btn.parentNode;
    const spanText = li.childNodes[0].innerText;

    paintPending(spanText);
    deleteFinished(event);
}

function handleSubmit() {
    event.preventDefault();
    const currentValue = toDoInput.value;
    console.log(currentValue);
    paintPending(currentValue);
}

function loadPending() {
    const loadPendings = localStorage.getItem(PENDING_LS);
    if (loadPendings !== null) {
        const parsedPending = JSON.parse(loadPendings);
        parsedPending.forEach(function (toDo) {
            paintPending(toDo.text);
        });
    }
}

// function loadFinished() {
//     const loadFinished = localStorage.getItem(PENDING_LS);
//     if (loadFinished !== null) {
//         const parsedFinished = JSON.parse(loadFinished);
//         parsedFinished.forEach(function (toDo) {
//             paintFinished(toDo.text);
//         });
//     }
// }

function init() {
    loadPending();
    // loadFinished();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();