var sql = require('mssql');

describe('test db connection', function () {

  it('tests db connection', function () {

    ConnectDB()

  })

  function ConnectDB() {

    var config = {
      user: 'user',
      password: 'password',
      server: 'xyz.database.windows.net',
      database: 'dbdev',

      options: {
        encrypt: true
      }
    }

    var connection = new sql.Connection(config)
    connection.connect(function (err) {
      console.log(err)
    })

    var request = new sql.Request(connection);
    request.query('select * from Config where [Key] like \'HidePreop%\'', function (err, recordeset) {
      var res = recordeset;
      console.log(res)
    });
}
});
