<template>
	<!-- --------------لیست کاربران------------ -->
	<div class="col-12 col-md-9">
		<div class="">
            <div class="table-responsive">
                <h2 class="text-center">در حال پردازش</h2>
                <table class="table table-light table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">نام و نام خوانواگی</th>
                            <th scope="col">استان و شهر</th>
                            <th scope="col">تعداد سفارشات</th>
                            <th scope="col">سریال</th>
                            <th scope="col">هزینه حمل و نقل</th>
                            <th scope="col">زمان</th>
                            <th scope="col">هزینه کل</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in orders" :key="index">
                            <th>{{index}}</th>
                            <td>{{item.address.first_name}} {{item.address.last_name}}</td>
                            <td>{{item.address.country.name}} {{item.address.city.name}}</td>
                            <td>{{item.order_items.length}}</td>
                            <td>{{item.serial}}</td>
                            <td>{{item.shipping_cost}}</td>
                            <td>{{item.time}}</td>
                            <td>{{item.total_price}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- --------------لیست کاربران------------ -->
            <!-- ---------------شماره صفحه---------------- -->
            <div class="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">قبلی</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">بعدی</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
	</div>
	<!-- ---------------شماره صفحه---------------- -->
</template>
<script>
   import axios from '../../../node_modules/axios/dist/axios';
export default {
    name:'canceled',
    data(){
        return{
            orders:{}
        }
    },
    mounted(){
        axios.get('/api/admin/order/show/processing')
					.then((response) => {
						// handle success
                        this.orders= response.data;
					})
					.catch((error) => {
						// handle error
						console.log(error);
					});
    }
}
</script>
