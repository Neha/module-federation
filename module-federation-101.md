# **Problem**:

If you are working on a large-scale application where every feature is a project or has a huge code-base then handling such a code-base is a challenge. or do you want to just share the code it is challenging + 
    
    - Maintenance

    - Scalable

    - Deployment

    - Reusability

### 2. **Solution**:

    1. NPM package (not runtime approach)

    2. The Edge Side Includes (ESI) (bundling it and running it at runtime) Not controllable DOM

    3. Micro Frontend [Live connection but still external]

### 3. **Where to use Module Federation**

    1. Mid to large applications

    2. Multiple teams working at one codebase

    3. Isolated deployments of the application

    4. Async workflow

    5. Dependencies hell

### 4. **Module Federation**
    
    MF is the concept of the web pack 5, it is a great feature to share the components around the different apps. Just like the GraphQL module federation. Think like a big application where one or more than one feature/part is owned by some other application
    
    - Import code from other builds, at runtime

    - Share vendor code dynamically, at runtime

    - Deploy independent SPAs, w/o needing to re-deploy consumers

    - Redundancy and self-healing capabilities built into the architecture

    - Work in any JS env (nodejs, browser, electron, etc)

    - It is not a framework

    - Devs handle implementation details

    - Webpack 5 support

### 5. **Why**?

    1. Isolation

    2. Independent

    3. Cross-tech components

    4. Non-monolith
    
### 6. **Other options than Webpack?**
    
    1. Rollup

    2. custom

    3. https://github.com/dilanx/craco
    
### 7. **How**
    
    You can divide your appliction: 
    
    1. UI components

    2. Logical

    3. Horizontal  - multiple

    4. Vertical - only one at a time
    
### 8. **Terminology**
    
    1. Host

        1. A web pack build i.e initialized first during a first load page

    2. Remote

        1. Another web pack build, but being consumed by the HOST. It comes from some other’s build

    3. Bi-directional

        1. Can operate in “host” or “remote” mode

        2. Can run standalone

    4. Omnidirectional hosts

        1. Acts like both host and remote once

    5. Federate

        1. The one which uses module federation

    
### 9. **Example**
    
   ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/okbfbqyr9khe92gj8w71.png)
    
    1. Here, the `app1` is the `remote` and is exposing the `button` component.

    2. `app2` is taking the `button component` using it in a `component` and re-exposing `button` and `component`. Here `app2` is acting as an Host and remote both.

    3. `app3` is consuming the `component` and acting like `host`

### 10. **CRA and Module Federation**
    
    You need to eject the web pack
    
### 11.  **What MF can do**:
    
    1. Style

    2. multiple components from the same remote

    3. context API, state

    4. Props communication

    5. types

    6. security

    7. deployment

    8. perf

    9. cross-origin

    10. Hooks

    11. async

### 12. **Challenges/Problems**

    1. Size could get bigger

    2. Perf can be an issue

## 13. Configs: 

Check [here](https://github.com/Neha/module-federation/blob/master/configs.md) how to start with module federation 

## 14. Demo:

check the Demo folder for the demo
