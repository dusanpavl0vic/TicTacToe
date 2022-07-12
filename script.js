let next = 1;
let matrix = [["","",""],["","",""],["","",""]];
let p = document.getElementById("pobednik");
let first = document.getElementById("first");
let cells = document.querySelectorAll(".grid-item");
let menu =  document.getElementById("menu");
let br = 0;

function Start_Restart(button){

    if(button.innerText === "Start"){
        button.innerText = "Restart";
    }
    
    for(let element of cells){
        element.innerText = "";
    }
    
    if(next == 0){
        next = 1;
    }
    else{
        next = 0;
    }
    
    br = 0;
    matrix = [["","",""],["","",""],["","",""]];
    game(next);
    menu.style.display = "none";
}

function game(){
    if(next == 1)
        first.innerText = `Prvi je O`;
    else
        first.innerText = `Prvi je \u2715`;
    
    for(let element of cells){
        element.addEventListener("click", handleClick);  
    };
}

function Winner(matrix, a){
    if(matrix[0][0] == a && matrix[0][1] == a && matrix[0][2] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else if(matrix[1][0] == a && matrix[1][1] == a && matrix[1][2] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else if(matrix[2][0] == a && matrix[2][1] == a && matrix[2][2] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else if(matrix[0][0] == a && matrix[1][0] == a && matrix[2][0] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else if(matrix[0][1] == a && matrix[1][1] == a && matrix[2][1] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else if(matrix[0][2] == a && matrix[1][2] == a && matrix[2][2] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else if(matrix[0][0] == a && matrix[1][1] == a && matrix[2][2] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else if(matrix[0][2] == a && matrix[1][1] == a && matrix[2][0] == a){
        p.innerText= `Pobednik je ${a}.`;
        return 1;
    }
    else{
        if(br == 9){
            p.innerText= `Nereseno.`;
            return 1;
        }
    }
    
    
}

function handleClick(event){
    br++;
    console.log(br);
    let i = parseInt(event.target.id[0]);
    let j = parseInt(event.target.id[1]);
    if(next == 1){
       event.target.innerText = "O";
        event.target.removeEventListener('click', handleClick);
        next = 0;
        matrix[i][j] = "O";
        console.log(matrix[i][j]);
    }
    else{
        event.target.innerText = '\u2715';
        event.target.removeEventListener('click', handleClick);
        next = 1;
        matrix[i][j] = '\u2715';
        console.log(matrix[i][j]);
    }
    if(Winner(matrix, matrix[i][j]) === 1){
       menu.style.display = "block";
    }
}