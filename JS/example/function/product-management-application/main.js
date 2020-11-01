//declare HTML elements
let addInput = document.getElementById("input-new-product");
let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", add);

let productList = ["Vsmart Live", "Samsung A50"];

let editAvailable = true;

//khởi tạo list sản phẩm
function init() {
    let tableBody = document.getElementById("table-body");
    let insertHTML = "";
    for (let i = 0; i < productList.length; i++) {
        insertHTML += "<tr>";
        insertHTML += `<td><input id="no-${i+1}" disabled type="text" value="${productList[i]}"></td> `;
        insertHTML += `<td><input id="edit-input" onclick="edit(event, this)" class="btn btn-warning mb-2" type="button" value="Edit"></td>`;
        insertHTML += `<td><input id="del-input" onclick="del(event)" class="btn btn-danger mb-2" type="button" value="Del"></td>`;
        insertHTML += "</tr>"
    }
    // console.log(productList);
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

//sửa sản phẩm
function edit(e, t) {
    let path = e.path[2].getElementsByTagName("input")[0];
    if (editAvailable) {
        path.disabled = false;
        t.value = "Save";
        t.classList.remove("btn-warning");
        t.classList.add("btn-success");
        editAvailable = false;
    } else {
        path.disabled = true;
        productList[parseInt(path.id.split("-")[1] - 1)] = path.value;
        t.value = "Edit";
        editAvailable = true;
    }
}

//xóa sản phẩm
function del(e) {
    let path = e.path[2].getElementsByTagName("input")[0];
    e.path[2].remove();
    productList.splice(parseInt(path.id.split("-")[1] - 1), 1);
    init();
}

init();