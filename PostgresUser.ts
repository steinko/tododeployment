
// Configure a new SQL user.
const user = new gcp.sql.User("database-user", {
    project: config.cloudProject,
    instance: databaseInstance.name,
    name: config.dbUserName,
    password: config.dbPassword
});