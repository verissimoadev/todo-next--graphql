import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../modules/User";
import crypto from 'crypto'



@Resolver()
export class UserResolver {
    private data: User[] = []

    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ) {
        
        const user = { id: crypto.randomUUID(), name}

        this.data.push(user);

        return user;
    }

    @Mutation(() => [User])
    async deleteUser(
        @Arg('id') id: string
    ) {
        
        this.data = this.data.filter(user => user.id != id)

        return this.data;
    }
}