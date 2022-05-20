/* Utility types allows to us transform types/interfaces */

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