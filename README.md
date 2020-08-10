# fruitform
Writing tests for react-hook-form in react-native. 

### Findings

`react-hook-form`'s `handleSubmit` accepts a function as a parameter.

`handleSubmit` then calls this function if the form has no errors.

I assumed that `handleSubmit` will only pass in 1 parameter to the function.

I realised `handleSubmit` was actually passing 2 parameters. The second parameter was `undefined`.

This was my test which failed.

```javascript
expect(mockSubmitFruit).toBeCalledWith({favourite_fruit: 'banana'});
```

Notable packages:
- react-hook-form
- jest
- react-native-testing-library
