const s3 = require('../src/lib/mys3');
const { BUCKET_NAME } = require('../src/lib/globals');

var params = {
  Bucket: BUCKET_NAME,
};

s3.listObjectsV2(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
