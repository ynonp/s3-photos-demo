const s3 = require('./mys3');
const { BUCKET_NAME } = require('./globals');

var params = {
  Bucket: BUCKET_NAME,
};


export async function listImages() {
  console.log('listing images');
  const data = await s3.listObjectsV2(params).promise();
  const images = data.Contents.map(item => `https://${BUCKET_NAME}.s3-eu-west-1.amazonaws.com/${item.Key}`);
  return images;
}

