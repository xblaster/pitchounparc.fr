import angular from 'angular';



export default angular.module( 'pichounWYoApp', [] )

import App from 'src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'pichounWYoApp', [] )
      .run(()=>{
        console.log(`Running the 'starter-app-bootstrap' ES6 Material-Start Tutorial`);
      });

    /*let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'pichounWYoApp' ]);*/
  });
