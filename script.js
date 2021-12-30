
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function display() {

}

let libform = document.getElementById("libform");
libform.addEventListener('submit', hello);

function hello(e) {
    e.preventDefault() ;
    console.log("jhsdbgfkhserbdk");
    let name = document.getElementById('bookName').value ; 
    let author = document.getElementById('Author').value ; 
    
    
    let type;
    let fiction = document.getElementById("fiction") ; 
    let programming =  document.getElementById("programming") ; 
    let mythological = document.getElementById("mythological") ;

    if(fiction.checked)
    type = fiction ; 

    else if(programming.checked)
    type = programming ;
     
    else if(mythological.checked)
    type = mythological ;
    
    // makes new object 
    let book  = new Book(name, author, type) ;
    console.log(book);

     
}
