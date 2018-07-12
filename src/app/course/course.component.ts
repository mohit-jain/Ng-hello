import { Component, OnInit } from '@angular/core';

/*
This contain example for the String interpoltion  which is {{ }}
and PropertyBinding - Bind a property of a DOM element like src.
Below whenever the value of the imageUrl changes then the src attribute
of the image is changes.

colspan is not an attribute of the DOM so we need to tell the DOM that 
it is an attribute of the HTML.

This includes example of using bootstrap class on button
including the class binding concept.

This includes event binding and the event bubbling. Event bubbles up into
the DOM tree
This also includes Event filtering.

Two-way binding - change in the value from the component to the DOM 
and from the DOM to the component.
To achieve the 2-way binding, use the banana in the box and use the 
ngModel attribute.

*/
@Component({
  selector: 'app-course',
  template: `
      <h2>{{ title }}</h2> 
      <h2 [textContent]="title"></h2>

      <img src="{{ imageUrl }}" />
      <img [src]="imageUrl" />

      <div (click)="onDivClicked()">
        <button [style.backgroundColor]="isActive ? 'blue' : 'green'" class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
      </div>
      
      <button type="button" class="btn btn-default btn-lg" >
          <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
      </button>
      

      <table>
        <tr>
          <td [attr.colspan]="colSpan"></td>
        </tr>
      </table>

      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

  `
  //templateUrl: './course.component.html',
  //styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  
  title = "List of Courses";
  imageUrl = "http://lorempixel.com/400/200" ;

  colSpan = 2;
  isActive = false;

  email="mohi@gmail.com";
  
  constructor() { }

  ngOnInit() {
  }

  onDivClicked() {
    console.log("On Div Clicked...");
  }

  onSave($event) {
    $event.stopPropogation();// To stop event bubbling

    console.log("Button was clicked", $event);
  }

  onKeyUp() {
    /* if ($event.KeyCode === 13)
      console.log(" Enter Key pressed..") */

    console.log("Enter key is pressed....")

    //console.log($event.target.value);
    console.log(this.email);
  }
}
