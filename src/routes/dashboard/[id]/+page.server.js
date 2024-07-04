export const load = async ({locals, params}) => {
    const {id} = params

    const project = await locals.pb.collection('projects').getOne(id)
    const comments = await locals.pb.collection('projectcomments').getFullList({filter: `field="${id}"`, expand: 'field2'})

    console.log(project)

    return {project, comments};
}