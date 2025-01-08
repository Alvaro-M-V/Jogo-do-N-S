function calculaIMC() {
    let alturaCm = parseInt(prompt('Digite sua altura em centímetros (ex: 170):'));
    let peso = parseFloat(prompt('Digite seu peso em kg (ex: 70.5):'));
    if (isNaN(alturaCm) || isNaN(peso) || alturaCm <= 0 || peso <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return; 
    }
    let alturaMetros = alturaCm / 100;
    let imc = peso / (alturaMetros * alturaMetros);
    alert(`Seu IMC é: ${imc.toFixed(2)}`);
  }