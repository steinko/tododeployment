import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'


export const frontendService = new k8s.core.v1.Service('todo-frontend-service', 
{metadata: { name: 'todo-frontend-service'},
spec:{ selector: {app: 'todo',tire: 'frontend' } ,
ports: [{port: 5000, targetPort: 5000 } ],
type: 'LoadBalancer'} }, {provider: clusterProvider} ) 