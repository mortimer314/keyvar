import React from "react";

import Test from "./components/Test/Test";
import Ex from "./components/Test/Ex";
import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";

const routes = [
    { path: "/keyvar/", element:<Home/> },
    { path: "/keyvar/notifications", element:<Notifications/> }
];

export default routes;