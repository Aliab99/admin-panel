import { createStore } from 'vuex';
import axios from '../../node_modules/axios/dist/axios';

export default createStore({
	state: {
		isAuthentic: false,
		token: '',
		username: '',
	},
	mutations: {
		usernameUpdate(state, username) {
			state.username = username;
		},
		onStart(state) {
			let token = localStorage.getItem('token');
			if (token) {
				state.isAuthentic = true;
				state.token = token;
				axios.defaults.headers.common['Authorization'] =
					'token ' + token;
			} else {
				state.isAuthentic = false;
				state.token = '';
				axios.defaults.headers.common['Authorization'] = '';
			}
		},
		logIn(state, token) {
			if (token) {
				state.isAuthentic = true;
				state.token = token;
				localStorage.setItem('token', token);
				axios.defaults.headers.common['Authorization'] =
					'token ' + token;
			} else {
				state.isAuthentic = false;
				state.token = '';
				localStorage.removeItem('token');
				axios.defaults.headers.common['Authorization'] = '';
			}
		},
		logOut(state) {
			state.isAuthentic = false;
			state.token = '';
			axios.defaults.headers.common['Authorization'] = '';
			localStorage.removeItem('token');
		},
	},
	actions: {
		onStart(context) {
			let token = localStorage.getItem('token');
			if (token) {
        axios.defaults.headers.common['Authorization'] =
					'token ' + token;
				axios
					.get('/api/admin/order/show/canceled')
					.then((response) => {
            context.commit('logIn',token)
					})
					.catch((error) => {
            context.commit('logOut',token)
						
						console.log(error);
					});
			} else {
        context.commit('logOut',token)
			}
		},
	},
	modules: {},
});
