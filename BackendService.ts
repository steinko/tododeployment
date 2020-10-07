import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'


export const backendService = new k8s.core.v1.Service('todo-backend-service', 
{metadata: { name: 'todo-backend-service'},
spec:{ selector: {app: 'todo',tire: 'backend' } ,
        ports: [{port: 8080, targetPort: 8080 } ],
        type: 'LoadBalancer'} }, {provider: clusterProvider} ) 