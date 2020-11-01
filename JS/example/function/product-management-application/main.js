//declare HTML elements
let addInput = document.getElementById("input-new-product");
let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", add);

let productList = ["Vsmart Live", "Samsung A50"];

let editAvailable = true;

//
function init() {
    let tableBody = document.getElementById("table-body");
    let insertHTML = "";
    for (let i = 0; i < productList.length; i++) {
        insertHTML += `<tr>`
        insertHTML += `<td><input id="no-${i+1}" disabled type="text" value="${productList[i]}"></td> `;
        insertHTML += `<td><input id="edit-input" onclick="edit(event, this)" class="btn btn-primary mb-2" type="button" value="Edit"></td>`;
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
function displayProductNumber() {
    let productNumber = document.getElementById("product-number");
    productNumber.innerHTML = "Số lượng sản phẩm: " + productList.length;
}

function edit(e, t) {
    if (editAvailable) {
        e.path[2].getElementsByTagName("input")[0].disabled = false;
        t.value = "Save";
        editAvailable = false;
    } else {
        e.path[2].getElementsByTagName("input")[0].disabled = true;

        productList[parseInt(e.path[2].getElementsByTagName("input")[0].id.split("-")[1] - 1)] = e.path[2].getElementsByTagName("input")[0].value;
        t.value = "Edit";
        // console.log(productList);
        editAvailable = true;
    }
}

function del() {

}

init();