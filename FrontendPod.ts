import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'



export const frontendPod = new k8s.core.v1.Pod('todo-frontend-pod', {
	                metadata:{
                        name: "todo-fronetend-pod",
                        labels: {
                           app: "todo",
                           tier: "frontend",
                         }, 
                      },
                    spec:   {
	                      
                          containers: [{  name: "todo-frontend-container",
                                          image: 'docker.io/steinko/todofrontend'
                                     }]
                             
                        }
 },{provider: clusterProvider})
