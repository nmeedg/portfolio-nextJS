import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function GET(request:NextRequest) {
const requestHeaders=new Headers(request.headers)
const headerList:Headers=headers()
const theme=request.cookies.get("theme")
//console.log(requestHeaders.get("Authorization"));
//console.log(headerList.get("Authorization"));
/*const authorization=headerList.get("Authorization")
const token=authorization?.split(" ")[1]
console.log(token)*/
console.log(cookies().get("lang"));
console.log(theme)
cookies().set("lang","fr")
  return new Response("Profile",{
    headers:{
        "Content-Type":"text/json",
    }
  })
}