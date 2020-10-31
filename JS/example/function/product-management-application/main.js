//declare HTML elements
let addInput = document.getElementById("input-new-product");
let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", add);

let productList = ["Vsmart Live", "Samsung A50"];


//
function init() {
    let tableBody = document.getElementById("table-body");
    let insertHTML = "";
    for (let i = 0; i < productList.length; i++) {
        insertHTML += "<tr>"
        insertHTML += `<td>${productList[i]}</td> `;
        insertHTML += `<td><input id="edit-input" class="btn btn-primary mb-2" type="button" value="Edit"></td>`;
        insertHTML += `<td><input id="del-input" class="btn btn-primary mb-2" type="button" value="Del"></td>`;
        insertHTML += "</tr>"

    }
    tableBody.innerHTML = insertHTML;
    displayProductNumber();
}

// khi ấn nút add thì thêm giá trị từ input trong HTML để đưa vào mảng productList
function add() {
    productList.push(addInput.value);
    init();
    addInput.value = "";
}

//hiển thị số lượng sản phẩm
function displayProductNumber(){
    let productNumber = document.getElementById("product-number");
    productNumber.innerHTML = productList.length;
}
function edit() {
    
}

function del() {

}

init();