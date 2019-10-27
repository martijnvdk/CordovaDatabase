var databaseHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
            "UserManagers.db",
            "1.0",
            "prodct database",
            1000000);
        this.db.transaction(
            function (tx) {
                //Run SQL Here
                tx.executeSql(
                    "create table if not exists UserManager(_id int primary key, name text, pass text)",
                    [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("Error while creating the table: " +
                            error.message);
                    }
                );
            },
            function (error) {
                console.log("Transaction error:" + error.message);
            },
            function () {
                console.log("Create DB transaction completed successfully:");
            },
        );
    }
}