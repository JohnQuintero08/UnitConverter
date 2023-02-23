const convertBtn = document.getElementById("convert-btn")
let numberInputEl = document.getElementById("numberInput-el")
let lengthEl= document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let number = 0

convertBtn.addEventListener("click", function(){
    number = numberInputEl.value

    //1 meter = 3.281 feet
    let meterNum = number / 3.281
    let feetNum = number * 3.281
    lengthEl.innerHTML = `${number} meters = ${feetNum.toFixed(3)} feet |  ${number} feet = ${meterNum.toFixed(3)} meters`

    //1 liter = 0.264 gallon
    let litersNum = number / 0.264
    let gallonsNum = number * 0.264
    volumeEl.innerHTML = `${number} liters = ${gallonsNum.toFixed(3)} gallons | ${number} gallons = ${litersNum.toFixed(3)} liters`

    //1 kilogram = 2.204 pound
    let kiloNum = number / 2.204
    let poundNum = number * 2.204
    massEl.innerHTML = `${number} kilos = ${poundNum.toFixed(3)} pounds | ${number} pounds = ${kiloNum.toFixed(3)} kilos`

})