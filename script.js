/* ===== ANLopez — interacciones ===== */
(function () {
  "use strict";

  // Año dinámico en el footer
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  // Menú móvil
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    // Cerrar al hacer clic en un enlace
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  // Eventos de Google Analytics (si gtag no cargó, no hace nada)
  function track(nombre, params) {
    if (typeof window.gtag === "function") window.gtag("event", nombre, params || {});
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var lugar = a.closest(".hero-card") ? "hero" : "contacto";

    if (href.indexOf("https://wa.me/") === 0) {
      track("click_whatsapp", { ubicacion: lugar });
    } else if (href.indexOf("tel:") === 0) {
      track("click_telefono", { numero: href.slice(4), ubicacion: lugar });
    } else if (href.indexOf("mailto:") === 0) {
      track("click_email", { ubicacion: lugar });
    }
  });

  // Formulario de contacto — se envía a Netlify Forms, que reenvía por email.
  var form = document.querySelector(".contact-form");
  if (form) {
    var note = form.querySelector(".form-note");
    var boton = form.querySelector('button[type="submit"]');

    function aviso(texto, tipo) {
      note.textContent = texto;
      note.classList.remove("error", "ok");
      if (tipo) note.classList.add(tipo);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;

      form.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        var valid = input.value.trim() !== "" && input.checkValidity();
        if (field) field.classList.toggle("invalid", !valid);
        if (!valid) ok = false;
      });

      if (!ok) {
        aviso("Revisá los campos marcados antes de enviar.", "error");
        return;
      }

      boton.disabled = true;
      aviso("Enviando…", null);

      var area = form.elements["area"] ? form.elements["area"].value : "";
      var cuerpo = new URLSearchParams(new FormData(form)).toString();

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: cuerpo
      })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          aviso("¡Listo! Recibimos tu consulta y te vamos a responder a la brevedad.", "ok");
          track("generate_lead", { formulario: "consultas", area: area || "sin_especificar" });
          form.reset();
        })
        .catch(function () {
          aviso("No pudimos enviar la consulta. Escribinos por WhatsApp al +54 9 11 2450-7592.", "error");
        })
        .then(function () {
          boton.disabled = false;
        });
    });
  }
})();
