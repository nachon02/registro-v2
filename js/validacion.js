const contraseña1 = document.getElementById("password1");
const contraseña2 = document.getElementById("password2");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mail = document.getElementById("email");
const termCheck = document.getElementById("termCheck");
const modalLink = document.getElementById("modalLink");
const caracterMail = (e) => {
	return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
		e
	);
};
const onlyLetters = (e) => {
	return /^[A-Z]+$/i.test(e);
};

const btn = document.getElementById("btn");

function validar(el, tipo = "error") {
	let inp = el;

	if (tipo === "error") {
		inp.classList.remove("is-valid");
		inp.classList.add("is-invalid");
	} else {
		inp.classList.remove("is-invalid");
		inp.classList.add("is-valid");
	}
}

btn.addEventListener("click", (e) => {
	e.preventDefault();
	e.stopPropagation();
	let valid = 0;
	if (contraseña1.value.trim() != "" && contraseña1.value.length >= 6) {
		validar(contraseña1, "c");
		valid++;
	} else {
		validar(contraseña1);
	}
	if (contraseña2.value.trim() != "" && contraseña1.value == contraseña2.value && contraseña1.value.length >= 6) {
		validar(contraseña2, "c");
		valid++;
	} else {
		validar(contraseña2);
	}

	if (nombre.value.trim() != "") {
		validar(nombre, "c");
		valid++;
		if (!onlyLetters(nombre.value)) {
			document.getElementById("nameFback").textContent = "El nombre no puede contener números ni espacios";
			validar(nombre);
		}
	} else {
		validar(nombre);
	}
	if (apellido.value.trim() != "") {
		validar(apellido, "c");
		valid++;
		if (!onlyLetters(apellido.value)) {
			document.getElementById("lastNameFback").textContent = "El apellido no puede contener números";
			validar(apellido);
		}
	} else {
		validar(apellido);
	}
	if (mail.value.trim() != "" && caracterMail(mail.value)) {
		validar(mail, "c");
		valid++;
	} else {
		validar(mail);
	}
	if (!termCheck.checked) {
		termCheck.classList.remove("is-valid");
		termCheck.classList.add("is-invalid");
		modalLink.classList.add("link-danger");
		document.getElementById("termServError").classList.add("d-inline");
	} else {
		termCheck.classList.add("is-valid");
		termCheck.classList.remove("is-invalid");
		modalLink.classList.remove("link-danger");
		document.getElementById("termServError").classList.remove("d-inline");
	}
	if (valid == 5) {
		console.log("El usuario fue registrado correctamente");
	}
});
