import { API_FETCH_DATA, API_FETCH_TOKEN, API_RESET_TOKEN } from './constants'

interface TokenResponse {
	response_code: number
	response_message?: string
	token: string
}

let TOKEN: string

async function FetchData(req: string) {
	if (!TOKEN) {
		await FetchToken()
	}

	console.log('req', req)

	const res = await fetch(`${API_FETCH_DATA}${req}&token=${TOKEN}`, { cache: 'no-store' })

	if (!res.ok) {
		console.log('ERROR', res)
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function FetchToken() {
	const res = await fetch(`${API_FETCH_TOKEN}`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const response: TokenResponse = await res.json()

	if (response.response_code === 0) {
		TOKEN = response.token
	} else {
		ResetToken()
	}
}

async function ResetToken() {
	const res = await fetch(`${API_RESET_TOKEN}`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const response: TokenResponse = await res.json()

	if (response.response_code === 0) {
		TOKEN = response.token
	}
}

export default FetchData
