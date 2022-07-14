window.addEventListener("load", () => {
  // Set Menu and Tables inital Data
  loadTableData();
  loadMenuData();





  //Search function for tables and menu
    var filterTable = document.getElementById("tableSearch"), // search box
        tableList = document.querySelectorAll("#table-list li"); // all list items

        filterTable.onkeyup = (e) => {
            
            let searchTable = filterTable.value.toLowerCase();
         
            for (let i of tableList) {
              let table = i.innerHTML.toLowerCase();
              if (table.indexOf(searchTable) == -1) { i.classList.add("hide"); }
              else { i.classList.remove("hide"); }
            }
          };

    var filterMenu = document.getElementById("menuSearch"), // search box
        menuList = document.querySelectorAll("#menu-list li"); // all list items
        

        filterMenu.onkeyup = (e) => {
          
            let searchMenu = filterMenu.value.toLowerCase();
         
            for (let j of menuList) {
              let menu = j.innerHTML.toLowerCase();
              if (menu.indexOf(searchMenu) == -1) { j.classList.add("hide"); }
              else { j.classList.remove("hide"); }
            }
          };          



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("table-details");
  if (event.target == modal) {
    removeRows();  
  }

}


  });

  function deleteRows() {
    var rowCount = document.getElementById("model-table").rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
      document.getElementById("model-table").deleteRow(i);
    }
}


function removeRows() {
  var modal = document.getElementById("table-details");
  modal.style.display = "none";
  deleteRows();
  
}

  function dragstart(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event,tableId) {
    const id = event
      .dataTransfer
      .getData('text');
      updateTableData(tableId,parseInt(id));
  }


  var menu= [
    {
        "id":"0",
        "name":"Dosa",
        "cost":  110.0
    },
    {
      "id":"1",
        "name":"Idli",
        "cost":90.0
    },
    {
      "id":"2",
      "name":"Coffee",
      "cost":  10.0
  },
  {
    "id":"3",
      "name":"Tea",
      "cost": 10.0
  }
  ];

  function loadTableData(){
    // Tables data
    var tables = [{
      tName: "table1",
      total: 0,
      itemsCount: 0,
      items: new Map()
    },
    {
      tName: "table2",
      total: 0,
      itemsCount: 0,
      items: new Map()
    },
    {
      tName: "table3",
      total: 0,
      itemsCount: 0,
      items: new Map()
    }];

    
    tables.forEach(item=>{
      item.items = JSON.stringify(Array.from( item.items.entries()));
      localStorage.setItem(item.tName,JSON.stringify(item));
    var t = JSON.parse(localStorage.getItem(item.tName));
    document.getElementById(item.tName).innerHTML= `Total: ${t.total} Rs </br> Items:${t.itemsCount}`;
    });
  }
  function loadMenuData(){
    // Menu data
    menu.forEach(item=>{
    document.getElementById(item.id).innerHTML= `${item.name} </br> Cost: ${item.cost}`;
    });
  }

  function updateTableData(tableId, menuId, inc = 1){
    var t = JSON.parse(localStorage.getItem(tableId));
    var dropMenu = menu[menuId];
    var items = new Map(JSON.parse(t.items));
    if(inc === 1){
    t.total = t.total + dropMenu.cost;
    t.itemsCount = parseInt(t.itemsCount) + 1;
    items.has(menuId)?items.set(menuId,items.get(menuId)+1):items.set(menuId,1);
    }else{
      t.total = t.total-dropMenu.cost*items.get(menuId)+dropMenu.cost*inc;
      t.itemsCount = parseInt(t.itemsCount) - parseInt(items.get(menuId)) + parseInt(inc) ;
      items.set(menuId,parseInt(inc));
    }
    t.items = JSON.stringify(Array.from(items.entries()));
    localStorage.setItem(t.tName,JSON.stringify(t));
    var tb = JSON.parse(localStorage.getItem(t.tName));
    document.getElementById(tb.tName).innerHTML= `Total: ${tb.total} Rs </br> Items:${tb.itemsCount}`;
    return tb.total;
  }


  function displayWindow(tableNum) {
    var modal = document.getElementById("table-details");
    modal.style.display = "block";
    document.getElementById('model-head').innerHTML = `Table Num: ${tableNum.toUpperCase()} | Order Details`;
    var tb = JSON.parse(localStorage.getItem(tableNum));
    var modalTable = document.getElementById("model-table");
    var count = tb.itemsCount;
    var items = new Map(JSON.parse(tb.items));
    
    var i=1;
      items.forEach( (value,key) =>{
      var row = modalTable.insertRow(i);
      row.id = `row-${tableNum}-${key}`;
      row.class = "dynamic-rows";
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i++;
      cell2.innerHTML = menu[key].name;
      cell3.innerHTML = menu[key].cost;
      cell4.innerHTML = `<input  id="${tableNum}-${key}" type="number" name="points" step="1" onchange="updateTableValue(${key},${tableNum})" value = ${value}>`;
      cell5.innerHTML = `<button style="color:blue;text-align:center;" class="btn" onclick="updateTableValue(${key},${tableNum},true)" >delete</button>`;
    });

    document.getElementById("total").innerHTML = `Total: ${tb.total}`;

    var clear = document.getElementById("clear-sess");
    clear.addEventListener('click',()=>{clearTable(tableNum)});

  }
  function updateTableValue(key,tableNum,deleted= false){
    let total;
    if(deleted){
      total = updateTableData(tableNum.id,key,0)  ;
      document.getElementById(`row-${tableNum.id}-${key}`).remove();
    }else{
      let val = document.getElementById(`${tableNum.id}-${key}`).value;
      total = updateTableData(tableNum.id,key,val)  ;
    }
    document.getElementById("total").innerHTML = `Total: ${total}`;
  }

  function clearTable(tableId){
    var t = JSON.parse(localStorage.getItem(tableId));
    t.total = 0;
    t.itemsCount = 0;
    t.items = JSON.stringify(Array.from( new Map().entries()));
    
    localStorage.setItem(t.tName,JSON.stringify(t));
    var tb = JSON.parse(localStorage.getItem(t.tName));
    document.getElementById(tb.tName).innerHTML= `Total: ${tb.total} Rs </br> Items:${tb.itemsCount}`;
    removeRows();
  }
