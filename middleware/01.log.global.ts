export default defineNuxtRouteMiddleware((to, from) => {
    //excuted in both client and server side
    console.log("FROM:" + from.fullPath)
    console.log("TO:" + to.fullPath)
})