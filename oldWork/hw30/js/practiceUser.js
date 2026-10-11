const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";

function validateUser(user) {
  if (typeof user.name !== "string") {
    throw new Error("Имя должно быть строкой");
  }
  if (user.name.trim() === "") {
    throw new Error("Имя не может быть пустым");
  }
  if (typeof user.email !== "string") {
    throw new Error("Email должен быть строкой");
  }
  if (user.email.trim() === "") {
    throw new Error("Email не может быть пустым");
  }
  if (typeof user.id !== "number") {
    throw new Error("ID должен быть числом");
  }
  if (!Number.isFinite(user.id)) {
    throw new Error("ID должен быть конечным числом");
  }

  return true;
}

function checkUsers(users) {
  let normal = [];
  let problems = [];
  for (let i = 0; i < users.length; i++) {
    try {
      validateUser(users[i]);
      console.log("User is valid", users[i].name);
      normal.push({ name: users[i].name });
    } catch (error) {
      console.log(`Validation error: ${error.message}`);
      problems.push({ name: users[i].name, error: error.message });
    }
  }
  const result = { normal: normal, problems: problems };
  return result;
}

function getUsersMails(users) {
  let emails = [];
  users.forEach((element) => {
    if (
      typeof element.email === "string" &&
      element.email !== null &&
      element.email.includes("@")
    ) {
      let email = element.email.trim();
      if (email !== "") {
        emails.push(email);
      }
    }
  });
  return emails;
}

axios
  .get(url)
  .then((response) => {
    // response.data[0] = { name: "", email: "", id: NaN };  <- Тут проверка для доп задания
    //  response.data[0].email = null или '' тоже выдаст подобное прошлой проверкой только для mail 
    console.log(response.data.length);
    console.log(checkUsers(response.data));
    console.log(getUsersMails(response.data));
  })
  .catch((error) => {
    console.log(`Error fetching users ${error.message}`);
  });
