export interface IUser {
	email: string
	password: string
}

export interface IMentor {
	first_name: string
	last_name: string
	email: string
	password: string
	password2: string
	type: string
	experience: string
	audience: string
}

export interface IPayload {
	access: string
	refresh: string
	email: string
	password: string
}

export interface IEmail {
	email: string
}

export interface INewUser {
	email: string
	password: string
	password_confirm: string
}
