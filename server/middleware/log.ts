export default defineEventHandler((event) => {
    console.log('New request: ', getRequestURL(event))
    console.log("cookies", parseCookies(event))
})