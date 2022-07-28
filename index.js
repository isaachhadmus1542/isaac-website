let button = document.getElementById("button")
let tt = document.getElementById("tt")

button.onclick = isaac

function isaac() {
let names = document.getElementById('name')
name = names.value
let email = document.getElementById('email')
emailed = email.value
let talk = document.getElementById('talk')
talked = talk.value

if (talked && emailed)
{
    talk.value = ''
    email.value = ''
    names.value = ''

    name = name.charAt(0).toUpperCase() + name.slice(1)
    let firstname = 'Hi, ' + name + ' thanks for reaching out! 👍🏾'
    tt.innerText = ""
    let wordss = document.createElement('div')
    wordss.innerText= firstname
    wordss.style = "margin-left: 2rem ; margin-bottom: 2rem;"
    tt.appendChild(wordss)
}
else{
    tt.innerText = ""
    let wordss = document.createElement('div')
    wordss.innerText= "Hi, You did not enter all the required field"
    wordss.style = "margin-left: 2rem ; margin-bottom: 2rem;"
    tt.appendChild(wordss)

}


}