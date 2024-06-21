import type { PageServerLoad } from './$types';
import { client } from '../../lib/pocketbase';

export const load = (async () => {

    const user = client.authStore.model
    return {user};
}) satisfies PageServerLoad;