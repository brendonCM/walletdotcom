export default async function handler(req, res) {

    // Get payment
    const {amount} = req.body;
    const url=`https://${process.env.PEACH_PAYMENT_HOST}${process.env.PEACH_PAYMENTS_PATH}`;
    const data = `entityId=${process.env.ENTITY_ID}&amount=${amount}&currency=ZAR&paymentType=DB`;

    try {
        const response = await fetch(url,{
            method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': data.length,
                    'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
                },
            body: data
            });
        
        const responseJSON = await response.json();
        if (responseJSON.result.code === '200.300.404'){
            return res.status(404).json({
                message: responseJSON.result.description
            })
        } else if (responseJSON.result.code === '000.200.100') {
            return res.status(200).json({
                payid: responseJSON.id,
                message: responseJSON.result.description
            })
        }
    } catch (error) {
        res.status(500).json({message: "Server is down"})
    }
    
  }