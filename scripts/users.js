const userContainer = document.querySelector(".cards");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => renderUsers(res))
  .catch(
    () =>
      (userContainer.innerText = "Ошибка! Не удалось загрузить пользователей")
  );

const renderUsers = (users) => {
  users.forEach(({ id, name, username, email, phone, website }) => {
    const card = document.createElement("div");
    card.classList.add("card", "w-100", "cards");

    const cardBody = document.createElement("div");
    card.classList.add("card-body");

    const cardName = document.createElement("h5");
    card.classList.add("card-name");
    cardName.innerText = name;

    const cardUsername = document.createElement("p");
    card.classList.add("card-username");
    cardUsername.innerText = username;

    const cardEmail = document.createElement("p");
    card.classList.add("card-email");
    cardEmail.innerText = email;

    const cardPhone = document.createElement("p");
    card.classList.add("card-phone");
    cardPhone.innerText = phone;

    const cardWebsite = document.createElement("p");
    card.classList.add("card-website");
    cardWebsite.innerText = website;

    const cardBtn = document.createElement("a");
    cardBtn.classList.add("btn", "btn-dark");
    cardBtn.innerText = "Перейти на страницу пользователя";

    cardBody.append(
      cardName,
      cardUsername,
      cardEmail,
      cardPhone,
      cardWebsite,
      cardBtn
    );
    card.append(cardBody);
    userContainer.append(card);
  });
};

//       (userContainer.innerHTML += `<div class="card w-100 cards" >
//                 <div class="card-body">
//                     <h5 class="card-name">${name}</h5>
//                     <p class="card-username">${username}</p>
//                     <p class="card-email">${email}</p>
//                     <p class="card-phone">${phone}</p>
//                     <p class="card-website">${website}</p>
//                     <a href="" class="btn btn-dark">Перейти на страницу пользователя</a>
//                 </div>
//             </div>`)
//   );
// };
