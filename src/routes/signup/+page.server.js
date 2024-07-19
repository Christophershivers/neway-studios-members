import { redirect } from "@sveltejs/kit";

export const load = ({locals}) =>{
    if(locals.pb.authStore.isValid){
        throw redirect(303, '/')
    }
}

export const actions = {
    register: async ({locals, request}) =>{
        console.log('running')
        const formData = await request.formData();
        const convertedData = Object.fromEntries([...formData])

        const data = {
            "username": convertedData.username,
            "email": convertedData.email,
            "emailVisibility": true,
            "password": convertedData.password,
            "passwordConfirm": convertedData.passwordConfirm,
            "firstname": convertedData.firstName,
            "lastname": convertedData.lastName
        };

        try{
            const newUser = await locals.pb.collection('users').create(data);
            //console.log(data)

            locals.pb.authStore.clear()
        }catch (err){
            console.log('error: ', err)

            return{
                error: true,
                message: err
            }
        }

        throw redirect(303, '/login')
    }
}