/* GET private page */
module.exports.profilePrivate = function(req, res){
res.render('profilePrivate', { title: 'Private Profile' });
var tradesAndServices = {};
tradesAndServices['Plumber'] = ['', 'Faucet Leak', 'Gas Appliance Instal', 'Pipework'];
tradesAndServices['Electrician'] = ['', 'Appliance Testing', 'Electrical Fitting Instal', 'Power/Fuse Issue'];
tradesAndServices['Carpenter'] = ['', 'Fixture/Furniture Repair', 'Cabinets'];
tradesAndServices['AC/Refrigeration'] = ['', 'AC', 'Fridge', 'Freezer', 'Ducting'];
tradesAndServices['Gardening/Landscaping'] = ['', 'Mowing', 'Earthworks', 'Tree Removal', 'Transplanting'];
tradesAndServices['Labourer'] = ['', 'Construction', 'Landscaping', 'Production Line', 'Warehouse'];

function ChangeServiceList() {
    var tradeList = document.getElementById("trade");
    var serviceList = document.getElementById("service");
    var seltrade = tradeList.options[tradeList.selectedIndex].value;
    while (serviceList.options.length) {
        serviceList.remove(0);
    }
    var trades = tradesAndServices[seltrade];
    if (trades) {
        var i;
        for (i = 0; i < trades.length; i++) {
            var trade = new Option(trades[i], i);
            serviceList.options.add(trade);
        }
    }
} 
};

/* GET public page */
module.exports.profilePublic = function(req, res){
res.render('profilePublic', { title: 'Public Profile' });
};

/* GET review form page */
module.exports.addReview = function(req, res){
res.render('addReview', { title: 'Add Review' });
};

/* GET tradie signup form page */
module.exports.tradieSignup = function(req, res){
res.render('tradieSignup', { title: 'Add Review' });
};
