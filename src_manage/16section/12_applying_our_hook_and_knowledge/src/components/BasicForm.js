import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
	const {
		value: firstNameValue,
		hasError: firstNameHasError,
		isValid: firstNameValueIsValid,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useInput(isNotEmpty);
	const {
		value: lastNameValue,
		hasError: lastNameHasError,
		isValid: lastNameValueIsValid,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput(isNotEmpty);
	const {
		value: emailValue,
		hasError: emailHasError,
		isValid: emailValueIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput(isEmail);

	let formIsValid = false;
	if (firstNameValueIsValid && lastNameValueIsValid && emailValueIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}
		console.log("submitted");
		console.log(firstNameValue, lastNameValue, emailValue);

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};
	const firstNameInputClasses = firstNameHasError
		? "form-control invalid"
		: "form-control";
	const lastNameInputClasses = lastNameHasError
		? "form-control invalid"
		: "form-control";
	const emailInputClasses = emailHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="control-group">
				<div className={firstNameInputClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={firstNameValue}
					/>
					{firstNameHasError && (
						<p className="error-text">First name must not be empty.</p>
					)}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={lastNameValue}
					/>
					{lastNameHasError && (
						<p className="error-text">Last name must not be empty.</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={emailValue}
				/>
				{emailHasError && (
					<p className="error-text">Please enter a valid email.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
