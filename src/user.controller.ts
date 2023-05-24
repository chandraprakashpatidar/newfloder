import { Controller,Post,Body,Get ,Res,HttpStatus, HttpCode ,Patch,Param,Delete} from '@nestjs/common';
import { UsersService } from './user.service';
import { user } from './user.schema';
//import { userdto } from './user.dto';
//import { userint } from './user.interface';
import { response } from 'express';

@Controller("/user")
export class Usercontroller{
    constructor(private readonly usersService: UsersService) {}


@Post("/save")
async createUser(@Res() response ,@Body() user1: user): Promise<user> {
try
  {

console.log(user1,"hhhhhhh")
 const data= await this.usersService.create(user1)
 //console.log(data,"hhhhhhh")
 return response.json({
    message:"successfully",data,
 }) 

  }catch(err)
  {
  return  response.status(HttpStatus.BAD_REQUEST).json({
        statuscode:400,
        message:"err",
        err:"bad request"

    })
  }
}


@Get("/alldata")
async getalldata(@Res() response):Promise<user>
{

  try {

    const data1=await this.usersService.getalldata()
    console.log(data1,"jjjj")
    return response.status(HttpStatus.CREATED).json({
        message:"successfully",data1,
     })  
    
  } catch (error) {

    return  response.status(HttpStatus.BAD_REQUEST).json({
        statuscode:400,
        message:"err",
        err:"bad request"

    })
    
  }
}

@Patch("/update/:id")

async upadateall(@Res() response, @Param('id') id:string, @Body() user:user):Promise<user>
{
    try {
        
        var dd=await this.usersService.dataupdate(id,user)
        return  response.json({
            message:"successfully",dd,
         }) 

    } catch (error) {

        return  response.status(HttpStatus.BAD_REQUEST).json({
            statuscode:400,
            message:"err",
            err:"bad request"
    
        })    

    }
}

@Delete("/delete/:id")

async deletedata(@Res() response,@Param('id') id:string) :Promise<user>
{
    try {
    
        const data=await this.usersService.delete(id)
    

        return  response.json({
            message:"successfully",data,
         }) 

    
    } catch (error) {


        return  response.status(HttpStatus.BAD_REQUEST).json({
            statuscode:400,
            message:"err",
            err:"bad request"
    
        })  
        
    }
    
}

}