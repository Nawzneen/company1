function a() {
  // alert("fs");
  let msg = "";
  if (document.getElementById("demo").innerHTML == "") {
    msg = Date();
  } else {
    msg = "";
  }
  document.getElementById("demo").innerHTML = msg;
}
