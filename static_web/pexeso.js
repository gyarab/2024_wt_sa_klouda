
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
]


let pole = [0, 2, 1, 2, 0]
let el = document.getElementById('pexeso')

el.innerHTML = ""

pole.forEach((prvek) => {
    //el.innerHTML += karty[prvek].src + '<br>'
    const newEl = document.createElement('img')
    newEl.src = karty[prvek].src
    el.appendChild(newEl)
})