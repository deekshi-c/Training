import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../services/navBar/nav-bar.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeServiceService } from '../services/Home/home-service.service';
import { SearchService } from '../services/Search/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({
          height: '0%',
        }),
        animate(0),
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  inputForm!: FormGroup;

  dropdown = false;
  notFound = false;
  topSearch = true;
  category = true;
  searchList = false;

  categories: any;
  searches: any;
  lists: any;
  value: any = '';

  image: any = [
    'assets/images/Business.png',
    'assets/images/Design.png',
    'assets/images/Health & Fitness.png',
    'assets/images/IT& Software.png',
    'assets/images/Marketing.png',
    'assets/images/Music.png',
    'assets/images/Photography.png',
    'assets/images/Teaching.png',
    'assets/images/Testing.png',
    'assets/images/Web Development.png',
  ];
  show = false;
  profile: any;
  constructor(
    private service: HomeServiceService,
    private searchService: SearchService,
    private navS: NavBarService,
    // private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navS.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (data) => {},
    });
    this.inputForm = this.fb.group({
      search: [''],
    });

    this.service.getCategory().subscribe((data) => {
      this.categories = data;
      // console.log(this.categories);
    });

    this.searchService.topSearch().subscribe((data) => {
      this.searches = JSON.parse(data);
      // console.log(this.searches);
    });
  }
  open() {
    this.show = !this.show;
  }
  goMyCourse() {
    this.router.navigateByUrl('/myCourse');
  }

  onClick() {
    if (this.dropdown == false) {
      this.dropdown = true;
    }
    // document.getElementById('dropdown').style['-webkit-transition-duration'] = '500s';
  }

  close() {
    if (this.dropdown == true) {
      this.dropdown = false;
      this.topSearch = true;
      this.category = true;
      this.searchList = false;
      this.notFound = false;
      this.inputForm.reset();
    }
  }
  appendValue(element: any) {
    this.value = element;
  }

  onEnter(event: any) {
    if (event.keyCode == 13) {
      this.bySearch(this.inputForm.value.search);
    }
  }

  enterLetter(search: any) {
    if (search == '') {
      this.searchList = false;
      this.notFound = true;
      this.category = true;
    } else {
      this.bySearch(search);
      this.searchList = true;
      this.category = false;
      this.notFound = false;
      this.topSearch = false;
    }
  }

  bySearch(search: any) {
    const body = {
      text: search,
    };

    this.searchService.byCategory(body).subscribe((data) => {
      this.lists = data;
      console.log(this.lists);

      if (this.lists.length != 0) {
        this.topSearch = false;
        this.category = false;
        this.searchList = true;
        this.notFound = false;
      } else {
        this.topSearch = false;
        this.searchList = false;
        this.category = true;
        this.notFound = true;
      }
    });
  }

  clickOnCategory(category: any) {
    const body = {
      text: category,
    };

    this.searchService.byCategory(body).subscribe({
      next: (data) => {
        this.lists = data;
        console.log(this.lists);
      },
      error: (e) => {
        alert(e.message);
      },
      complete: () => {
        this.topSearch = false;
        this.category = false;
        this.searchList = true;
        this.notFound = false;
      },
    });
  }

  getOverview(courseId: any, courseName: any) {
    sessionStorage.setItem('courseId', courseId);
    sessionStorage.setItem('courseName', courseName);
    this.router.navigate(['overview']);
  }

  logOut() {
    sessionStorage.clear();
    localStorage.clear();
  }
}
