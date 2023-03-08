

<script setup>
import {ref,onMounted} from"vue"
import router from "../router";
const jokes=ref([])
const isLoading=ref(true)

const getJokes=async()=>{
  jokes.value= await fetch("https://official-joke-api.appspot.com/jokes/ten").then(async(res)=>await res.json())
   isLoading.value=false
}
const toJoke=(id)=>router.push("/joke/"+id)
onMounted(() => {
getJokes()
})
</script>

<template>
 <div>
       <h2>Randoms jokes</h2>
       <hr>
       <p v-if="isLoading">Loading...</p>
       <div v-if="jokes!==undefined && jokes.length>0" class="jokes">
         <div v-for="(joke,index) in jokes" :key="index" class="joke" @click="toJoke(joke.id)">
            <span class="id">{{ joke.id }}</span>
            <p>{{ joke.setup }}</p>
            <span class="type">{{ joke.type }}</span>
         </div>
    </div>
    </div>
</template>


<style scoped>
hr{
  
    border: 1px solid rgba(0, 0, 0, 0.123);
}
.joke{
    padding: 0px 20px;
    display: grid;
    margin: 10px 0;
    background-color: white;
    border-radius: 10px;
    grid-template-columns: 20px auto 130px;
    gap: 30px;
    cursor: pointer;
    align-items: center;

}
.id{
    color:var(--secondary)
}
.type{
    font-family: var(--font-title);
    font-size: 11px;
    text-transform: uppercase;
    
}
.joke:hover{
    background-color: rgba(255, 255, 255, 0.685);
}

</style>