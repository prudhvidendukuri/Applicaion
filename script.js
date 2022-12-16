//all users data
const data = [{ email: "justgivingfortest", nameOfData: "justtestingthevalue" },
{ email: "ramaraju@nerdpine.com", nameOfData: "ramaraju" },
{ email: "veerendra.nune@nerdpine.com", nameOfData: "veeru" },
{ email: "venugopal@nerdpine.com", nameOfData: "venu" }, { email: "jkl@gmail.com", nameOfData: "jkl" }]


//validate the inputs function
function ValidateInput() {
    let inputEmail = document.getElementById("inputEmail").value;
    let inputName = document.getElementById("inputName").value;
    if (inputEmail == null || inputEmail == "" || inputName == null || inputName == "") {
        document.getElementById("unexpectedError").style.display = "block";
        verifyData = "nullValues";
        return verifyData
    }else{
        let positionOfUser = 0;
        let verifyData = false;
        for (let i = 1; i < data.length; i++) {
            if (inputEmail == data[i].email) {
                positionOfUser = i;
                break;
            }
        }
        if (inputName == data[positionOfUser].nameOfData) {
            verifyData = true;
        }
        console.log("checking validateInput" + verifyData);
        return verifyData
    }
    
}

//unexoected Error function

function Validation() {
    let verifyData = ValidateInput();
    console.log(verifyData);
    if (verifyData == true) {
        let login = document.getElementById("login");
        login.style.display = "none";
        document.getElementById("unexpectedError").style.display = "none";
        document.getElementById("post").innerText = "Hi " + document.getElementById("inputName").value;
    } else {
        document.getElementById("unexpectedError").style.display = "block";
    }
    
}

//on load events
document.getElementById("unexpectedError").style.display = "none";
