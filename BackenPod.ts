import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'

export const backendPod = new k8s.core.v1.Pod('todo-backend-pod', {
	                metadata:{
                        name: "todo-backend-pod",
                        labels: {
                           app: "todo",
                           tire: "backend",
                         }, 
                      },
                    spec:   {
	                      
                          containers: [{  name: "todo-backend-container",
                                          image: 'docker.io/steinko/todobackend'
                                     }]
                             
                        }
 },{provider: clusterProvider})
