//  elementos necesarios
const elecciónPersone = document.querySelectorAll("button");
const resultadoDiv = document.getElementById("resultado");
const marcadorPersoneDiv = document.getElementById('marcador-Persone');
const marcadorCompuDiv = document.getElementById('marcador-Compu');
const reiniciarBoton = document.getElementById('reiniciar');

// Inicializar marcadores
let marcadorPersone = 0;
let marcadorCompu = 0;

// Pedir el nombre al jugador
const nombrePersone = prompt("Hola Personx! Ingresa el nombre con que te identifiques para comenzar el juego:");

// Verificar si se ingresó un nombre
if (nombrePersone) {
    alert("¡Eyyyyy " + nombrePersone + "! Vamxs a jugar a Piedra, Papel o Tijera al mejor de 5 intentos ¡SUEERTE! (suena el himno de fondo aahre xD)");

    marcadorPersoneDiv.textContent = " "+ nombrePersone +" : "+ marcadorPersone + "";
    // Agregar evento clic a los botones
    elecciónPersone.forEach(boton => {
        boton.addEventListener('click', () => {
            if (marcadorPersone < 3 && marcadorCompu < 3) {
                manejarClic(boton.id);
            }
        });
    });

    function manejarClic(elecciónPersone) {
        const elecciónComputadora = obtenerJugadaCompu();
        const ganadore = determinarGanadore(elecciónPersone, elecciónComputadora);
        mostrarResultado(elecciónPersone, elecciónComputadora, ganadore);
        actualizarMarcador(ganadore);
    }

    function obtenerJugadaCompu() {
        const opciones = ["Piedra", " Papel",  "Tijera"];
        const indiceAleatorio = Math.floor (Math.random() * 3);
        return opciones[indiceAleatorio];
    }

    function determinarGanadore(elecciónPersone, elecciónComputadora) {
        if (elecciónPersone === elecciónComputadora) {
            return "Empate";
        } else if (
            (elecciónComputadora === "Piedra" && elecciónPersone === "Tijeras") ||
            (elecciónComputadora === "Papel" && elecciónPersone === "Piedra") ||
            (elecciónComputadora === "Tijeras" && elecciónPersone === "Papel")
        ) {
            marcadorPersone++;
            return "Ganaste " + nombrePersone + ":)";
        } else {
            marcadorCompu++;
            return "Perdiste " + nombrePersone + " :(";
        }
    }

    function mostrarResultado(elecciónPersone, elecciónComputadora, resultado) {
        resultadoDiv.textContent = "Elegiste: " + elecciónPersone + ". La compu eligió: " + elecciónComputadora + ". " + resultado;
    }

    function actualizarMarcador(ganadore) {
        marcadorPersoneDiv.textContent = ""+ nombrePersone +" : "+ marcadorPersone +"";
        marcadorCompuDiv.textContent = "Compu: "+ marcadorCompu +"";
        
        if (marcadorPersone === 3 || marcadorCompu === 3) {
            mostrarGanadore();
        }
    }

    function mostrarGanadore() {
        if (marcadorPersone === 3) {
            resultadoDiv.textContent = "¡GANASTEEE SXS CAMPEÓNe MUNDIAL DEL PIEDRA, PAPEL O TIJERA! Felicidades "+ nombrePersone + " !";
        } else if (marcadorCompu === 3) {
            resultadoDiv.textContent = "Lamento decirte que salio primera la Compu :( ¡PERDISSSTE!...pero animo, SEGUNDO FRRRANCIA!";
        }
        reiniciarBoton.style.display = 'block';
    }

    function reiniciarJuego() {
        marcadorPersone = 0;
        marcadorCompu = 0;
        resultadoDiv.textContent = '';
        marcadorPersoneDiv.textContent = 'Persone: 0';
        marcadorCompuDiv.textContent = 'Compu: 0';
        reiniciarBoton.style.display = 'none';
    }
    reiniciarBoton.addEventListener('click', () => {
        reiniciarJuego();
    });

} else {
    alert("Buuuuuu, sin un nombre que te identifiques no podemos jugar. Actualiza la página e ingresalo nuevamente. Porfiis.");
}
