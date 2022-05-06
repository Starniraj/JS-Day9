//objects : Objects are collection of properties of methods.
//Objects have keys which are converted to string types , The property donot follow the insertion order.

//Create an object.

let mobile = {
    brand: "Samsung",
    weight: 200,
    isWorking : true,
    11 : "Android Version",
    displayInfo : function(){
        console.log(`The brand of my mobile is ${mobile.brand} and the weight is ${mobile.weight} which is in the working conditiion${mobile.isWorking},also 
        with a android version of ${mobile["11"]}`)
    }

}

 console.log(mobile);
 console.log(mobile.displayInfo());

 delete mobile.isWorking;
 console.log(mobile.hasOwnProperty("brand"));

 mobile.camera = "32px";

 //---------------------------------------------------------------

 let mobile1 = {};// empty object

 mobile1.brand = "OnePlus";
 mobile.weight = 190;
 mobile1.isWoorking = false;

 console.log(mobile1);

 //---------------------------------------------------------------
 
 function Mobile(brand,weight,camera){
     this.brand = brand;
     this.weight = weight;
     this.camera = camera;

 }

 let apple = new Mobile("Apple",190,"13px");
 let Vivo = new Mobile("Vivo",210,"108px");

 console.log(apple);
 console.log(Vivo);

 console.log(Object.keys(apple));
 console.log(Object.values(apple));

 for(const [key,value] of Object.entries(apple)){
     console.log(key,value)
 }

 //this keyword

 //In an Object this refers to the Object
 //When we use this keyword alone, then it points to Global Object
 //In a function, this refers to global to parent Object,

 value = 23;
 console.log(value);
 console.log(this)

 //----------------------------------------------------------

let arr1 = [1,2,3,4,5];
let arr2 = [7,8,9,10,11];

console.log(arr1.concat(arr2));
let arr3 = [...arr1,...arr2];
console.log(arr3);

//Create two students having properties as name ,age ,class and roll no show details using object constructor.