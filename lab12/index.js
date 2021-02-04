const getMenu = show => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            show(JSON.parse(request.responseText).breakfast_menu);
        }
    };
    request.open("GET", "http://127.0.0.1:5500/JsonSimple.json", true);
    request.send();
};

const createHeaders = (food, ...other) => {
    const row = document.createElement("tr");
    Object.keys(food).forEach(key => {
        const header = document.createElement("th");
        header.innerText = key;
        row.appendChild(header);
    });
    other.forEach(item => {
        const header = document.createElement("th");
        header.innerText = item;
        row.appendChild(header);
    });
    return row;
}


const showOrderTable = menu => {
    const table = document.createElement("table");
    table.style.border = "1px solid black";

    const foods = menu.foods;
    const headers = createHeaders(foods[0], "Count", "Summary");
    table.appendChild(headers);
    foods.forEach(food => {
        const row = document.createElement("tr");
        Object.values(food).forEach(value => {
            const data = document.createElement("td");
            data.innerText = value;
            row.appendChild(data);
        });
        const inputWrap = document.createElement("td");
        const input = document.createElement("input");
        input.addEventListener("input", e => {
            const count = e.target.value;
            const row = e.target.parentElement.parentElement.children;
            const price = +row.item(1).innerText.substring(1);
            row.item(row.length - 1).innerText = price * count;
            row.item(row.length - 1).dispatchEvent(new Event("change"));
        });
        inputWrap.appendChild(input);
        row.appendChild(inputWrap);
        const summary = document.createElement("td");
        summary.innerText = 0;
        summary.addEventListener("change", e => {
            const rows = Array.from(e.target.parentElement.parentElement.children);
            let sum = rows.
                        filter((row, index) => index != 0 && index != rows.length - 1).
                        map(row => row.children).
                        map(items => items.item(items.length - 1)).
                        map(item => +item.innerText).
                        reduce((result, value) => result + value);
            const lastRow = rows[rows.length - 1];
            const items = lastRow.children;
            items.item(items.length - 1).innerText =(sum );
        });
        row.appendChild(summary);
        table.appendChild(row);
    });
    const elemTotalrow = createSummary(foods);
    table.appendChild(elemTotalrow);
    document.getElementById("content").appendChild(table);
};
const showMenuTable = menu => {
    const table = document.createElement("table");
    table.style.border = "1px solid black";
    const foods = menu.foods;
    const headers = createHeaders(foods[0]);
    // console.log(headers);
    table.appendChild(headers);
    foods.forEach(food => {
        const row = document.createElement("tr");
        Object.values(food).forEach(value => {
            const data = document.createElement("td");
            data.innerText = value;
            row.appendChild(data);
        });
        table.appendChild(row);
    });
    document.getElementById("content").appendChild(table);
    const btn = document.createElement("button");
    btn.innerText = "Make an Order";
    btn.addEventListener("click", () => getMenu(showOrderTable));
    document.getElementById("content").appendChild(btn);
};
const createSummary = foods => {
    const row = document.createElement("tr");
    Array(foods.length - 1).fill("").concat("Total", 0).
        forEach(value => {
            const data = document.createElement("td");
            data.innerText = value;
            row.appendChild(data);
        });
    return row;
}