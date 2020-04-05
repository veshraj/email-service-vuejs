<template>
  <div>
    <topheader></topheader>
    <div id="layoutSidenav">
      <sidebar></sidebar>
      <div id="layoutSidenav_content">
        <main>
          <div class="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
            <div class="container-fluid">
              <div class="page-header-content">
                <h1 class="page-header-title">
                  <div class="page-header-icon">
                    <i data-feather="activity"></i>
                  </div>
                  <span>Compose Mail(Emails Service Provider)</span>
                </h1>
                <div class="page-header-subtitle">Compoer mail which will be sent by mail service provider</div>
              </div>
            </div>
          </div>
          <div class="container-fluid mt-n10">
            <div class="card mb-4">
              <div class="card-header">Email List</div>
              <div class="card-body">

                <div v-if="this.successMessage">
                  <b-alert show>
                    {{ this.successMessage }}
                  </b-alert>
                </div>
                <div v-if="this.errorMessage">
                  <b-alert variant="danger" show>
                    {{ this.errorMessage }}
                  </b-alert>
                </div>
                <form>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="name">Name </label>
                                <input class="form-control" id="name" v-model="form.name" type="text" placeholder="Mr. John Doe">
                                <small v-if="errors.name" class="text-danger text-bold">{{ errors.name }}</small>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <label for="host">Host </label>
                                <input class="form-control" id="host" v-model="form.host"  type="text" placeholder="smtp.domain.com">
                                <small v-if="errors.host" class="text-danger text-bold">{{ errors.host }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="username">Username </label>
                                <input class="form-control" id="username" v-model="form.username"  type="text" placeholder="">
                                <small v-if="errors.username" class="text-danger text-bold">{{ errors.username }}</small>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <label for="password">Password </label>
                                <input class="form-control" id="password" v-model="form.password"  type="text" placeholder="">
                                <small v-if="errors.password" class="text-danger text-bold">{{ errors.password }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <label for="port">Port </label>
                                <input class="form-control" id="port" type="number" v-model="form.port" placeholder="546">
                                <small v-if="errors.port" class="text-danger text-bold">{{ errors.port }}</small>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" @click="submitForm()"> Send Mail</button>
                </form>


                
              </div>
            </div>
          </div>
        </main>
        <footer class="footer mt-auto footer-light">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 small">Copyright &#xA9; Your Website 2020</div>
              <div class="col-md-6 text-md-right small">
                <a href="#!">Privacy Policy</a>
                &#xB7;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/layout/sidebar";
import topheader from "@/components/layout/topheader";
import RequestMixin from "@/mixins/RequestMixin";
import AuthHeader from '@/mixins/AuthHeader';
export default {
  name: "SmtopHostCreate",
  mixins: [RequestMixin, AuthHeader],
  data: function() {
    return {
      hostCretaeApi: "api/smtps",
      form: {
          name: '',
          host: '',
          username: '',
          password: '',
          port: ''
      },
      successMessage: '',
      errorMessage: '',
      errors: {}
    };
  },
  components: {
    sidebar,
    topheader
  },
  methods: {
    submitForm: function() {
      var url = this.$store.state.serverUrl + "/" + this.hostCretaeApi;
      this.formValidate();
      if(this.errorMessage == '') {
        this.postRequest(url, this.form, this.getAuthAHeader())
          .then((result) => {
            this.successMessage = result.data.message;
            this.form.name = '';
            this.form.host = '';
            this.form.username = '';
            this.form.password = '';
            this.form.port = '';
            this.errors = {};
            this.errorMessage =''
          })
          .catch(error => {
            this.errorMessage = error.response.data.message;
            this.errors = error.response.data.errors;
          });
      }
    },
    formValidate: function() {
        this.errorMessage = '';
        if(this.form.name == '') {
          this.errors['name'] = 'This field required';
          this.errorMessage = 'Invalid data';
        }
        else {
          delete this.errors['name'];
        }

        if(this.form.host == '') {
          this.errors['host'] = 'This field required';
          this.errorMessage = 'Invalid data';
        } else {
          delete this.errors['host'] ;
        }
        if(this.form.username == '') {
          this.errors['username'] = 'This field required';
          this.errorMessage = 'Invalid data';
        }
        else {
          delete this.errors['username'];
        }

        if(this.form.password == '') {
          this.errors['password'] = 'This field required';
          this.errorMessage = 'Invalid data';
        }
        else {
          delete this.errors['password'];
        }

        if(this.form.port == '') {
          this.errors['port'] = 'This field required';
          this.errorMessage = 'Invalid data';
        }
        else {
          delete this.errors['port'];
        }

      
    }  
  },
  mounted() {

  }
};
</script>