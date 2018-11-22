  const app = new Vue({
    el: '.app',
    data: {
      errors: [],
      name: null,
      surname: null,
      address: null,
      DofB : null,
      Password : null,
      phoneNo : null,
      email : null,
      projectName : null,
      bio : null,
      interest : null,
      price : null,
      age: null,
      movie: null,
      image: './image/logo.jpg'
    },
    methods:{
      checkForm: function (e) {
        if (this.name && this.age && this.surname && this.address && this.DofB && 
            this.Password && this.phoneNo && this.email && this.projectName && this.bio &&
            this.interest && this.price) {
          return true;
        }
  
        this.errors = [];
  
        if (!this.name) {
          this.errors.push('Name required.');
        }
        if (!this.age) {
          this.errors.push('Age required.');
        }
        if (!this.address) {
            this.errors.push('address required.');
          }
          if (!this.DofB) {
            this.errors.push('Date of Birth required.');
          }
          if (!this.Password) {
            this.errors.push('Password required.');
          }
          if (!this.phoneNo) {
            this.errors.push('Phone number required.');
          }
          if (!this.email) {
            this.errors.push('email required.');
          }
          if (!this.projectName) {
            this.errors.push('Project Name required.');
          }
           if (!this.price) {
            this.errors.push('price required.');
          }
           if (!this.movie) {
            this.errors.push('movie required.');
          }
          
  
        e.preventDefault();
      }
    }
  })
  //calling it 
//   app.plus()