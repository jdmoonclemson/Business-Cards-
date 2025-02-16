// define the functions
var table = document.getElementById("sorted");
//var row = table.insertRow(0);
function printCard() {
   var row = table.insertRow(1);
   var areaN = row.insertCell(0);
   var areaE = row.insertCell(1);
   var areaA = row.insertCell(2);
   var areaP = row.insertCell(3);
   var areaB = row.insertCell(4);
   var nameLine = this.name;
   var emailLine = this.email;
   var addressLine = this.address;
   var phoneLine = this.phone ;
   var Birthday = this.birthdate;
   areaN.innerHTML = nameLine;
   areaE.innerHTML = emailLine;
   areaA.innerHTML = addressLine;
   areaP.innerHTML = phoneLine;
   areaB.innerHTML = Birthday;
}

function Card(name,email,address,phone,birthdate) {
   this.name = name;
   this.email = email;
   this.address = address;
   this.phone = phone;
   this.printCard = printCard;
   this.birthdate = birthdate;
}
