//Vue3 - Filters are deprecated
export default {
    filters:{
        TL(value){
            return value+"TL"
          },
          USD(value){
            return "$"+value
          },
          EURO(value){
            return "€"+value
          },
          toUpper(value){
            return value.toUpperCase()
          },
          
    }
}