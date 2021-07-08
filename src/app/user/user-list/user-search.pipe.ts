import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if (users == null || searchCriteria.length === 0) {
      return users;
    }
    let search = searchCriteria.toLowerCase();
    let selectedUsers: User[] = [];
    for (let u of users) {
      if (
        u.id.toString().includes(search)
        || u.username.toLocaleLowerCase().includes(search)
        || u.password.toLocaleLowerCase().includes(search)
        || u.firstname.toLocaleLowerCase().includes(search)
        || u.lastname.toLocaleLowerCase().includes(search)
        || u.phone.toLocaleLowerCase().includes(search)
        || u.email.toLocaleLowerCase().includes(search)
        
      ) {
        selectedUsers.push(u);
      }
    }
    return selectedUsers;
  }

}
