# micro-frontend

## Install dependencies for each appliaction using ```npm install```. ###
### use ```npm run start``` for all applications. ###

I had implemented redux as a independent application for all micro-frontends.

You can refer to the Module Federation Plugin in the webpack.config.js file.
where ```new ModuleFederationPlugin``` takes first object which is used to expose component from local frontend, and second object uses the remotes object to import other micro-frontend's exposed components.

``` new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./Chart1": "./src/components/chart",
        "./test":"./src/components/test"
      },
      remotes:{
        store:'store@http://localhost:8000/remoteEntry.js',
        solid_App: 'solid_App@http://localhost:3003/remoteEntry.js'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
```
