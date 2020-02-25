The `Nav` component will receive the following props.

`actions`
An array of objects that can be configurable from the client of the following structure:

```
const actions = [
    {
        icon: '',          // class of font-awesome icon
        onClick: func,     // function to trigger when clicking the icon. All nav item props are passed back to the function.
        handleShow: func,  // function to show/hide the icon. All nav item props are passed back to the function.
        styles: { }        // styles object passed to the action icon.
    }
]
```

`handleOpen`
Function to handle interaction when clicking on nav item.

`tree`
Array of objects used to build the Nav Tree
