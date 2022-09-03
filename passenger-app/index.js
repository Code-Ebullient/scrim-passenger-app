//document.getElementById("count-el").innerText = 5

// Procedures
//We need a place to store the data (Variable)
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


//Identifying the element
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    //modifying the element
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countDash = count + " - " 
    // 3. Render the variable in the saveEl using innerText
    //saveEl.innerText = saveEl.innerHTML + countDash
    saveEl.textContent += countDash
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}