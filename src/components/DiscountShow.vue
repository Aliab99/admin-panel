<template>
	<div @click="discountquery" class="p-3 shadow-sm bg-white rounded mb-3 table-responsive">
		<table class="table table-light table-striped table-hover w-75" v-if="!editItemStatus">
			<thead>
				<tr>
					<th scope="col">id</th>
					<th scope="col">نام کد</th>
					<th scope="col">کد تخفیف</th>
					<th scope="col">نوع کد</th>
					<th scope="col">مقدار</th>
					<th scope="col">وضعیت</th>
					<th scope="col">توضیحات</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in discounts" :key="index">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.code }}</td>
					<td>{{ item.type == 'percent' ? 'درصد' : 'تومان' }}</td>
					<td>
						{{ item.type == 'percent' ? item.percent : item.value }}
					</td>
					<td>{{ item.status ? 'فعال' : 'غیرفعال' }}</td>
					<td>{{ item.description }}</td>
					<td @click="deleteItem(item.id)">
						<i class="bi bi-trash"></i>
					</td>
					<td @click="editItem(item)">
						<i class="bi bi-pencil-square"></i>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-if="editItemStatus">
			
		</div>
	</div>
</template>

<script>
	import axios from '../../node_modules/axios/dist/axios';
	export default {
		name: 'DiscountShow',
		data() {
			return {
				discounts: {},
				editItemStatus:false,
				editingItem:{}
			};
		},
		methods: {
			editItem(item) {
				this.editingItem = item;				
			},
			deleteItem(id) {
				console.log(id);
				axios
					.delete(`/api/admin/discount/delete/${id}`)
					.then((response) => {
						// handle success
						alert("success")
						this.reload();
					})
					.catch((error) => {
						// handle error
						console.log(error);
					});
			},
			reload() {
				axios
					.get('/api/admin/discount/show')
					.then((response) => {
						// handle success
						console.log('response', response);
						this.discounts = response.data;
					})
					.catch((error) => {
						// handle error
						console.log(error);
					});
			},
		},
		mounted() {
			axios
				.get('/api/admin/discount/show')
				.then((response) => {
					// handle success
					console.log('response', response);
					this.discounts = response.data;
				})
				.catch((error) => {
					// handle error
					console.log(error);
				});
		},
	};
</script>

<style scoped>
	.bi-trash {
		color: #ea5455;
		cursor: pointer;
	}
	.bi-pencil-square {
		color: #2ac871;
		cursor: pointer;
	}
</style>
