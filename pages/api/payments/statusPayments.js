export default async function handler(req, res) {

    // Get payment
    const {path} = req.body;
    let url=`https://${process.env.PEACH_PAYMENT_HOST}${path}`;
    url += `?entityId=${process.env.ENTITY_ID}`;

    try {
        const response = await fetch(url,{
            headers: {
                'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
            }
            });
        
        const responseJSON = await response.json();
        return res.status(200).json(responseJSON);
    } catch (error) {
        res.status(500).json({message: "Server is down"})
    }
    
  }