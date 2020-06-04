<style type="text/css">
    

    .croppie-container .cr-viewport{
        position: relative;
    }
</style>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm Third component.
                    </div>

                    <!-- Note that 'ref' is important here (value can be anything). read the description about `ref` below. -->
                    <input type="file" @change="croppie"/>
                      <vue-croppie class="" ref="croppieRef" :enableOrientation="true" :boundary="{ width: 450, height: 300}" :viewport="{ width:400, height:250, 'type':'square' }">
                      </vue-croppie>
                      <!-- the result -->
                      <img :src="cropped">
                      <button @click="crop" class="btn btn-primary">Crop</button>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              croppieImage: '',
              cropped: null
            };
              },
              methods: {
                croppie (e) {
                  var files = e.target.files || e.dataTransfer.files;
                  if (!files.length) return;



                  var reader = new FileReader();
                  reader.onload = e => {
                    this.$refs.croppieRef.bind({
                      url: e.target.result
                    });
                  };

                reader.readAsDataURL(files[0]);
                },
                crop() {
                  // Options can be updated.
                  // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
                  let options = {
                    type: 'base64',
                    size: { width: 600, height: 450 },
                    format: 'jpeg'
                  };
                  this.$refs.croppieRef.result(options, output => {
                    this.cropped = this.croppieImage = output;
                      console.log(this.croppieImage);
                    });
                  }
              }
        };
</script>
