<style type="text/css">
    .card{
        clip-path: none;
    } 
    .hasError label {
      color: red;
    }
    #exampleInputEmoji {
      position: relative;
    }

    span.emoji{
        text-indent: none !important;
    } 
</style>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <select class="form-control">
                            <option disabled value="">Please select one</option>
                            <option v-for="item in dropdown" :value="item">{{item[0]}}</option>
                        </select>

                        <label>Select</label>
                        <select>
                            <option value="">Select Category</option>
                            <option v-for="category in getAllCategory" 
                                    :value="category.id">
                                   {{ category.name }}
                            </option>
                        </select>

                        <form class="pt-4" @submit.prevent="submit">
                          <div class="form-group" :class="{ 'hasError': $v.form.email.$error }">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="text" class="form-control input" id="email" placeholder="Enter email" v-model="valueInput">
                            <twemoji-picker 
                            :emojiData="emojiDataAll" 
                            :emojiGroups="emojiGroups" 
                            :skinsSelection="true"
                            @enterKey="onEnterKey" @emojiUnicodeAdded="unicodeAdded">
                            </twemoji-picker>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            
                          </div>
                          <div class="form-group" :class="{ 'hasError': $v.form.password.$error }">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
                          </div>
                          <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                          </div>
                          
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="{{ mix('js/app.js') }}"></script>
<script>

    import { required, minLength, between , email} from 'vuelidate/lib/validators';
    import VEmojiPicker, { emojisDefault, categoriesDefault } from "v-emoji-picker";

    import {
    TwemojiPicker
  } from '@kevinfaguiar/vue-twemoji-picker';
    import EmojiAllData from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-all-groups.json';
    import EmojiDataAnimalsNature from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-animals-nature.json';
    import EmojiDataFoodDrink from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-food-drink.json';
    import EmojiGroups from '@kevinfaguiar/vue-twemoji-picker/emoji-data/emoji-groups.json';

    export default {
        
        name: "exampleInputEmoji",
        name: "List",
        components: {
            'twemoji-picker': TwemojiPicker
        },


        mounted() {
            console.log('Component mounted.')
            this.$store.dispatch("allCategoryFromDatabase")
        },
        data () {
        return {
          dropdown: null,
          form: {
            name: "",
            email: ""
          },
          valueInput: "Someting text ",
            showDialog: false,
        }
        },
        mounted () {
            axios.get('/laravel')
                .then(response => (this.dropdown = response.data))
        },

        validations: {
            form: {
              password: { required },
              email: { required, email }
            }
        },
        computed: {
          emojiDataAll() {
            return EmojiAllData;
          },
          emojiGroups() {
            return EmojiGroups;
          },
          getAllCategory(){ //final output from here
            console.log(this.$store.getters.getCategoryFormGetters);
            return this.$store.getters.getCategoryFormGetters
          }
        },
        methods: {
            onEnterKey(e) {
                console.log("ClickedEnter", e);
            },
            unicodeAdded(e){
                console.log('incide added',e);
                this.valueInput+= e;
            },
            submit() {
                console.log('submitted value');
              // this.$v.form.$touch();
              // // if its still pending or an error is returned do not submit
              // console.log(this.$v.form.$error);
              // console.log(this.$v.form.$pending);
              // if (this.$v.form.$pending || this.$v.form.$error) return;
              // // to form submit after this
              // alert("Form submitted");
            },
            
      },



    }
</script>
