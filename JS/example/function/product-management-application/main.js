//declare HTML elements
let addInput = document.getElementById("input-new-product");
let addBtn = document.getElementById("add-btn");
let tableBody = document.getElementById("table-body");
let productNumber = document.getElementById("product-number");

addBtn.addEventListener("click", add);

proNum = 0;

function createItem(name) {
    let insertHTML = "";
    insertHTML += `<td><input disabled type="text" value="${name}"></td> `;
    insertHTML += `<td><input id="edit-input" class="btn btn-warning mb-2" type="button" value="Edit"></td>`;
    insertHTML += `<td><input id="del-input" class="btn btn-danger mb-2" type="button" value="Del"></td>`;
    let newRow = document.createElement("tr");
    newRow.innerHTML = insertHTML;
    return newRow;
}

// khi ấn nút add thì thêm giá trị từ input trong HTML để đưa vào mảng productList
function add() {
    const newRow = createItem(addInput.value);
    tableBody.appendChild(newRow);
    addInput.value = "";
    // hiển thị số lượng sản phẩm
    proNum += 1;
    productNumber.innerHTML = proNum;
}

//sửa sản phẩm
function edit({
    target,
    path
}) {
    let inputElement = path[2].getElementsByTagName("input")[0];
    const isEdit = target.classList.contains("btn-warning");
    if (isEdit) {
        changeButtonToSave(inputElement, target)
    } else {
        changeButtonToEdit(inputElement, target)
    }
}

function changeButtonToSave(path, t) {
    path.disabled = false;
    t.value = "Save";
    t.classList.remove("btn-warning");
    t.classList.add("btn-success");
}

function changeButtonToEdit(path, t) {
    path.disabled = true;
    t.value = "Edit";
    t.classList.add("btn-warning");
    t.classList.remove("btn-success");
}

//xóa sản phẩm
function del(e) {
    const row = (e.target.parentNode.parentNode);
    tableBody.removeChild(row);
    // hiển thị số lượng sản phẩm
    proNum -= 1;
    productNumber.innerHTML = proNum;
}

function clickButtonHandler(e) {
    const classList = e.target.classList;
    if (!classList.contains("btn")) return;
    if (classList.contains("btn-danger")) {
        del(e)
    } else {
        edit(e)
    }
}

tableBody.addEventListener("click", clickButtonHandler);