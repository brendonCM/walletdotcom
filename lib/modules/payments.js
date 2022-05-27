/**
 * This is the Peach payment Module file
 * 
 * 
 */
 const https = require('https');
 const querystring = require('querystring');

 const checkout = async (amount) => {
     const path=`${process.env.PEACH_PAYMENTS_PATH}`;
     const data = querystring.stringify({
         'entityId':`${process.env.PEACH_PAYMENT_ENTITY_ID}`,
         'amount':`${amount}`,
         'currency':'ZAR',
         'paymentType':'DB'
     });
     
     const options = {
         port: 443,
         host: `${process.env.PEACH_PAYMENT_HOST}`,
         path: path,
         method: 'POST',
         headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'Content-Length': data.length,
             'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
         }
     };
     return new Promise((resolve, reject) => {
         const postRequest = https.request(options, function(res) {
             const buf = [];
             res.on('data', chunk => {
                 buf.push(Buffer.from(chunk));
             });
             res.on('end', () => {
                 const jsonString = Buffer.concat(buf).toString('utf8');
                 try {
                     resolve(JSON.parse(jsonString));
                 } catch (error) {
                     reject(error);
                 }
             });
         });
         postRequest.on('error', reject);
         postRequest.write(data);
         postRequest.end();
     });
 };
 
 const statusPayment = async (checkout_id) => {
     var path=`${process.env.PEACH_PAYMENTS_PATH}/${checkout_id}/payment`;
     path += `?entityId=${process.env.PEACH_PAYMENT_ENTITY_ID}`;
 
     const options = {
         port: 443,
         host: `${process.env.PEACH_PAYMENT_HOST}`,
         path: path,
         method: 'GET',
         headers: {
             'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
         }
     };
 
     return new Promise((resolve, reject) => {
         const postRequest = https.request(options, function(res) {
             const buf = [];
             res.on('data', chunk => {
                 buf.push(Buffer.from(chunk));
             });
             res.on('end', () => {
                 const jsonString = Buffer.concat(buf).toString('utf8');
                 try {
                     resolve(JSON.parse(jsonString));
                 } catch (error) {
                     reject(error);
                 }
             });
         });
         postRequest.on('error', reject);
         postRequest.end();
     });
 }
 
 module.exports = {
     checkout,
     statusPayment
 }
 
 