<template>
  <div class="flex justify-center space-x-2">
    <table>
         <tr> <td>  <h4 class="flex justify-center" > Just a little more effort </h4> </td></tr><br>
       <tr>
        <td><p class="emoji">&#9808; Sagittarius </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9810; Aquarius </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9807; Scorpio </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9811; Pisces </p>  </td>
      </tr>
    
      <tr>
        <td><p class="emoji">&#9809; Capricorn </p> </td>
      </tr>
      <br />
               <p class=" pt-4 text-gray-800 border-t border-dashed"></p>

      <tr>
        <td><p class="flex justify-center">Here we are, do you see your zodiac sign here?</p></td>
        <td></td>
      </tr>
     
      
      <tr><td>

     
        </td></tr>
            <div class="flex justify-center pt-4 space-x-2">
          <nuxt-link to="/magic">
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-5
              border border-gray-400
              rounded
              shadow
            "
            @click="addValue_fourth"
          >
            Yes
          </button> </nuxt-link>
           <nuxt-link to="/magic">
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-semibold
              py-2
              px-4
              border border-gray-400
              rounded
              shadow
            "
            @click="incrementZero"
          >
            No
          </button>
          </nuxt-link>
        </div>
    </table>
  
  </div>
</template>

<script>
export default {
    transition: {
    name: 'home',
    mode: 'out-in'
  },
    layout: "wizology",
     data() {
    return {
     
      zodiac_sign: this.$store.state.choice.counter,
    }
    },
    mounted(){

      },
      methods: {
          addValue(){
              this.$store.commit('choice/increment_fourth')
             
              

             
          },
             addValue_fourth() {
      this.$store.commit("choice/increment_fourth")
      
     
    },

            resetClick(){
              this.$store.commit('choice/resetClick')
          },
           incrementZero(){
             this.$store.commit('choice/incrementZero')
             console.log(zodiac_sign)
          },
           incrementZero(){
             this.$store.commit('choice/incrementZero')
          },
         
      
          
      }
};
</script>