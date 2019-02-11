document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  const root = document.querySelector('#root')

  let header = document.createElement("h1")
  let node = document.createTextNode("JS BABY!")
  header.appendChild(node)
  root.appendChild(header)

  let input_div = document.createElement("div")
  input_div.innerText = "How many players"

  let number_input = document.createElement("input")
  number_input.id = "ni"
  number_input.setAttribute("type", "number")
  number_input.setAttribute("placeholder", "How many players?")
  number_input.setAttribute("max", "3")
  number_input.setAttribute("min", "2")
  number_input.setAttribute("value", "2")
  number_input.setAttribute("title", "How many players")
  input_div.appendChild(number_input)

  let input_button = document.createElement("button")
  input_button.setAttribute("type", "button")
  input_button.setAttribute("onclick", `addPlayerSelector()`)
  input_button.innerText = "Enter"
  input_div.appendChild(input_button)

  root.appendChild(input_div)
}

function addPlayerSelector() {
  let number = document.querySelector('#ni').value
  let select_div = document.querySelector('#select_div')
  if(select_div !== null) {
    select_div.parentNode.removeChild(select_div)
  }
  select_div = document.createElement('div')
  select_div.id = "select_div"
    for(let i = 0; i < number; i++) {
      createSelect(i, select_div)
    }
    select_div.appendChild(addCompareButton())
    root.appendChild(select_div)
}

function createSelect(id, where) {
  let select = document.createElement("select")
  select.id = `select-${id}`
  select.class = "players"
  select.innerText = `Select-${id}`

  let options = ["Kareem Abdul-Jabbar", "Nate Archibald", "Paul Arizin", "Charles Barkley", "Rick Barry", "Elgin Baylor", "Dave Bing", "Larry Bird"];

  for(let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }

  where.appendChild(select)
}

function addCompareButton() {
  let compare = document.createElement("button")
  compare.id = "compare-btn"
  compare.setAttribute("type", "button")
  compare.innerText = "Compare"
  compare.setAttribute("onclick", "comparePlayers()")
  return compare
}

function comparePlayers() {
  console.log("COMPARE");
  let number = document.querySelector('#ni').value
  for(let i = 0; i < number; i++) {
    let sel = document.getElementById(`select-${i}`)
    console.log(sel.value);
  }
}
//
// var select = document.getElementById("selectNumber");
// var options = ["Kareem Abdul-Jabbar", "Nate Archibald", "Paul Arizin", "Charles Barkley", "Rick Barry", "Elgin Baylor", "Dave Bing", "Larry Bird"];
//
// for(var i = 0; i < options.length; i++) {
//     var opt = options[i];
//     var el = document.createElement("option");
//     el.textContent = opt;
//     el.value = opt;
//     select.appendChild(el);
// }​
