import data from "../data";
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
    const allParams=request.nextUrl.searchParams
    const query=allParams.get("query")
    console.log(query);
    const comment=query ? data.find((c)=>c.text.includes(query)) : data
  return Response.json(comment)
}
export async function POST(req:Request) {
    const comment=await req.json()
    const newComment={
        id:data.length+1,
        ...comment
    }
   // console.log(newComment);
   data.push(newComment)
    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json",
        },
        status:201
    })
  }
