# TechChallenge

Contains TechChallenge solution from Mikean

## Prerequisites

- Install React Dev Tools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/?src=search)
- Install Redux Dev Tools for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/?src=cb-dl-recentlyadded)

## Setup local
- Open command prompt and navigate to `/techchallenge_mikean` and run

    ```
    npm install
    ```

- After everything is successfully installed, run

    ```
    npm start
    ```

- Go to your browser and navigate to `http://localhost:5050`


- Now you can open Redux Dev Tools and see your state and actions dispatched


- To run tests

    ```
    npm run test
    ```

- To run production build

    ```
    npm run build
    ```

- **Eslint is run for both local and production builds**

## Structure

```
/src

    /actions                                        # contains actions and business logic
        techchallengeActions.js
        uiActions.js
    /apiconfig                                      # contains api related configurations
        api.config.js
    /components                                 # contains UI components (presentational)
        CustomerBets.js                         
        CustomerHeader.js
        CustomerStatus.js
        Loader.js
        RaceDetails.js
    /constants                                      # contains action types and all other constants
        ActionTypes.js
    /containers                                     # contains both presentational and container components, provides data and behaviour
        CustomerSection.js
        TechChallenge.js
    /reducers                                       # contains reducers
        index.js                                     # combined both reducers here
        techchallengeReducer.js
        uiReducer.js
    /styles                                           # contains component styles
        01_variables.scss
        02_mixins.scss
        03_global.scss
        04_loader.scss
        05_components.scss
        index.scss                                  # importing all styles here for compiling

    index.js                                          # entry point of application (contains 'Provider' and creation of 'store')

.babelrc
.eslintrc
.stylelintrc
index.html                                          # contains simple markup for component development only
package.json

tests.config.js                                     # tests configuration setup
webpack.*.js                                       # development and production configurations

```

## API Update Request

- Can we please update `GetRaces` api response to have appropriate `raceId`
