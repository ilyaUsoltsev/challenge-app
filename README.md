# Challenge app

## Launch the project
Run the following command from the root:
```
npm run bootstrap
```

## Description

### Server
- The json file provided for the task was blocked by CORS. So, I decided to serve the data with a simple express server.
- To simulate loading time and better see the loading states, 2s delay was added to responses.
- Simple pagination was added to avoid overfetching data from the client.
- Only necessary field were sent.
- Empty response or error can by simulated by uncommenting lines 12-20 and restarting the project with `npm run dev` from the root.

### Client
- The client part was initialized with `npx create-react-app my-app --template redux-typescript`.
- Redux toolkit was therefore used as the part of the template.
- StyledComponents were used for styling as a standard option for css-in-js approach.
- "react-intersection-observer" was added for fetching more offers when user scrolls to the bottom of the page.
- Cypress was added for testing and was set with husky for a pre-commit hook.
- Cypress can be run with `npm run test` either from client or from the root.

### Root
- "concurrently" was added for bootstrappin the project
- "husky" was added to enforce pre-commint hooks with testing

## Improvements needed
- Right now there is no clear contract between the backend and the frontend. Interfaces and services for interacting between the two should be automatically generated. OpenAPI/Swagger or GraphQL could be feasible options.
- Cache manager is needed to prevent data refetching when moving between the pages. RTQuery, ReactQuery, or ApolloClient (GraphQL) could be used.
- So far there are only e2e cypress tests. Unit tests are also essential and must be added.
- Dockerizing the app to make it "production ready" is needed as well. 