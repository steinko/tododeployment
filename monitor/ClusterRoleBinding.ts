import * as k8s from "@pulumi/kubernetes"
import {clusterProvider } from '../cluster'
import {serviceAccount} from './serviceAccount'
import {clusterRole} from './clusterRole'

export const clusterRoleBinding = new k8s.rbac.v1.ClusterRoleBinding('filebeat-cluster-role-binding', 
              { metadata: { name: 'filebeat-cluster-role-binding',
                          },
                subjects: [{ kind: 'ServicAccount',
                            name: serviceAccount.metadata.name,
                         }],
                roleRef: {  kind: 'ClusterRole',
                            name: clusterRole.metadata.name,
	                        apiGroup: 'rbac.authorization.k8s.io'
                         }}, 
               {provider: clusterProvider})