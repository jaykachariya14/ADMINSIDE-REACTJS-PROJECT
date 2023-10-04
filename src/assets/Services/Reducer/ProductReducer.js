const initial = {
    products : [],
    product: null,
    
}
console.log(initial);

const productreducer = (state = initial,action) =>{

 switch (action.type){


        case 'ALL_PRODUCT':
            return {
                ...state,
                products: action.payload
            }

            case 'SINGLE_PRODUCT':
                return {
                    ...state,
                    product :action.payload
                }
        default :
        return state
 }
}
export default productreducer