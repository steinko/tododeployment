
import {backendPod} from './BackenPod'
import {backendService} from './BackendService'
import {frontendPod} from './FrontendPod'
import {frontendService} from './FrontendService'
import {ingress} from './Ingress'

import {postgresDeployment} from './PostgresDeployment'
import {postgresService} from './postgresService'
import {claim} from './postgresVolumClaim'

claim
postgresDeployment
postgresService
backendPod
backendService
frontendPod
frontendService
ingress









