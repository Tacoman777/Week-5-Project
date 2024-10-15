document.getElementById("h1").textContent = `Trip Destination Check List for Delaware`;

var img = document.createElement("img");
img.src = "images/delaware-img.jpeg";
var src = document.getElementById("lf");
src.appendChild(img);

var checkedItems = 0;

function list() {

    var itemsAvailable = document.getElementById('div-list');
    var checks = new Array();
    var checks = [" Food", " Water", " Jacket", " Car", " Phone", " Luggage", " Money", " Wallet", " Shoes" ];
    var item, p, br;

    for(var count in checks)
    {
        item = document.createElement("input");   
        item.value=(checks[count] + '</br>');
        item.type="checkbox";
        item.id="item" + count;
        item.onclick = (function(item) {
            return function() {
                validate(item);
            };
        })(item);
        p = document.createElement("span");
        p.innerHTML = checks[count];
        br = document.createElement("br");
        itemsAvailable.appendChild(item);
        itemsAvailable.appendChild(p);
        itemsAvailable.appendChild(br);
    }
}

function validate(checkbox) {
    if (checkbox.checked) {
        checkedItems += 1;
    } else {
        checkedItems -= 1;
    }
    document.getElementById("tally").innerHTML = `Checked Items: ` + checkedItems;
}
list();