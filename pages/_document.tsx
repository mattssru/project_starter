import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

export default class CustomDocument extends Document {

    static async getInitialProps(ctx: any) {
       
        const sheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />)
        })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: [
                <React.Fragment key="styles">
                  {initialProps.styles}
                  {sheets.getStyleElement()}
                </React.Fragment>
              ]
        }
    }

    render() {
        return (
          <html>
            <Head/>
            <body>
              <Main />
              <NextScript />
            </body>
          </html>
        )
      }
}
