let ItemCreater = (function () {

  function itemNameValid(name) {
    return name.replace(" ", "").length >= 5;
  }

  function validateCategory(name) {
    return ((name.split(" ").length) === 1 && (itemNameValid(name)));
  }

  function getSku(name, catName) {
    let sku = "";
    let itemSplit = name.split(" ");
    if ((itemSplit.length === 2) && (itemSplit[0].length === 2)) {
      sku += (itemSplit[0] + itemSplit[1][0]);
    } else if (itemSplit.length === 1) {
      sku += itemSplit[0].slice(0, 3);
    } else {
      sku += name.slice(0, 3);
    }

    return (sku += catName.slice(0, 2)).toUpperCase();
  }

  function quantityValid(num) {
    return num !== undefined;
  }

  return function (name, catName, quan) {
    if (itemNameValid(name) && validateCategory(catName) && quantityValid(quan)) {
      this.skuCode = getSku(name, catName);
      this.itemName = name;
      thiscategory = catName;
      this.quantity = quan;
    } else {
      return { notValid: true };
    }
  }
})();

let ItemManager = {
  items: [],

  getItem(code) {
    return this.items.filter(function (item) {
      return item.skuCode === code;
    })[0];
  },

  create(itemName, category, quantity) {
    let item = new ItemCreater(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(code, obj) { // refactor this
    this.items.map(item => {
      if (item.skuCode === code) {
        item.quantity = obj.quantity;
      }
    });
  },

  delete(code, obj) {
    let codeIndex = this.items.findIndex(item => item.skuCode === code);
    this.items.splice(codeIndex, 1);
  },

  inStock() {
    return this.items.filter(item => {
      return item.quantity > 0;
    });
  },

  itemsInCategory(category) {
    this.items.forEach(item => {
      if (item.skuCode.slice(3, 5).toLowerCase() === category.slice(0, 2)) {
        console.log(item);
      }
    })
  }
};

let ReportManager = {

  init(obj) {
    this.items = obj;
  },

  createReporter(code) {
    return (function () {
      let item = this.items.getItem(code);
      return {
        itemInfo() {
          Object.keys(item).forEach(key => {
            console.log(key + ": " + item[key]);
          });
        }
      };
    }).bind(this)();
  },

  reportInStock() {
    console.log(this.items.inStock().map(function (item) {
      return item.itemName;
    }).join(", "));
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10



// READ ABOUT THE SOLUTION
