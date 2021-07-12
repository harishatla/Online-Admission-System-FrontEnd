import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {


  title: string = "LIST OF COURSES...";
 
  allCourses: course[] = [];
  constructor(private router: Router,
              private courseService: CourseService ) { }
 
  myError = '';
  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((response) => {
      console.log(response);
      this.allCourses = response;
    },
    (error) => {
      console.log(error);
    });
 
    console.log("this is after the asynchronous call");
 
  }
 
  deleteCourse(courseId: number){
    console.log(courseId);
    this.courseService.deleteCourse(courseId).subscribe((response) => {
      console.log(response);
      this.allCourses = response;
     },
    (error) => {
      console.log(error);
    });
  }
  
  goToAdd(): void{
    this.router.navigate(['add-course']);
  }

   

}
