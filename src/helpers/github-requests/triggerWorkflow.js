import { githubApiRepos } from '../../lib/axios';

async function getActionId(actionName) {
    try {
        const response = await githubApiRepos.get('/actions/workflows');

        const actions = response.data.workflows;
        
        for (let action of actions) {
            // console.log(response.data);
            // console.log(action.name);
            // console.log('asdasd',actionName);
            if (action.name === actionName) {
              return action.id;  
            }
        }
          

        return "Action not found!";
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}

export async function triggerWorkflow(actionName, bucketName, awsRegion) {

    try {
        console.log('actionName: ',bucketName);
        const actionId = await getActionId(actionName);
        const response = await githubApiRepos.post(`/actions/workflows/${actionId}/dispatches`, {
            "ref": "main",
            "inputs": {
                "bucket-name": bucketName,
                "aws-region":  awsRegion
            }
        });
        
        // console.log(response.data);
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}


