const heading=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
     [React.createElement("h1",{},"This from child 1 h1"),
     React.createElement("h2",{id:"child"},"This is from child 1 h2")]),
    React.createElement("div",{id:"child2"},
     [React.createElement("h1",{},"This from child 2 h1"),
     React.createElement("h2",{id:"child"},"This is from child 2 h2")])   
]);




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);