<template>
    <headei/>
    <form-ui/>
   </template>
   <script> 
    
import Form from "../components/Form.vue"
import Header from "../components/Header.vue"

 export default{
       components: {
         'form-ui': Form,
         'headei' : Header,
       }
      }
   </script>