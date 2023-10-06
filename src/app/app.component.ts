import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatchService } from './patch.service';
import { Ipatch } from './model/patch';
import { SnackbarService } from './snackbar.service';
import { map, retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {


  title = 'practice1';


}