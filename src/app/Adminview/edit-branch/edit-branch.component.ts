import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../list-branch/branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  editForm: FormGroup;
 
  constructor(private branchService: BranchService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {​​​​​​​​ 
      this.editForm = new FormGroup({​​​​​​​​
        branchId: new FormControl(),
       branchName: new FormControl('', [Validators.required,
                                          Validators.minLength(3),
                                          Validators.maxLength(15)]),
        branchDescription: new FormControl()
      }​​​​​​​​)
    }​​​​​​​​
 
    ngOnInit(): void {​​​​​​​​
      let branchId: any = this.activatedRoute.snapshot.paramMap.get('branchId');
     
      this.branchService.getBranch(branchId).subscribe((response) => {​​​​​​​​
        console.log(response)
       this.editForm.setValue({
         branchId: response.branchId,
         branchName: response.branchName,
         branchDescription: response.branchDescription
       });
      }​​​​​​​​);
    }​​​​​​​​
  
    editBranch(){​​​​​​​​
      console.log(this.editForm);
      this.branchService.updateBranch(this.editForm.value).subscribe((response) => {​​​​​​​​
        console.log(response);
        this.router.navigate(['list-branch']);
      }​​​​​​​​);
}​​​​​​​​
}
