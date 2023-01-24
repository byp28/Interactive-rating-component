const cont_1 = document.getElementById('cont1');
const cont_2 = document.getElementById('cont2');

const btn_sub = document.querySelector('.sub');
const btn = [...document.querySelectorAll('.btn')]

const rep = document.querySelector('.p-3');
nbr = null;

btn.forEach(bt=>bt.addEventListener("click",(e)=>{
    
    if(btn.indexOf(e.target)===0){
        nbr = 1;
        btn.map(b=>b.classList.remove('ac'))
        bt.classList.add("ac");
        
    }
    if(btn.indexOf(e.target)===1){
        nbr = 2;
        btn.map(b=>b.classList.remove('ac'))
        bt.classList.add("ac");
    }
    if(btn.indexOf(e.target)===2){
        nbr = 3;
        btn.map(b=>b.classList.remove('ac'))
        bt.classList.add("ac");
    }
    if(btn.indexOf(e.target)===3){
        nbr = 4;
        btn.map(b=>b.classList.remove('ac'))
        bt.classList.add("ac");
    }
    if(btn.indexOf(e.target)===4){
        nbr = 5;
        btn.map(b=>b.classList.remove('ac'))
        bt.classList.add("ac");
    }
}))

btn_sub.addEventListener("click",()=>{
    if(nbr===null){
        alert("Please select a number")
    }else{
        cont_1.classList.remove("active");
        cont_2.classList.add("active");
        rep.innerHTML = "You selected "+nbr+" out of 5";
    }
    
})