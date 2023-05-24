import { Schema ,Prop,SchemaFactory } from '@nestjs/mongoose';


@Schema()

export class user{
    @Prop()
    _id:Number

@Prop()

name:"string"
@Prop()

email:"string"

}
 export const userschema=SchemaFactory.createForClass(user)