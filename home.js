//'use strict';
showMessage("Bish-Bosh! JS Header");

// Console BishBosh
const button = document.getElementById('bish-bosh-btn');
button.addEventListener('click', function() {
    doBishBosh()
});



// ToggleButton
const toggleButton = document.getElementById("see-review");
toggleButton.addEventListener('click', function() { 
    const review = document.getElementById("review");

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none'); 
        toggleButton.textContent = 'CLOSE REVIEW';
    }
    else{
        review.classList.add('d-none');
        toggleButton.textContent = 'SEE REVIEW';
    }
});



//document.querySelectorAll('#bish-form input');

const customBish = document.getElementById("custom-bish-btn");

customBish.addEventListener('click', function(){
    // HTML VALIDATION with numbers
    const formArray = Array.from(document.querySelectorAll('#bish-form input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
    
    
    const bishValues = doBishBosh(parseInt(formArray['loop-value']), formArray['bish-form-value'], formArray['bosh-form-value'], toConsole = false); // Need parseint for FormValue 1. or else it parses to 1000...
    const dataOutputField = document.getElementById("custom-bish-target");
    // console.log(bishValues); works
    // const bishToggle = document.getElementById("custom-bish-output");
    //bishToggle.classList.remove('d-none'); ADD HTML INSTEAD. These toggles didnt work well with function click. Works find on just a toggle.
    
    // console.log(bishValues)
    dataOutputField.innerHTML += `<div class="card">
    <div class="card-body">
    <h5 class="card-title">Bish Bosh Output with range = ${parseInt(formArray['loop-value'])}, Bish = ${formArray['bish-form-value']}, and Bosh = ${formArray['bosh-form-value']} </h5>
    ${bishValues};
    </div>
    </div>
    `
    window.location.hash = '#custom-bish-target';
})

const bishOutClear = document.getElementById("clear-bish-bosh-output")
bishOutClear.addEventListener('click', function(){
  const dataOutputField = document.getElementById("custom-bish-target");
  dataOutputField.innerHTML ="";
})


const midButton = document.getElementById("mid-button");

midButton.addEventListener('click', function() {
    console.log("Hello Middle button ")
    console.clear()


})


// PURCHASE LIST

// Create a "close" button and append it to each list item
const purchaseList = document.getElementById("myUL")
let myNodelist = purchaseList.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.getElementById('myUL');

list.addEventListener('click', function(ev) {
    console.log("Hello Click");
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item or banana when clicking on the "Add" button
function newElement() {
  let banana = Math.floor(Math.random() * 11);
  let inputValue;  
  let li = document.createElement("li");
  if(banana >=3){
    inputValue = document.getElementById("myInput").value;
  }
  else 
  {
    inputValue = "MORE Banans!!";
  }
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// GIT RETRIVER FROM NET21B
const gitBtn = document.querySelector('#git-retriever');
const gitOutput = document.querySelector('#git-output');
const getGit = () => {
    fetch('https://api.github.com/users/NET21B/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            gitOutput.innerHTML = '';
            data.forEach(repo => {
                gitOutput.innerHTML +=
                    `
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
              <a href="${repo.html_url}" class="card-link">${repo.name}</a>
              <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
            </div>
            </div>
            `
            })
        })
        .catch(error => {
            console.log('fel! ' + error);
        })
}
gitBtn.addEventListener('click', getGit);

const clear = function() {gitOutput.innerHTML ="";}

const gitClear = document.querySelector('#git-clear');
gitClear.addEventListener('click', clear)

// Save File requires a Conversion to other format. And that does throw off other functionality.
// const fs = require('fs');

// fs.appendFile('mynewfile1.txt', gitOutput.innerHTML, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// Started JS Code - Moved to End
const twelve = 12;

let remainder = twelve % 3;

let amount = Number.parseFloat("123.12"); // toString to make number to string
console.log(amount);
console.log(typeof amount);

showBishBosh(remainder)

showBishBoshType(typeof twelve)

console.log(--remainder)

let person = {
    firstName: "John",
    lastName: "Adams"
}
console.log(`first name is: ${person.firstName}`); // backticks + $ to do string interpolation