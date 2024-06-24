


buttons = document.querySelectorAll(".link");



for (let i = 0; i < buttons.length; i++) 
{
        buttons[i].addEventListener("click", function() 
        {
            SetBackgroundColor(i);
        });
}


function SetBackgroundColor(index)
{
    //IF elemenet already has it remove it
    // if it does not you iterate and rmeove 
    //green from all then add o the correct index


    if(buttons[index].classList.contains("selected"))
        buttons[index].classList.remove("selected");
    else
    {
        buttons.forEach(element => 
        {
            element.classList.remove("selected");
        });

        buttons[index].classList.add("selected");
    }
}