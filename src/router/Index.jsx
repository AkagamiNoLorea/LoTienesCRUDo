import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SaveCita from "../components/SaveCita";
import EditCita from "../components/EditCita";
import DeleteCita from "../components/DeleteCita";

export const router = createBrowserRouter([
    {
        path: "/create",
        element: <SaveCita/>
    },
    {
        path: "/edit/:citaId",
        element: <EditCita/>
    },
    {
        path: "/delete/:citaId",
        element: <DeleteCita/>
    },
    {
        path: "/",
        element: <Home/>
    }
])
