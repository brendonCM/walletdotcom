



export async function getServerSideProps(context) {


    // Get status
    const url='https://eu-test.oppwa.com/v1/checkouts';
  const data = 'entityId=8a8294174e735d0c014e78cf26461790&amount=92.00&currency=ZAR&paymentType=DB';

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': data.length,
          'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
      }
  };

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

return {
  props: {
    data: responseJSON
  }
}
}