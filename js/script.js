welcomeMessage();

function welcomeMessage() {
    let name = localStorage.getItem("username");

    if (!name) {
    name = prompt("Welcome to Rick Company! What is your name?");

    if (name == null || name.trim() === "") {
      name = "Guest";
    }

    // Simpan ke localStorage
    localStorage.setItem("username", name);
  }

    document.getElementById('welcomeText'). innerHTML = `Hello, ${name}!  Welcome to Rick Company!`
}

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("messageForm");
  const clearBtn = document.getElementById("clearBtn");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("messageText").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!name || !email || !phone || !message || !gender) {
      errorMsg.innerText = "All fields must be filled!";
      return;
    }

    if (!emailRegex.test(email)) {
      errorMsg.innerText = "Invalid email format!";
      return;
    }

    if (!phoneRegex.test(phone)) {
      errorMsg.innerText = "Phone must be 10-15 digits!";
      return;
    }

    errorMsg.innerText = "";

    // Update Welcome Text
    document.getElementById("welcomeText").innerText =
      "Hi, " + name + "! Thank you for contacting us.";

    // Show Output
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputEmail").innerText = email;
    document.getElementById("outputPhone").innerText = phone;
    document.getElementById("outputGender").innerText = gender.value;
    document.getElementById("outputMessage").innerText = message;

    // RESET FORM AFTER SUCCESS
    form.reset();
  });

  // CLEAR BUTTON FUNCTION
  clearBtn.addEventListener("click", function () {
    form.reset();
    errorMsg.innerText = "";
  });

});

// FILTER PORTFOLIO
function filterProject(category) {
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    if (category === "all") {
      project.style.display = "block";
    } else {
      if (project.classList.contains(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    }
  });
}
