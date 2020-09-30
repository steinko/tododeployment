import * as k8s from "@pulumi/kubernetes"
import {clusterProvider } from './cluster'
export const fileBeatConfig = new k8s.yaml.ConfigFile("filebeat-config", {file:'fileBeatConfig.yaml'} ,{provider: clusterProvider} )
export const fileBeatDaemonSet = new k8s.yaml.ConfigFile("filebeat-daemon", {file:'fileBeatDaemonSet.yaml'} ,{provider: clusterProvider} )
export const fileBeaIdiceLifcycle = new k8s.yaml.ConfigFile("filebeat-indice", {file:'fileBeatIndiceLifcycleConfigMap.yaml'} ,{provider: clusterProvider} )
export const fileBeatPermision = new k8s.yaml.ConfigFile("filebeat-permision", {file:'fileBeatPermision.yaml'} ,{provider: clusterProvider} )