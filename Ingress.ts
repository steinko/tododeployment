import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'


export const ingress = new k8s.networking.v1beta1.Ingress('todo-ingress', 
             { metadata: { name: 'todo-ingress'},
               spec: {rules : [  {host: 'todo.com',
	                              http:{ paths: [{ pathType: 'Prefix',
		                                           path: '/frontend',
                                                   backend: { serviceName: 'todo-frontend-service',
                                                              servicePort: 5000
                                                            }
                                               }]
                                       }
                                 }
                              ]
                        }
             }, {provider: clusterProvider} )       
                                 