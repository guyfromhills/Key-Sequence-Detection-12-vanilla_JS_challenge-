



const pressed = [];
const secretCode = "anubhav";

window.addEventListener("keyup", function (e){
    //display key pressed
    console.log(e.key);

    //push the pressed key inside pressed array
    pressed.push(e.key);

    //display pressed array
    console.log(pressed);

    //limit the array size to secret code length for detection
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length );

    //condition for detection 
    if( pressed.join('').includes(secretCode))
    {
        console.log("DING DING");
        cornify_add();

    }


});