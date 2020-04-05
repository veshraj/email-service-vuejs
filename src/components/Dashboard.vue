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
                  <span>Dashboard</span>
                </h1>
                <div class="page-header-subtitle">Example dashboard overview and content summary</div>
              </div>
            </div>
          </div>
          <div class="container-fluid mt-n10">
            <div class="row">
              <div class="col-md-6">
                <div class="card mb-4">
                  <div class="card-header">Area Chart Example</div>
                  <div class="card-body">
                    <div class="chart-area">
                      <canvas id="myAreaChart" width="100%" height="30"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4">
                  <div class="card-header">Bar Chart Example</div>
                  <div class="card-body">
                    <div class="chart-bar">
                      <canvas id="myBarChart" width="100%" height="30"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3 col-md-6">
                <div class="card bg-primary text-white mb-4">
                  <div class="card-body">Primary Card</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                    <a class="small text-white stretched-link" href="#">View Details</a>
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-warning text-white mb-4">
                  <div class="card-body">Warning Card</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                    <a class="small text-white stretched-link" href="#">View Details</a>
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-success text-white mb-4">
                  <div class="card-body">Success Card</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                    <a class="small text-white stretched-link" href="#">View Details</a>
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-danger text-white mb-4">
                  <div class="card-body">Danger Card</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                    <a class="small text-white stretched-link" href="#">View Details</a>
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-header">DataTable Example</div>
              <div class="card-body">
                <div class="datatable table-responsive"></div>
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
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  components: {
    sidebar,
    topheader
  }
};
</script>