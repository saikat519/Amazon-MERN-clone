export const initialState = {
    cart: [],
    carousel:[],
    products:[],
    user: null,
    city:"",
    name:"",
    mobileNumber:null,
    pinCode:null,
    address:null,
    landMark:null
  };

  // Selector
export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => item.price + amount, 0);

  export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
        case "SET_ADDRESS":
        return {
          ...state,
          city:action.item.city,
          name:action.item.name,
          mobileNumber:action.item.mobileNumber,
          pinCode:action.item.pinCode,
          address:action.item.address,
          landMark:action.item.landMark
        };
      case "REMOVE_FROM_CART":
        const index = state.cart.findIndex(
          (item) => item.id === action.id              //this func returns -1 if condition didn't matched
        );
        let newCart = [...state.cart];

        if(index>=0){
          newCart.splice(index,1);                // this func removes 1 element which is present on index
        }else{
          console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);
        }
        
        return {
          ...state,
          cart:newCart
        }

        case 'EMPTY_CART':
          return {
            ...state,
            cart: []
          }

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }

      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.products
        }

        case "SET_CAROUSEL":
          return {
            ...state,
            carousel: action.carousel
          }
        
      default:
            return state;
    }
}

