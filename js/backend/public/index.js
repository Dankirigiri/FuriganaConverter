const form = document.getElementById("form-post");
const texts = document.getElementById("textsearchid");

form.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("waiting").style.display = "block";
    let kanji = { "text": texts.value };
    let kanjiJson = JSON.stringify(kanji);
    
    fetch("http://localhost:3000/convert", {
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body: kanjiJson
    }).then(r => {
        window.location.replace("http://localhost:3000/convert");
        console.log(r)
    });
});