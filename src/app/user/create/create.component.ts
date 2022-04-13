import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { RxReactiveFormsModule, RxwebValidators } from "@rxweb/reactive-form-validators"
import { WorkService } from 'src/app/services/work.service';
import { userDetails } from 'src/app/userDetails';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  isValidated = false;
  profileImage: any;
  Imageloaded: boolean = false;
  isSubmitted=false;
  Category: string[] = ['General', 'SC', 'ST', 'OBC'];
  dataUser: userDetails[] = [];

  title = 'Angular Reactive Form';

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern("[a-zA-Z ]*$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    profilePhoto: new FormControl('', [RxwebValidators.extension({ extensions: ["jpeg", "png", "jpg"] })]),
    category: new FormControl('', [Validators.required]),
    ct: new FormControl(false),
    cplus: new FormControl(false),
    java: new FormControl(false),
    python: new FormControl(false),
    javascript: new FormControl(false)
  })
  picValid: boolean = false;

  get name() {
    return this.loginForm.get('name');
  }
  get email() {
    return this.loginForm.get('email');
  }

  get gender() {
    return this.loginForm.get('gender');
  }

  get category() {
    return this.loginForm.get('category');
  }

  get mobile() {
    return this.loginForm.get('mobile');
  }

  get ct() {
    return this.loginForm.get('ct');
  }

  get cplus() {
    return this.loginForm.get('cplus');
  }

  get java() {
    return this.loginForm.get('java');
  }

  get javascript() {
    return this.loginForm.get('javascript');
  }

  get pyhton() {
    return this.loginForm.get('pyhton');
  }

  get profilePhoto() {
    return this.loginForm.get('profilePhoto');

  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  constructor(
    private workService: WorkService,
    private formBuider: FormBuilder,
    private sanitizer: DomSanitizer,
    private changeDetector: ChangeDetectorRef,
    public uD: userDetails
  ) { }
  ngOnInit(): void { }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  onSubmit() {
    this.dataUser.push(this.loginForm.value);

    console.log(this.dataUser);
  }

  displayStyle = "none";

  openModal() {
    this.displayStyle = "block";
  }

  closeModal() {
    this.displayStyle = "none";
    this.dataUser = [];
  }

  submitForm() {
    this.workService.addToService(this.loginForm.value);
    this.displayStyle = "none";
    this.uD.data = this.profileImage;
  }

  imageUpload(event: any) {
    var file = event.target.files.length;
    for (let i = 0; i < file; i++) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.profileImage = event.target.result;
        this.changeDetector.detectChanges();
      }
      reader.readAsDataURL(event.target.files[i]);
    }
    this.isSubmitted=true;
  }

  handleImageLoad() {
    this.Imageloaded = true;
  }

}

