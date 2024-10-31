const myLibrary = [];

function Book(title,
	author,
	pages,
	haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
	this.info = function() {
		return this.title + ", " + "by " + this.author + ", " + this.pages + " pages" + ( this.haveRead ? ", have read": ", not read yet")
	};
};

book1 = new Book("Lord of the Rings", "J.R.R Tolkein", 999,true);
book2 = new Book("Leviathan Wakes", "James R Corey", 1000, true);
book3 = new Book("Cibola Burn", "James R Corey", 899, true)

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);


function addBookToLibrary() {

}

const main = document.querySelector(".main");

for (book of myLibrary) {
	
	const card = document.createElement("div");
	const title = document.createElement("p");
	const author = document.createElement("p");
	const pages = document.createElement("p");
	const statusInfo = document.createElement("p");
	const bookNo = myLibrary.indexOf(book) + 1;
	const bookNoHolder = document.createElement("span");
	console.log(bookNo);
	main.appendChild(card);
	card.classList.add("card");
		card.appendChild(title);
		title.textContent = `${book.title}`;
		card.appendChild(author);
		author.textContent = `by ${book.author}`;
		card.appendChild(pages);
		pages.textContent = `${book.pages} pages`;
		card.appendChild(statusInfo)
		statusInfo.textContent = (book.haveRead ? "I've read it": "I haven't read yet"); 
		statusInfo.appendChild(bookNoHolder);
		statusInfo.classList.add("status-info");
		bookNoHolder.textContent = bookNo;
};

