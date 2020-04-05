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
                <form>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="name">Name </label>
                                <input class="form-control" required id="name" v-model="form.name" type="text" placeholder="Mr. John Doe">
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <label for="host">Host </label>
                                <input class="form-control" id="host" required v-model="form.host"  type="text" placeholder="smtp.domain.com">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="username">Username </label>
                                <input class="form-control" id="username" required v-model="form.username"  type="text" placeholder="">
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <label for="password">Password </label>
                                <input class="form-control" id="password" required v-model="form.password"  type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <label for="port">Port </label>
                                <input class="form-control" id="port" required type="number" v-model="form.port" placeholder="546">
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
      hostCretaeApi: "api/smtp-hosts",
      form: {
          name: '',
          host: '',
          username: '',
          password: '',
          port: ''
      }
    };
  },
  components: {
    sidebar,
    topheader
  },
  methods: {
    submitForm: function() {
      var url = this.$store.state.serverUrl + "/" + this.hostCretaeApi;
      this.postRequest(url, this.form, this.getAuthAHeader())
        .then(() => {
          alert("Your host created successfully");
          this.form.name = '';
          this.form.host = '';
          this.form.username = '';
          this.form.password = '';
          this.form.port = '';
        })
        .catch(error => {
          alert(JSON.stringify(error));
          console.log(error);
        });
    }  
  },
  mounted() {

  }
};
</script>