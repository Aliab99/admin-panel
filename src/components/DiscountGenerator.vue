<template>
	<div class="px-2 py-2 shadow-sm bg-white rounded">
		<!-- header section -->
		<header class="d-flex justify-content-between px-3">
			<div class="form-check form-switch">
				<input
					class="form-check-input"
					type="checkbox"
					role="switch"
					id="flexSwitchCheckChecked"
					checked
					@click="toggleType"
				/>
				<label class="form-check-label" for="flexSwitchCheckChecked"
					>نوع تخفیف</label
				>
			</div>
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
							v-model.lazy="DiscountCode"
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
							v-model.lazy="DiscountName"
							name="DiscountName"
						/>
					</div>
				</div>
				<!-- discount name section -->
				<!-- discount value and max uses section -->
				<div class="d-flex justify-content-center mb-4">
					<label class="fs-6 col-3 text-center" for="DiscountValue">{{
						DiscountType == 'value' ? 'مقدار تخفیف' : 'درصد تخفیف'
					}}</label>
					<div class="col-3">
						<input
							class="w-100"
							required
							type="number"
							v-model.lazy="DiscountValue"
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
							v-model.lazy="MaxUses"
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
							v-model.lazy="started"
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
							v-model.lazy="expired"
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
							v-model.lazy="status"
							required
							class="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio1"
							value="Active"
						/>
						<label class="form-check-label" for="inlineRadio1"
							>فعال</label
						>
					</div>
					<!-- deActive radio -->
					<div class="form-check form-check-inline">
						<input
							v-model.lazy="status"
							class="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="deActive"
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
							v-model.lazy="description"
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
	export default {
		name: 'Finance',
		data() {
			return {
				DiscountType: 'value',
				DiscountCode: '',
				DiscountName: '',
				DiscountValue: '',
				MaxUses: '',
				started: '',
				expired: '',
				status: '',
				description: '',
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
        chars
				for (let i = 1; i < 4; i++) {
					code += chars[Math.floor(Math.random() * chars.length)];
				}
				for (let i = 1; i < 4; i++) {
          code += Math.floor(Math.random() * 10);
        }
        this.DiscountCode = code;
			},
			toggleType() {
				this.DiscountType =
					this.DiscountType == 'value' ? 'percent' : 'value';
			},
			submit() {
				let obj = {};
				let lowerCase = /[a-z]/g;
				let upperCase = /[A-Z]/g;
				if (this.DiscountCode.length < 5) {
					alert(
						'Please enter more than 5 characters for Discount Code',
					);
				} else {
					if (
						this.DiscountCode.match(lowerCase) ||
						this.DiscountCode.match(upperCase)
					) {
						obj = {
							...obj,
							...{ DiscountCode: this.DiscountCode },
						};
					} else {
						alert(
							'Discount code must contains at least on character',
						);
					}
				}
				if (this.DiscountName.length < 5) {
					alert(
						'Please enter more than 5 characters for Discount name',
					);
				} else {
					if (
						this.DiscountName.match(lowerCase) ||
						this.DiscountName.match(upperCase)
					) {
						obj = {
							...obj,
							...{ DiscountName: this.DiscountName },
						};
					} else {
						alert(
							'Discount name must contains at least on character',
						);
					}
				}
				if (this.DiscountType == 'percent') {
					if (this.DiscountValue > 100 || this.DiscountValue < 0) {
						alert(
							'Discount value must be between 0 and 100 percent',
						);
					} else {
						obj = {
							...obj,
							...{ DiscountValue: this.DiscountValue },
						};
						console.log(
							'🚀 ~ file: DiscountGenerator.vue ~ line 187 ~ submit ~ obj',
							obj,
						);
					}
				} else {
					if (this.DiscountValue < 10000) {
						alert(
							'Discount value must be grater than 10000 tomans',
						);
					} else {
						obj = {
							...obj,
							...{ DiscountValue: this.DiscountValue },
						};
					}
				}
				if (this.MaxUses < 0) {
					alert('MaxUses must be greater than zero');
				} else {
					obj = { ...obj, ...{ MaxUses: this.MaxUses } };
				}
				obj = { ...obj, ...{ started: this.started } };
				obj = { ...obj, ...{ expired: this.expired } };
				obj = { ...obj, ...{ status: this.status } };
				obj = { ...obj, ...{ DiscountType: this.DiscountType } };
				if (JSON.stringify(obj).split(',').length == 8) {
					obj = { ...obj, ...{ description: this.description } };
					console.log(
						'🚀 ~ file: DiscountGenerator.vue ~ line 209 ~ submit ~ obj',
						obj,
					);
				}
			},
		},
	};
</script>

<style scoped>
	/* discount code generator section styles*/
  a{
    color: #01DEF8 !important;
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
