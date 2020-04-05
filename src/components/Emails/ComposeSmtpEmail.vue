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
                  <span>Compose Mail(Via SMTP)</span>
                </h1>
                <div class="page-header-subtitle">Compose mail which will be send by SMTP</div>
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
                        <label for="from">From </label>
                        <input class="form-control" id="from" v-model="form.from" required readonly type="email" placeholder="name@example.com">
                        <small v-if=" errors.form" class="text-danger text-bold">{{ errors.from }}</small>
                    </div>
                    <div class="form-group">
                        <label for="from">To </label>
                        <input class="form-control" id="from" v-model="form.to" required type="email" placeholder="name@example.com">
                        <small v-if="errors.to" class="text-danger text-bold">{{ errors.to }}</small>
                    </div>
                    <div class="form-group">
                        <label for="from">Subject </label>
                        <input class="form-control" id="subject" type="text" v-model="form.subject" placeholder="Subject">

                    </div>
                    <div class="form-group">
                        <label for="message">Message </label>
                        <textarea class="form-control" id="message" v-model="form.message" required rows="5"></textarea>
                        <small v-if="errors.message" class="text-danger text-bold">{{ errors.message }}</small>
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
import AuthHeader from '@/mixins/AuthHeader'
export default {
  name: "VendorEmailList",
  mixins: [RequestMixin, AuthHeader],
  data: function() {
    return {
      composeSmtpEmail: "api/smtp/emails",
      form: {
          from: this.$store.state.currentUser.email || '',
          to: '',
          subject: '',
          message: ''
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
      var url = this.$store.state.serverUrl + "/" + this.composeSmtpEmail;
      this.formValidate();
      if(this.errorMessage == '') {
        this.postRequest(url, this.form, this.getAuthAHeader())
          .then((result) => {
            this.successMessage = result.data.message;
            this.form.to = '';
            this.form.subject = '';
            this.form.message = '';
            this.errors = {};
            this.errorMessage =''
          })
          .catch(error => {
            this.errorMessage = error.data.message;
            this.errors = error.data.errors;
          });
      }
    },
    formValidate: function() {
        this.errorMessage = '';
        if(this.form.from == '') {
          this.errors['form'] = 'This field required';
          this.errorMessage = 'Invalid data';
        }
        else {
          delete this.errors['form'];
        }

        if(this.form.to == '') {
          this.errors['to'] = 'This field required';
          this.errorMessage = 'Invalid data';
        } else {
          delete this.errors['to'] ;
        }
        alert(this.errors.to);
        if(this.form.message == '') {
          this.errors['message'] = 'This field required';
          this.errorMessage = 'Invalid data';
        }
        else {
          delete this.errors['message'];
        }   
    }   
  },
  mounted() {

  }
};
</script>