const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "child1" }, "I am h1 tag"),
    React.createElement("h2", { id: "child2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "child1" }, "I am h1 tag"),
    React.createElement("h2", { id: "child2" }, "I am h2 tag"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
