var numeroKmPercorsi = parseInt(prompt('Quanti Km devi percorrere oggi?'));
var etaPasseggero = parseInt(prompt('Puoi indicare la tua età?'));
var prezzoKm = 0.21;
var prezzoBiglietto = numeroKmPercorsi * prezzoKm;
var sconto20 = prezzoBiglietto * 0.2;
var sconto40 = prezzoBiglietto * 0.4;
var prezzoMinorenne = prezzoBiglietto - sconto20;
var prezzoOver = prezzoBiglietto - sconto40;


if (!isNaN(numerokmPercorsi) && !isNaN(etaPasseggero) && (numerokmPercorsi > 0) && (etaPasseggero > 0)) {
    if ( anni < 18 ) {
        document.getElementById('risultato').innerHTML = 'Il costo del biglietto è di € ' + prezzpMinorenne ;
    } else if ( anni > 65 ) {
        document.getElementById('risultato').innerHTML = 'Il costo del biglietto è di € ' + prezzoOver ;
    } else {
        document.getElementById('risultato').innerHTML = 'Il costo del biglietto è di € ' + prezzoBiglietto ;
    }
} else {
    alert('Il numero inserito non è corretto!');
}
