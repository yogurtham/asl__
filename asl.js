window.onload = load;
var signs = 
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"]; //array of images, 0-9 and then alphabet
function load()
{
    document.getElementById("button").onclick = processText;
}

function processText()
{
    var text = document.getElementById("phrase").value.split("");
    if (text.length > 50)
    {
        document.getElementById("error").innerHTML = "Please input a phrase shorter than 50 characters.";
    }
    var index;
    var imgs = "<div id='images'><tr>";

    for (var i = 0; i < text.length; i++)
    {
        index = (text[i].toLowerCase()).charCodeAt();
        if (isDigit(text[i]))
        {
            imgs += "<td><img src='signs/" + signs[parseFloat(index) - 48] + ".png'></td>";
        }
        else if (text[i].match(/[a-z]/i))
        {
            imgs += "<td><img src='signs/" + signs[parseFloat(index) - 87] + ".png'></td>";
        }
        if (((document.getElementById("phrase").value)[i + 1]) === " ")
        {
            imgs += "</tr>";
        }
        //if isDigit(), subtract 48 from ascii value to get array index
        //if !isDigit(), convert letter to caps, subtract 56 from ascii value to get array index
    }

    imgs += "</tr></div>";
    document.getElementById("imgs").innerHTML = imgs;
    
}

function isDigit(c) 
{
    return c >= '0' && c <= '9';
}