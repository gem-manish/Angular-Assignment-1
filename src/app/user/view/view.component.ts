import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WorkService } from 'src/app/services/work.service';
import { userDetails } from 'src/app/userDetails';
import { CreateComponent } from '../create/create.component';

@ViewChild('CreateComponent', { static: false })


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private ws: WorkService,
    private sanitizer: DomSanitizer,
    public uD: userDetails) { }

  ngOnInit(): void { }
  allUserDetails: userDetails[] = this.ws.getData();
  picUrl: any = this.uD.data;

}
