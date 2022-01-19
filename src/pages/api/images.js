const s3 = require('../../lib/mys3');
const { BUCKET_NAME } = require('../../lib/globals');

var params = {
  Bucket: BUCKET_NAME,
};


export default function handler(req, res) {
  s3.listObjectsV2(params, function(err, data) {
    if (err) { 
      console.log(err, err.stack);
      res.status(500);
    }
    else {
      const images = data.Contents.map(item => `https://${BUCKET_NAME}/${item.Key}`);
      res.status(200).json(images);
    }
  });
}
