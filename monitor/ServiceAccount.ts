import * as k8s from "@pulumi/kubernetes"
import {clusterProvider } from '../cluster'

export const serviceAccount = new k8s.core.v1.ServiceAccount('monitor-serviceAccount', 
                        { metadata:{ name: 'filebeat',
                                     }}, 
                         {provider: clusterProvider})