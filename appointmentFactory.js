
/*Singleton*/

var factory = (function (){
  var instance;
  function createInstance() {
    var appointments = [];
    var names = null;
    return{
      setAppointments: function(data){
        this.appointments = data;
      },
      setNames: function(data){
        this.names = data;
      },
      getAppointments: function(){
        return this.appointments;
      },
      getNames: function(){
        return this.names;
      }
    };
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();




export default factory;
