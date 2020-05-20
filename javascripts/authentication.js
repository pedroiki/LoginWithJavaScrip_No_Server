
const PASSWORD="12345"               // constante que nunca muda e tudo escrito em maisculo / change password

function removeAuthenticationWrapper () {
  const authenticationWrapper=document.getElementById("authentication-wrapper")

  authenticationWrapper.remove()
}

function handleSubmit () {
    const inputPassword=document.getElementById("password")
  const userPassword= inputPassword.value

  if (userPassword===PASSWORD)    {
    removeAuthenticationWrapper()
    window.alert ("Welcome")
  }
  else{
    window.alert ("Invalid password")
  }
}
