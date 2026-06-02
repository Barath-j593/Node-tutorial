const dns = require('dns');

dns.resolveSrv(
  '_mongodb._tcp.taskmanager.zq7cpca.mongodb.net',
  (err, records) => {
    console.log('Error:', err);
    console.log('Records:', records);
  }
);