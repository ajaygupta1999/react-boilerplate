import Home from './Home';
import Login from "./Login";


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
    },
    {
        component : Login,
        path : "/login",
        expect : true
    }
];