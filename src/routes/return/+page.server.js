import { redirect } from '@sveltejs/kit';

export const load = async ({locals, url}) =>{
    const getURL = url.searchParams.get('session_id')
    const getUserId = url.searchParams.get('user')
    const getProjectId = url.searchParams.get('project_id')
    const getDeposit = url.searchParams.get('deposit')
    const {status, amount} = await getSession(locals, getURL)

    if(status == 'complete'){
        try{
            createReceipt(locals, getUserId, getProjectId, getDeposit, amount)
            return redirect(303, '/dashboard');
        } catch (err){
            console.log(err)
        }
    }
}



const getSession = async (locals, param) =>{
    const session = await locals.stripe.checkout.sessions.retrieve(param)
    const budget = session.amount_total*0.01
    const budgetDecimal = budget.toFixed(2)
    return {
        status: session.status,
        amount: budgetDecimal
    }
}

const createReceipt = async (locals, user, projectid, deposit, amount) =>{
    let type = 'deposit'
    if(deposit === 'true'){
        type = 'payment'
    }

    const data = {
        "field": user,
        "field2": projectid,
        "amount": amount,
        "type": type
    }
    
    const isReceiptExist = await findReceipt(locals, projectid, type)
    if (!isReceiptExist){
        try{
            await locals.pb.collection('receipts').create(data)
        }catch(err){
            console.log(err)
        }
    }
}

const findReceipt = async(locals, projectid, type) =>{
    let find
    try{
        if(type == 'payment'){
            const find = await locals.pb.collection('receipts').getFirstListItem(`field2="${projectid}"`, {
                filter: `type="${type}"`
            })
    
            return find
    
        }else if (type == 'deposit'){
            const find = await locals.pb.collection('receipts').getFirstListItem(`field2="${projectid}"`, {
                filter: `type="${type}"`
            })
    
            return find
        }
    }catch(err){
        return find
    } 
}
