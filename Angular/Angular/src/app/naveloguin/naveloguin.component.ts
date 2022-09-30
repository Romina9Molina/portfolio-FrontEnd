import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naveloguin',
  templateUrl: './naveloguin.component.html',
  styleUrls: ['./naveloguin.component.css']
})
export class NaveloguinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


   
   // Ventana modal
let modal:any = document.getElementById("ventanaModal");

// Botón que abre el modal
let boton:any = document.getElementById("abrirModal");

    // Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span: any = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
  }

}
