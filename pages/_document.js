import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
 return (
    <Html>
       <Head>
          <link rel="preconnect" href="<https://app.snipcart.com>" />
          <link rel="preconnect" href="<https://cdn.snipcart.com>" />
          <link
             rel="stylesheet"
             href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
          />
       </Head>
       <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
            <div 
            hidden id="snipcart"
            data-api-key="ZjlmZmQ3NWQtZGQyNC00NTgyLThkOGQtNDM4MzQxYjAxNTdmNjM4MjA2MzQ5MjgzODk1MjQz"  
            data-config-modal-style="side">
           </div>
       </body>
    </Html>
 );
}