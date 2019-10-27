var userHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addUser: function (name, pass) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into UserManager(name, pass) values(?, ?)",
                    [name, pass],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add UserManager error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}