/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
Route.resource('brands', 'BrandsController');
Route.resource('categories', 'CategoriesController');
Route.resource('orders', 'OrdersController');
Route.resource('orderdetails', 'OrderdetailsController');
Route.resource('products', 'ProductsController');
Route.resource('shippers', 'ShippersController');
Route.resource('sizes', 'SizesController');
Route.resource('suppliers', 'SuppliersController');
Route.resource('users', 'UsersController');
Route.resource('tokens', 'TokensController');



Route.get('/', async () => {
  return
})
