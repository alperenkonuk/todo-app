const greetings = document.getElementById('greetings');
const greetingsText = document.getElementById('greetings-text');
const checkbox = document.getElementsByClassName('checkbox');
const editInput = document.getElementById('edit-input')
const titleInput = document.getElementById('title-input')

const day = new Date();

const setGreetings = () => {
  const hr = day.getHours();
  if (hr < 6) {
    greetings.innerText = `Good Night`
  } else if (hr < 12) {
    greetings.innerText = `Good Morning`
  } else if (hr < 18) {
    greetings.innerText = 'Good Afternoon'
  } else {
    greetings.innerText = 'Good Evening'
  }
}

const formatDate = (date) => {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  greetingsText.innerText = `Today is ${formattedDate}`;
}

setGreetings();
formatDate()

for (let i = 0; i < checkbox.length; i++) {
  if (checkbox[i].classList.length === 2) {
    checkbox[i].checked = true;
  }
}

const handleTitleChange = (event, listId) => {
  const inputValue = encodeURIComponent(titleInput.value);
  window.location.href = `/list/changeTitle/${listId}/${inputValue}`
}

const handleInputChange = (event, listId, taskId) => {
  const inputValue = encodeURIComponent(editInput.value);
  window.location.href = `/list/${listId}/confirm/${taskId}/${inputValue}`;
}

