import * as k8s from "@pulumi/kubernetes"
import {clusterProvider } from './cluster'

export const elasticsearchConfig = new k8s.core.v1.ConfigMap("elasticsearch-config", 
               { metadata: {name: "elasticsearch-config"},
                 data:{'elasticsearch.yml': '| cluster.name: cluster  node.name: node'}}
             ,{provider: clusterProvider, deleteBeforeReplace: true, protect: false} )