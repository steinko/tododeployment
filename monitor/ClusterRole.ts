import * as k8s from "@pulumi/kubernetes"
import {clusterProvider } from '../cluster'

export const clusterRole = new k8s.rbac.v1.ClusterRole('filebeat--cluster-role', 
                        { metadata:{ name: 'filebeat-cluster-role',
                                     labels: {app:'filebeat'}},
                          rules: [ {apiGroups: [""],
                                     resources: [ 
	                                               'pods'
                                                ],
                                     verbs: [ 'get',
	                                           'watch',
                                               'list'
                                            ],
                                   }], 
                            },{provider: clusterProvider})                  