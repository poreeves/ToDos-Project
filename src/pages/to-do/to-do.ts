import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the ToDoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-to-do',
  templateUrl: 'to-do.html',
})
export class ToDoPage {
  
  toDoList: any[]= []
  private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  logForm(){
    
    this.toDoList.push(this.todo.value)
    console.log(this.todo.value)
    console.log(this.toDoList)
    this.todo.reset()
  }

  onDelete(item) {
      this.toDoList.splice(item, 1)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToDoPage');
  }

}
