import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  status : boolean;
  title : string;
  description : string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  onAdd() {
    this.todos.push({status : false, title : this.title, description: this.description});
  }

  update(todo : any) {
    this.todos[this.todos.indexOf(todo)].status = true;
  }

  delete(todo: any) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  todos :any = [
    { status : false, title: 'Mr. Nice', description: "none"},
    { status : false, title: 'Narco',  description: "none" },
    { status : false, title: 'Bombasto',  description: "none" },
    { status : false, title: 'Mr. Nice', description: "none"},
    { status : false, title: 'Narco',  description: "none" },
    { status : false, title: 'Bombasto',  description: "none" }
  ];

}

