import { NextResponse, NextRequest, MiddlewareConfig } from "next/server";

export function middleware(request:NextRequest) {
    const response=NextResponse.next()
    const theme=request.cookies.get("theme")
    if (!theme) {
        response.cookies.set("theme","green")
    }

    return response
    /*if (request.nextUrl.pathname ===  "/profile") {
        return NextResponse.rewrite(new URL("/hello",request.url))
    }*/
  //return NextResponse.redirect(new URL("/",request.url))
}


export const config:MiddlewareConfig={
    matcher:"/profile/api"
}
