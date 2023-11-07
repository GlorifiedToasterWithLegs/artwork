import { Artwork } from './artwork.ts'
import { Statue } from './statue.ts'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

var artlist : Artwork[] = new Array();
var pricetotal = 0;

const form = document.getElementById('statueForm') as HTMLFormElement;
form.addEventListener('submit', (e) => {
    e.preventDefault();
	document.getElementById("statueName").classList.remove("border-danger");
	document.getElementById("statueYear").classList.remove("border-danger");
	document.getElementById("statuePrice").classList.remove("border-danger");
	document.getElementById("statueHeight").classList.remove("border-danger");
	document.getElementById("errorBox").classList.add("invisible");
	// clearing previous errors
	try{
		let name = document.getElementById("statueName")?.value;
		let year = document.getElementById("statueYear")?.value;
		let price = document.getElementById("statuePrice")?.value;
		let height = document.getElementById("statueHeight")?.value;
		let obj = new Statue(name, year, price, height);
		artlist.push(obj);
		console.log(artlist);
		pricetotal += +price;
		document.getElementById("total").innerText = artlist.length;
		document.getElementById("cost").innerText = pricetotal;
		document.getElementById("statueName").value = "";
		document.getElementById("statueYear").value = "";
		document.getElementById("statuePrice").value = "";
		document.getElementById("statueHeight").value = "";
	} catch (e) {
		if (e instanceof Error){
			errorHandler(e);
		}
	}
})

function errorHandler(error){
	console.log(error)
	if (error.message === "EmptyName")
	{
		document.getElementById("statueName").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Name field lacks a name!";
	}
	if (error.message === "InvalidName")
	{
		document.getElementById("statueName").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Name field contains invalid characters! (only use letters, comma or space.)";
	}
	if (error.message === "EmptyYear")
	{
		document.getElementById("statueYear").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Year field lacks a year!";
	}
	if (error.message === "HighYear")
	{
		document.getElementById("statueYear").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Year field's value is too high!";
	}
	if (error.message === "EmptyPrice")
	{
		document.getElementById("statuePrice").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Price field lacks a price!";
	}
	if (error.message === "LowPrice")
	{
		document.getElementById("statuePrice").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Price field's value is too low!";
	}
	if (error.message === "EmptyHeight")
	{
		document.getElementById("statueHeight").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Height field lacks a height!";
	}
	if (error.message === "LowHeight")
	{
		document.getElementById("statueHeight").classList.add("border-danger");
		document.getElementById("errorBox").classList.remove("invisible");
		document.getElementById("errorBox").innerHTML = "<strong>Error!</strong> Height must be 10cm or higher!";
	}
	
}