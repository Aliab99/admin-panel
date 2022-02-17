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
			<form action="" class="">
				<!-- discount code input -->
				<div class="d-flex justify-content-center mb-3">
					<label class="fs-5 col-4 text-center" for="DiscountCode"
						>کد تخفیف</label
					>
					<div class="col-8">
						<input class="w-100" type="text" name="DiscountCode" />
						<p class="m-0 text-center">
							ایجاد کد تخفیف به صورت
							<span><a href="">رندم</a></span>
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
						<input class="w-100" type="text" name="DiscountName" />
					</div>
				</div>
				<!-- discount name section -->
				<!-- discount value and max uses section -->
				<div class="d-flex justify-content-center mb-4">
					<label class="fs-6 col-3 text-center" for="DiscountValue"
						>مقدار تخفیف</label
					>
					<div class="col-3">
						<input
							class="w-100"
							type="number"
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
							type="number"
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
						<input class="w-100" type="date" name="ُstarted" />
					</div>
					<label class="fs-6 col-2 text-center" for="expired"
						>تاریخ انقضا</label
					>
					<div class="col-4">
						<input class="w-100" type="date" name="expired" />
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
	};
</script>

<style scoped>
	/* discount code generator section styles*/
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
