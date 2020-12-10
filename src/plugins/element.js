import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Menu, MenuItem, Submenu, Row, Col, DatePicker, Loading } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Loading)
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading
