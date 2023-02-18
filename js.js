const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const check = function () {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Twoje hasło jest bardzo mocne";
		p.style.color = "lime";
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = "Twoje hasło jest mocne";
		p.style.color = "green";
	} else {
		p.textContent = "Twoje hasło jest słabe";
		p.style.color = "red";
	}
};

const final = function(){
  if (pass.value !== '') {
	check();
} else {
	p.textContent = "Podaj hasło";
	p.style.color = "";
}
};

pass.addEventListener("keyup", final);
