let a;
let b;
let c;


document.getElementById("button").onclick = function(){


    a = document.getElementById("aTextBox").value;
    a = Number(a);
    
    
    b = document.getElementById("bTextBox").value;
    b = Number(b);

     c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    document.getElementById("results").innerHTML = "Hypotenuse of the triangle with given sides is " + c;
}
