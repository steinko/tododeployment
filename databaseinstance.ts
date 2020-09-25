import {cloudProject, cloudRegion } from './config'
import * as gcp from "@pulumi/gcp"

// Create a Postgres DB instance.
export const databaseInstance = new gcp.sql.DatabaseInstance("database-instance", {
	name: 'todo-db-instanc6',
    project:cloudProject,
    region: cloudRegion,
    databaseVersion: "POSTGRES_12",
    settings: { 
	      tier: "db-f1-micro" ,
          ipConfiguration: {
              authorizedNetworks: [{ value: "0.0.0.0/0" }],
          },
     },
});