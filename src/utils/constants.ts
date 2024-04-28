import CATEGORIES from '@/data/categories.json'

const APP_NAME: string = 'Quizzle'
const APP_DESCRIPTION: string = 'TBD: Some description text...'

const DEFAULT_CATEGORY = '9'
const DEFAULT_CATEGORY_NAME = "General Knowledge"
const DEFAULT_DIFFICULTY = 'easy'
const DEFAULT_AMOUNT = '2'
const DEFAULT_TYPE = 'multiple'

const OPTIONS_CATEGORIES = CATEGORIES
const OPTIONS_DIFFICULTY = ['easy', 'medium', 'hard']

const API_HOST = 'https://opentdb.com'
const API_FETCH_DATA = `${API_HOST}/api.php?amount=${DEFAULT_AMOUNT}&type=${DEFAULT_TYPE}&`
const API_FETCH_TOKEN = `${API_HOST}/api_token.php?command=request`
const API_RESET_TOKEN = `${API_HOST}/api_token.php?command=reset&token=`

export {
	APP_NAME,
	APP_DESCRIPTION,
	DEFAULT_CATEGORY,
	DEFAULT_CATEGORY_NAME,
	DEFAULT_DIFFICULTY,
	DEFAULT_AMOUNT,
	DEFAULT_TYPE,
	API_FETCH_DATA,
	API_FETCH_TOKEN,
	API_RESET_TOKEN,
	OPTIONS_DIFFICULTY,
	OPTIONS_CATEGORIES
}