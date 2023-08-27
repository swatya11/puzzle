// const tilescontainer = document.querySelector(".tiles");
// const colors= ["aqua","aquamarine","blue","crimson","gold","goldenyellow","green","red"];
// const colorspicklist =[...colors,...colors];
// const tilecount = colorspicklist.length;

// //game state
// let revealedCount= 0;
// let activeTile= null;
// let awaitingEndofMove= false;

// function buildTile(color){
//     const element = document.createElement("div");
//     element.classList.add("tile");
//     element.setAttribute("data-color",color);
//     element.setAttribute("data-revealed","false");
//     element.addEventListener("click",()=>{

//         const revealed =element.getAttribute("data-revealed");

//  if (awaitingEndofMove || revealed ==="true" || element==="activetile"){
//     return;
//  }
//    element.style.backgroundColor = color;
//  if (!activeTile){
//     activeTile = element;
//     return;

//  }
//  const colorToMatch = activeTile.getAttribute("data-color");
//  if(colorToMatch=== color){
//     activeTile.setAttribute("data-revealed","true");
//     element.setAttribute("data-revealed","true");
//     awaitingEndofMove = false;
//     activeTile=null;
//     revealedCount+= 2;

//     if(revealedCount===tilecount){
//     alert("you win! Refresh to play again.");
//     }
// return;
//  }
//  awaitingEndofMove= true;

//  setTimeout(()=>{
//     element.style.backgroundColor = null;
//     activeTile.style.backgroundColor= null;
//     awaitingEndofMove = false;
//     activeTile= null;

//  },1000);
//     });
//     return element;
// }

// //Builduptiles
// for(let i=0; i< tilecount; i++){
//     const randomIndex = Math.floor(Math.random()*colorspicklist.length);
//     const color= colorspicklist[randomIndex];
//     const tile = buildTile(color);

//     colorspicklist.splice(randomIndex,1);
//     tilescontainer.appendChild(tile);
//     console.log(color);
// }

const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal",];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
	const element = document.createElement("div");

	element.classList.add("tile");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");

	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");

		if (
			awaitingEndOfMove
			|| revealed === "true"
			|| element == activeTile
		) {
			return;
		}

		// Reveal this color
		element.style.backgroundColor = color;

		if (!activeTile) {
			activeTile = element;

			return;
		}

		const colorToMatch = activeTile.getAttribute("data-color");

		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeTile.setAttribute("data-revealed", "true");

			activeTile = null;
			awaitingEndOfMove = false;
			revealedCount += 2;

			if (revealedCount === tileCount) {
				alert("You win! Refresh to start again.");
			}

			return;
		}

		awaitingEndOfMove = true;

		setTimeout(() => {
			activeTile.style.backgroundColor = null;
			element.style.backgroundColor = null;

			awaitingEndOfMove = false;
			activeTile = null;
		}, 1000);
	});

	return element;
}

// Build up tiles
for (let i = 0; i < tileCount; i++) {
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const tile = buildTile(color);

	colorsPicklist.splice(randomIndex, 1);
	tilesContainer.appendChild(tile);
} 