import { auth, config, connector, graph } from '@grafbase/sdk'

const g = graph.Standalone()

// const clerk = auth.OpenIDConnect({
//   issuer: g.env('ISSUER_URL'),
// })

const shopify = connector.GraphQL('Shopify', {
  url: g.env('NEXT_PUBLIC_GRAFBASE_API_URL'),
  headers: headers => {
    headers.set(
      'X-Shopify-Storefront-Access-Token',
      g.env('NEXT_PUBLIC_GRAFBASE_API_KEY'),
    )
  },
})

g.datasource(shopify)

const input = g.input('AuthInput', { email: g.email(), password: g.string() })

g.mutation('login', {
  args: { input: g.inputRef(input) },
  returns: g.string(),
  resolver: 'login',
})

export default config({
  graph: g,
  cache: {
    rules: [
      {
        maxAge: 60,
        types: 'Query',
      },
    ],
  },
  auth: {
    // providers: [clerk],
    rules: rules => {
      rules.private()
    },
  },
})
