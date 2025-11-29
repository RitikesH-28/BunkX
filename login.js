function handleLogin(response) {
  const token = response.credential;

  const payload = JSON.parse(atob(token.split('.')[1]));

  const user = {
    name: payload.name,
    email: payload.email,
    picture: payload.picture
  };

  localStorage.setItem("bunkUser", JSON.stringify(user));

  window.location.href = "index.html";
}
