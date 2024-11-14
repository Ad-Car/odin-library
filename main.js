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

function addBookToLibrary(book) {
	myLibrary.push(book)
}

function removeBookFromLibrary(bookId) {
	console.log(`Removing book ${bookId}`);
	myLibrary.splice(bookId-1,1);
	displayLibrary();
};

book1 = new Book("Lord of the Rings", "J.R.R Tolkein", 999,true);
addBookToLibrary(book1);
book2 = new Book("Leviathan Wakes", "James R Corey", 1000, true);
addBookToLibrary(book2);
book3 = new Book("Cibola Burn", "James R Corey", 899, true)
addBookToLibrary(book3);

const addbookButton = document.getElementById("addBookButton");
const addBookDialog = document.getElementById("addBookDialog");
const confirmAddButton = document.getElementById("confirm-add")

window.addEventListener('load', () => {
	displayLibrary();
});

addBookButton.addEventListener("click", () => {
	addBookDialog.showModal();
});


addBookDialog.addEventListener("close", () => {
	const result = addBookDialog.returnValue;
	if (result === "add") {
		const formData = new FormData(addBookDialog.querySelector('form'));
		const title = formData.get('title');
		const author = formData.get('author');
		const pages = formData.get('no-of-pages');
		const book = new Book(title, author, pages, false)
		if ((title && author && pages)) addBookToLibrary(book);
		displayLibrary();
		console.log('Book added to library');
} else if ( result === '' ) {
	console.log('Dialog closed with <ESC>');
} else {
	console.log('Dialog cancelled');
}
	const inputs = addBookDialog.querySelectorAll('input');
	inputs.forEach(input => {
		input.value = '';
	});
});

function displayLibrary() {
	const existingCards = document.querySelectorAll(".card");
	if ( existingCards ) {
		existingCards.forEach(card => {
			card.remove();
		})
	};
	const main = document.querySelector(".main");
	for (book of myLibrary) {
		const card = document.createElement("div");
		const title = document.createElement("p");
		const author = document.createElement("p");
		const pages = document.createElement("p");
		const statusInfo = document.createElement("p");
		const bookNo = myLibrary.indexOf(book) + 1;
		const bookNoHolder = document.createElement("span");
		const deleteButton = document.createElement("button");
		main.appendChild(card);
		card.classList.add("card");
		card.appendChild(title);
		title.textContent = `${book.title}`;
		card.appendChild(author);
		author.textContent = `by ${book.author}`;
		card.appendChild(pages);
		pages.textContent = `${book.pages} pages`;
		card.appendChild(statusInfo);
		card.appendChild(deleteButton);
		deleteButton.textContent = "Remove";
		deleteButton.id = bookNo;
		deleteButton.type = "button";
		deleteButton.addEventListener("click", function() {
			const bookId = this.id
			removeBookFromLibrary(bookId)
		});
		deleteButton.classList.add("delete-button");
		statusInfo.textContent = (book.haveRead ? "I've read it": "I haven't read yet"); 
		statusInfo.appendChild(bookNoHolder);
		statusInfo.classList.add("status-info");
		bookNoHolder.textContent = bookNo;
	};
};

