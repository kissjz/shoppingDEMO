Page({
  data:{
    buyItems:[],
    isAll:true,
    money:0,
    
  },
  render(){
    var _cart = getApp().globalData.cart;
    this.setData({
      buyItems: _cart
    })
  },
  onLoad:function(){
  },
  onShow:function (){
    var _cart = getApp().globalData.cart;
    this.setData({
      buyItems: _cart
    });
    this.showPrice();
  },
  _addOne:function(e){
    var i = e.currentTarget.dataset.index;
   // console.log(i);
    getApp().addOne(i);
   //可能不是个好方法  
    this.render();
    this.showPrice();
  },
  _subOne: function (e) {
    var i = e.currentTarget.dataset.index;
    // console.log(i);
    getApp().subOne(i);
    //可能不是个好方法  
    this.render();
    this.showPrice();
  },
  deleteItem(e){
    var i = e.currentTarget.dataset.index;
    getApp().deleteOne(i);
    this.render();
    this.showPrice();
  },
  isSelected(e){
    var i = e.currentTarget.dataset.index;
  //  console.log("click");
    getApp().selectOne(i);
    this.render();
    this.showPrice();
  },


  _chooseAll(){
    if(this.data.isAll==true){
      this.setData({isAll:false});
      getApp().chooseAll(false);
      this.render();
    } else {
      this.setData({ isAll: true});
      getApp().chooseAll(true);
      this.render();
    }
    this.showPrice();
  },
  showPrice(){
    var p=getApp().calcPrice();
    console.log(p);
    this.setData({money:p});
  }
})