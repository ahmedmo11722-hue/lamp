"use strict";
const body = document.querySelector("body");
const Btn = document.querySelector("button");
const offBtn = document.querySelector(".off");
function openLamp() {
  body.style.backgroundColor = "#ffffff";
  Btn.textContent = "OFF";
  document.querySelector("img").style.backgroundColor = "rgba(255, 234, 44, 1)";
  Btn.style.color = "#003aaf";
  Btn.classList.add("hoverd");
  Btn.removeEventListener("click", openLamp);
  Btn.addEventListener("click", closeLamp);
}
function closeLamp() {
  body.style.backgroundColor = "#0d1016";
  Btn.textContent = "ON";
  document.querySelector("img").style.backgroundColor = "transparent";
  Btn.style.color = "#ffffff";
  Btn.classList.remove("hoverd");
  Btn.removeEventListener("click", closeLamp);
  Btn.addEventListener("click", openLamp);
}
Btn.addEventListener("click", openLamp);
