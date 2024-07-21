import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

export default clerkMiddleware((auth, req) => {
      if(!isPublicRoute(req))
          auth().protect();
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

// export default clerkMiddleware((auth, req) => {
//     if(!isPublicRoute(req))
//         auth().protect();
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const protectedRoutes = createRouteMatcher([
//     '/',
//     '/upcoming',
//     '/previous',
//     '/personal-room',
//     '/recordings',
//     '/meeting(.*)',
// ])

// export default clerkMiddleware((auth, req) => {
//     if(protectedRoutes(req)) auth().protect();
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };