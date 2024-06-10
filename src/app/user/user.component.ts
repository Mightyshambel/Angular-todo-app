import { Component,Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string
  @Input({required:true}) avatar!: string
  @Input({ required: true }) name!: string
  @Output() select = new EventEmitter()
  //signal inputs
  // avatar = input.required<string>()
  // name = input.required<string>()
  get imagePath() {
    return 'assets/users/'+ this.avatar
  }

  //signal
  // imagePath = computed(() => {
  // //   return 'assets/users/'+ this.avatar()
  // // })
  onSelectedUser() {
    this.select.emit(this.id)
  }
}