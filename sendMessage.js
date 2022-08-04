function store() {
  //stores items in the localStorage
  var message = document.getElementById("emailMessage").value;
  var key = document.getElementById("submitEmail").value;

  const messageObj = {
    message: message,
  };

  window.localStorage.setItem(key, JSON.stringify(messageObj));
  alert("The message has been sent");
}

window.onload = function () {
  document.getElementById("messageForm").onsubmit = store;
};
