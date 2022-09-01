/* 
	Utility types allows to us transform types/interfaces 
	https://www.typescriptlang.org/docs/handbook/utility-types.html
*/

/* Omit */ 
//constructs a type by removing properties from a type/interface

interface Product {
	name: string;
	price: number;
	id: number;
	quantity: number;
}

//

interface CreateProduct extends Omit<Product, 'id' | 'quantity'> {
	date: string;
}

//OR

type CreateProductType = Omit<Product, 'id' | 'quantity'> & {
	date: string;
};

//
export const newProductInfo: CreateProduct = {
	name: 'shoes',
	price: 200,
	date: '2021',
}

export const newProductInfoType: CreateProductType = {
	name: 'shoes',
	price: 200,
	date: '2021',
}


/* Pick */
//constructs a type by picking properties
interface ProductBaseData extends Pick<Product, 'name' | 'price'> {
 condition: string
}

type ProductBaseDataType = Pick<Product, 'name' | 'price'> & {
	condition: string
 }

export const productDetail: ProductBaseData = {
	name: 'ring',
	price: 20032,
	condition: 'NEW'
}

export const productDetailType: ProductBaseDataType = {
	name: 'ring',
	price: 20032,
	condition: 'NEW'
}

/* Partial */
//Set all properties of a type to optional --> property?: string
type ShoeType = {
	name: string;
	size: string;
}
interface Shoe {
	name: string;
	size: string;
}

type ShoePartial = Partial<ShoeType>;

export const shoe1: Partial<Shoe> = {};
export const shoe: ShoePartial = {}

/* Required  */
//All properties to required
interface Foot {
	color?: string
	size?: string;
}

export const foot: Foot = {}
export const foot1: Required<Foot> = {
	color: 'white',
	size: '2ft'
} // now properties are mandatory.

/* Readonly */
//Make all properties readonly that is, they cant be reassigned
interface Computer {
	brand: string;
	ram: string;
}

const newComputer: Readonly<Computer> = {
	brand: 'Mac',
	ram: '16gb',
}
//newComputer.brand = 'windows' // Error: brand cant be reassigned because of it is readonly property
console.log({
	newComputer
})

/* Parameters */
 //constructs a tuple type from the types used in a fn.

 type FnTYpe = Parameters<(val1:  number, val2: Array<string>) => string>;

 export const fnType: FnTYpe = [1, ['2', '3']];

 /* ReturnType */
 //constructs a type based on fn return type

 type TypeReturned = ReturnType<() => string[]>;
 export const arrayTyped: TypeReturned = ['1', '2'];