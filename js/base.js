
function zoom() {
    var num = 1200;
    var oWidth = window.screen.width;
    rate = oWidth / num;
    if (oWidth < 1920) {
        document.getElementsByTagName('meta')[name="viewport"].content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,width=device-width,height=device-height,initial-scale="+
        rate+",maximum-scale=2.0,user-scalable=no";
    }
};
zoom();
