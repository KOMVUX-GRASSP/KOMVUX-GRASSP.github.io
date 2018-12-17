var app = angular.module("graaspApp", []);

app.controller("ToaletterCtrl", function ($scope, $http) {
    var url = "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=offentliga-toaletter&rows=42&facet=plats&facet=sasong&facet=oppettider&facet=avgift&facet=antal_dam&facet=antal_herr&facet=antal_unisex&facet=antal_urinoar&facet=antal_hwc&facet=hwc_larm&facet=skotbord"
    var toiletList=[];
    $scope.disToilets = function(a){
       // write code to filter nearest toilets based on geo location
       var checkbox = element(by.model('checked'));
       var checkElem = element(by.css('.check-element'));
     
       expect(checkElem.isDisplayed()).toBe(false);
       checkbox.click();
       expect(checkElem.isDisplayed()).toBe(true);
    }
    var handicap='';
    $http.get(url)
        .then(function (data) {
           // console.log(data.data.records)
            $scope.markers1 = data.data.records;
            for (let i = 0; i < data.data.records.length; i++) {
               // console.log(data.data.records[i].fields.sasong);
                var openMonths = data.data.records[i].fields.sasong;
                var openTime = data.data.records[i].fields.oppettider;
                handicap=data.data.records[i].fields.antal_hwc;
               if (handicap==1){ handicap ='Yes';}else {handicap ='No';}
             
                if (openMonths.length == 6) {
                    var openMonths1 = openMonths.slice(0, 3);
                    var openMonths2 = openMonths.slice(3);
                    openMonths = openMonths1+' - '+openMonths2;
                }
                if (openTime.length == 4) {
                    openTime = openTime.slice(0,2)+'AM -' +openTime.slice(2)+'PM';
                    
                }else{
                    openTime = openTime;
                    
                }
toiletList.push([data.data.records[i].fields.plats,openMonths,data.data.records[i].fields.antal_dam,handicap,openTime,data.data.records[i].fields.avgift])
//toiletList.push([data.data.records[i].fields.plats,openMonths]);    
}
$scope.markers=toiletList;
          
        })
});