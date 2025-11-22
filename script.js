

function volume_sphere() {
    //Write your code here
	const radius=document.querySelector("#radius").value;
	let r=radius*1;
	let volume=(4/3) * Math.PI * r * r * r;
    return volume;
} 

const calbtn=document.querySelector("#submit");
calbtn.addEventListener("click",(e)=>{
	e.preventDefault();
	let ans=volume_sphere();
	const volume=document.querySelector("#volume");
	volume.value=ans
	
	
})


// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
