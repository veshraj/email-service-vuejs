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
                  <span>Smtp Host List</span>
                </h1>
                <div class="page-header-subtitle">List of SMTP Host List</div>
              </div>
            </div>
          </div>
          <div class="container-fluid mt-n10">
            <div class="card mb-4">
              <div class="card-header">List of SMTP host list</div>
              <div class="card-body">
                <router-link to="/smtp-hosts/create" class="btn btn-primary btn-lg mb-3"> Create Smtp Host</router-link>
                <div class="datatable table-responsive">
                <table class="table table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                                          <thead>
                                              <tr>
                                                  <th>Name</th>
                                                  <th>Host</th>
                                                  <th>Username</th>
                                                  <th>Password</th>
                                                  <th>Port</th>
                                              </tr>
                                          </thead>
                                          <tfoot>
                                              <tr>
                                                  <th>Name</th>
                                                  <th>Host</th>
                                                  <th>Username</th>
                                                  <th>Password</th>
                                                  <th>Port</th>
                                              </tr>
                                          </tfoot>
                                          <tbody>
                                              <tr v-for="item in dataList" :key="item.id">
                                                  <td>{{ item.name }}</td>
                                                  <td>{{ item.host }}</td>
                                                  <td>{{ item.username }}</td>
                                                  <td>{{ item.password }}</td>
                                                  <td>{{ item.port }}</td>
                                              </tr>
                                          </tbody>
                                      </table>
                
                
                
                </div>
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
import topheader from '@/components/layout/topheader'
import RequestMixin from '@/mixins/RequestMixin'
import AuthHeader from '@/mixins/AuthHeader';
export default {
  name: "VendorList",
  mixins: [RequestMixin, AuthHeader],
  data: function() {
    return {
        listApi: 'api/smtps',
        dataList: [],
    }
  },
  components: {
    sidebar,
    topheader
  },
  methods: {
      loadData: function() {
        var url = this.$store.state.serverUrl+"/"+this.listApi;
        
        this.getRequest(url, this.getAuthAHeader()).then((result) => {
            this.dataList = result.data.data;
        }).catch((err) => {
            console.log(err);
        });
      }
  },
  mounted() {
      this.loadData();
    }
};
</script>