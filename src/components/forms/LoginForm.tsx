import React from "react";
import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }: any) => (
	<TextField
		variant="outlined"
		margin="normal"
		fullWidth
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
);

const LoginFormComponent: React.FunctionComponent<InjectedFormProps> = (props) => (
	<form onSubmit={props.handleSubmit} noValidate>
		<Field disabled={props.submitting} name="email" component={renderTextField} label="Email" autoFocus />
		<Field
			disabled={props.submitting}
			name="password"
			component={renderTextField}
			type="password"
			label="Contraseña"
			autoComplete="current-password"
		/>
		<Typography variant="subtitle1">User: test@exams.com</Typography>
		<Typography variant="subtitle1">Password: test_!</Typography>
		<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme" />
		<Button disabled={props.submitting} type="submit" fullWidth variant="contained" color="primary">
			Acceder
		</Button>
	</form>
);

const validate = (formValues: any) => {
	const errors: any = {};
	if (!formValues.email) {
		errors.email = "El campo email es requerido";
	}
	if (formValues.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
		errors.email = "Ingresar email válido";
	}
	if (!formValues.password) {
		errors.password = "El campo contraseña es requerido";
	}
	return errors;
};

export default reduxForm({
	form: "loginForm",
	validate,
})(LoginFormComponent);
