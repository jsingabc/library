
// Main array
let myLibrary = []
// constructor function
function Book(id, title, author, pages, readStatus){
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.pushToTheList = function() { 
		myLibrary.push(this);
    }
    this.pushToTheList();
}
// Prints inital list to console
console.log(myLibrary)

// Changes read status on any object of book via array.haveRead()
Book.prototype.haveRead = function(){
    this.readStatus = "Read"
}

/* adds 3 books to my library that are objects
 I used this in the beginnin to test a bunch
let book1 = new Book(1,"Python","Mary",250,"Not Read");
let book2 = new Book(2,"C#","Phil",500,"Not Read");
let book3 = new Book(3,"Java","Mia",125," Not Read");*/


// radio button function to control read status on dialog box
function ifRead(){
    // targets the right form input
    let status = document.querySelector("input[name=bookReadings]:checked").value
    //console.log(status)
    if (status === "true") {
        return "Read"
    } 
    else if (status === "false") {
        return "Not Read"
    } 
}


/* function loops myLibrary array,forEach loop gets me to key/values, html
 a empty var added with divs, template literals via +=, grab cards which holds
card, then add removebtn functionality, return html is very needed*/
const displayBooks = () => {
    let html = "";
    Object.entries(myLibrary).forEach(([key, value]) => {
    
    html += `
            <div class="card">
            <div>Id: ${ value.id } </div>
            <div>Title: ${ value.title }</div>
            <div>Author: ${ value.author }</div>
            <div>Pages: ${ value.pages }</div>
            <div class="isRead">Read: ${ value.readStatus }</div><br>
            <button class="removeBook">Remove this Book</button>
            <button class="changeRead">Book is Read</button>
            </div>

    `
    document.getElementById("cards").innerHTML = html;
    
    })

    let removeBtn = document.querySelectorAll(".removeBook");
    removeBtn.forEach(function(item) {
        item.addEventListener("click", function(event) {
        console.log(item)

        // this code grabs the index of the items var of forEach loop
        let needle = Array.prototype.indexOf.call(removeBtn, item);
        console.log(needle)
        // target index of click button and remove array object
        myLibrary.splice(needle, 1)
        //delete myLibrary[needle]
        
        // targets and removes dom of click event div seperate from object
        event.target.closest('div').remove();
        // clear body text
        let html = "";
        document.getElementById("cards").innerHTML = html;
        // target card div and rewrite cards in div below
        displayBooks()
        
    })
})
    //return the code in html to function and ends display books
    return html;
    
}

// This creates my modal form get user book answers
function myDialogFunct() {
    document.getElementById("myDialog").showModal();
}

// Make a new Book object below with modal and push to array
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
        //creates variables to add below in let newBook
        id = +document.getElementById("ids").value;
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = +document.getElementById("pages").value;
        readStatus = ifRead();
        //create new Object and add above variables
        let newBook = new Book(id, title, author, pages, readStatus)
        displayBooks() // updates the window with newBook
        newList = [] //creates empty array, that is usable for btns, HTMLCollection was not
        createList() //creates a array I can loop thru to access read btns div

});

//Display initial books
displayBooks()

/*Does not add new divs.....
let readBtn = document.querySelectorAll(".isRead");
let readBtn = document.getElementsByClassName("isRead");
the above creates HTMLCollection which is not iterable
var readBtnArr = Array.from(readBtn); tried to make a usable arr*/

    let newList = []
    let readBtn;
    readBtn = document.getElementsByClassName("changeRead");

    
    let changeText;
    let textList = []
    changeText = document.getElementsByClassName("isRead");


    //I had  recreate the array in newList the submit button then create new 
    //button divs otherwise after I do one click the function just ends
    function createList() {
    for (let i = 0; i < readBtn.length; i++){
        // new list is created usable replace HTML collection from readBtn
        newList.push(readBtn[i])
        console.log(newList)
    }
        // iterate newList Match the index to myLibrary array then add
        // myLibrary.haveRead() prototype that affects Book Object right
        newList.forEach(function(item) {
        item.addEventListener("click", function(event){
            createList()
            let myMatch = Array.prototype.indexOf.call(newList, item);
            console.log(myMatch)
            console.log(myLibrary[myMatch].haveRead())
            //function below creates usable arr from htmlcollection of div
            //I used the myMatch index to match to div then add innerHTML div
            createTextList()
            //changes the div that houses read display
            textList[myMatch].innerHTML = `<div class="isRead">Read: Read</div>`
        })
    })

    }


    function createTextList() {
        for (let i = 0; i < changeText.length; i++){
            textList.push(changeText[i])
            console.log(textList)
               }
    }
    
            /*textList.forEach(function(item) {
            item.addEventListener("click", function(event){
                let textMatch = Array.prototype.indexOf.call(textList, item);
                console.log(textMatch)
                textList[textMatch].innerHTML = `<div class="isRead">Read: Read</div>`
                
            })
        })*/
    
    

