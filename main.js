var books = data.books;

function listBooks() {

	for (let i = 0; i < books.length; i++) {

		var list = document.getElementById("list");
		var create_div = document.createElement("div");
			list.appendChild(create_div);
		
		var create_h2 = document.createElement("h2");
			create_div.appendChild(create_h2);
			create_h2.textContent = books[i].titulo;
			create_h2.classList.add("titulos");
		var create_img = document.createElement("IMG");
			create_img.setAttribute("src", books[i].portada);
			create_div.appendChild(create_img);
			create_img.classList.add("cover");
			create_div.classList.add("bookDiv");
		var create_p = document.createElement("p");
			create_div.appendChild(create_p);
			create_p.textContent = books[i].descripcion;

	}
}
listBooks();

var searchBar = document.forms["searchBook"].querySelector("input");
	searchBar.addEventListener("keyup", function(e){
		var list = document.querySelector("#list");
		var term = e.target.value.toLowerCase();
		var books = list.getElementsByClassName("bookDiv");
		Array.from(books).forEach(function(book){
			var title = book.firstElementChild.textContent;
		if (title.toLowerCase().indexOf(term) !=-1){
			book.style.display = "flex";
		} else {
			book.style.display = "none";
			
		}
		})
		
	})
