import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { branch } from './branch';
import { BranchService } from './branch.service';

@Component({
  selector: 'app-list-branch',
  templateUrl: './list-branch.component.html',
  styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent implements OnInit {

  title: string = "LIST OF BRANCHES...";
 
  allBranches: branch[] = [];
  constructor(private router: Router,
              private branchService: BranchService ) { }
 
  myError = '';
  ngOnInit(): void {
    this.branchService.getAllBranches().subscribe((response) => {
      console.log(response);
      this.allBranches = response;
    },
    (error) => {
      console.log(error);
    //   console.log(error.error.message);
    //  this.myError = error.error.message;
    });
 
     
  }
 
 
  editBranch(branchId: number){
    this.router.navigate(['edit-branch',branchId]);
  }
 
  goToAdd(): void{
    this.router.navigate(['add-branch']);
  }

}
