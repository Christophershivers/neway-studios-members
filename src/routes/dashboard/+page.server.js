let totalCost = 0
let costToString = ''
let openDeposits = 0
let isreload = false

export const load = async ({locals}) => {
    const user = locals.user

    const {projects, campaigns} = await getProjects(locals, user.id)

    getTotalCost(projects)
    formatMoney(projects)
    formatCost()
    totalOpenDeposits(projects)

    isreload = true

    console.log(totalCost)
    return {
        projects,
        costToString,
        openDeposits,
        campaigns
    };
} 


const getProjects = async (locals, userid) =>{
    const projects = await locals.pb.collection('projects').getFullList({filter: `userid="${userid}"` })
    const numberOfCampaigns = projects.length
    return {
        projects,
        campaigns: numberOfCampaigns
    }
}


function formatMoney(object){
    object.forEach(element =>{
        let value = Number(element.cost)

        if(value >= 1000000000000){
            element.cost = (value/1000000000000).toFixed(2) + 'T'
        }else if(value >= 1000000000){
            element.cost = (value/1000000000).toFixed(2) + 'B' 
        }else if(value >= 1000000){
            element.cost = (value/1000000).toFixed(2) + 'M'
        }else if (value >= 1000){
            element.cost = (value/1000).toFixed(2) + 'K'
        }
    })
}    


function formatCost(){

    if(!isreload){
        if(totalCost >= 1000000000000){
            costToString = (totalCost/1000000000000).toFixed(2) + 'T'
        }else if(totalCost >= 1000000000){
            costToString = (totalCost/1000000000).toFixed(2) + 'B' 
        }else if(totalCost >= 1000000){
            costToString = (totalCost/1000000).toFixed(2) + 'M'
        }else if (totalCost >= 1000){
            costToString = (totalCost/1000).toFixed(2) + 'K'
            
        }
    }

    
}

function totalOpenDeposits(object){
    if(!isreload){
        object.forEach(element =>{
            if(!element.isdepositpaid){
                openDeposits = openDeposits + 1
            }
        })
    }   
}

function getTotalCost(object){
    if(!isreload){
        object.forEach(element=>{
            let value = Number(element.cost)
            totalCost = totalCost + value
        })
    }
}