/* Created on 24 Jan '24 */
let form = document.getElementById("main");
document.getElementById("date").innerHTML = d();
function showModal() {
  var modal = document.getElementById("myModal");
  myModal.style.display = "block";
  setTimeout(() => {
    myModal.style.display = "none"
  }, 3000);
}

function main() {
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showModal();
    form.dataset.shouldSubmit = true;
  });
}
main();

function getting_data() {
  var record = "";
  var total_cost = 0;

  let meal_name = field_value("meal_name");
  let quantity = field_value("quantity");
  let price = field_value("price");
  let eatery = field_value("eatery");
  total_cost += quantity * price;
  document.getElementById("total_cost").innerHTML = total_cost;

  record += `${d()}, ${meal_name}, ${quantity}, ${price}, ${eatery}, ${String(
    total_cost
  )}`;
  console.log(record);
}
// SHould be server side
// function append_to_file(meal_data) {
//     let http = require('http');
//     let fs = require('fs');
//     http.createServer((req, res) => {
//         fs.appendFile('meal_plan_database.txt', meal_data, err => {
//             if (err) throw err;
//             console.log('Updated!');
//         })
//     }).listen(5000);
// }

function d() {
  date = new Date().toDateString();
  return date;
}

function field_value(id) {
  return document.getElementById(id).value;
}

function onClose() {
  const closeButton = document.querySelector(".close");
  
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      const modal = document.getElementById("myModal");
      modal.style.display = "none";
    //   window.location.reload();
      if (form.dataset.shouldSubmit === "true") {
        form.submit();
        setTimeout(() => {
        window.location.reload();    
        }, 2000);
        
      }
    });
  }
  
  

}

onClose();

