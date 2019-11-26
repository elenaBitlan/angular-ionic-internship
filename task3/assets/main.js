
fetch ('./assets/users.json')
.then((res)=>res.json())
.then((profile)=>{
const trueProfiles = profile.filter((obj)=>{return obj.isActive===true })
 
checkGender=()=>{

    let gender = document.getElementById("choseGender").value;
    let row= document.getElementById("row");
    row.parentNode.removeChild(row);
    let sortedByGender
    if(gender !=0){
        
    
    sortedByGender = trueProfiles.filter((obj)=>{return obj.gender===gender})
   }
   else{
         
        sortedByGender = trueProfiles;
   }
   buildCards(sortedByGender);
   searchName();
}


buildCards=(array)=>{

let arr = array;

const parent = document.getElementById("cards");
let row = document.createElement("div")
row.classList.add("row","justify-content-center")
row.setAttribute("id","row")
parent.appendChild(row);
arr.forEach((obj) => {
    

let card = document.createElement("div")
card.classList.add("card", "text-center", "bg-white", "w-20" ,"col-md-auto" ,"m-4", )
card.setAttribute("id","obj.id")
card.classList.add(obj.gender)
row.appendChild(card);

let image = document.createElement("img")
image.src = (obj.picture)
image.classList.add("rounded-circle","card-image-top")
card.appendChild(image)


let cardbody = document.createElement("div")
cardbody.classList.add("card-body")
card.appendChild(cardbody);



let cardtitle = document.createElement("h4")
cardtitle.classList.add("card-title", "text-color", "pt-1")
cardtitle.innerHTML = (obj.fullName)

let cardtext = document.createElement("p");
cardtext.classList.add("card-text","cut-text")
cardtext.innerHTML = (obj.about)


let button = document.createElement("button")
button.classList.add("btn", "btn-primary")
button.setAttribute("href","obj.email")
button.onclick=(href)=>{window.open("href");}
button.innerHTML = "Email"


cardbody.appendChild(image)
cardbody.appendChild(cardtitle)
cardbody.appendChild(cardtext)
cardbody.appendChild(button)
})
}
buildCards(trueProfiles);


searchName=()=>{

    let input = document.getElementById("searchbar").value
    input = input.toLowerCase();
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName("card-title")
    

    for (i = 0; i < card.length; i++) {  
        if(input.length===0){
            card[i].style.display = "block";
        }  
        else if (name[i].innerHTML.toLowerCase().includes(input)  ) {
            
            card[i].style.display = "block";
        } 
        else { 
            card[i].style.display="none";                  
        } 
    }
}
})

