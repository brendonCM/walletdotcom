import Head from 'next/head';

function Header(){
    return (
        <Head>
            <meta charset="utf-8" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
            <link rel="icon" type="image/png" href="/favicon.png" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <title>
            WASP
            </title>
            <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
            <link href="/bootstrap.min.css" rel="stylesheet" />
            <link href="/now-ui-kit.css?v=1.3.0" rel="stylesheet" />
            <link href="/demo.css" rel="stylesheet" />

            <script src="/jquery.min.js" type="text/javascript" ></script>
            <script src="/popper.min.js" type="text/javascript" ></script>
            <script src="/bootstrap.min.js" type="text/javascript" ></script>
            <script src="/bootstrap-switch.js" ></script>
            <script src="/nouislider.min.js" type="text/javascript" ></script>
            <script src="/bootstrap-datepicker.js" type="text/javascript" ></script>
            <script src="/now-ui-kit.js?v=1.3.0" type="text/javascript" ></script>
      </Head>
    )
}

module.exports = {
    Header
}