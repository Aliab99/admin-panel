<template>
	<div class="px-2 py-2 shadow-sm bg-white rounded">
		<!-- header section -->
		<header class="d-flex justify-content-between px-3">
			<!-- toggle button -->
			<div @click="toggleType" class="toggle-btn">
				<div :style="toggleState"></div>
			</div>
			<!-- end toggle button -->
			<h5 class="d-none d-lg-block">پنل ایجاد کد تخفیف</h5>
			<span class="icon-percent"></span>
		</header>
		<!-- end header section -->
		<!-- dash array line -->
		<svg height="2px" width="100%">
			<line x1="10%" y1="1" x2="90%" y2="1" class="line" />
		</svg>
		<!-- end dash array line -->
		<!-- main content of discount code create form -->
		<main class="px-4 py-2">
			<form action="" @submit.prevent="submit">
				<!-- discount code input -->
				<div class="d-flex justify-content-center mb-3">
					<label class="fs-5 col-4 text-center" for="DiscountCode"
						>کد تخفیف</label
					>
					<div class="col-8">
						<input
							class="w-100"
							required
							type="text"
							v-model.lazy="obj.code"
							name="DiscountCode"
						/>
						<p class="m-0 text-center">
							ایجاد کد تخفیف به صورت
							<span
								><a @click.prevent="RndCodeGenerator"
									>رندم</a
								></span
							>
						</p>
					</div>
				</div>
				<!-- end discount code input -->
				<!-- discount name section -->
				<div class="d-flex justify-content-center mb-4">
					<label class="fs-5 col-4 text-center" for="DiscountName"
						>نام تخفیف</label
					>
					<div class="col-8">
						<input
							class="w-100"
							required
							type="text"
							v-model.lazy="obj.name"
							name="DiscountName"
						/>
					</div>
				</div>
				<!-- discount name section -->
				<!-- discount value and max uses section -->
				<div class="d-flex justify-content-center mb-4">
					<label class="fs-6 col-3 text-center" for="DiscountValue">{{
						obj.type == 'fixed' ? 'مقدار تخفیف' : 'درصد تخفیف'
					}}</label>
					<div class="col-3">
						<input
							class="w-100"
							required
							type="number"
							v-model.lazy="value"
							min="0"
							name="DiscountValue"
						/>
					</div>
					<label class="fs-6 col-3 text-center" for="MaxUses"
						>حداکثر استفاده</label
					>
					<div class="col-3">
						<input
							class="w-100"
							required
							type="number"
							v-model.lazy="obj.max_uses"
							min="0"
							name="MaxUses"
						/>
					</div>
				</div>
				<!-- end discount value and max uses section -->
				<!-- started and expired date section -->
				<div class="d-flex justify-content-center mb-4">
					<label class="fs-6 col-2 text-center" for="ُstarted"
						>تاریخ شروع</label
					>
					<div class="col-4">
						<input
							class="w-100"
							required
							v-model.lazy="obj.starts_at"
							type="date"
							name="ُstarted"
						/>
					</div>
					<label class="fs-6 col-2 text-center" for="expired"
						>تاریخ انقضا</label
					>
					<div class="col-4">
						<input
							class="w-100"
							required
							v-model.lazy="obj.expires_at"
							type="date"
							name="expired"
						/>
					</div>
				</div>
				<!-- status section -->
				<div class="d-flex justify-content-center mb-2">
					<div class="form-check form-check-inline">
						<p>وضعیت کد :</p>
					</div>
					<!-- Active radio -->
					<div class="form-check form-check-inline">
						<input
							v-model.lazy="obj.status"
							required
							class="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio1"
							value="1"
						/>
						<label class="form-check-label" for="inlineRadio1"
							>فعال</label
						>
					</div>
					<!-- deActive radio -->
					<div class="form-check form-check-inline">
						<input
							v-model.lazy="obj.status"
							class="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="0"
						/>
						<label class="form-check-label" for="inlineRadio2"
							>غیر فعال</label
						>
					</div>
				</div>
				<!-- end status section -->
				<!-- description section -->
				<div class="d-flex justify-content-center mb-4">
					<label for="description" class="fs-5 col-4 text-center"
						>توضیحات :</label
					>
					<div class="col-8">
						<input
							class="w-100"
							v-model.lazy="obj.description"
							type="text"
							name="description"
							id=""
						/>
					</div>
				</div>
				<!-- end description section -->
				<div class="d-flex justify-content-center">
					<button type="submit" class="btn btn-purple">ثبت کد</button>
				</div>
			</form>
		</main>
		<!-- end main content of discount code create form -->
	</div>
</template>

<script>
	import axios from '../../node_modules/axios/dist/axios';
	export default {
		name: 'Finance',
		data() {
			return {
				obj:{
					name: '',
					code: '',
					description: '',
					type: 'fixed',
					value: 0,
					percent: 0,
					max_uses: '',
					status: '',
					starts_at: '',
					expires_at: '',
				},
				isReload:this.reload,
				value:'',
				DiscountType:'fixed',
				// toggle state variable for cary toggle style
				toggleState: { right: '3px' },
			};
		},
		methods: {
				
			RndCodeGenerator() {
				let chars = [
					'a',
					'b',
					'c',
					'd',
					'e',
					'f',
					'g',
					'h',
					'i',
					'j',
					'k',
					'l',
					'm',
					'n',
					'o',
					'p',
					'q',
					'r',
					's',
					't',
					'u',
					'v',
					'w',
					'x',
					'y',
					'z',
					'A',
					'B',
					'C',
					'D',
					'E',
					'F',
					'G',
					'H',
					'I',
					'J',
					'K',
					'L',
					'M',
					'N',
					'O',
					'P',
					'Q',
					'R',
					'S',
					'T',
					'U',
					'V',
					'W',
					'X',
					'Y',
					'Z',
				];
				let code = '';
				chars;
				for (let i = 1; i < 4; i++) {
					code += chars[Math.floor(Math.random() * chars.length)];
				}
				for (let i = 1; i < 4; i++) {
					code += Math.floor(Math.random() * 10);
				}
				this.obj.code = code;
			},
			toggleType() {
				this.obj.type =
					this.obj.type == 'fixed' ? 'percent' : 'fixed';
				this.DiscountType =
					this.DiscountType == 'fixed' ? 'percent' : 'fixed';
			},
			// on submit event form validation
			submit() {
				this.obj.status = parseInt(this.obj.status);
				let lowerCase = /[a-z]/g;
				let upperCase = /[A-Z]/g;
				let valid = true;
				// code
				if (this.obj.code.length < 5) {
					alert(
						'Please enter more than 5 characters for Discount Code',
					);
					valid = false;
				} else {
					if (
						this.obj.code.match(lowerCase) ||
						this.obj.code.match(upperCase)
					) {
					} else {
						alert(
							'Discount code must contains at least on character and one number',
						);
						valid = false;
					}
				}
				// name
				if (this.obj.name.length < 5) {
					valid = false;
					alert(
						'Please enter more than 5 characters for Discount name',
					);
				} else {
					if (
						this.obj.name.match(lowerCase) ||
						this.obj.name.match(upperCase)
					) {
					} else {
						valid = false;
						alert(
							'Discount name must contains at least on character',
						);
					}
				}
				if (this.obj.type == 'percent') {
					if (this.value > 100 || this.value < 0) {
						alert(
							'Discount value must be between 0 and 100 percent',
						);
						valid = false;
					} else{
						this.obj.percent = this.value;
					}

				} else {
					if (this.value < 10000) {
						alert(
							'Discount value must be grater than 10000 tomans',
						);
						valid = false;
					} 
					else{
						this.obj.value = this.value;
					}
				}
				if (this.obj.max_uses < 0) {
					alert('MaxUses must be greater than zero');
					valid = false;
				}
				if(valid){
					console.log(this.obj)
					axios.post('/api/admin/discount/create',this.obj)
					.then((response) => {

					})
					.catch((error) => {
						// handle error
						console.log(error);
					});
				}
			},
		},
		watch: {
			// apply toggle animation by changing DiscountType state
			DiscountType() {
				if (this.obj.type == 'fixed') {
					let right = 23;
					let toggleTime = setInterval(() => {
						this.toggleState = { right: `${right}px` };
						right--;
						if (right == 3) {
							clearInterval(toggleTime);
						}
					}, 14);
				} else {
					let left = 23;
					let toggleTime = setInterval(() => {
						this.toggleState = { left: `${left}px` };
						left--;
						if (left == 3) {
							clearInterval(toggleTime);
						}
					}, 14);
				}
			},
		},
	};
</script>

<style scoped>
	/* discount code generator section styles*/
	a {
		color: #01def8 !important;
		cursor: pointer;
	}
	.line {
		stroke: #7466f1;
		stroke-width: 2;
		stroke-dasharray: 8px;
		stroke-linecap: round;
	}
	.icon-percent {
		color: #ea5455;
	}
	.btn-purple {
		background-color: #7466f1;
		text-align: center;
		padding: 0.5rem 1.75rem;
	}
</style>
