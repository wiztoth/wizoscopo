export const state = () => ({
    counter: 0,
    //cnt: 0
    step: 0,
    reveal : 0,
    sign: 'blank',
    sign: 'blank',
    display_sign: 'null',
    error: 0,
  })

 
  export const mutations = {
    addSign(state, sign) {
      state.sign.push(sign)
    },
    increment_first(state) {
      state.counter = state.counter + 1 
      //state.cnt = state.cnt + 1
    },
    
     increment_second(state) {
      state.counter = state.counter + 2
      //state.cnt = state.cnt + 1
    }, 
    increment_third(state) {
 
      state.counter = state.counter + 4
      //state.cnt = state.cnt + 1
    },
    increment_fourth(state) {
      
      state.counter = state.counter + 8
      //state.cnt = state.cnt + 1
    },
    reset(state){
      state.error = 0
      state.counter = 0
      state.step = 0
      //state.cnt = 0
    },
    resetClick(state){
      //state.cnt = 0
    },
    incrementZero(state){
      state.counter = state.counter + 0
    },
    increment_step(state){
      state.step = state.step + 1
    },
    setSign(state){
      if(state.counter == 0){
        state.display_sign = 'Never answered at questions, try again.'
        state.error = 1
      }else{
        if(state.counter == 1){
          state.sign = 'aries'
          state.display_sign = '♈ Aries'
        }else{
          if(state.counter == 2){
            state.sign = 'taurus'
            state.display_sign = '♉ Taurus'
          }else{
            if(state.counter == 3){
              state.sign = 'gemini'
              state.display_sign = '♊ Gemini'
            }else{
              if(state.counter == 4){
                state.sign = 'cancerian'
                state.display_sign = '♋ Cancerian'
              }else{
                if(state.counter == 5){
                  state.sign = 'leo'
                  state.display_sign = '♌ Leo'
                }else{
                  if(state.counter == 6){
                    state.sign = 'virgo'
                    state.display_sign = '♍ Virgo'
                  }else{
                    if(state.counter == 7){
                      state.sign = 'libra'
                      state.display_sign = '♎ Libra'
                    }else{
                      if(state.counter == 8){
                        state.sign = 'aquarius'
                        state.display_sign = '♒ Aquarius'
                      }else{
                        if(state.counter == 9){
                          state.sign = 'sagittarius'
                          state.display_sign = '♐ Sagittarius'
                        }else{
                          if(state.counter == 10){
                            state.sign = 'pisces'
                            state.display_sign = '♓ Pisces'
                          }else{
                            if(state.counter == 11){
                              state.sign = 'capricorn'
                              state.display_sign = '♑ Capricorn '
                            }else{
                              if(state.counter == 12){
                                state.sign = 'scorpio'
                                state.display_sign = '♏ Scorpio'
                              }else{
                                if(state.counter == 15){
                                  state.display_sign = ' You answered with "Yes", not possible, please try again.'
                                  state.error = 1
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      }
     


  }

