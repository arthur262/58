/* eslint-disable */
//https://blog.csdn.net/ZMM_Devil/article/details/103871602
function is_phone(){
     var userAgentInfo=navigator.userAgent;
        var Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
        var flag=true;
        for(var v=0;v<Agents.length;v++) {
           if(userAgentInfo.indexOf(Agents[v])>0) {
             flag=false;
             break;
           }
         }
         return flag;
    }

export {
  is_phone
}