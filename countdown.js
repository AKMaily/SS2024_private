// Ziel-Datum setzen (31.08.2024)
var targetDate = new Date("August 31, 2024 00:00:00").getTime();

// Update-Funktion für den Countdown
function updateCountdown() {
    var now = new Date().getTime();
    var distance = targetDate - now;

    // Berechne Tage, Stunden, Minuten und Sekunden
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Anzeige des Countdowns im HTML-Dokument
    document.getElementById("countdown").innerHTML = days + " Tage " + hours + " Stunden "
    + minutes + " Minuten " + seconds + " Sekunden ";

    // Wenn das Ziel-Datum erreicht ist, gib eine Nachricht aus
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Ziel erreicht!";
    }
}

// Starte den Countdown und aktualisiere ihn alle Sekunde
var interval = setInterval(updateCountdown, 1000);
