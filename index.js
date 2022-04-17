function calculateIMC() {
    let pesoFormated = document.getElementById('peso').value.replace(",",".");
    let alturaFormated = document.getElementById('altura').value.replace(",",".");

    let peso = parseFloat(pesoFormated);
    let altura = parseFloat(alturaFormated);

    const imc = peso / Math.pow(altura,2);

    if (isNaN(imc)) return;

    let tipo = " ";

    switch (true) {
        case (imc < 18.5):
            tipo = "Magreza";
            break;
        case (imc < 24.9):
            tipo = "Normal";
            break;
        case (imc < 30):
            tipo = "Sobrepeso";
            break;
        case (imc >= 30):
            tipo = "Obeso";
            break;
            default:
            "Fora do escopo calculado"
            break;
    }

    document.querySelector('#imc').innerHTML = tipo + " - " + imc.toFixed(1);
}

