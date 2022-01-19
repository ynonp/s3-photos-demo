const AWS = require('aws-sdk');
const { BUCKET_NAME } = require('../src/lib/globals');
const s3 = require('../src/lib/mys3');

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "eu-west-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});


