import Home from './Home';
import Login from "./Login";
import Signup from './Signup';
import Test from "./Test";

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
        exact : true
    },
    {
        component : Login,
        path : "/login",
        exact : true
    },
    {
        component : Test,
        path : "/test",
        exact : true
    },
    {
        component : Signup,
        exact : true,
        path : "/signup"
    }
];