import axios from 'axios'

const $api = axios.create({
	baseURL: 'http://89.111.155.61:9001/api/v1/',
})

export default $api

$api.interceptors.response.use(
	response => {
		return response
	},
	error => {
		console.log(error)

		if (error.response.status === 403) {
			localStorage.removeItem('accessToken')
			localStorage.removeItem('userId')
			window.location.href = '/login'
		}

		return error
	}
)
