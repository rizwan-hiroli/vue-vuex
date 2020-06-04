<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard</div>

                    <div class="card-body">
                        

                        <label>Select</label>
                        <select>
                            <option value="">Select Category</option>
                            <option v-for="category in getAllCategory" 
                                    :value="category.id">
                                   {{ category.name }}
                            </option>
                        </select>
                        <button class="btn btn-sm btn-primary" v-on:click="changeCategory">Change</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="{{ mix('js/app.js') }}"></script>

<script>
export default {

     name: "List",
  
      mounted() {

        this.$store.dispatch("allCategoryFromDatabase")

      },
      computed: {
        getAllCategory(){ //final output from here
            console.log(this.$store.getters.getCategoryFormGetters);
            return this.$store.getters.getCategoryFormGetters
        },
        
      },
      methods:{
        changeCategory(){ //final output from here
            // console.log(this.$store.getters.getCategoryFormGetters);
            return this.$store.commit("categories",[{'name':'Rizwan'},{'name':'Atrom'}]);
        }
      }

};
</script>
