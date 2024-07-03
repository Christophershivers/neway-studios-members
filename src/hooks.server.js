export const handle =  async ({event, resolve})=>{
    event.locals.loadStripe = await loadStripe('')
    const response = await resolve(event)

    return response
}