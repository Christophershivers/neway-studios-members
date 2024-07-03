import { DB_URL } from '$env/static/private';

export const actions = {
    pay: async ({request, locals}) =>{
        /*const formData = await request.formData()

        const data = Object.fromEntries([...formData])

        console.log(data.amount)

        const paymentInten = locals.stripe.paymentIntents.create({
            amount: data.amount,
            currency: 'usd',
            payment_method_types: ['card']
        })

        const {error, paymentIntent} = await locals.loadStripe.confirmCardPayment(paymentInten.clientSecret, {
            payment_method:{
                card: card
            }
        })*/

        console.log(DB_URL)
    }
}