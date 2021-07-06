import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var formContainerElement = document.getElementById("form-container-id"); 
    var firstNextElement = document.getElementById("firstNextElement");
    var secondNextElement = document.getElementById("secondNextElement");
    var thirdNextElement = document.getElementById("thirdNextElement");
    var fourthNextElement = document.getElementById("fourthNextElement");
    var firstPrevElement = document.getElementById("firstPrevElement");
    var secondPrevElement = document.getElementById("secondPrevElement");
    var thirdPrevElement = document.getElementById("thirdPrevElement");

    firstNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-100%";
      });
      secondNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-200%";
      });
      thirdNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-300%";
      });
      fourthNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-400%";
      });
      firstPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "0%";
      });
      secondPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-100%";
      });
      thirdPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-200%";
      });
  }

}
