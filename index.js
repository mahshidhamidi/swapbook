let myEmails = [];
let myUsers = [];
let myPasswords = [];
let fantasy = [];
let crime = [];
let science = [];
let romance = [];
let history = [];
let other = [];
isLogged = false;
let user;
var currentUser;
//trade offer
let tradeofferdiv = document.getElementById("tradeoffers");
//category buttons 
let parentDiv = document.getElementById("parentdiv");
let emptyArray = [];
// localStorage.setItem("fantasyBook", JSON.stringify(emptyArray));
// localStorage.setItem("crimeBook", JSON.stringify(emptyArray));
// localStorage.setItem("scienceBook", JSON.stringify(emptyArray));
// localStorage.setItem("romanceBook", JSON.stringify(emptyArray));
// localStorage.setItem("historyBook", JSON.stringify(emptyArray));
// localStorage.setItem("otherBook", JSON.stringify(emptyArray));

const loginLink = document.getElementById("loginlink"); // LOG IN   ANCHOR TAG
const logOUT = document.getElementById("logoutlink"); // LOG OUT ANCHOR TAG
const isLoggedFromLocalSTR = localStorage.getItem("isLogged");
let Auser = JSON.parse(localStorage.getItem("currentUser")); // USER OBJECT !

// login and log out button visibility
if (Auser !== null) {
  logOUT.classList.remove("disable");
  loginLink.classList.add("disable");
}
//when create account it make user 
class User {
  static id = 1000;
  
  bookList = [];
  constructor(email) {
    this.email = email;
    this.userID = ++User.id;
  }
}
//when create a book it make book
class Book {
  static id = 0;
  ownerID;

  constructor(name, author) {
    this.name = name;
    this.author = author;
    this.bookID = ++Book.id;
    this.ownermail;
  }
}
//buttons
const fantasyButton = document.getElementById("fantasybut");
const crimeButton = document.getElementById("crimebut");
const scienceButton = document.getElementById("sciencebut");
const romanceButton = document.getElementById("romancebut");
const historyButton = document.getElementById("historybut");
const otherButton = document.getElementById("otherbut");



/*** ADDING BOOKS (Function) ******************************************/
const categoryButtons = document.querySelectorAll("catebut");
// const userFromLocal = localStorage.getItem("currentUser");

const ParentNode = document.getElementById("Categories");
let dataUsers = JSON.parse(localStorage.getItem("dataUser"));

let fantasyBooks = JSON.parse(localStorage.getItem("fantasyBook"));
let crimeBooks = JSON.parse(localStorage.getItem("crimeBook"));
let scienceBooks = JSON.parse(localStorage.getItem("scienceBook"));
let romanceBooks = JSON.parse(localStorage.getItem("romanceBook"));
let historyBooks = JSON.parse(localStorage.getItem("historyBook"));
let otherBooks = JSON.parse(localStorage.getItem("otherBook"));
let USER;
//use  this function to create book 
ParentNode.addEventListener("click", function adder(e) {
  if (Auser !== null) {
    let name = prompt("Whats the name of the book?");
    let author = prompt("Whats the Author of the book?");
    let book = new Book(name, author);
    console.log("THIS IS BOOK", book);
    console.log("THIS IS AUSER", Auser);

    book.ownermail = Auser.email;

    let category = e.target.id;

    let owner = Auser.email;

    /********************/

    let dataUsers = JSON.parse(localStorage.getItem("dataUser"));
    //push the book to the user list to show
    
    // console.log("BOOK LIST", userbook);

    // localStorage.setItem("dataUser", JSON.stringify(USER.bookList));

    /***** */
    //which category 
    switch (category) {
      case "fantasy":
        fantasy.push(book);
        localStorage.setItem("fantasyBook", JSON.stringify(fantasy));

        fantasyBooks.push(book);
        localStorage.setItem("fantasyBook", JSON.stringify(fantasyBooks));

        localStorage.setItem("owner", JSON.stringify(owner));
        USER = dataUsers.find((user) => {
          console.log("user", user.email);
          console.log("current user", Auser.email);
          return user.email == Auser.email;
        });
    
        USER.bookList.push(book);

        localStorage.setItem("dataUser", JSON.stringify(dataUsers));

        break;
      case "crime":
        crime.push(book);
        localStorage.setItem("crimeBook", JSON.stringify(crime));

        crimeBooks.push(book);
        localStorage.setItem("crimeBook", JSON.stringify(crimeBooks));

        localStorage.setItem("owner", JSON.stringify(owner));

        userFound = dataUsers.find((user) => {
          return user.email == owner;
        });
        userFound.bookList.push(book);
        console.log("SADFSDFDSF", userFound);

        localStorage.setItem("dataUser", JSON.stringify(dataUsers));
        break;
      case "science":
        science.push(book);
        localStorage.setItem("scienceBook", JSON.stringify(science));

        scienceBooks.push(book);
        localStorage.setItem("scienceBook", JSON.stringify(scienceBooks));

        localStorage.setItem("owner", JSON.stringify(owner));

        userFound = dataUsers.find((user) => {
          return user.email == owner;
        });

        userFound.bookList.push(book);
        console.log("SADFSDFDSF", userFound);

        localStorage.setItem("dataUser", JSON.stringify(dataUsers));

        localStorage.setItem("owner", JSON.stringify(owner));
        break;
      case "romance":
        romance.push(book);
        localStorage.setItem("romanceBook", JSON.stringify(romance));

        romanceBooks.push(book);
        localStorage.setItem("romanceBook", JSON.stringify(romanceBooks));

        localStorage.setItem("owner", JSON.stringify(owner));

        userFound = dataUsers.find((user) => {
          return user.email == owner;
        });
        userFound.bookList.push(book);
        console.log("SADFSDFDSF", userFound);

        localStorage.setItem("dataUser", JSON.stringify(dataUsers));
        localStorage.setItem("owner", JSON.stringify(owner));
        break;
      case "history":
        history.push(book);
        localStorage.setItem("historyBook", JSON.stringify(history));

        historyBooks.push(book);
        localStorage.setItem("historyBook", JSON.stringify(historyBooks));

        localStorage.setItem("owner", JSON.stringify(owner));

        userFound = dataUsers.find((user) => {
          return user.email == owner;
        });
        userFound.bookList.push(book);
        console.log("SADFSDFDSF", userFound);

        localStorage.setItem("dataUser", JSON.stringify(dataUsers));
        localStorage.setItem("owner", JSON.stringify(owner));

        localStorage.setItem("owner", JSON.stringify(owner));
        break;
      case "other":
        other.push(book);
        localStorage.setItem("otherBook", JSON.stringify(other));

        otherBooks.push(book);
        localStorage.setItem("otherBook", JSON.stringify(otherBooks));

        localStorage.setItem("owner", JSON.stringify(owner));

        userFound = dataUsers.find((user) => {
          return user.email == owner;
        });
        userFound.bookList.push(book);
        console.log("SADFSDFDSF", userFound);

        localStorage.setItem("dataUser", JSON.stringify(dataUsers));
        localStorage.setItem("owner", JSON.stringify(owner));
        localStorage.setItem("owner", JSON.stringify(owner));
        break;
      default:
        console.log("lol");
    }
  } else alert("LOGIN FIRST ");
});
/*** END OF ADDING BOOKS ( Fuction) **********************************************/

//function for valid email
function validEmail(email) {
  const reg =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
}

/** LOGIN FUNCTIONS */
//function for signup
function createAccount() {
  const email = document.querySelector(".einputcreate").value;
  const pass = document.querySelector(".pinputcreate").value;
  const repass = document.querySelector(".cpinputcreate").value;

  switch (true) {
    case !validEmail(email):
      alert("Please enter a valid email address.");
      return;
    case pass === "":
      alert("Please enter a password.");
      return;
    case repass === "":
      alert("Please retype your password.");
      return;
    case pass !== repass:
      alert("Password and retype password must be the same.");
      return;
    case myEmails.indexOf(email) !== -1:
      alert("You registered before. Please try to log in.");
      return;
    default:
      user = new User(email);
      myUsers.push(user);

      console.log(user);
      localStorage.setItem("dataUser", JSON.stringify(myUsers));

      myEmails.push(email);
      myPasswords.push(pass);
      // console.log(myEmails);

      localStorage.setItem("dataEmail", JSON.stringify(myEmails));
      localStorage.setItem("dataPass", JSON.stringify(myPasswords));

      alert("You are registered. Try to log in now.");
      console.log(myEmails);
      //make inputs empty
      document.querySelector(".einputcreate").value = "";
      document.querySelector(".pinputcreate").value = "";
      document.querySelector(".cpinputcreate").value = "";
  }
}
//function for login
function login() {
  const email = document.querySelector(".b").value;
  const pass = document.querySelector(".ba").value;
  // console.log(email);
  // console.log(pass);
  // console.log("LOGIN TEST");
  dummy = JSON.parse(localStorage.getItem("dataEmail"));
  myEmails = [];
  myEmails.push(...dummy);
  // console.log(dummy);
  // console.log(myEmails);

  dummy2 = JSON.parse(localStorage.getItem("dataPass"));
  myPasswords = [];
  myPasswords.push(...dummy2);
  // console.log(myPasswords);
  dummy3 = JSON.parse(localStorage.getItem("dataUser"));
  myUsers = [];
  myUsers.push(...dummy3);

  console.log("MY USERS IS HERE!!", myUsers);
  // console.log("DUMMMYY33 IS HERE", dummy3);

  // myEmails = JSON.parse(localStorage.myEmails);

  switch (true) {
    case email === "":
      alert("Please enter your email.");
      return;
    case myEmails.indexOf(email) === -1:
      alert("Please create an account first.");
      return;
    case pass === "":
      alert("Please enter your password.");
      return;
    case myPasswords[myEmails.indexOf(email)] !== pass:
      alert("Please enter your correct password.");
      return;
    default: // USER IN LOCAL
      alert("You are logged in.");

      isLogged = true;
      // console.log(isLogged);
      localStorage.setItem("isLogged", JSON.stringify(isLogged));

      currentUser = myUsers.find((user) => {
        return (user.email = email);
      });
      console.log("THIS IS THE LOOGED USER ", currentUser);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      checkGetter(email);

      document.querySelector(".b").value = "";
      document.querySelector(".ba").value = "";
      break;
  }
}

//function for forgot
function forgot() {
  const email = document.querySelector(".bac ").value;
  dummy = JSON.parse(localStorage.getItem("dataEmail"));
  myEmails = [];
  myEmails.push(...dummy);

  switch (true) {
    case email === "":
      alert("Please enter your email.");
      return;
    case myEmails.indexOf(email) === -1:
      alert("Email does not exist.");
      return;
    default:
      alert("Password sent to your email.");
      document.querySelector(".bac ").value = "";
      break;
  }
}

// Showing the FantasyBooks
isShowfantasy = false;
isShowCrime = false;
isShowScience = false;
isShowRomance = false;
isShowHistory = false;
isShowOther = false;
//showing cards
const showFantasyButton = document.getElementById("showfantasybutton");
const showcase = document.getElementById("showcasediv");

function killshownbookslist() {
  if (showcase.hasChildNodes) {
    showcase.innerHTML = "";
  }
}

function makearrayfrommap(arraytype) {
  return arraytype.map((book, index) => {
    const { name, author, ownermail } = book;
    const div = document.createElement("div");
    div.classList.add("showcasecard");
    showcase.appendChild(div);
    const nameBookh1 = document.createElement("h1");
    nameBookh1.innerText = name;
    const authorh1 = document.createElement("h2");
    authorh1.innerText = author;
    div.appendChild(nameBookh1);
    div.appendChild(authorh1);
    const emailh1 = document.createElement("h2");
    emailh1.innerText = ownermail;
    div.appendChild(emailh1);

    const swapButton = document.createElement("button");
    swapButton.innerText = " SWAP NOW";
    swapButton.classList.add("swapbutton");
    div.appendChild(swapButton);
    swapButton.addEventListener("click", () => {
      if (Auser.email !== ownermail) {
        alert("YOUR OFFER HAS BEEN SENT");

        localStorage.setItem("sender", JSON.stringify(Auser.email));
        localStorage.setItem("getter", JSON.stringify(ownermail));
      } else {
        alert("YOU CANT");
      }
    });
  });
}

showFantasyButton.addEventListener("click", (e) => {
  let booksArray = JSON.parse(localStorage.getItem("fantasyBook"));
  let bookOwner = JSON.parse(localStorage.getItem("owner"));
  console.log(booksArray);

  killshownbookslist();
  booksArray = makearrayfrommap(booksArray);
});

//Showing the Crime Books
const showCrimeButton = document.getElementById("showcrimebutton");

showCrimeButton.addEventListener("click", (e) => {
  let booksArray = JSON.parse(localStorage.getItem("crimeBook"));
  let bookOwner = JSON.parse(localStorage.getItem("owner"));
  console.log(booksArray);

  killshownbookslist();
  booksArray = makearrayfrommap(booksArray);
});

// Showing Science Books
const showScienceButton = document.getElementById("showsciencebutton");
showScienceButton.addEventListener("click", (e) => {
  let booksArray = JSON.parse(localStorage.getItem("scienceBook"));
  let bookOwner = JSON.parse(localStorage.getItem("owner"));
  console.log(booksArray);

  killshownbookslist();
  booksArray = makearrayfrommap(booksArray);
});

//Showing Romance Book
const showRomanceButton = document.getElementById("showromancebutton");
showRomanceButton.addEventListener("click", (e) => {
  let booksArray = JSON.parse(localStorage.getItem("romanceBook"));
  let bookOwner = JSON.parse(localStorage.getItem("owner"));
  console.log(booksArray);

  killshownbookslist();
  booksArray = makearrayfrommap(booksArray);
});

//Showing History Books
const showHistoryButton = document.getElementById("showhistorybutton");
showHistoryButton.addEventListener("click", (e) => {
  let booksArray = JSON.parse(localStorage.getItem("historyBook"));
  let bookOwner = JSON.parse(localStorage.getItem("owner"));
  console.log(booksArray);

  killshownbookslist();
  booksArray = makearrayfrommap(booksArray);
});

//Showing Other Books
const showOtherButton = document.getElementById("showotherbutton");
showOtherButton.addEventListener("click", (e) => {
  let booksArray = JSON.parse(localStorage.getItem("otherBook"));
  let bookOwner = JSON.parse(localStorage.getItem("owner"));
  console.log(booksArray);

  killshownbookslist();

  booksArray = makearrayfrommap(booksArray);
});

/************************************************   END    SHOWING THE BOOKS  */
//clean current user and login and logout buttons
logOUT.addEventListener("click", () => {
  loginLink.classList.remove("disable");
  logOUT.classList.add("disable");
  Auser = null;
  localStorage.setItem("currentUser", JSON.stringify(Auser));
  isLogged = false;
  localStorage.setItem("isLogged", JSON.stringify(isLogged));
});
//showing trade offer
function checkGetter(currentUserEmail) {
  let getterEmail = JSON.parse(localStorage.getItem("getter"));
  let senderEmail = JSON.parse(localStorage.getItem("sender"));

  if (currentUserEmail === getterEmail) {
    console.log("GETTER LOGGED IN, TRADING");

    let AllUsersData = JSON.parse(localStorage.getItem("dataUser"));

    // WE KNOW WHO SENT THE OFFER
    let senderUser = AllUsersData.find((user) => {
      return user.email == senderEmail;
    });

    // DISPLAY THE SENDER'S BOOK TO THE GETTER

    const tradeofferh1 = document.createElement("h1");
    tradeofferh1.innerText =
      "YOU HAVE  OFFER, LETS SWAP YOUR BOOK, CHOOSE A BOOK";
    parentDiv.appendChild(tradeofferh1);

    senderUser.bookList.map((book, index) => {
      const { name, author, ownermail } = book;
      const div = document.createElement("div");

      div.classList.add("showcasecard");
      tradeofferdiv.appendChild(div);

      const nameBookh1 = document.createElement("h1");
      nameBookh1.innerText = name;
      const authorh1 = document.createElement("h2");
      authorh1.innerText = author;
      div.appendChild(nameBookh1);
      div.appendChild(authorh1);
      const emailh1 = document.createElement("h2");
      emailh1.innerText = ownermail;
      div.appendChild(emailh1);

      const AcceptButton = document.createElement("button");
      AcceptButton.innerText = " ACCEPT OFFER";
      AcceptButton.classList.add("swapbutton");
      div.appendChild(AcceptButton);

      AcceptButton.addEventListener("click", () => {
        alert("YOU ACCEPTED THE OFFER");
      });

      const RejectButton = document.createElement("button");
      RejectButton.innerText = " REJECT OFFER";
      RejectButton.classList.add("swapbutton");
      div.appendChild(RejectButton);

      RejectButton.addEventListener("click", () => {
        alert("YOU REJECTED THE OFFER");
      });
    });
  }
}
