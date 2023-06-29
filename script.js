var button = document.getElementById("clickme"),
    count = 0, ready = true, pwr = 1;
button.onclick = function () {
    count += pwr;
    button.innerHTML = "Cliques: " + count;

    if (count > 5) {

        document.getElementById('titulo').classList.remove('green_text_animated')

        document.getElementById('titulo').classList.add('rainbow_text_animated')

        pwr = 5;
    }
    if (count >= 50) alert(`Parabéns! ${count} pontos!`)
};

