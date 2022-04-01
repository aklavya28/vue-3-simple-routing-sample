<template>
    <h1>Listed Jobs </h1>
   <ul>
       <li v-for="job in jobs" :key="job.id">
           <router-link :to="{name: 'jobDetail', params:{id: job.id}}">
                {{ job.title }}
           </router-link>
       </li>
   </ul>
</template>

<script>
export default {
    data(){
        return{
            jobs: [
                {
                    id:1,
                    title: "Web designer ui Required",
                    jd: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore voluptates consectetur eligendi eius vitae rem placeat laudantium, doloribus fugit voluptatum voluptatem facere veritatis nobis eos recusandae impedit. Asperiores, consequuntur.",
                },
                {
                    id:2,
                    title: "Web web designer Required",
                    jd: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore voluptates consectetur eligendi eius vitae rem placeat laudantium, doloribus fugit voluptatum voluptatem facere veritatis nobis eos recusandae impedit. Asperiores, consequuntur.",
                },
                {
                    id:3,
                    title: "Web vue Developer Required",
                    jd: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore voluptates consectetur eligendi eius vitae rem placeat laudantium, doloribus fugit voluptatum voluptatem facere veritatis nobis eos recusandae impedit. Asperiores, consequuntur.",
                }
            ]
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0 auto;
    max-width: 230px;
    padding: 0;
}

ul li {
    margin: 0 auto;
    padding: 0;
}

ul li > a {
    display: block;
    padding: 10px 13px;
    text-decoration: none;
    background: #e7e7e7;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #444;
    transition: all ease .5s;
}

ul li > a:hover {
    background: #cddc39;
}
</style>