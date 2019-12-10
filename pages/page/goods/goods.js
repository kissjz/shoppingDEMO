Page({
  data: {
    newestGoods: getApp().globalData.newestGoods,
    _goods: {
      price:'',
      goods:'',
      img:''
    },
    index:0,
    btnValue:1,
    num:1,
    currentTab: 0,
    cartItemsNum:0
  },
  onLoad: function(options) {
    this.setData({
      _goods: {
        goods: options.goods,
        price: options.price,
        img: options.img
      },
      index:options.index
     
    })
  },
  addOne(){
    let _num = this.data.num +1 ;
    this.setData({
       num:_num
    })
  },
  swichNav:function(e){
    var that = this;
    if(this.data.currentTab == e.target.dataset.current){
      return false;
    } else{
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  addCart(){
    var tmpNum = this.data.cartItemsNum + this.data.num  ;
    this.setData({cartItemsNum:tmpNum})
    getApp().pushCart(this.data.index,this.data.num);
  }
})