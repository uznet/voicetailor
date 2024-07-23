
if(typeof(cxvJson) != 'object')
{
   cxvJson = {};
   cxvJson.parse=function(jsonString){

    var obj = {};
    //this.emsg = "";
    
	if(typeof(jsonString) != 'string')
		 jsonString="{}";
	 
    try {
        obj = JSON.parse(jsonString);
    } catch (e) {
        //this.emsg = e;
        //console.error(jsonString);
        console.error(e);
    }
    return obj;
   }
   cxvJson.toString=function(jsonObj)
   {
    var str = "";
    try{
        str = JSON.stringify(jsonObj,"utf-8");
    }
    catch (e) {
        console.error(e);

    }
    return str;
  }
  cxvJson.stringify = cxvJson.toString;

  cxvJson.create=function()
  {
	return {};
  }

  cxvJson.createArray=function()
  {
	 return [];
  }


  cxvJson.getValue = function (jsonObj, key, defaultValue)
  {
    var value;
	if(jsonObj && typeof(jsonObj)=="object")
	{
    try{
        value = jsonObj[key];//JSON.stringify(jsonObj,"utf8");
    }
    catch (e) {
        console.error(e);

    }
	}
	
	if(value == undefined)
		value =  defaultValue;
    return value ;
	
  }

  cxvJson.putValue=function (jsonObj,key,value)
  {
	if(jsonObj && typeof(jsonObj)=="object")
	{
    try{
       
	   jsonObj[key]=value;//JSON.stringify(jsonObj,"utf8");
    }
    catch (e) {
        ;//console.error(e);

    }
	}
	
  }
  
  cxvJson.pushToArray=function (jsonArray,value)
  {
	if(jsonArray && typeof(jsonArray)=="object")
	{
       try{
       
	      jsonArray.push(value);//JSON.stringify(jsonObj,"utf8");
       }
    catch (e) {
        console.error(e);

    }
	}
	  
  }

}
/*
XJson.prototype.lasterror = function() {
    return this.emsg;
}
*/
