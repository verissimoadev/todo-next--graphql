import { Field, ID, ObjectType } from "type-graphql";
import crypto from 'crypto'


@ObjectType()
export class User {

    @Field(_type => ID)
    id: crypto.RandomUUIDOptions | string | any;

    @Field()
    name: string;
}