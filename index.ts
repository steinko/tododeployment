
import {backendPod} from './BackenPod'
import {backendService} from './BackendService'
import {frontendPod} from './FrontendPod'
import {frontendService} from './FrontendService'
import {ingress} from './Ingress'

import {postgresDeployment} from './PostgresDeployment'
import {postgresService} from './postgresService'
import {claim} from './postgresVolumClaim'

import {elasticSearch, filebeat,kibana, apmserver} from './elasticSearch'
import {fileBeatConfig} from './fileBeatConfig'
import {elasticsearchConfig} from './elasticsearchConfig'
import {apmConfig} from './apmConfig'

claim
postgresDeployment
postgresService
backendPod
backendService
frontendPod
frontendService
ingress

elasticSearch
elasticsearchConfig
filebeat
fileBeatConfig
kibana
apmserver
apmConfig








