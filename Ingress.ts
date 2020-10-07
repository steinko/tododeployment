import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'


export const ingress = new k8s.networking.v1.Ingress('todo-ingress', 
             { metadata: { name: 'todo-ingress'},
               spec: {rules : [ {http:{ paths: [{ path: '/frontend',
                                                  backend: { service: { name: 'todo-frontend-service',
                                                                        port: {number:5000 }
                                                                       }
                                                            }
                                               }]
                                       }
                                 }
                              ]
                        }
             }, {provider: clusterProvider} )       
                                 