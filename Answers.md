1. What problem does the context API help solve?

The context API allows child components to access parent components props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers indentify the state changes in response to actions. Actions minimize the scope of functionality within our components, making them more simple and re-usable. The store is an object that holds the application’s state data, the only way to change data is to dispatch redux action which will change the state in the reducer, this guerentees a data "trust".

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?Application state is global, component state is local. Application state is globally stored in memory and easy to access.

1) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows a call action creators that return a function instead of an action object. It allows us to make an API call or trigger other actions, as it deals with functions as actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   The reducer pattern because it is a logical flow for data between application components.
