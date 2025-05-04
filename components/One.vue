<template>
<transition name="home">
  <div class="flex justify-center space-x-2">
   
    <table>
         <tr> <td>  <h4 class="flex justify-center"> Trying to guess it.. </h4> </td></tr><br>
    <tr>
        <td><p class="emoji">&#9800; Aries </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9802; Gemini</p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9804; Leo </p>  </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9806; Libra </p> </td>
      </tr>
        <tr>
        <td><p class="emoji">&#9808; Sagittarius </p>  </td>
      </tr>
         <tr>
        <td><p class="emoji">&#9809; Capricorn </p> </td>
      </tr><br>
     
                   <p class=" pt-4 text-gray-800 border-t border-dashed"></p>

      <tr>
        <td><p class="flex justify-center">Do you see your sign there ?</p></td>
        <td></td>
      </tr>
 

     
      
      <tr><td>

      
      </td></tr>
      

    </table>
  </div>
</transition>
</template>

<script>

export default {
      transition: {
    name: 'home',
    mode: 'out-in'
  },
      layout: "wizology",
      mounted(){

      },
      methods: {
          addValue(){
              
               this.$store.commit('choice/increment_first')
          },
             resetClick(){
              this.$store.commit('choice/resetClick')
          },
          incrementZero(){
             this.$store.commit('choice/incrementZero')
          },
               nextPage() {
      this.$store.commit("choice/increment_step");
    }
      },
      
     
        

}
</script>
