import Home from './Home';

// Put your all routes here ===
export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component : Home,
        path : "/home",
        expect : true
    }
];