let countElement=document.getElementById("count-el")
let count=0

function increment()
{
    count+=1
    countElement.textContent=count
}

function save()
{
    let prev=document.getElementById("prev")
    prev.textContent += count + " - "
    //after save, updating the count to 0
    count=0
    countElement.textContent=0
}