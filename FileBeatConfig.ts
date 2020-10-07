import * as k8s from "@pulumi/kubernetes"
import {clusterProvider } from './cluster'

export const fileBeatConfig = new k8s.core.v1.ConfigMap("fileBeat-config", 
               { metadata: {name: "fileBeat-config"},
                 data:{ 'filebeat.yml' : '|- filebeat.autodiscover:  providers:  - type: kubernetes hints.enabled: true hints.default_config: type: container paths: - /var/log/containers/*-${data.container.id}.log' }}
             ,{provider: clusterProvider, deleteBeforeReplace: true, protect: false} )