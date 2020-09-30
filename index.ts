
import {backend} from './BackenPod'
import {postgresDeployment} from './PostgresDeployment'
import {postgresService} from './postgresService'
import {claim} from './postgresVolumClaim'
import {elasticSearch, filebeat,kibana, apmserver} from './elasticSearch'
import {fileBeatConfig,fileBeatDaemonSet,fileBeaIdiceLifcycle,fileBeatPermision} from './fileBeatConfig'

claim
postgresDeployment
postgresService
backend
elasticSearch
filebeat
fileBeatConfig
fileBeatDaemonSet 
fileBeaIdiceLifcycle 
fileBeatPermision 
kibana
apmserver








