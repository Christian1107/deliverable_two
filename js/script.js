var eventType = prompt("(input occassion) 1.casual 2.semi-formal 3.formal");
var tempFahr = prompt("input degrees");

var result = "Since you are going to a " + eventType + " event and it is " + tempFahr + " degrees wear, ";

if ((eventType === "casual" || eventType === "Casual" || eventType === "CASUAL") && (tempFahr < 54)){
  alert(result + "something comfy and a coat.")
}

if ((eventType === "casual" || eventType === "Casual" || eventType === "CASUAL") && (tempFahr >= 54 && tempFahr <= 70)){
  alert(result + "something comfy and a jacket.")
}

if ((eventType === "casual" || eventType === "Casual" || eventType === "CASUAL") && (tempFahr > 70)){
  alert(result + "something comfy and no jacket.")
}





if ((eventType === "semi-formal" || eventType === "Semi-formal" || eventType === "SEMI-FORMAL" || eventType === "SEMI FORMAL" || eventType === "semi formal" || eventType === "Semi formal" || eventType === "Semi Formal") && (tempFahr < 54)){
  alert(result + "a polo and a coat.")
}

if ((eventType === "semi-formal" || eventType === "Semi-formal" || eventType === "SEMI-FORMAL" || eventType === "SEMI FORMAL" || eventType === "semi formal" || eventType === "Semi formal" || eventType === "Semi Formal") && (tempFahr >= 54 && tempFahr <= 70)){
  alert(result + "a polo and a jacket.")
}

if ((eventType === "semi-formal" || eventType === "Semi-formal" || eventType === "SEMI-FORMAL" || eventType === "SEMI FORMAL" || eventType === "semi formal" || eventType === "Semi formal" || eventType === "Semi Formal") && (tempFahr > 70)){
  alert(result + "a polo and no jacket.")
}




if ((eventType === "formal" || eventType === "Formal" || eventType === "FORMAL") && (tempFahr < 54)){
  alert(result + "a suit and a coat.")
}

if ((eventType === "formal" || eventType === "Formal" || eventType === "FORMAL") && (tempFahr >= 54 && tempFahr <= 70)){
  alert(result + "a suit and a jacket.")
}

if ((eventType === "formal" || eventType === "Formal" || eventType === "FORMAL") && (tempFahr > 70)){
  alert(result + "a suit and no jacket.")
}
