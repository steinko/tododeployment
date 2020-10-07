import * as k8s from "@pulumi/kubernetes";
export const metricBeatConfig = new k8s.yaml.ConfigFile("metricbeat-config", {file:'metricBeatConfig.yaml'} )