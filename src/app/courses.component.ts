import { Component } from '@angular/core'
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    /* template: `
            <h2>{{ "Title: " + title + " Using Function: " + getTitle() }}</h2> 
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>

        `
 */    
    template: `
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number: '2.1-1' }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
        {{ course.text | summary: 5}}
         `
})
export class CoursesComponent {
    title = "List of courses";
   // courses = ["course1", "course2", "course3"];
   courses;

    course = {
        title: "The Complete Angular course",
        rating: 4.9,
        students: 30321,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1),
        text: "sffdfdsfdfddf sdsfdsf ssfsd scsdsd scss ssfsd"
    }
    constructor(service: CoursesService) {
        //let service = new CoursesService(); // Service endpoint but tightly coupled with the service
        this.courses = service.getCourses(); 
    }

    getTitle() {
        return this.title;
    }


}