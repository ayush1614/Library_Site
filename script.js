class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class displayBooks {

    add(book) {
        let tableBody = document.getElementById("tableBody");
        let ipStr = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>` ;

        tableBody.innerHTML += ipStr;

    }

    clear() {
        let libform = document.getElementById('libform');
        libform.reset();
    }

    show(type, dispmsg) {
        let msg = document.getElementById("msg");
        msg.innerHTML = `
                        <div class="alert alert-${type}" role="alert">
                        <strong>${dispmsg}</strong>
                        </div>`

        setTimeout(() => {
            $(msg).hide();
            // msg.innerHTML = `` ;  
        }, 3000)
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2 || book.type.length < 2)
            return false;

        else
            return true;

    }
}

let libform = document.getElementById("libform");
libform.addEventListener('submit', library);

function library(e) {
    e.preventDefault();

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;


    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let mythological = document.getElementById("mythological");

    if (fiction.checked)
        type = fiction.value;

    else if (programming.checked)
        type = programming.value;

    else if (mythological.checked)
        type = mythological.value;

    // makes new object 
    let book = new Book(name, author, type);
    // console.log(type);

    let display = new displayBooks();
    if (display.validate(book)) {
        display.add(book);
        display.show("success", "Successfully added the book!");
        display.clear();
    }
    else {
        display.show("danger", "Sorry you can't add this book");
    }
}