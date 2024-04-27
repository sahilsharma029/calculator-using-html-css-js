let string = "";
let btns = document.querySelectorAll('.btn');
let inp = document.querySelector(".inp");
Array.from(btns).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            inp.value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = "";
            inp.value = string;
        }
        else{
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            inp.value = string;
        }
    })
})