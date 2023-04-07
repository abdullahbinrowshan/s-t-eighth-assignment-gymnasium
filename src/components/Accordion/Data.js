export const Data = [
    {
        question: 'How Does ReactJS Work',
        answer: 'ReactJS is a JavaScript library for building user interfaces. It uses a virtual DOM to track changes to the UI, has a component-based architecture for creating reusable UI components, and follows a one-way data flow to manage the state of the application. JSX syntax is used to define the UI components.',
        id: 1
    },
    {
        question: 'Difference between props and state',
        answer: 'props are used to pass data from a parent component to a child component, while state is used to manage the internal data and state of a component. Props are read-only and cannot be modified by the child component, while state is mutable and can be changed by the component itself using setState(). Both props and state determine the behavior of a component in ReactJS.',
        id: 2
    },
    {
        question: 'useEffect use case except data fetching',
        answer: 'While useEffect is commonly used for data fetching, it has a range of other use cases. For example, it can be used to add event listeners, create animation effects, update the title of the page, manage a timer, and more. useEffect allows you to perform side effects in your component and is executed after every render. By using useEffect, you can ensure that your component is properly updated and its state is managed correctly.',
        id: 3
    }
]