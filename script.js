//your JS code here. If required.
const btn=document.getElementById('btn')
const selectInput=document.getElementById('colorSelect')

// btn.addEventListener('click',()=>{
// 	const selectedOption=document.querySelector(`#colorSelect option[value='${selectInput.value}']`)
// 	if(selectedOption){
// 		selectInput.removeChild(selectedOption)
// 	} 
// })

// without touching index.html options abd without queryselector for options
btn.addEventListener('click',()=>{
	// console.log(selectInput.selectedIndex)
	selectInput.remove(selectInput.selectedIndex)
})
