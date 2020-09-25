import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'
import {dbUserName, dbPassword } from './config'
import {postgresService} from './postgresService'


export const backend = new k8s.core.v1.Pod('backend', {
	                metadata:{
                        name: "todo-backend-pod",
                        labels: {
                           app: "todo",
                           tier: "backend",
                         } 
                      },
                    spec:   {
	                      
                          containers: [{  name: "todo-backend-container",
                                          image: 'docker.io/steinko/todobackend',
                                          env: [ 
                                                 
                                                  {name: 'POSTGRES_USER', 
                                                  value: dbUserName},
                                                  {name: 'POSTGRES_PASSWORD', 
                                                  value: dbPassword},
                                                  {name: 'POSTGRES_HOST', 
                                                  value: postgresService.spec.clusterIP},
 
                                                  

                                                ]
 
                                     }]
                             
                        }
 },{provider: clusterProvider})
