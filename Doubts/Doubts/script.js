function talk(){
    var know = {
    "Who should I contact first in case of emergency" : "Nearest poilce station or the Need Support page ",
    "What all should I carry to stay safe" : "Peppermint Spray, Swiss Knife etc",
    "What can I do to stay safe" : "Get self defensive skills",
    "Self defensing classes near me" : "Veer Self Defence Classes is one of the best global self defense class",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }