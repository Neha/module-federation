# How to move an application to Module Federation?

In this example, we will have the applications on ReactJS using CRA.

1. Create 2 application and name one as host and other as remote application.

2. Identify the components from remote to be exposed.

3. Do eject (as we are using CRA) on both applications. Remember we need webpack config to override.

4. Go to webpack config and do the following:

### Step 1:  Update remote application's config

1. expose the components from remote application. Remember the `name` key is important here (we will see in next step why)

2. Once the config is updated. Re-run the application and note the localhost url (we will see in next step why).

```Javascript

//Remote application webpack config

new ModuleFederationPlugin({
        name: "remote",
        filename: "remoteEntry.js",
        remotes: { },
        exposes: {
          // the modules we want to expose
          "./Header" : "./src/Header.js", 
          "./Footer" : "./src/Footer.js"
        },
        shared: { }
      }),

```

### Step 2: Update host application's config

1. The module exposed at step 1, now we need to use them in host application. So, create a URL using the name key from remote and url (port) on which the remote app is running. Mine is on 3003 port

2. In remotes key we will update they key and value.



```javascript
// Host application webpack config
new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: { 
            Header: "remote@http://localhost:3003/remoteEntry.js",
            Footer: "remote@http://localhost:3003/remoteEntry.js"
        },
        exposes: { },
        shared: { }
      }),
```


### Step 3: Now we will use this exposed components in Host application

1. Go to the Host application and in the `App.js` import the components and use them exactly like 

``` Javascript

const HeaderComponent = React.lazy(() => import("Header/Header"));
const FooterComponent = React.lazy(() => import("Footer/Footer"));

```

### Step 4: Dependencies

Remote application webpack config

```javascript

const dependencies = require("../package.json").dependencies;

new ModuleFederationPlugin({
        name: "remote",
        filename: "remoteEntry.js",
        remotes: { },
        exposes: {
          // the modules we want to expose
          "./Header" : "./src/Header.js", 
          "./Footer" : "./src/Footer.js"
        },
        shared: {
          ...dependencies,
          react: {
            // make sure only a single react module is used
			      singleton: true, 
            requiredVersion: dependencies.react  // would come from package.json
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"]
            
          },
        }
      }),

```

### Step 5: other fixes in the application

1. Create a file at root - `bootstrap.js`

2. Copy the index.js code in `bootstrap.js`

3. Now, import `bootstrap.js` to `index.js`

``` JAVASCRIPT
    import("./bootstrap.js");
```

### Step 6: What are other options in the config?

1. eager

2. shared

3. Singleton