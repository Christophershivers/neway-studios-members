import { DB_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

export const actions = {
    pay: async ({request, locals}) =>{
        const formData = await request.formData()

        const data = Object.fromEntries([...formData])
        console.log('project: ', data.hov)
        try{
            
            const session = await locals.stripe.checkout.sessions.create({
                ui_mode: 'embedded',
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                              name: 'T-shirt',
                            },
                            unit_amount: parseInt(data.amount),
                          },
                          quantity: 1,
                    }
                ],
                mode: 'payment',
                return_url: `${request.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}&project_id=${data.hov}`
            })

            

            console.log(session)
            return {
                id: session.id,
                clientSecret: session.client_secret
            }

        }catch (err){
            console.error(err);
        }
        

        console.log(DB_URL)
    }
}