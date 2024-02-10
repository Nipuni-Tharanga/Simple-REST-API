import { Injectable } from "@nestjs/common";
import { UserEntity } from "../../entities/user.entity";

@Injectable()
export class UserService {
    userDB = [];

    delete(id: string) {
        this.userDB = this.userDB.filter((u) => u.id != id);
    }

    update(id: string, updatedUser: UserEntity) {
        const index = this.userDB.findIndex((user) => user.id === id);

        if (index !== -1) {
            // If the user exists, update it with the new data
            this.userDB[index] = { ...this.userDB[index], ...updatedUser }; // Spread operator (...) to merge the objects
            return this.userDB[index];
        }

        return null; // Return null if the user with the provided ID is not found
    }
    
    create(user: UserEntity) {
        user.id = 'id_' + new Date().getTime();
        this.userDB.push(user)
        return (user)
    }
    
    getAll(){
        return this.userDB
    }
}