import backend from "../apis/backend";
import { history } from "../history";
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (formValues: any) => async (dispatch: any) => {
	const response = await backend.post("/auth/login", formValues);

	dispatch({ type: SIGN_IN, payload: response.data });

	history.push("/exams");
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};
