import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Admision } from 'src/app/models/admision.model';
import { AdmisionUvWebService } from 'src/app/services/admision-uv-web.service';

@Component({
  selector: 'app-admision-uv-web-details',
  templateUrl: './admision-uv-web-details.component.html',
  styleUrls: ['./admision-uv-web-details.component.css']
})
export class AdmisionUvWebDetailsComponent implements OnInit {
  @Input() admision?: Admision;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentAdmision: Admision = {
    appPaterno: '',
    appMaterno: '',
    nombre: ''
  };
  message = '';

  constructor(private readonly admisionUvWebService: AdmisionUvWebService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAdmision = { ...this.admision };
  }

  updatePublished(status: boolean): void {
    if (this.currentAdmision.id) {
      this.admisionUvWebService.update(this.currentAdmision.id, { published: status })
      .then(() => {
        // this.currentTest.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateAdmision(): void {
    const data = {
      title: this.currentAdmision.appPaterno,
      description: this.currentAdmision.appMaterno
    };

    if (this.currentAdmision.id) {
      this.admisionUvWebService.update(this.currentAdmision.id, data)
        .then(() => this.message = 'The admision was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteAdmision(): void {
    if (this.currentAdmision.id) {
      this.admisionUvWebService.delete(this.currentAdmision.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The admision was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}