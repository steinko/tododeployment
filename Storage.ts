import * as kubernetes from  "@pulumi/kubernetes"
// Create Storagde 
export const storage = new kubernetes.storage.v1.StorageClass("storage", {
	     provisioner: "microk8s.io/hostpath" ,
         metadata:
             {  name: "microk8s-hostpath",
             }
         },
//{
   // dependsOn: [nodePool],
//}
);

// Create a Persistent Volume
export const persistentVolume = new kubernetes.core.v1.PersistentVolume("volume", {

	metadata:  
	  {  name: "postgres-volume",
          labels: { 
	              app: "todo",
                  tier: "data",
                  type: "local" 
                  },
        },
	  spec: {
		      storageClassName: "microk8s-hostpath",
		      capacity: {storage: "5Gi"},
              accessModes: ["ReadWriteMany"],
              hostPath:  {path: "/var/data"}
            }
            
},{
    dependsOn: [storage],
})

//  Create a Persistent Volume Claime 

export const claim = new kubernetes.core.v1.PersistentVolumeClaim("claim", {
	        metadata: { 
               name: "postgres-pv-claim",
               labels: { 
                          app: "todo",
                          tier: "data", 
                        }
             },
             spec: {
	                     storageClassName: "microk8s-hostpath",
                         accessModes: ["ReadWriteMany"],
                         resources: { requests:  {storage: "5Gi"}}
             }, 
        }, 
        { dependsOn: [persistentVolume]})