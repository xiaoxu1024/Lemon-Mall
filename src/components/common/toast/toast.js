import ToastPlugin from './Toast.vue'
const Toast={}

//注册Toast
Toast.install = function (Vue){
  //创建一个构造器
  const ToastConstructor = Vue.extend(ToastPlugin)
  //生成一个子类实例
  const instance = new ToastConstructor()
  //将这个实例挂载到创建的div上
  instance.$mount(document.createElement('div'))
  //将div加入全局挂载点内部
  document.body.appendChild(instance.$el)

  //通过原型注册一个方法
  Vue.prototype.$toast=instance
}

export default Toast