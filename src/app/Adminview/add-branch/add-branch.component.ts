import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { branch } from '../list-branch/branch';
import { BranchService } from '../list-branch/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  addBranchData: branch = {
    branchId: 0,
    branchName: '',
    branchDescription: ''
}
  constructor(private branchService: BranchService, 
              private router: Router) { }
 
  ngOnInit(): void {
    
  }
 
  addBranch(){
    let myBranch: branch = {
      branchId: this.addBranchData.branchId,
      branchName: this.addBranchData.branchName,
      branchDescription: this.addBranchData.branchDescription 
    }
  
     
    this.branchService.addBranch(myBranch).subscribe((response) => {
       
      this.router.navigate(['list-branch']);
    }); 
  }

   

}
