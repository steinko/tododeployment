import * as k8s from "@pulumi/kubernetes"
import {clusterProvider } from './cluster'
export const apmConfig = new k8s.core.v1.ConfigMap("apmserver-config", {metadata: {name: 'apmserver-apm-server-config'},
               data:{'apm-server.yml': '| apm-server.rum.enabled: true apm-server: host: ""0.0.0.0:8200"  queue: {}'}}
             ,{provider: clusterProvider, deleteBeforeReplace: true, protect: false} )