const container = document.getElementById("container");
const row = document.getElementById("row");

(function () {

    print("Executing...")

    var btnTitleArr = [ ["C", "0", "<", "/"],
                        ["7", "8", "9", "*"],
                        ["4", "5", "6", "-"],
                        ["1", "2", "3", "+"] ];

    for(i = 0; i < btnTitleArr.length; i ++) {  
        const newRow = document.createElement("div");
        newRow.id = "row";
        newRow.classList.add("row");
        const titleRow = btnTitleArr[i];
        for(j = 0; j < titleRow.length; j ++) {   
            const button = document.createElement("button");
            button.innerHTML = titleRow[j];
            button.classList.add("button");
            newRow.appendChild(button);
        }
        container.appendChild(newRow);
    }
    

}) ();