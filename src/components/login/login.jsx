import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../Common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import style from '../../Common/FormsControls/FormsControls.module.css'

const maxLength50 = maxLengthCreator(50)

const LoginForm = props => {
	console.log('RERENDER')
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder='Email'
					name={'email'}
					component={Input}
					validate={[required, maxLength50]}
				/>
			</div>
			<div>
				<Field
					placeholder='Password'
					type='password'
					name={'password'}
					component={Input}
					validate={[required, maxLength50]}
				/>
			</div>
			<div>
				<Field component={Input} name={'rememberMe'} type='checkbox' />
				Remembr me
			</div>
			{props.error && (
				<div className={style.formSummaryError}>{props.error}</div>
			)}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm)

const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
