To make components distinguishiable from classic JS functions in React you have to name function with capital letter:

```jsx
function Greeting() {}
```

## References

[⌨️ First Component (54:00)](https://www.youtube.com/embed/4UZrsTqkcW4?start=3240s)

---

When you pass component to `ReactDom.render` method, you have to close the tag, just as in HTML:

```jsx
// include closing tag...

ReactDom.render(<Greeting></Greeting>, document.getElementById("root"));

// ...or make self-closing tag

ReactDom.render(<Greeting />, document.getElementById("root"));
```

---

JSX syntax look like this:

```jsx
function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
```

Under the hood, it uses `React.createElement` to "concatenate" and nest nodes, the same retun could be written as:

```jsx
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
};
```

---

Components can be build using JSX (proper semantic HTML) or fragments <React.Fragments></React.Fragments>

---

You can assign JSX attributes in camelCase format

---
