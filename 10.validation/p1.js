let nameEl =document.getElementById("name")
let statusEl= document.getElementById("status")

function submithander(e){
    e.preventDefault();
    let data = nameEl.value;
    console.log(`username=`,data)

    //reg 
    let regex= /^[A-Za-z]+$/;

    if(regex.test(data)){
        statusEl.innerHTML= `<h3 class="success"> Valid name</h3>`
    }else{
        statusEl.innerHTML= `<h3 class="danger">invalid name</h3>`
    }
}