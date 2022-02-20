<template>
	<div class="box d-flex justify-content-center">
		<form
			@submit.prevent="loginSubmit"
			class="col-11 col-lg-4 col-sm-8 my-sm-5 my-2 border border-dark bg-white p-4 rounded shadow d-flex flex-column align-items-center"
		>
			<div class="w-75 d-flex justify-content-around">
				<label for="UserName" class="form-label w-25 text-center"
					>نام کاربری :
				</label>
				<input
					name="UserName"
					v-model="body.username"
					type="text"
					:class="{
						'is-invalid': usernameE,
						'is-valid': usernameE === false,
					}"
					class="form-control w-50"
				/>
			</div>
			<div class="invalid-feedback text-center" v-if="usernameE">
				{{ usernameEM }}
			</div>
			<div class="mt-4 w-75 d-flex justify-content-around">
				<label for="Password" class="form-label w-25 text-center"
					>رمز :</label
				>
				<input
					name="Password"
					v-model="body.password"
					type="password"
					:class="{
						'is-invalid': passwordE,
						'is-valid': passwordE === false,
					}"
					class="form-control w-50"
				/>
			</div>
			<div class="invalid-feedback text-center" v-if="passwordE">
				{{ passwordEM }}
			</div>
			<div class="my-4 form-check">
				<input
					type="checkbox"
					class="form-check-input"
					id="exampleCheck1"
				/>
				<label class="form-check-label" for="exampleCheck1"
					>مرا به خاطر بسپار</label
				>
			</div>
			<button type="submit" class="btn btn-primary">login</button>
		</form>
	</div>
</template>

<script>
    import axios from '../../node_modules/axios/dist/axios';

	export default {
		data() {
			return {
				body: {
					username: '',
					password: '',
				},
				usernameE: null,
				passwordE: null,
				usernameEM: null,
				passwordEM: null,
			};
		},
		methods: {
			loginSubmit() {
				let access = true;
				if (this.body.username.length < 5) {
					this.usernameE = true;
					access = false;
					if (this.body.username.length == 0) {
						this.usernameEM = 'please enter user name';
					} else {
						this.usernameEM =
							'Username must be at least 5 characters';
					}
				} else {
					this.usernameE = false;
				}
				if (this.body.password.length < 8) {
					access = false;
					this.passwordE = true;
					if (this.body.password.length == 0) {
						this.passwordEM = 'please enter a password';
					} else {
						this.passwordEM =
							'Password must be at least 5 characters';
					}
				} else {
					this.passwordE = false;
				}
				if (access) {
					axios.post('/api/admin/login',{
                            username: this.body.username,
                            password: this.body.password,
                        }).then(response => {
							// handle success
							if(response.status == 200){
								this.$store.commit('logIn',response.data.token);
								this.$router.push('/')
							}
						}).catch(error => {
							// handle error
							console.log(error);
						})
				}
			},
		},
	};
</script>

<style scoped>
	.box {
		width: 100vw !important;
	}
	.invalid-feedback {
		display: block !important;
	}
	input {
		box-shadow: none;
	}
</style>
