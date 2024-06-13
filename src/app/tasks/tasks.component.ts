import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  users=DUMMY_USERS


  @Input({ required: true }) name?: string
 
  
  
}
