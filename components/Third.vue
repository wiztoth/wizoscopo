<template>
  <div class="flex justify-center space-x-2">
    <table>
         <tr> <td>  <h4 class="flex justify-center" > Give me a moment...</h4> </td></tr><br>
      <tr>
        <td><p class="emoji">&#9803; Cancerian </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9804; Leo </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9804; Virgo </p> </td>
      </tr>
      <tr>
        <td><p class="emoji">&#9806; Libra </p> </td>
      </tr>
          <tr>
        <td><p class="emoji">&#9807; Scorpio </p>  </td>
      </tr>
      <br />
               <p class=" pt-4 text-gray-800 border-t border-dashed"></p>

      <tr>
        <td><p class="flex justify-center">Is your sign here ?</p></td>
        <td></td>
      </tr>
    
      
      <tr><td>

  
      </td></tr>
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
    mounted(){

      },
      methods: {
          addValue(){
              this.$store.commit('choice/increment_third')
          },
            resetClick(){
              this.$store.commit('choice/resetClick')
          },
           incrementZero(){
             this.$store.commit('choice/incrementZero')
          },
          
      }
};
</script>

