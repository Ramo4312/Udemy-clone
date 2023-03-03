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

// export interface ILanguage {
// 	text: string
// }

export interface INewPassword {
	old_pass: string
	password: string
	password_confirm: string
}

export type TCourse = {
	// id: number
	title: string
	sub_title: string
	description: string
	lang: string
	sub_category: string
	// main_image: string
	// main_video: string
	price: string
	currency: string
	// crated_at: string
	// updated_at: string
	category: string
}

export type ICourse = {
	id: number
	title: string
	sub_title: string
	description: string
	lang: string
	sub_category: string
	main_image: string
	main_video: string
	price: string
	currency: string
	crated_at: string
	updated_at: string
	category: string
}

export interface ICategories {
	id: number
	title: string
}
