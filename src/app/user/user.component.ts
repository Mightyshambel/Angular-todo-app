import { Component,Input, input,computed} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) avatar!: string
  @Input({required:true}) name!:string
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
    
  }
}