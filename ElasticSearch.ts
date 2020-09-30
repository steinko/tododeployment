import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'


const version = "7.9.2"

export const elasticSearch = new k8s.helm.v2.Chart("elasticsearch", {
    repo: "elastic",
    version:version,
    chart: "elasticsearch",
}, {provider: clusterProvider});

export const filebeat = new k8s.helm.v2.Chart("filebeat", {
    repo: "elastic",
    version: version,
    chart: "filebeat",
}, {provider: clusterProvider});

export const kibana = new k8s.helm.v2.Chart("kibana", {
    repo: "elastic",
    version: version,
    chart: "kibana",
}, {provider: clusterProvider});

export const metricbeat = new k8s.helm.v2.Chart("metricbeat", {
    repo: "elastic",
    version: version,
    chart: "metricbeat",
}, {provider: clusterProvider});

export const apmserver = new k8s.helm.v2.Chart("apmserver", {
    repo: "elastic",
    version: version,
    chart: "apm-server",
}, {provider: clusterProvider});


