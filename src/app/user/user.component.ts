import { Component,Input, Output, EventEmitter, output} from '@angular/core';

// defining an object with aliases
// type User={
//   id:string
//   avatar: string
//   name: string
// }

//creating an object with interface
interface User{
  id:string
  avatar: string
  name: string 
  }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!:User 
  
  // @Output() select = new EventEmitter()

  select = output<string>()
  //signal inputs
  // avatar = input.required<string>()
  // name = input.required<string>()
  get imagePath() {
    return 'assets/users/'+ this.user.avatar
  }

  //signal
  // imagePath = computed(() => {
  // //   return 'assets/users/'+ this.avatar()
  // // })
  onSelectedUser(id:string) {
    this.select.emit(this.user.id)
  }
}