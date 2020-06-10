import {ADD_FEATURE, REMOVE_FEATURE} from '../actions/actions'

export const initialState = {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
}

export const reducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ADD_FEATURE:
            const increasedPrice = state.additionalPrice + action.payload.price
            return {
                ...state,
                additionalFeatures: [...state.additionalFeatures.filter(feature=>{
                    return feature.id !== action.payload.id
                })],
                car: {...state.car,
                        features: [...state.car.features, action.payload]
                },
                additionalPrice: increasedPrice
            }
        case REMOVE_FEATURE:
            const lowerPrice = state.additionalPrice - action.payload.price
            return {
              ...state,
              additionalFeatures: [...state.additionalFeatures, action.payload],
              car: {...state.car,
                      features: [...state.car.features.filter(feature=>{
                        return feature.id !== action.payload.id
                      })]
              },
              additionalPrice: lowerPrice
            }
        default:
            return state;
    }
};