export default class Item {
  constructor(id, label, description, link) {
    this._id = id;
    this.id = this._id;
    this.label = label;
    this.description = description;
    this.link = link;
  }

  getSummary() {
    var description = this.description;
    if (description.length > 30) {
      description = description.substr(0, 30);
    }
    var output = "<i>" + description + "</i>";
    return output;
  }

  get labelId() {
    return "[" + this.id + "] " + this.label.toUpperCase();
  }

  get id() {
    return this._id;
  }
  set id(value) {
    if (typeof value != "number") {
      throw new TypeError("Expect a number. Received a " + typeof value);
    }
    this._id = value;
  }
}

export const obj = {name:'aqib'};

//-----------------------------------------//

// var Item = function (id, label, description, link) {
//   this._id = id;
//   this.id = this._id;
//   this.label = label;
//   this.description = description;
//   this.link = link;
// };

// module.exports = Item;

// Item.prototype.getSummary = function () {
//   var description = this.description;
//   if (description.length > 30) {
//     description = description.substr(0, 30);
//   }
//   var output = "<i>" + description + "</i>";
//   return output;
// };

// Object.defineProperties(Item.prototype, {
//   labelId: {
//     enumerable: false,
//     get: function () {
//       return "[" + this.id + "] " + this.label.toUpperCase();
//     }
//   },
//   id: {
//     enumerable: false,
//     get: function () {
//       return this._id;
//     },
//     set: function (value) {
//       if (typeof value != "number") {
//         throw new TypeError("Expect a number. Received a " + typeof value);
//       }
//       this._id = value;
//     }
//   }
// });
