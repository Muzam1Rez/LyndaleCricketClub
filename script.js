// slot used here to distribute "FORM" component into registration page. This will make form become registration page, it is reusable and can be added by another content inside of slot
var Registration = Vue.component('registration', {
    props: ['title'],
    data: () => ({
      alert: false
    }),
    template: `
      <div class="container">
        <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="alert == true">
          <strong>Data submitted!</strong> Please wait for the next confirmation
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <iframe width="100%" height="600" src="https://dcms-dev.datacreative.com.au/play/6828023" frameborder="50"></iframe>
        <h1 class="text-center mt-5 h1-responsive font-weight-bold text-center ">{{ title }}</h1>
        
        
        <slot></slot>
        
        
        
      </div>
    `
  })
  
  
  var Form = Vue.component('form', {
    data: () => ({
      name: '',
      Dob: '',
      level: ''
    }),
    methods: {
      submitForm() {
        this.alert = true
        this.name = ''
        this.Dob = ''
        this.level = ''
      }
    },
    template: `
      <registration :title="'Registration form'">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" aria-describedby="textHelp" placeholder="Enter your name" v-model="name">
        </div>
        <div class="form-group">
          <label for="exampleInputDob1">Date of Birth</label>
          <input type="date" class="form-control" id="exampleInputDob1" placeholder="DoB" v-model="Dob">
        </div>
        <div class="form-group">
          <label for="exampleInputDob1">Senior/Junior</label>
          <select class="custom-select" v-model="level">
            <option value="Senior">Senior</option>
            <option value="Junior">Junior</option>
          </select>
          
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;" @click="submitForm()">Submit</button>  
      </registration>
    `
  })
  
  var Statistic = Vue.component('statistic', {
    data: () => ({
      data: ''
    }),
    template: `
      <div class="container">
        <h2 class="h1-responsive font-weight-bold text-center my-4">Season 2019-20</h2>
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Batting Average</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Brendan Ash</td>
              <td>34.9</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Keith Ash</td>
              <td>29</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Benjamin Montgomery</td>
              <td>27.5</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Rodney Keyearts</td>
              <td>25</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Collin Morre</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  });
  
  // Props: behave like data object /* data: () => ({}) */, but actually props sending the data from parent component (Home), to child component (News)
  // Define a new component called news
  var News = Vue.component('news', {
    props: ['data'],//receives the data from the parent component home and posts the response from the fetchnews method
    template: `
    <div class="container">
      <h2 class="h1-responsive font-weight-bold text-center my-4">Home</h2>
      <div class="row">
        <div class="col-lg-3 mb-2 " v-for="item in data.slice(0, 1)" :key="item.id">
          <div class="card">
            <div class="card-header">
              News #{{ item.id }}
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{{ item.body.slice(0, 50) }}... </p>
                <footer class="blockquote-footer"> {{ item.title.slice(0, 10) }}... </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  })
  //parent component
  var Home = Vue.component('home', {
    data: () => ({
      post: []
    }),
    mounted () {
      this.fetchNews()//sends a HTTP request to fetch data
    },
    methods: {
      fetchNews() {//method to fetch data from cusotm source
        fetch('https://jsonplaceholder.typicode.com/posts/')
          .then(response => response.json())
          .then(json => {
            this.post = json
          })
      }
    },
    template: `
      <news :data="post" />
      {{ post }}
    `
  });
  
  var Merchandise = Vue.component('merchandise', {
    template: `
    <div class="container mb-5">
      <h2 class="h1-responsive font-weight-bold text-center my-4">Merchandise</h2>
      <div class="row">
        <div class="col-3 col-sm-8 col-md-6 col-lg-4">
          <div class="card">
            <img src="./clubpolo.jpg" alt="club polo" style="width:100%">
            <h1>One day polo</h1>
            <p class="price">$29.99</p>
            <p>Comfortable on sunny days</p>
            <p><button class="btn btn-primary">Add to Cart</button></p>
          </div>
        </div>
      </div>
    </div>
    `
  });
  
  var ContactUs = Vue.component('contact-us', {
    template: `
    <!--Section: Contact v.2-->
    <div class="container">
      <section class="mb-4">
  
      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
            <div class="row">
                <!--Grid column-->
                <div class="col-md-12 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <!--Grid row-->
                        <div class="row">
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control">
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>
                            <!--Grid column-->
  
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control">
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>
                            <!--Grid column-->
                        </div>
                        <!--Grid row-->
  
                        <!--Grid row-->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control">
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>
                        <!--Grid row-->
  
                        <!--Grid row-->
                        <div class="row">
                            <!--Grid column-->
                            <div class="col-md-12">
                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>
                            </div>
                        </div>
                        <!--Grid row-->
                    </form>
  
                    <div class="text-center text-md-left">
                        <a class="btn btn-primary btn-block" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </div>
                <!--Grid column-->
            </div>
        </section>
    </div>
      <!--Section: Contact-->
    `
  });
  
  var routes = [//sets the path
    { path: '/', component: Home },//routes to Home page
    { path: '/statistic', component: Statistic },//routes to statistics page
    { path: '/form', component: Form },//routes to Registration page
    { path: '/merchandise', component: Merchandise },
    { path: '/contact', component: ContactUs }
  ];
  
  var router = new VueRouter({
    routes: routes,
    mode: 'hash',
    base: '/'
  })
  
      // when life is settled, load up the fun stuff
      document.addEventListener('DOMContentLoaded', function () {
          var vm = new Vue({
              el: '#app',
              router,
              data: {},
          })
      })