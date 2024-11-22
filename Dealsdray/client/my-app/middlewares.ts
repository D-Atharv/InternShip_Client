// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const isLoginRoute = request.nextUrl.pathname === "/login";

//   const authToken = request.cookies.get("authToken")?.value;

//   if (!authToken && !isLoginRoute) {
//     const loginUrl = new URL("/login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   if (authToken && isLoginRoute) {
//     const dashboardUrl = new URL("/dashboard", request.url);
//     return NextResponse.redirect(dashboardUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next|static|favicon.ico).*)"], 
// };
