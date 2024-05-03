import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  // required es para obligar a que se le pase una propiedad course a este componente, sino da un error de compilacion
  @Input({ required: true })
  course: Course

  @Output()
  courseSelected = new EventEmitter<Course>();


  onCourseClicked() {
    //console.log("card component clicked");
    alert("card clicked")
    this.courseSelected.emit(this.course)
  }
}
