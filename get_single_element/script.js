let allList = $("li");
let indexnum = prompt("Enter the index(0-2) of the item to fetch")
let singleItem = allList[indexnum];
let singleHtml = singleItem.textContent;

$(`<h1>${singleHtml}</h1>`).appendTo("body");
