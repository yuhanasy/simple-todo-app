let today = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$('#today-date').text(days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear())

let addBtn = $('#add-task');
let list = $('#list');
let userInput = $('#input-task');

//  add event click and enter
addBtn.on('click', addNewTask);
userInput.on('keypress', function(e){ 
  if (e.keyCode == 13) {
    addNewTask();
  }
});

// response when click addBtn or press enter after input text
function addNewTask() {
  
  if (userInput.val() === "") {
    alert('You must add something');
  } else {
    list.append('<li>'); // append <li> as child of #list
    $('#list li:last').append('<input>').append('<label>').append('<button>'); // append <input>, <label>, <button> as child of <li>
    let checkBox = $('#list li input');
    checkBox.attr('type', 'checkbox');

    let task = $('#list li:last label');
    task.text(userInput.val());

    let deleteBtn = $('#list li:last button');
    deleteBtn.text('X').attr('class', 'close').click(destroy);

    userInput.val("");
  };
};


// response when close button clicked
function destroy(e) {
  $(this).parent().remove();
};

// // response if task is checked
// $('li').on('click', function() {
//   $(this).attr('class', 'checked');
// })