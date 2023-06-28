var button = document.getElementById("clickme"),
    count = 0, ready = true, pwr = 1;
button.onclick = function () {
    count += pwr;
    button.innerHTML = "Cliques: " + count;
    if (count % 3 === 0 || count % 5) ready = true;
    if (count >= 500) alert(`Parabéns! ${count} pontos!`)
};

button.ondblclick = function () {
    if (ready) {
        pwr += 1;
        button.innerHTML = "Power Up!";
        ready = false;
    }
}