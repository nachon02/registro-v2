// (function () {
// 	"use strict";
// 	let forms = document.querySelectorAll(".needs-validation");
// 	Array.prototype.slice.call(forms).forEach(function (form) {
// 		form.addEventListener(
// 			"submit",
// 			function (event) {
// 				if (!form.checkValidity()) {
// 					event.preventDefault();
// 					event.stopPropagation();
// 				}

// 				form.classList.add("was-validated");
// 			},
// 			false
// 		);
// 	});
// })();

const contraseña1 = document.getElementById("password1");
const contraseña2 = document.getElementById("password2");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mail = document.getElementById("email");
const caracterMail = (e) => {
	return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
		e
	);
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

btn.addEventListener("click", () => {
	if (contraseña1.value.trim() != "" && contraseña1.value.length >= 6) {
		validar(contraseña1, "c");
	} else {
		validar(contraseña1);
	}
	if (contraseña2.value.trim() != "" && contraseña1.value == contraseña2.value && contraseña1.value.length >= 6) {
		validar(contraseña2, "c");
	} else {
		validar(contraseña2);
	}

	if (nombre.value.trim() != "") {
		validar(nombre, "c");
	} else {
		validar(nombre);
	}
	if (apellido.value.trim() != "") {
		validar(apellido, "c");
	} else {
		validar(apellido);
	}
	if (mail.value.trim() != "" && caracterMail(mail.value)) {
		validar(mail, "c");
	} else {
		validar(mail);
	}
});
