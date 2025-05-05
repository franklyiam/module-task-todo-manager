// Define arrays that can be accessed from any function.

var modules = [];
var tasks = [];
var todo = [];

// Function that will be triggered when the Add button is clicked in the module section. This will add the information to the array.

function addModule() {
  var modCode = document.querySelector("#modCode").value;

  var modLecturer = document.querySelector("#modLecturer").value;

  document.querySelector("#modCode").value = "";

  document.querySelector("#modLecturer").value = "";

  var moduleId = Date.now();

  modules.push({ id: moduleId, code: modCode, lecturer: modLecturer });

  console.log(modules);

  updateModTable();
}
function updateModTable() {
  var tableBody = document.querySelector("#modTableBody");

  tableBody.innerHTML = " ";

  for (var i = 0; i < modules.length; i++) {
    tableBody.innerHTML +=
      `<tr>` +
      `<td>${modules[i].code}</td>` +
      `<td>${modules[i].lecturer}</td>` +
      `</tr>`;
  }
  moduleSelect();
}
function moduleSelect() {
  var modSelect = document.querySelector("#modSelect");
  modSelect.innerHTML = "";

  for (var i = 0; i < modules.length; i++) {
    modSelect.innerHTML += `<option>${modules[i].code}</option>`;
  }
}

function addTask() {
  var taskName = document.querySelector("#taskName").value;

  var taskDate = document.querySelector("#taskDate").value;

  document.querySelector("#taskName").value = "";

  document.querySelector("#taskDate").value = "";

  var taskId = Date.now();

  tasks.push({ id: taskId, name: taskName, date: taskDate });

  console.log(tasks);

  updateTaskTable();
}

function updateTaskTable() {
  var tableBody = document.querySelector("#taskTableBody");

  tableBody.innerHTML = " ";

  for (var i = 0; i < tasks.length; i++) {
    tableBody.innerHTML +=
      `<tr>` +
      `<td>${tasks[i].name}</td>` +
      `<td>${tasks[i].date}</td>` +
      `</tr>`;
  }
  taskSelect();
}
function taskSelect() {
  var tSelect = document.querySelector("#taskSelect");
  tSelect.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    tSelect.innerHTML += `<option value="${tasks[i].id}">${tasks[i].name}</option>`;
  }
}
function addToDo() {
  var mods = document.querySelector("#modSelect").value;

  var taskIdentification = document.querySelector("#taskSelect").value;

  var description = document.querySelector("#description").value;

  var toDoList;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskIdentification) {
      toDoList = tasks[i];
      break;
    }
  }
  var taskDates = toDoList.date;
  var taskNames = toDoList.name;
  var toDoID = Date.now();
  todo.push({
    id: toDoID,
    mod: mods,
    task: taskNames,
    desc: description,
    dates: taskDates,
  });

  console.log(todo);

  updateToDoTable();
}

function CheckOff(element) {
  var toDoID = element.getAttribute("data-id");

  // Find the product by ID and remove them from the array
  for (var i = 0; i < todo.length; i++) {
    if (todo[i].id == toDoID) {
      todo.splice(i, 1);
      break; // breaks the loop once the remove has occured
    }
  }
  updateToDoTable();
}

function updateToDoTable() {
  var tableBody = document.querySelector("#todoTableBody");

  tableBody.innerHTML = " ";

  for (var i = 0; i < todo.length; i++) {
    tableBody.innerHTML +=
      `<tr onclick="CheckOff(this)" data-id="${todo[i].id}">` +
      `<td>${todo[i].mod}</td>` +
      `<td>${todo[i].task}</td>` +
      `<td>${todo[i].desc}</td>` +
      `<td>${todo[i].dates}</td>` +
      `</tr>`;
  }
  taskSelect();
}
