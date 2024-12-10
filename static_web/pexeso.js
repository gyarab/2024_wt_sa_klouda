
let karty = [
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOJ-el2lz3IdwwPpLZ_NFFyH8eV3lqVUTPA&s'
    },
    {
        src: 'https://steamuserimages-a.akamaihd.net/ugc/2374028975372834651/9A6AFC6655B5B4175F23BB5691D17784CB1B4848/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        src: 'https://img.wattpad.com/bdf438e8b60d86415cdd14436e9dde9a8abf872e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f49534d6a364f5f596361545343673d3d2d313333343133323335302e313736323430656265343330376232613238343530383733353939372e6a7067?s=fit&w=720&h=720'
    },
    {
        src: 'https://ih1.redbubble.net/image.4555067858.6304/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
    },
    {
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxr5qAqClTfByvKEU05tR-WEXbW6Ujw7teSw&s'
    },
    {
        src:'https://static.wikia.nocookie.net/43450d2e-e5a9-48a0-bb60-87dcaf622939/scale-to-width/755'
    },
    {
        src:'https://media.tenor.com/GutRRm-YbW8AAAAe/emoji-switch-sad-to-happy.png'
    },
    {
        src:'https://ih1.redbubble.net/image.490263180.2295/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp'
    },
]


let pole = [];
pole.length = 16;
let score =0;

let el = document.getElementById('pexeso')
let def = 'https://as1.ftcdn.net/v2/jpg/00/10/05/64/1000_F_10056459_BuHHVd3shz5jlhYCAmcyqaDEy6xjclBe.jpg'

el.innerHTML = ""
let shuffle = true;

for(i=0;i<pole.length;i++){
    //console.log("i: "+i)
    shuffle=true;
    while (shuffle){
        random = Math.round(Math.random() * 7)
        //console.log("random: "+random)
        m = 0;
        for(n=0;n<pole.length;n++){
            //console.log("n: " + n)
            //console.log("pole n: " + pole[n])
            if(pole[n]==random){
                m++
                //console.log("m: " + m)
            }
        }
        //console.log("m: "+m)
        if(m>=2){
            continue
            //console.log("continue")
        }

        if(m<2){
            //console.log("break")
            pole[i] = random
            shuffle = false;
        }
    }
}
console.log(pole)
    
let x=0
pole.forEach((prvek) => {
    if(pole[prvek]!= undefined){
        x++
        //el.innerHTML += karty[prvek].src + '<br>'
        const img = document.createElement('img')
        const div = document.createElement('div')
        div.classList.add('col-3');

        img.id=(x);
        //console.log("x: "+x+"; prvek: "+prvek)
        img.setAttribute("onclick","flip("+x+")");
        img.classList.add(x);

        img.src = def
        //img.src = karty[prvek].src

        img.style = "border: 2px solid gray; width: 130px; height: 130px; padding:5px; margin:10px"
        
        div.appendChild(img)

        el.appendChild(div)
        //console.log('test ' + img.src)
    }
})

let id = ""


async function flip(poradi){
    let img = document.getElementById(poradi)
    
    console.log(poradi)
    console.log(pole[poradi-1])
    console.log(karty[pole[poradi-1]].src)
    img.src = karty[pole[poradi-1]].src

    if(id!=""){
        let img2 = document.getElementById(id)
        if(pole[poradi-1]==pole[id-1]){
            score++
            document.getElementById("score").textContent="Score: "+score;
            id=""
            img.setAttribute("onclick","")
            img2.setAttribute("onclick","")
            
        }
        else{
            setTimeout(() => {img.src = def
                img2.src = def
                id=""}, 750);
        }
    }
    else{
        id = poradi
    }
    if(score==8){setTimeout(() => {alert("VÝHRA")},50)}
}

