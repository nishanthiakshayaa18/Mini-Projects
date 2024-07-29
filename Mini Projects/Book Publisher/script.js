document.addEventListener("DOMContentLoaded", function() {
    var popupbox = document.querySelector(".popupbox");
    var overlay = document.querySelector(".overlay");

    function createitem() {
        popupbox.style.display = "block";
        overlay.style.display = "block";
    }

    var closeitem = document.getElementById("closeitem");
    closeitem.addEventListener("click", function(event) {
        event.preventDefault();
        popupbox.style.display = "none";
        overlay.style.display = "none";
    });

    // Adding boxes, additem,
    var container = document.querySelector(".container");
    var addbook = document.getElementById("additem");

    addbook.addEventListener("click", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var author = document.getElementById("author").value;
        var desc = document.getElementById("desc").value;

        if (name && author && desc) {
            var div = document.createElement("div");
            div.setAttribute("class", "book-container");
            div.innerHTML = `
                <h1> ${name}</h1>
                <h1> ${author}</h1>
                <p> ${desc}</p>
                <button>DELETE</button>
            `;
            container.append(div);

            // Show the new book container
            div.style.display = "block";

            // Add event listener to the delete button
            var deleteButton = div.querySelector("button");
            deleteButton.addEventListener("click", function() {
                div.remove();
            });

            // Hide popup and overlay
            popupbox.style.display = "none";
            overlay.style.display = "none";

            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("author").value = "";
            document.getElementById("desc").value = "";
        } else {
            alert("Please fill out all fields");
        }
    });
});

function createitem() {
    document.querySelector(".popupbox").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
}
