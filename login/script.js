
const authTokenKey = "authToken"; 

export default authTokenKey;

async function authenticate(username, password) {
  const usuario = {
    usuario: username,
    senha: password,
  };

  const headers = {
    "Content-Type": "application/json",
    accept: "application/json",
  };

  try {
    const response = await fetch(
      "http://www.armariosapi.somee.com/api/Usuarios/Login",
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify(usuario),
      }
    );

    if (!response.ok) {
      console.error("Authentication failed. HTTP Status:", response.status);
      return false;
    }

    const responseJson = await response.json(); // Move this line up
    const authToken = responseJson.token;

    localStorage.setItem(authTokenKey, authToken);

    console.log("Authentication successful. Token:", authToken);

    return true;
  } catch (error) {
    console.error("Error during authentication:", error.message);
    return false;
  }
}

function redirectToQRReader() {
  window.location.href = "../leitor qr/index.html";
}

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const isAuthenticated = await authenticate(username, password);

  if (isAuthenticated) {
    redirectToQRReader();
  }
});

const meusBotoes = document.getElementsByClassName("login-btn");

for (const meuBotao of meusBotoes) {
  meuBotao.addEventListener("click", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const isAuthenticated = await authenticate(username, password);

    if (isAuthenticated) {
      redirectToQRReader();
    } else {
      console.error("Authentication failed");
    }
  });
}
