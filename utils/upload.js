const fs = require('fs');
const { BUCKET_NAME } = require('../src/lib/globals');
const s3 = require('../src/lib/mys3');

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
      Bucket: BUCKET_NAME,
      Key: 'cat.jpg', // File name you want to save as in S3
      Body: fileContent,
      ACL:'public-read'
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('./cat.jpg');
