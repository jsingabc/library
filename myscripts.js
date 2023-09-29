
// makes my array
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
// prints inital list to console
console.log(myLibrary)

Book.prototype.haveRead = function(){
    this.readStatus = "Read"
}

// adds 3 books to my library that are objects
//let book1 = new Book(1,"Python","Mary",250,"Not Read");
//let book2 = new Book(2,"C#","Phil",500,"Not Read");
//let book3 = new Book(3,"Java","Mia",125," Not Read");


// radio button function to control read status
function ifRead(){
    let status = document.querySelector("input[name=bookReadings]:checked").value
    //console.log(status)
    if (status === "true") {
        return "Read"
    } 
    else if (status === "false") {
        return "Not Read"
    } 
}


// function loops array, prints objects in a card div object
// the objects are in the array list. each obj is a book object
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


    // remove button selected
    let removeBtn = document.querySelectorAll(".removeBook");
    //console.log(removeBtn)
    removeBtn.forEach(function(item) {
        item.addEventListener("click", function(event) {
        console.log(item)

        // grab all the nodes in programs by tag name
        // let nodes = document.getElementsByTagName('*')

        // cycle through all the button nodes gets the item i click
        let needle = Array.prototype.indexOf.call(removeBtn, item);
        console.log(needle)
        // target index of click button and remove array object
        myLibrary.splice(needle, 1)
        //delete myLibrary[needle]
        
        // targets and removes the dom of clicked div seperate from object
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

        id = +document.getElementById("ids").value;
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = +document.getElementById("pages").value;
        readStatus = ifRead();

        let newBook = new Book(id, title, author, pages, readStatus)
        displayBooks() 
        newList = []
        createList()

});

//Display initial books
displayBooks()

//Does not add new divs.....
//let readBtn = document.querySelectorAll(".isRead");

//Notes target books per their index in array
//Note proto functions work off the array dot notations
//NOtes right now I am using HTML Collection and may need to fix
//I need to first target button, div and index of library array

//let readBtn = document.getElementsByClassName("isRead");


    //NOTE mymMatch got me to the index i needed.
     //var readBtnArr = Array.from(readBtn); tried to make a usable arr
    //let readBtn = document.querySelectorAll(".changeRead");

    let newList = []
    let readBtn;
    readBtn = document.getElementsByClassName("changeRead");

    
    let changeText;
    let textList = []
    changeText = document.getElementsByClassName("isRead");



    function createList() {
    for (let i = 0; i < readBtn.length; i++){
    
        newList.push(readBtn[i])
        console.log(newList)
    }

        newList.forEach(function(item) {
        item.addEventListener("click", function(event){
            createList()
            let myMatch = Array.prototype.indexOf.call(newList, item);
            console.log(myMatch)
            console.log(myLibrary[myMatch].haveRead())
            createTextList()

            textList[myMatch].innerHTML = `<div class="isRead">Read: Read</div>`
        })
    })

    }


    function createTextList() {
        for (let i = 0; i < changeText.length; i++){
            textList.push(changeText[i])
            console.log(textList)
               }
    
            /*textList.forEach(function(item) {
            item.addEventListener("click", function(event){
                let textMatch = Array.prototype.indexOf.call(textList, item);
                console.log(textMatch)
                textList[textMatch].innerHTML = `<div class="isRead">Read: Read</div>`
                
            })
        })*/
    
        }

