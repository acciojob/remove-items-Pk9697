//your JS code here. If required.
const btn=document.getElementById('btn')
const selectInput=document.getElementById('colorSelect')

btn.addEventListener('click',()=>{
	const selectedOption=document.querySelector(`#colorSelect option[value='${selectInput.value}']`)
	if(selectedOption){
		selectInput.removeChild(selectedOption)
	}
})