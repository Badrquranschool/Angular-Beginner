import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs : TabsetComponent;

  propertyTypes: Array<string> = ['House','Appartement','Duplex','Maison'];
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished'];

  propertyView : IProperty = {
    Id:null,
    Name:'',
    Price:null,
    SellRent:null,
    Type : null
  };

  tabactive:number;
  constructor(private router : Router) { }

  ngOnInit() {
    this.tabactive=0;
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Ok bien passer');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
