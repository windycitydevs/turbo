# `@windyciydevs/express`

### A Vercel-deployed Express app ft jest+supertest testing

#### Run Tests

- From the root of the turbo repo run `yarn test:express`
- Alternatively, from the root of this repo (`apps/express`) run `yarn test`
- The output should look similar to the following

```bash
dopaminedriven@LAPTOP-2IH011V4:~/wcd/turbo$ yarn test:express
yarn run v1.22.19
$ yarn --cwd apps/express test
$ jest --detectOpenHandles
 PASS  api/__tests__/server.test.ts
  server
    ✓ health check returns 200 (118 ms)
    ✓ message endpoint says hello (23 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.403 s
Ran all test suites.
Done in 5.05s.
```
