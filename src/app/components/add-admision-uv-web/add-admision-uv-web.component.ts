import { Component } from '@angular/core';
import { Admision } from 'src/app/models/admision.model';
import { AdmisionUvWebService } from 'src/app/services/admision-uv-web.service';

@Component({
  selector: 'app-add-admision-uv-web',
  templateUrl: './add-admision-uv-web.component.html',
  styleUrls: ['./add-admision-uv-web.component.css']
})
export class AddAdmisionUvWebComponent {
  admision: Admision = new Admision();
  submitted = false;

  constructor(private readonly admisionUvWebService: AdmisionUvWebService) { }

  saveTest(): void {
    this.admisionUvWebService.create(this.admision).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newAdmision(): void {
    this.submitted = false;
    this.admision = new Admision();
  }
}