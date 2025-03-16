const btnDrawLots = document.getElementById("drawLots")
const btnReplay = document.getElementById("drawLotsReplace")
const btnComeBack = document.getElementById("comeback")

const containerInitial = document.getElementById("container-initial")
const containerResult = document.getElementById("container-result")
const results = document.getElementById("results")

const quantity = document.getElementById("quantity")
const min = document.getElementById("min")
const max = document.getElementById("max")
const repeatNumber = document.getElementById("repeatNumber")
const regex = /[^0-9]/g

// Formata os inputs para aceitar apenas números
quantity.addEventListener("input", () => formattingInput(quantity));
min.addEventListener("input", () => formattingInput(min));
max.addEventListener("input", () => formattingInput(max));

function formattingInput(input) {
  let value = input.value.replace(regex, '')
  input.value = value
}

function generateRandomNumbers() {
  let amountNumbers = Number(quantity.value)
  let minNumber = Number(min.value)
  let maxNumber = Number(max.value)
  let drawnNumbers = []

  // Limpa resultados anteriores
  results.innerHTML = "";

  // Gera os números aleatórios
  do {
    let drawnNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    
    if(repeatNumber.checked) {
      // Se o checkbox estiver marcado, não permite repetições
      if(!drawnNumbers.includes(drawnNumber)) {
        drawnNumbers.push(drawnNumber)
        displayDrawnNumbers(drawnNumbers[drawnNumbers.length - 1])
      }
    } else {
      // Se não estiver marcado, permite repetições
      drawnNumbers.push(drawnNumber)
      displayDrawnNumbers(drawnNumbers[drawnNumbers.length - 1])
    }
  } while (drawnNumbers.length < amountNumbers);
}

function displayDrawnNumbers(drawnNumber) {
    let span = document.createElement("span")
    span.textContent = drawnNumber

    results.append(span)
}

btnDrawLots.addEventListener("click", () => {
  containerInitial.style.display = "none"
  containerResult.style.display = "flex"

  generateRandomNumbers()
})

btnReplay.addEventListener("click", generateRandomNumbers)

btnComeBack.addEventListener("click", () => {
  containerInitial.style.display = "flex"
  containerResult.style.display = "none"
})






