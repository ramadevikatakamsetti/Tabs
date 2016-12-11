(function(){
    
      
    angular.module("custom")
    .directive("customHead",function(){
                
                return{
                    
                    templateUrl :"app/template/menu1/menu1.html",
                    restrict:"A,E,C",
                   transclude: true
                    
                    
                };
            }
    )
    
})();