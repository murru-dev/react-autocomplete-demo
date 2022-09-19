# Questions

## 1. What is the difference between Component and PureComponent? give an example where it might break my app.
- The main difference is that PureComponents are cached based on their props and inner state values.
- About the "breaking my app example", PureComponents struggle a lot when we make them to render children props. The simplest example is when we render a PureComponent with only text children and then we try to render the same PureComponent with an html element children.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
- It's dangerous because SCU blocks the context updates, so we will not have the correct workflow in our app.

## 3. Describe 3 ways to pass information from a component to its PARENT.
- 1 -> Pass a function as a prop to child component that receives a param so it can update the state of parent prop.
- 2 -> Using ref forwarding.
- 3 -> Passing the setXxx method from useState hook directly to the children as prop.

## 4. Give 2 ways to prevent components from re-rendering.
- 1 -> Using useRef().
- 2 -> Using useMemo().

## 5. What is a fragment and why do we need it? Give an example where it might break my app.
- Fragments are syntax that allow us to add multiple elements to a React component without wrapping them in an extra DOM node.
- We need it because it allows us to write cleaner, readable and maintainable code.
- A fragment can break my app when we need to add styling...

## 6. Give 3 examples of the HOC pattern.
- 1 -> When we need the same styles for many components.
- 2 -> When we need to show a loader before rendering a component fetching data from an API.
- 3 -> When we want to add some functionality to any component (like hovering on an li item to show detail information).

## 7. what's the difference in handling exceptions in promises, callbacks and async...await.
- Promises -> errors are thrown in a different callback stack.
- Callbacks -> catch() has it's own execution context, i.e. variable scope works like you'd expect it to.

## 8. How many arguments does setState take and why is it async.
- It takes only one argument.
- It's async because it can result in an expensive operation, therefore the browser might be left unresponsive.

## 9. List the steps needed to migrate a Class to Function Component.
- 1 -> Check if Class has state to replace with useState hook.  
- 2 -> Check if Class have componentDidMount to replace it with useEffect hook.  
- 3 -> Write methods as functions.
- 4 -> Check properties and use them.  

## 10. List a few ways styles can be used with components.
- InLine styling, using stylesheets, using css modules and using styled components (as explained in one of the questions before).

## 11. How to render an HTML string coming from the server.
- For this we h ave to use dangerouslySetInnerHTML property/attr in the html element.