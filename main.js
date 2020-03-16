
function addList(){
  var item = document.getElementById("btn").value
  var text = document.createTextNode(item)
  var newItem = document.createElement("li")
  newItem.appendChild(text)
  document.getElementById("addList").appendChild(newItem)
}
