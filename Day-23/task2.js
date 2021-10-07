class DB {
    constructor(){
        this.map = new Map();
    }

    create(person){
        try{
            if(!(person instanceof Object)){
                throw new TypeError('Must be an Object!');
            }else if(Object.keys(person).length === 0){
                throw new TypeError('can\'t be an Empty Object!');
            }else if(typeof(person.name)===undefined) throw new Error('name is required!');
            else if(typeof(person.name)!=='string') throw new Error('name must be a string!')
            else if(typeof(person.age)===undefined) throw new Error('age is required!');
            else if(typeof(person.age)!=='number') throw new Error('age must be a number!');
            else if(typeof(person.country)===undefined) throw new Error('country is required!');
            else if(typeof(person.country)!=='string') throw new Error('country must be a string!');
            else if(typeof(person.salary)===undefined) throw new Error('salary is required!');
            else if(typeof(person.salary)!== 'number') throw new Error('salary is required!');
            else{
                const id = `ID_${Math.random().toString(36).substring(2,8)}`
                this.map.set(id, person);
                person.id = id;
                return id;
            }
        }catch(error){
            console.error(error.message)
        }
    }
    read(id){
        try{
            if(id === undefined){
                throw new Error('parameter can\'t be empty!');
            }else if(typeof id !== 'string'){
                throw new TypeError('parameter must be a string!');
            }else{
                if(this.map.has(id)){
                    return id, this.map.get(id, person)
                }else{
                    return null
                }
            }
        }catch(error){
            console.error(error.message);
        }
    }
    readAll(){
        try{
            if(arguments.length >= 1){
                throw new TypeError('this method doesn\'t take any parameters!');
            }else{
                this.userArray = [];
                this.map.forEach((value) =>{
                    this.userArray.push(value)
                })
                console.log(this.userArray)
            }
        }catch(error){
            console.error(error.message);
        }
    }

    update(id, obj){
        try{
            if(arguments.length < 2){
                throw new Error('must be 2 parameters!')
            }else if(!(this.map.has(id))){
                throw new Error('Non-existing ID is passed!');
            }else if (typeof id !== 'string') {
            throw new TypeError('There is no string parameter');
            }else if(typeof obj !== 'object'){
                throw new TypeError('Second param Must me an Object!');
            }else{
                this.map.forEach((value, key) =>{
                    if(key == id){
                        Object.assign(value, obj)
                        console.log(key)
                    }
                })
            }   
        }catch(error){
            console.error(error.message)
        }
    }
    delete(id){
        try{
            if(typeof id !== 'string'){
                throw new Error('invalid ID!')
            }else if(!(this.map.has(id))){
                throw new Error('Non-existent ID!')
            }else{
            this.map.delete(id)
            console.log(true)
            }
        }catch(error){
        console.error(error.message)
        }
    }
    find(args) {
        this.NewArr = []
        if (typeof args !== 'object') throw new TypeError("query is not valid");
        else if (args == '') throw new TypeError("query is not valid");
        this.map.forEach((value) => {
            try {
                for (var i in args) {
                    if (value[i] == args[i]) {
                        continue
                    } else if (i == 'age') {
                        for (var j in args[i]) {
                            if (j == 'min') {
                                if (value[i] < args[i][j]) {
                                    throw new Error('Error in ForEach1')
                                }
                            } else if (j == 'max') {
                                if (args[i][j] < value[i]) {
                                    throw new Error('Error in ForEach2')
                                }
                            }
                        }
                    } else if (i == 'salary') {
                        for (var k in args[i]) {
                            if (k == 'min') {
                                if (value[i] < args[i][k]) {
                                    throw new Error('Error in ForEach3')
                                }
                            } else if (k == 'max') {
                                if (args[i][k] < value[i]) {
                                    throw new Error('Error in ForEach4')
                                }
                            }
                        }
                    }
                }
                this.NewArr.push(value)
            } catch (err) {}
        })
        return this.NewArr
    }
}


const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const person2 = {
    name: 'beqa',
    age: 20, 
    country: 'ge', 
    salary: 500,
};


const id = db.create(person);
const id2 = db.create(person2);

// const customer = db.read();
// console.log(customer)

// const customers = db.readAll(); // array of users

// db.update(id, { age: 22 }); // id

// db.delete(id); // true

//#######################################################################################
//create new object 
const person3 = {
    name: 'Angelina',
    age: 22, 
    country: 'ua', 
    salary: 500,
};


const id3 = db.create(person3);

const query = {
    name: 'Angelina',
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query); // array of users
console.log(db);