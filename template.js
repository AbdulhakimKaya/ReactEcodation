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
