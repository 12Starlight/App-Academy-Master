# React-Redux Assessment

Read this entire README before running specs for the first time - it contains
important information about running tests with Jest.

## Design Documents
* [Database Schema][db_schema]
* [View Wireframes][views]

[db_schema]: ./docs/db_schema.md
[views]: ./docs/views.md

## Instructions

## Setup

If any of the setup fails, call over a TA to help.

1. `npm install`
2. `bundle install`
3. `bundle exec rails db:setup`
  - NB: you will need to have postgres running!

To test your code live in the browser, run:
1. `rails server`
2. `npm run build`
3. Navigate to localhost:3000.  

NB: you do **not** need to have a server or webpack running to run and pass specs.

You will begin with the backend entirely set up. Parts of the frontend skeleton
have been provided for you as well.

## Running specs

You will be running your code using Jest.  Navigate to the root folder of the
skeleton and run `npm test` to run all specs at once.  

To run a single spec file, see 'Debugging Tips' section below.

### Where do the specs live?

For this assessment, Jest specs live in a single `__tests__` folder within the
frontend folder.

We recommend passing your specs in this order:

Entry point test:

1. `frontend/__tests__/reactA06-test.js` // reactA06.jsx

Redux tests:

1. `frontend/__tests__/post_api_util-test.js` // post_api_util.js
2. `frontend/__tests__/post_actions-test.js` // post_actions.js
3. `frontend/__tests__/reducers-test.js` // posts_reducer.js, root_reducer.js
4. `frontend/__tests__/store-test.js` // store.js

Component tests:

1. `frontend/__tests__/post_index-test.js` // post_index_container.jsx, post_index.jsx
  * Write `PostIndexContainer` before `PostIndex`
2. `frontend/__tests__/post_index_item-test.js` // post_index_item.jsx
3. `frontend/__tests__/post_form-test.js` // create_post_form_container.jsx, edit_post_form_container.jsx, post_form.jsx
  * Write `CreatePostFormContainer` and `EditPostFormContainer` before `PostForm`
4. `frontend/__tests__/post_show-test.js` // post_show_container.jsx, post_form.jsx
  * Write `PostShowContainer` before `PostForm`

## Debugging tips

Jest is Facebook's defacto testing framework for React components and Flux apps.  
Here are some tips for making debugging a little less intimidating.

1. Look at the test file to see how we expect the method to behave.  Jest reads
  similarly to RSpec.  

2. Consider using the following commands:
  * `npm test frontend/__tests__/somepath/sometest.js`
    * run a single test file (HIGHLY RECOMMENDED)
  * `npm test -- --watch`
    * similar to `webpack --watch`, will update every time there is a change
  * `npm test -- -o`
    * will find and run only those tests related to changed Javascript files
  * `npm test -- --bail`
    * similar to `--fail-fast`, will abort test run after first error
    * execution does not stop after first failed test, but at end of file.  
    Therefore it is only useful when running the full test suite.
