<template>
    <button @click="goBack" class="back">
        back
    </button>
    <div class="page">
    <div class="container">
        <h4 v-if="!joke">Loading...</h4>
        <div v-if="joke">
               <div class="id"><span>{{ joke.id }}</span></div>
              <h5>{{ joke.setup }}</h5>
              <hr>
              <p>
                {{ joke.punchline }}
              </p>
        </div>
    </div>
    </div>
</template>

<script setup>
import {useRoute} from "vue-router"
import router from "../router";
import {ref,onMounted} from "vue"
const joke=ref(undefined)
const route=useRoute()
const id=route.params.id
const getJoke=async()=>{
  joke.value=await  fetch("https://official-joke-api.appspot.com/jokes/"+id).then(async(res)=>await res.json())
}
const goBack=()=>router.back()
onMounted(() => {
   getJoke()
})
</script>

<style scoped>
.page{
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
}
.container{
    max-width: 700px;
    text-align: center;
}
.back{
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
}
.id{
    border-radius: 50%;
   
    width: 50px;
    height: 50px;
    background-color: var(--primary);
    text-align: center;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    font-family: var(--font-special);
}
</style>