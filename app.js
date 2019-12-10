//app.js
App({
  onLaunch: function() {
    console.log("App Launch")
  },

  globalData: {
    newestGoods: [{
      'img': '/images/s6.png',
      'price': '￥0.3',
      'goods': '素米375g'
    }, {
      'img': '/images/s5.png',
      'price': '￥0.2',
      'goods': '芹菜 半斤'
    }, {
      'img': '/images/s4.png',
      'price': '￥0.1',
      'goods': '瓜子 100g'
    }, {
      'img': '/images/s6.png',
      'price': '￥0.3',
      'goods': '素米375g'
    }, {
      'img': '/images/s5.png',
      'price': '￥0.2',
      'goods': '芹菜 半斤'
    }, {
      'img': '/images/s4.png',
      'price': '￥0.1',
      'goods': '瓜子 100g'
    }],
    cart: []
  },
  tmpIndex: 0,


  has(name) {
    let length = this.globalData.cart.length;
    if (length == 0) {
      return false;
    } else {
      for (var i = 0; i != length; i++) {
        if (this.globalData.cart[i].name == name) {
          this.tmpIndex = i;
          return true;
        } else {;
        }
      }
      return false;
    }
  },


  pushCart(index, n) {
    var index = parseInt(index);
    var n = parseInt(n);
    var img = this.globalData.newestGoods[index].img;
    var name = this.globalData.newestGoods[index].goods;
    var price = this.globalData.newestGoods[index].price;
    if (getApp().has(name)) {
      this.globalData.cart[this.tmpIndex].n += n;
      //   console.log(this.globalData.cart.length);
      //   console.log(this.globalData.cart[0].n);
    } else {
      this.globalData.cart.push({
        name: name,
        n: n,
        img: img,
        selected: true,
        price: price
      });
      // console.log(this.globalData.cart.length);
      // console.log(this.globalData.cart[0].img);
    }

  },

  addOne(index) {
    // console.log(this.globalData.cart[index].n);
    this.globalData.cart[index].n += 1;
    // console.log(this.globalData.cart[index].n);
  },
  subOne(index) {
    if (this.globalData.cart[index].n > 1) {
      // console.log(this.globalData.cart[index].n);
      this.globalData.cart[index].n -= 1;
      // console.log(this.globalData.cart[index].n);
    }
  },
  deleteOne(index) {
    this.globalData.cart.splice(index, 1);
  },
  selectOne(index) {
    var tmp = this.globalData.cart[index].selected;
    if (tmp == true) {
      this.globalData.cart[index].selected = false;
      //   console.log(this.globalData.cart[index].selected);
    } else {
      this.globalData.cart[index].selected = true;

    }
  },

  chooseAll(bool) {
    for (var i = 0; i != this.globalData.cart.length; i++) {
      this.globalData.cart[i].selected = bool;
      // console.log(this.globalData.cart[i].selected);
    }
  },
  calcPrice() {
    var sum = 0;
    for (var i = 0; i != this.globalData.cart.length; i++) {
      if (this.globalData.cart[i].selected == true) {
        var n = parseFloat(this.globalData.cart[i].n);
        var price = parseFloat(this.globalData.cart[i].price.slice(1));
        // console.log(n + "?" + price);
        sum += n * price;
      }

    }
    sum = Math.round(sum * 10) / 10;
    return sum;
  }

})