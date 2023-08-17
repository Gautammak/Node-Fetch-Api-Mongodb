import fetch from 'node-fetch';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/User')

const postSchema = new  mongoose.Schema({
    user_id:{
    type:Number,
    required:true
    },
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true

    },
})

const Post = mongoose.model('Post',postSchema)


async function  getPostnew(){
 const myPost = await   fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await myPost.json();
//   console.log(res); 
   for( let i=0;i<res.length;i++){

    const NewPost = new Post({
    user_id:res[i]['userId'],
    id:res[i]['id'],
    title:res[i]['title'],
    des:res[i]['body'],

    })

    NewPost.save();

   }


}

getPostnew();