import { serializeNonPOJOs } from '$lib/helpers';

export const load= async ({locals}) =>{
    if(locals.user){
        return {
            profile: serializeNonPOJOs(locals.user)
        }
    }
}
