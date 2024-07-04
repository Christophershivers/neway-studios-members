export const load = async ({locals, params}) => {
    const {id} = params

    const project = await locals.pb.collection('projects').getOne(id)
    const comments = await locals.pb.collection('projectcomments').getFullList({filter: `field="${id}"`, expand: 'field2'})

    console.log(project)

    return {project, comments};
}

export const actions = {
    comment: async ({locals, request}) =>{
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])

        const sendComment = await locals.pb.collection('projectcomments').create(data);
    },

    pay: async ({request, locals}) =>{
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        console.log('project: ', data.projectid)
        const project = await locals.pb.collection('projects').getOne(data.projectid)

        if(!project.isdepositpaid){
            project.cost = project.cost * 0.20
        }
        try{
            
            const session = await locals.stripe.checkout.sessions.create({
                ui_mode: 'embedded',
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                              name: project.projectname,
                            },
                            unit_amount: parseFloat(project.cost)*100,
                          },
                          quantity: 1,
                    }
                ],
                mode: 'payment',
                return_url: `${request.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}&project_id=${data.projectid}&deposit=${project.isdepositpaid}&user=${locals.user.id}`
            })

            

            console.log(session)
            return {
                id: session.id,
                clientSecret: session.client_secret
            }

        }catch (err){
            console.error(err);
        }
    }
}