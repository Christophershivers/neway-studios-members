export const actions = {
    pay: async ({request, locals}) =>{
        const formData = await request.formData()

        const data = Object.fromEntries([...formData])

        console.log(data.amount)

        const paymentIntent = locals.stripe.paymentIntents.create({
            amount: data.amount,
            currency: 'usd',
            payment_method_types: ['card']
        })

        const {error, paymentIntent} = await locals.loadStripe.confirmCardPayment(paymentIntent.clientSecret, {
            payment_method:{
                card: card
            }
        })
    }
}