//alert('1');
//variables
//also try to use camelCase
// var firstName = 'Naruse' // this construction is obsolote and don't used 
// const lastName = 'Kuga';// try to use it where it's possible
// let myAge = 16;
//console.log('age = ' + myAge); //in background occuring: age.toString() 
//console.log() is only in web
//let lastName = prompt('what is your lastName') //promt usually uses in backend
//alert(lastName)
//let x 
//console.log(typeof x)

//let isReady = 0

//тернарное выражение 
//isReady ? console.log('все готово') : console.log('все не готово')
//function calculateAge (birthYear){
//	return 2021 - birthYear
//}

//console.log(calculateAge(2005))
// let arr = [2,4,6,8,10]
// //let arr = new Array(1,2,3)
// console.log(arr)
// console.log(arr.length)
// arr.push(4)
//for (let i=0;i<arr.length;i++){
	//console.log(i)
//}

// for(let n of arr){
// 	console.log(n)
// }


//it's call object but actually it's the fucked dictionary 
// const person = {
// //don't forget paste ',' after every line 
// 	name: 'Narashi',
// 	lastName: 'Kuga',
// 	age: 16,
// 	greet: function(){//now i finally inderstand why it's call object
// 		console.log('hello im Kuga')
// 	}
// }

// console.log(person)
// console.log(person['name'])
// person.greet()
// person['islearning'] = true
// console.log(person)

// const n = 2/0 //Infinity
// const n2 = 2 / undefined // NaN

// console.log('40' + 2)
// console.log(parseInt('40') + 2)// use this ways
// console.log(+'40' + 2)
// console.log(parseFloat('40.42')+2)

// console.log(0.4+0.2)//wtf is this
// console.log(parseFloat((0.4+0.2).toFixed(1)))
// console.log((4+2)/10)

//bigInt
//you should add 'n' in the end of num to make BigInt
// console.log(typeof(900719925474099148276947n))
// console.log(90071992547409915479.23478n) //error
// console.log(typeof(1n))
// console.log(10n + BigInt(4))
// console.log(5n/2n)// =2n
// console.log(25**0.5)


// absolute value
//console.log(math.abs(-43))


// function getRandomBetween(min,max){
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }


// console.log(getRandomBetween(0,10))


//it's like format in python but you're sould should wrapp to '`' instead f''instead 
// const output = `hello my name is ${firstName}, i'm ${myAge}` 
// console.log(output)

//you can also use it instead ''' '''
// const output1 = `
// a lot of line text
// `

// function logPerson(s,name,age){
// 	return `${s[0]} ${name} ${s[1]} ${age}`
// }

// const output = logPerson`имя ${firstName}, фамилия ${lastName}`

// console.log(output)


//functions 

//function declaration //you can define it anywhere and use it anywhere
// function greet(name){
// 	console.log(`hello ${name}`)
// }
//function expression //you must define it before using
// const greet2 = function greet2(name){
// 	console.log(`hello ${name}`)
// }

// console.log(greet('Narashi'))
// console.log(greet2('Narashi'))

//anonym functions 
// let counter = 0
// const interval = setInterval(
// 	function(){
// 		if (counter===5){
// 			clearInterval(interval)
// 		}else{
// 			console.log(++counter)
// 		}
// 	},100
// 	)

//arrow functions
//it's like lambda functions 
// const arrow = (name,age) =>{
// 	console.log(`name = ${name}, age = ${16}`)
// }
// const arrow2 = (a=null,b=null)=>a+b
// console.log(arrow2())

// const sumAll = (...all) => { //it's like *args 
// 	let sum = 0
// 	for ( let n of all){sum+=n}
// 	return sum
// }
// console.log(sumAll(1,2,3,4,5,6,7,8,9,10))

//Замыкания
// function createMember(name){
// 	return function(lastName){
// 		console.log(`${name},${lastName}`)
// 	}
// }

// const logWithLastName = createMember("Narashi")
// console.log(logWithLastName('Kuga'))

// let lst = new Array
// lst = [1,1,2,3,5,7,13,21]
// lst.push(55)// it's like append
// lst.unshift(0)//adds element in the start
// console.log(lst)

// const people = [
// {name:'elena',budget:2000},
// {name:'anna',budget:4000},
// {name:'viktorya',budget:3500}
// ]
// const index = people.findIndex(function(person){return person.budget===3500})
// console.log(people[index])

// let letters = ['a','b','c','d','e','f','g','h']
// let lst = [1,1,2,3,5,7,13,21]


// const pow2 = num => num**2
// const sqrt = num => num**0.5

// lstPow2 = lst.map(pow2).map(sqrt)//map function is little bit another
// console.log(lstPow2)//original array hasn't changed
// lstFilter = lst.filter(num => num>5)
// console.log(lstFilter)

// const people = [
// {name:'elena',budget:2000},
// {name:'anna',budget:4000},
// {name:'viktorya',budget:3500}
// ]

// const allBudget = people.filter( person => person.budget > 2000 ).reduce((accam,person)=>{accam+=person.budget;return accam},0)
// console.log(allBudget)


// let person = {
// 	name: 'Narashi',//don't forget paste ',' after every line 
// 	lastName: 'Kuga',
// 	age: 16,
// 	'complex key': 'complex value',
// 	['key_'+ 1+2]: 'computed key',
// 	greet(){console.log('hello im Kuga')},//now i finally inderstand why it's call object

// 	info(){console.log('info about ' , this.name) }/*instead person.name it's like self */
// }
//  console.log(person.name)
//  console.log(person.age++)
//  console.log(person['complex key'])
//  console.log(person['key_3'])
// delete person['key_3']
// console.log(person['key_3'])

// const {name,age:personAge=0you can also remap(переназначить) or change default variable,lastName} = person//destructurization
// console.log(name,personAge,lastName)

// for (let key in person){
// 	if (person.hasOwnProperty(key))/*protection*/{
// 		console.log('key: ',key)
// 		console.log('value: ', person[key])
// 	}
// }

//better use this instead 
// const keys = Object.keys(person)
// console.log(keys)

// keys.forEach((key)=>{
// 	console.log('key: ',key)
// 	console.log('value: ', person[key])
// })


//person.info()


// const logger = {
// 	keys(){
// 		console.log('object keys: ', Object.keys(this))
// 	},

// 	keysAndValues(){
// 		Object.keys(this).forEach(key=>{console.log(`"${key}": ${this[key]}`)})
// 	},

// 	// keysAndValues(){
// 	// 	// const self = this
// 	// 	Object.keys(this).forEach(
// 	// 		function key (){
// 	// 			console.log(`"${key}": ${this[key]}`)
// 	// 		}.bind(this)
// 	// 	)
// 	// }

// 	withParams(top=false, between=false, bottom=false){
// 		if(top){console.log('-----------start----------')}
// 		Object.keys(this).forEach(
// 			key=>{
// 				console.log(`"${key}": ${this[key]}`)

// 			if(between /*&& index !== array.length - 1*/){console.log('----------------------')}
// 			}
// 		)
// 		if(bottom){console.log('-----------end----------')}
// 	}
// }

//logger.withParams.call(person,true,true,true)
// logger.withParams.apply(person,[true,true,true]s)
// const bound = logger.keys.bind(person)
// bound()

// logger.keys.call(person)

// logger.keysAndValues.call(logger)
//logger.keysAndValues.call(person)






// event loop

// const timeout = setTimeout(()=>{console.log('after timeout')},500 /*miliseconds*/)
// clearTimeout(timeout)
// const interval = setInterval(()=>{console.log('after interval')},1000 /*miliseconds*/)
//clearInterval(timeout)

// const delay=(callBack,wait=1000)=>{
// 	setTimeout(callBack,wait)
// }

// const delay=(wait=1000)=>{
// 	const promise = new Promise(
// 		(resolve,reject)=>{
// 			setTimeout(()=>{
// 				reject('something went wrong , please try again')
// 				// resolve()
// 			},wait)
// 		}
// 	)
// return promise
// }

// delay(()=>{console.log('after 2 seconds')},2000)
// delay(2500)
// 	.then(()=>{console.log('After 2 seconds')})
// 	.catch(err => console.error('error: ',err))
// 	.finally(()=>{console.log('finally')})

//connst getData = () => new Promise(resolve => resolve([1,1,2,3,5,8,13]))

// getData().then(data => console.log(data))

//async function asyncExample(){
//	try{
//		await delay(3000)
//		const data = await getData()
//		console.log(data)
//	}catch(e){
//		console.log(e)
//	}finally{
//		console.log('finally')
//	}
//}

//asyncExample()




// const heading = document.getElementById('hello')
// // const heading2 = document.getElementsByTagName('h2')[0]   // old and slow
// // const heading2 = document.getElementsByClassName('h2-class')[0] //old and slow
// // const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')
// const heading3 = heading2.nextElementSibling

// // const h2List = document.querySelectorAll('h2')
// // const heading3 = h2List[h2List.lenght - 1]

// setTimeout(()=>{
// 	addStylesTo(heading, 'JavaScript')
// },1500)

// setTimeout(()=>{
// 	addStylesTo(heading2,'Практикуйся','blue')
// },3000)


// const link = heading3.querySelector('a')

// link.addEventListener('click',(event)=>{
// 	event.preventDefault()
// 	console.log('click on link', event.target.getAttribute('href'))

// 	const url = event.target.getAttribute('href')

// 	window.location = url
// })


// setTimeout(()=>{
// 	addStylesTo(link /*heading3.children[0]*/,'И все получится!','yellow','2rem')
// },4500)



// // console.log(heading3)

// // console.log(heading)
// // console.dir(heading.textContent)



// function addStylesTo(node, text, color='red', fontSize){
// 	node.textContent = text
// 	node.style.color = color
// 	node.style.textAlign = 'center'
// 	node.style.backgroundColor = 'black'
// 	node.style.padding = '2rem'
// 	node.style.display = 'block'
// 	node.style.width = '100'
// 	if (fontSize){
// 		node.style.fontSize = fontSize
// 	}
// }


// heading.onclick = () => {
// 	 if (heading.style.color === "red"){
// 	 	heading.style.color = "white"
// 	 	heading.style.backgroundColor = 'grey'
// 	 }else{
// 	 	heading.style.color = "red"
// 	 	heading.style.backgroundColor = 'black'
// 	 }
// }


// heading2.addEventListener('dblclick',()=>{
// 	if (heading2.style.color === "red"){
// 	 	heading2.style.color = "white"
// 	 	heading2.style.backgroundColor = 'grey'
// 	 }else{
// 	 	heading2.style.color = "red"
// 	 	heading2.style.backgroundColor = 'black'
// 	 }
// })