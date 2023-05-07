import { Route, Routes } from "react-router-dom";
import AllowedAccess from "./AllowedAccess";
import RouterError from "./RouterError";
import SignIn from "./Forms/SignIn";
import ProtectedRoutes from "./ProtectedRoutes";

const Views = () => {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/home" element={<AllowedAccess />} />
			</Route>
		</Routes>
	);
};

export default Views;
