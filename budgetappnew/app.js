
var budgetApp = (function(){
  
  var Expense = function(id, desc, value){
    this.id = id;
    this.desc = desc;
    this.value = value;
  }
  
    var Income = function(id, desc, value){
    this.id = id;
    this.desc = desc;
    this.value = value;
  }
  
 var data = {
   allItems:{
     inc: [],
     exp: []
   },
   totals: {
     inc: 0,
     exp: 0
   }
 }
 
 
return {
  addItem: function(type, des, val){
    var newItem,id;
     if(data.allItems[type].length > 0){
        id = data.allItems[type][data.allItems[type].length - 1].id + 1;
      }else {
        id = 0;
      }
     if(type == 'exp') {
        newItem = new Expense(id,des,val);
     }else if (type =='inc') {
       newItem = new Income(id,des,val);
     }
     
     data.allItems[type].push(newItem);
     return newItem;
   },
   testing: function(){
    console.log(data);
   }
 }
})();



// UI 

var UIController = (function(){
  var DOMvar = {
    addtype: ".add_type",
    description: "#addesc",
    value: "#addvalue",
	valueTotal: ".budgetresult",
    addbtn: ".add__btn",
    incomeContainer: '.income_list',
    expensesContainer: '.expenses_list'
  }

  //set up format number 
  var formatNumber = function(nr,type){
    var numSplit, int, dec, type;

    nr = Math.abs(nr);//returns the absolute value of a number
    nr = nr.toFixed(3);//fixed-point notation
    numSplit = nr.split(',');//separating the string into substrings

    int = numSplit[0];

    if(int.length > 3){
      int = int.substr(0, int.length - 3 ) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    return(type === 'exp' ? '-' : '+') + ' ' + int + ',' + dec;
	  
	document.querySelector(DOMvar.budgetTotal).textContent = this.formatNumber(obj.valueTotal, type);
	if( obj.percentage > 0 ) {
		document.querySelector(DOMvar.percentage).textContent = obj.percentage + '%';
	} else {
		document.querySelector(DOMvar.percentage).textContent = '';
		};

  };

  return {
    getInput: function(){
      return{
        type: document.querySelector(DOMvar.addtype).value,
        description: document.querySelector(DOMvar.description).value,
        value: document.querySelector(DOMvar.value).value
      }
    },
    getMonth: function(){
      var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

      var d = new Date();
      var n = d.getMonth();

      return months[n];
		console.log(months);
    },
    addListItem: function(obj, type){

      var html, newHTML, element;

      if(type === "inc"){
        element = DOMvar.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if( type === 'exp'){
        element = DOMvar.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      newHTML = html.replace ('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.desc);
      newHTML = newHTML.replace('%value%', formatNumber(obj.value, type));

      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    },
	  
    clearfields: function(){
      var fields, fieldsArr;

      fields = document.querySelectorAll(DOMvar.description + ',' + DOMvar.value);

      fieldsArr = Array.from();//returns a shallow copy of a portion of an array into a new array object. the original array will not be modified

      fieldsArr.forEch(function(...array){
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    getDOMstrings: function() {
      return DOMvar;
    }
  }
})();

//Main

var mainController = (function(budgetController, UIControl){
	
	var controlAddItem = function() {
		var input , newItem;
		
		var input = UIControl.getInput();
		
		newItem = budgetApp.addItem(input.type, input.description, input.value);
		
		UIControl.addListItem(newItem, input.type);
		UIControl.clearfields();
	};
	var DOMvar = UIControl.getDOMstrings();
	
	document.querySelector(DOMvar.addbtn).addEventListener('click', controlAddItem);
	document.querySelector('.budget__title--month').textContent = UIControl.getMonth();
	
})(budgetApp, UIController);

document.addEventListener('keypress',function(event){
	if(event.keyCode === 13 && event.which === 13){
		controlAddItem();
	}
});
