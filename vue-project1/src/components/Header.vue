<style scoped>
.main {
  background-color: grey;
}

.head {
  padding: 0; /* Reset padding for the header */
}
/* .log{
    display: flex;
} */

.logo {
    /* flex: 1; */
  padding: 10px ;
  color: white;
  font-size: 20px;
  margin: 10px 39px;
}

.list {
  text-align: center;
  padding: 10px 20px;
  margin:10px 0px 10px 80px;
   /* flex: 1; */
  
   
}

.titles {
  color: white;
 
  /* Add any other styles as needed */
}
</style>
<template>
    <!-- <div class="container">
        <div class="logo">
           <h1 class="text">helllooo</h1>
        </div>
        <div class="links">
    <li v-for="nav in navlinks" :key="nav.id" class="list">
       <h4 class="titles">{{ nav.title }}</h4>
    </li>
</div>
    </div> -->
    <el-container class="main">
        <el-header class="head">
            <el-row >
                <el-col :span="4" class="logo">logo</el-col>
            <el-col v-for="nav in navlinks" :key="nav.id" class="list" :span="2">
       <h4 class="titles">{{ nav.title }}</h4> </el-col>
    </el-row>
        </el-header>
    </el-container>
</template>

<script>
  export default{
    data(){
        return{
            navlinks: [
                {
                    id:1, title: "Home"
                },
                {
                    id:2, title: "About"
                },
                 {
                    id:3, title: "Service"
                },
                {
                    id:4, title: "Contact"
                },
            ]
        }
    }
  }
</script>