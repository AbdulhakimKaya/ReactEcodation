// alert("example")

// Dark Mode
let darkMode = () => {
    document.body.classList.toggle("dark_mode")
}

// input search
$(document).ready(function() {
    const searchApi = ["Adana", "Balıkesir", "Çorum", "Denizli", "Diyarbakır", "Elazığ", "Malatya", "Van"]
    $( '#tags' ).autocomplete({ 
    source: searchApi 
    });
})

// Footer Date
let newDate = () => {
    const date = new Date().getFullYear();

    // JS Dom
    // document.getElementById("date_id").innerHTML = date;

    // JQuery Dom
    $("#date_id").html(date)
}
newDate();

let mybutton = document.getElementById("back_top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

