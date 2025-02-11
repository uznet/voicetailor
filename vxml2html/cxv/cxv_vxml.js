
//========================= CXVVxml View ====================
function CXVVxmlMmi(jfrom)
{
	
	var jmmi     = cxvJson.getValue(jfrom,"mmi",{});
	this.head =  cxvJson.getValue(jmmi,"head",{});
	this.channel =  cxvJson.getValue(jmmi,"channel",{});
	this.interaction =  cxvJson.getValue(jmmi,"interaction",{});
	
	/*
    this.enabled = cxvJson.getValue(jmmi,"enabled",false);
    this.name    = cxvJson.getValue(jmmi,"name","");
    this.content = cxvJson.parse(cxvJson.getValue(jmmi,"content","{}"));
    this.prompt =  cxvJson.getValue(jmmi,"prompt","");
    this.template =  cxvJson.getValue(jmmi,"template","");
	*/
	
}

CXVVxmlMmi.prototype.objectify=function(jparent)
{
    var jmmi = cxvJson.create();
	
    cxvJson.putValue(jmmi,"head",this.head);
    cxvJson.putValue(jmmi,"channel",this.channel);
    cxvJson.putValue(jmmi,"interaction",this.interaction);
	
	/*
    cxvJson.putValue(jmmi,"enabled",this.enabled);
    cxvJson.putValue(jmmi,"name",this.name);
    cxvJson.putValue(jmmi,"content",cxvJson.stringify(this.content));
    cxvJson.putValue(jmmi,"prompt",this.prompt);
    cxvJson.putValue(jmmi,"template",this.template);
    cxvJson.putValue(jparent,"mmi",jmmi);
	*/
}

//======================== CXVVxml Stop ======================
/*

    public String eventname; // event name;
    public String contenttype;
    public String contentdata;
*/

function CXVVxmlStop (what)
{
	
	if(what && typeof(what) == "object")
	{
	    var jfrom =what;
		
        this.what = cxvJson.getValue(jfrom,"what","");
	}
	else
	{
        this.what = what;
	}
	
}


CXVVxmlStop.prototype.objectify=function(jparent)
{

   cxvJson.putValue(jparent,"what",this.what);

}
//============  CXVVxml ResultInfo ====================
function CXVVxmlResultInfo(success,code,extratype,extravalue)
{
	if(success && typeof (success) =="object")
	{   
       var jresult = success;
	   
       this.success = cxvJson.getValue(jresult,"success",false);
       this.code = cxvJson.getValue(jresult,"code","");
       this.extratype = cxvJson.getValue(jresult,"extratype","text/plain");
       this.extravalue = cxvJson.getValue(jresult,"extravalue","'");
		
	}
	else //typeof (success) =="boolean")
	{
      this.success = success;
      this.code   = code;
      this.extratype = extratype;
      this.extravalue = extravalue;
	}	
}

CXVVxmlResultInfo.prototype.objectify=function(jparent)
{

    var jresult = cxvJson.create();//new JSONObject();

    cxvJson.putValue(jresult,"success", this.success);
    cxvJson.putValue(jresult,"code", this.code);
    cxvJson.putValue(jresult,"extratype", this.extratype);
    cxvJson.putValue(jresult,"extravalue", this.extravalue);
    cxvJson.putValue(jparent,"result",jresult);
	

}

//================================== CXVVxml RecordResult
function CXVVxmlRecordResult(jfrom)
{
	
    this.termchar = cxvJson.getValue(jfrom,"termchar",0);
    this.url = cxvJson.getValue(jfrom,"url","");
    this.size = cxvJson.getValue(jfrom,"size",0);
    this.duration = cxvJson.getValue(jfrom,"duration",0);

    this.result = new CXVVxmlResultInfo(cxvJson.getValue(jfrom,"result",{}));
}
CXVVxmlRecordResult.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"termchar",this.termchar);
    cxvJson.putValue(jparent,"url",this.url);
    cxvJson.putValue(jparent,"size",this.size);
    cxvJson.putValue(jparent,"duration",this.duration);

    this.result.objectify(jparent);
    
}



//================================ CXVVxml RecordRequest ==============
function CXVVxmlRecordRequest(jfrom)
    {

        //xargs_member_get_string(evtIn,AIO_FN_TITLE,&bmsgOut->reqRecord.title);
        this.bDigitStop =  cxvJson.getValue(jfrom,"digitstop",false);
        this.nMaxSeconds = cxvJson.getValue(jfrom,"maxtime",30);


        this.nPreSilenceSeconds =cxvJson.getValue(jfrom,"presilence",5);
        this.nPostSilenceSeconds=  cxvJson.getValue(jfrom,"postsilence",5);

        this.bBeep = cxvJson.getValue(jfrom,"beep",true);

        this.audioFormat = cxvJson.getValue(jfrom,"audioformat", "audio/wav");
        this.targetUrl = cxvJson.getValue(jfrom,"targeturl","");

        this.promptq = new CXVVxmlPromptQueue(cxvJson.getValue(jfrom,"promptq",{}));
        //this.document = new CXVVxmlDocument(cxvJson.getValue(jfrom,"document",{}));
        //this.form = new CXVVxmlForm(cxvJson.getValue(jfrom,"form",{}));


    }
	
CXVVxmlRecordRequest.prototype.objectify=function(jparent)
    {
        var jobj;
        cxvJson.putValue(jparent,"digitstop",this.bDigitStop);
        cxvJson.putValue(jparent,"maxtime",this.nMaxSeconds);


        cxvJson.putValue(jparent,"presilence",this.nPreSilenceSeconds);
        cxvJson.putValue(jparent,"postsilence",this.nPostSilenceSeconds);

        cxvJson.putValue(jparent,"beep",this.bBeep);

        cxvJson.putValue(jparent,"audioformat", this.audioFormat);
        cxvJson.putValue(jparent,"targeturl",this.targetUrl);

/*
        jobj = cxvJson.create();
        this.form.objectify(jobj);
        cxvJson.putValue(jparent,"form",jobj);

        jobj = cxvJson.create();
        this.document.objectify(jobj);
        cxvJson.putValue(jparent,"document",jobj);
*/
        jobj = cxvJson.create();
        this.promptq.objectify(jobj);
        cxvJson.putValue(jparent,"promptq",jobj);


    
}

//============================= CXVVxml Promptq ====================
function CXVVxmlPromptQueue(jfrom)
{
    //this.bargein = false;
    //this.timeout = 0;
    //this.bargeintype = "";
    this.medias = new CXVVxmlMedia(jfrom);
    this.meta =  new CXVVxmlMeta(jfrom);
    this.mmi = new CXVVxmlMmi(jfrom);

		
    this.bargein = cxvJson.getValue(jfrom,"bargein",false);
    this.timeout = cxvJson.getValue(jfrom,"timeout",30*1000);
    this.bargeintype = cxvJson.getValue(jfrom,"bargeintype","");
    this.lang = cxvJson.getValue(jfrom,"lang","");
    this.ttslang = cxvJson.getValue(jfrom,"ttslang","");
    this.ttssynthesizer = cxvJson.getValue(jfrom,"ttssynthesizer","");
    this.ttsgender = cxvJson.getValue(jfrom,"ttsgender","");
    this.ttsspeaker = cxvJson.getValue(jfrom,"ttsspeaker","");


}
CXVVxmlPromptQueue.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"bargein",this.bargein);
    cxvJson.putValue(jparent,"timeout",this.timeout);
    cxvJson.putValue(jparent,"bargeintype",this.bargeintype);
    cxvJson.putValue(jparent,"lang",this.lang);

    cxvJson.putValue(jparent,"ttslang",this.ttslang);
    cxvJson.putValue(jparent,"ttssynthesizer",this.ttssynthesizer);
    cxvJson.putValue(jparent,"ttsgender",this.ttsgender);
    cxvJson.putValue(jparent,"ttsspeaker",this.ttsspeaker);

    this.meta.objectify(jparent);
    this.medias.objectify(jparent);
    this.mmi.objectify(jparent);
}
//============================== CXVVxml PlayResult ==================
function CXVVxmlPlayResult(jparent)
{   
   var jresult = cxvJson.getValue(jparent,"result",{});
   this.result = new CXVVxmlResultInfo(jresult);
   
}

CXVVxmlPlayResult.prototype.objectify=function(jparent)
{
     //cxvJson.putValue(jparent,"result",this.result);
	 
     this.result.objectify(jparent);

}
//============================ CXVVxml PlayRequest ============
function CXVVxmlPlayRequest(jfrom)
{
    var jobj = cxvJson.getValue(jfrom,"promptq",{});
    this.promptq = new CXVVxmlPromptQueue(jobj);

/*
    jobj = cxvJson.getValue(jfrom,"document",{});
    this.document = new CXVVxmlDocument(jobj);
    jobj = cxvJson.getValue(jfrom,"form",{});
    this.form = new CXVVxmlForm(jobj);
*/
}
CXVVxmlPlayRequest.prototype.objectify=function(jparent)
{
       var jobj;

        //==========promptq ================
        jobj = cxvJson.create();
        this.promptq.objectify(jobj);
        cxvJson.putValue(jparent,"promptq",jobj);

/*
        //==========document ================
        jobj = cxvJson.create();
        this.document.objectify(jobj);
        cxvJson.putValue(jparent,"document",jobj);

        //==========form ================
        jobj = cxvJson.create();
        this.form.objectify(jobj);
        cxvJson.putValue(jparent,"form",jobj);
*/


}

//============================ CXVVxml ObjectResult =================
function CXVVxmlObjectResult(jparent)
{
   var jresult = cxvJson.getValue(jparent,"result",{});	
   this.result = new CXVVxmlResultInfo(jresult);
}

CXVVxmlObjectResult.prototype.objectify=function(jparent)
{
    this.result.objectify(jparent);
}
//============================ CXVVxml ObjectRequest =================

function CXVVxmlObjectRequest(jfrom)
{

        this.classid = cxvJson.getValue(jfrom,"classid", "");
        this.codebase = cxvJson.getValue(jfrom,"codebase","");

        this.codetype = cxvJson.getValue(jfrom,"codetype","");
        this.data = cxvJson.getValue(jfrom,"data",  "");
        this.type = cxvJson.getValue(jfrom,"type",  "");
        this.archive = cxvJson.getValue(jfrom,"archive", "");
        this.parameters = cxvJson.getValue(jfrom,"parameters",{});
}

CXVVxmlObjectRequest.prototype.objectify=function(jparent)
{
        cxvJson.putValue(jparent,"classid", this.classid );
        cxvJson.putValue(jparent,"codebase",this.codebase);

        cxvJson.putValue(jparent,"codetype",this.codetype);
        cxvJson.putValue(jparent,"data",  this.data);
        cxvJson.putValue(jparent,"type",    this.type);
        cxvJson.putValue(jparent,"archive", this.archive);
        cxvJson.putValue(jparent,"parameters",this.parameters);
}

//============================= CXVVxml Meta ================================
function Meta(name,content)
{
    this.name = name;
    this.content = content;
}

function CXVVxmlMeta(jparent)
{
   // private ArrayList<Meta> metaList;

   this.parseMeta = function(metaList,metaJSONObject)
   {
	/*	
	for (var prop in jsonObject) {
        alert("Key:" + prop);
        alert("Value:" + jsonObject[prop]);
    }
*/	
        //this.metaList = new ArrayList<Meta>();
        if(metaJSONObject != null) 
		{
			for (var prop in metaJSONObject) 
			{

                var key = prop;//(String) keys.next();
                var  content = cxvJson.getValue(metaJSONObject,key,"");
                var meta = new Meta(key,content);
                //meta.name = key;
                //meta.content = content;
                metaList.push(meta);
            }
        }
    }
    this.createMetaJSONObject=function(a)
    {
        var jobj = cxvJson.create();
        for(var i=0;i < a.length;i++)
        {
            //CXVVxmlMeta.Meta m = a[i];
            var m = a[i];
            cxvJson.putValue(jobj,m.name,m.content);
        }
        return jobj;

    }

		
    this.metaList = new Array();//List<Meta>();

	if(jparent && typeof(jparent) == "object")
        this.parseMeta(this.metaList,cxvJson.getValue(jparent,"meta",{}));
	
}

CXVVxmlMeta.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"meta",this.createMetaJSONObject(this.metaList));
}
//================================ CXVVxml Media =================================
function Media(url,urltype,text,texttype)
{
    this.url = url;
    this.urltype =urltype;
    this.text = text;
    this.texttype = texttype;
}


function CXVVxmlMedia(jparent)
{
	this.dummy = new Media("","","","");
	
    this.parseMedia=function(mediaJSONArray)
    {

        //Log.d("CXVVxmlPromptQueue","mediaJSONArray.length="+Integer.toString(mediaJSONArray.length()));

        for(var i=0;i<mediaJSONArray.length;i++)
        {
            var o = cxvJson.getValue(mediaJSONArray,i,{});
            var m = new Media( cxvJson.getValue(o,"url",""),
                               cxvJson.getValue(o,"urltype",""),
                               cxvJson.getValue(o,"text",""),
                               cxvJson.getValue(o,"texttype",""));
			this.mediaList.push(m);
        }
    }
	
	
    this.mediaList = new Array();//List<Media>();
    
	if(jparent && typeof(jparent) == "object")
	  this.parseMedia(cxvJson.getValue(jparent,"medias",[]));
}

CXVVxmlMedia.prototype.objectify=function(jparent)
{
	var  media2JSONObject=function(m)
    {
        var jmedia= cxvJson.create();
        cxvJson.putValue(jmedia,"url",m.url);
        cxvJson.putValue(jmedia,"urltype",m.urltype);
        cxvJson.putValue(jmedia,"text",m.text);
        cxvJson.putValue(jmedia,"texttype",m.texttype);

        return jmedia;

    }

    var  createMediaJSONArrayObject=function(a)
    {
        var  jarray = cxvJson.createArray();
        for(var i=0;i < a.length;i++)
        {
            var jmedia  = media2JSONObject(a[i]);
			
            cxvJson.putValue(jarray,i,jmedia);
        }

        return jarray;

    }
	
	
    cxvJson.putValue(jparent,"medias",createMediaJSONArrayObject(this.mediaList));
	
}
CXVVxmlMedia.prototype.get=function(pos)
{
	if(this.mediaList.length > 0 &&  this.mediaList.length > pos)
	{
		return this.mediaList[pos];
	}
	return this.dummy;
}
//================================= CXVVxml Grammar ===============================
function Grammar()
{
    this.id="";
    this.rule="";;
    this.location="";
    this.mode="";
    this.accept="";
	this.type="";
}
/*
    public String    mode;
    public ArrayList<Grammar> grammarList;
*/  
  /*
    public JSONArray speech; // grammar
    public JSONArray dtmf; // grammar
    public JSONArray external; // grammar
   */

 function CXVVxmlGrammar(mode,grammarJSONArray)
 {
    this.mode =mode;
    this.grammarList = new Array();//List<Grammar>();
   
	if(grammarJSONArray && typeof (grammarJSONArray ) == "object")
    {
        for (var i = 0; i < grammarJSONArray.length; i++)
        {
                var o = cxvJson.getValue(grammarJSONArray,i,{});//getJSONObject(i);
                var g = new Grammar();
                g.accept = cxvJson.getValue(o,"accept","");
                g.id = cxvJson.getValue(o,"id","");
                g.location = cxvJson.getValue(o,"location","");
                g.mode = cxvJson.getValue(o,"mode","");
                g.rule = cxvJson.getValue(o,"rule","");
                g.type = cxvJson.getValue(o,"type","");
                this.grammarList.push(g);
        }
    }
}

CXVVxmlGrammar.prototype.objectify=function(grammarJSONArray)
{
    for(var i=0;i<this.grammarList.length;i++)
    {
            var g = this.grammarList[i];
            var o = cxvJson.create();
            cxvJson.putValue(o,"accept",g.accept);
            cxvJson.putValue(o,"id",g.id);
            cxvJson.putValue(o,"location",g.location);
            cxvJson.putValue(o,"mode",g.mode);
            cxvJson.putValue(o,"rule",g.rule);
            cxvJson.putValue(o,"type",g.type);
            cxvJson.putValue(grammarJSONArray,i,o);

        
    }
}
//============================CXVVxml Event ===========================
function CXVVxmlEvent (jfrom) //eventname,contenttype,contentdata)
{
	
	if(jfrom && typeof(jfrom) == "object")
	{
	    //var jfrom =eventname;
		
        this.url = cxvJson.getValue(jfrom,"url","");
        this.eventname = cxvJson.getValue(jfrom,"eventname","");
        this.contenttype = cxvJson.getValue(jfrom,"contenttype","");
        this.contentdata = cxvJson.getValue(jfrom,"contentdata","");
	}
	else
	{
		
        this.url = "";//eventname;
        this.eventname = "";//eventname;
        this.contenttype = "";//contenttype;
        this.contentdata = "";//contentdata;		
	}
	
}


CXVVxmlEvent.prototype.objectify=function(jparent)
{

        cxvJson.putValue(jparent,"url",this.url);
        cxvJson.putValue(jparent,"eventname",this.eventname);
        cxvJson.putValue(jparent,"contenttype",this.contenttype);
        cxvJson.putValue(jparent,"contentdata",this.contentdata);

}
//======================== CXVVxml Document ======================================
   function CXVVxmlDocument(jfrom)
    {
        this.url  = cxvJson.getValue(jfrom,"url","");
        this.meta = new CXVVxmlMeta(jfrom);
    }

    CXVVxmlDocument.prototype.objectify =function(jparent)
    {
        cxvJson.putValue(jparent,"url",this.url);
        this.meta.objectify(jparent);
    }
	
//========================= CXVVxml Dialog ======================================
function CXVVxmlForm(jfrom)
{
    this.id = cxvJson.getValue(jfrom,"id","");
    this.element =  cxvJson.getValue(jfrom,"element","");
    this.item = cxvJson.getValue(jfrom,"item","");
	this.option =cxvJson.getValue(jfrom,"option",0);
	this.choice =cxvJson.getValue(jfrom,"choice",0);
}

CXVVxmlForm.prototype.objectify=function(jparent)
{
    cxvJson.putValue(jparent,"id",this.id);
    cxvJson.putValue(jparent,"element",this.element);
    cxvJson.putValue(jparent,"item",this.item);
    cxvJson.putValue(jparent,"option",this.option);
    cxvJson.putValue(jparent,"choice",this.choice);
		
}
//======================== CXVVxml DataResult ===================================
function CXVVxmlDataResult (jfrom) //eventname,contenttype,contentdata)
{
	
	if(jfrom && typeof(jfrom) == "object")
	{
	    //var jfrom =eventname;
		
        this.httpcode = cxvJson.getValue(jfrom,"httpcode",0);
        this.reason = cxvJson.getValue(jfrom,"reason","");
        this.datatype = cxvJson.getValue(jfrom,"datatype","");
        this.data = cxvJson.getValue(jfrom,"data","");
	}
	else
	{
        this.httpcode =0;
        this.reason = "";
        this.datatype = "";
        this.data = "";
	}
	
	
}


CXVVxmlDataResult.prototype.objectify=function(jparent)
{
        cxvJson.putValue(jparent,"httpcode",this.httpcode);
        cxvJson.putValue(jparent,"reason",this.reason);
        cxvJson.putValue(jparent,"data",this.data);
        cxvJson.putValue(jparent,"datatype",this.datatype);

}
//======================== CXVVxml DataRequest ======================================
function CXVVxmlDataRequest (jfrom) //eventname,contenttype,contentdata)
{
	
	if(jfrom && typeof(jfrom) == "object")
	{
	    //var jfrom =eventname;
		
        this.uri = cxvJson.getValue(jfrom,"uri","");
        this.parameters = cxvJson.getValue(jfrom,"parameters",{});
	}
	else
	{
        this.uri = "";//eventname;
        this.parameters = {};//contenttype;
	}
	
}


CXVVxmlDataRequest.prototype.objectify=function(jparent)
{
        cxvJson.putValue(jparent,"uri",this.uri);
        cxvJson.putValue(jparent,"parameters",this.parameters);

}
//============================ CXVVxml CollectResult ================================
function CXVVxmlCollectResult(jparent)
{
	var jresult = cxvJson.getValue(jparent,"result",{});
    //this.result = result;
	/*
    this.inputmode = cxvJson.getValue(jparent,"inputmode","");//inputmode;
    this.recgrammar = cxvJson.getValue(jparent,"recgrammar","");;
    this.utterance = cxvJson.getValue(jparent,"utterance","");
    this.utterance_delimiter = cxvJson.getValue(jparent,"delimiter","");
    this.interpdata = cxvJson.getValue(jparent,"interpdata","");
    this.interptype = cxvJson.getValue(jparent,"interptype","");
    this.confidence = cxvJson.getValue(jparent,"confidence",1.0);
    */

    this.result = new CXVVxmlResultInfo(jresult);
		
	
}

CXVVxmlCollectResult.prototype.objectify=function(jparent)
{
/*
        cxvJson.putValue(jparent,"inputmode",this.inputmode);
        cxvJson.putValue(jparent,"recgrammar",this.recgrammar);
        cxvJson.putValue(jparent,"utterance",this.utterance);
        cxvJson.putValue(jparent,"delimiter",this.utterance_delimiter);
        cxvJson.putValue(jparent,"interpdata", this.interpdata);
        cxvJson.putValue(jparent,"interptype", this.interptype);
        cxvJson.putValue(jparent,"confidence", this.confidence);
        */
		//cxvJson.putValue(jparent,"result",this.result);
        this.result.objectify(jparent);
}

//=============================== CXVVxml CollectRequest ================================
function CXVVxmlCollectRequest (jfrom)
    {
        //try {
        var jary;
        var jobj ;
        //= cxvJson.getJSONObject(jfrom,"promptq",true);
        //this.promptq = new CXVVxmlPromptQueue(jobj);
        this.inputmode =   cxvJson.getValue(jfrom,"inputmode","speech");
        this.universals =  cxvJson.getValue(jfrom,"universals","");
        this.maxnbest =  cxvJson.getValue(jfrom,"maxnbest",1);


        this.interdigittimeout =  cxvJson.getValue(jfrom,"interdigittimeout",5*1000);
        this.termtimeout =  cxvJson.getValue(jfrom,"termtimeout",30*1000);
        this.termchars =  cxvJson.getValue(jfrom,"termchars","*");

        this.confidencelevel = cxvJson.getValue(jfrom,"confidencelevel",0.5);
        this.sensitivity = cxvJson.getValue(jfrom,"sensitivity",1.0);
        this.speedvsaccuracy = cxvJson.getValue(jfrom,"speedvsaccuracy",0.5);
        this.completetimeout = cxvJson.getValue(jfrom,"completetimeout",5*1000);
        this.incompletetimeout = cxvJson.getValue(jfrom,"incompletetimeout",5*1000);
        this.maxspeechtimeout = cxvJson.getValue(jfrom,"maxspeechtimeout",5*1000);

        this.sttrecognizer = cxvJson.getValue(jfrom,"sttrecognizer","");


        jobj = cxvJson.getValue(jfrom,"promptq",{});
        this.promptq = new CXVVxmlPromptQueue(jobj);

/*
        jobj = cxvJson.getValue(jfrom,"document",{});
        this.document = new CXVVxmlDocument(jobj);

        jobj = cxvJson.getValue(jfrom,"form",{});
        this.form = new CXVVxmlForm(jobj);
*/
        jary = cxvJson.getValue(jfrom,"speechgrammar",[]);
        this.grammarSpeech = new CXVVxmlGrammar("speech",jary);

        jary = cxvJson.getValue(jfrom,"dtmfgrammar",[]);
        this.grammarDtmf = new CXVVxmlGrammar("dtmf",jary);

        jary = cxvJson.getValue(jfrom,"extragrammar",[]);
        this.grammarExtra = new CXVVxmlGrammar("extra",jary);
    }

CXVVxmlCollectRequest.prototype.objectify=function(jparent)
    {
        var jary;
        var jobj ;

        cxvJson.putValue(jparent,"inputmode",this.inputmode);
        cxvJson.putValue(jparent,"universals",this.universals );
        cxvJson.putValue(jparent,"maxnbest",this.maxnbest);


        cxvJson.putValue(jparent,"interdigittimeout",this.interdigittimeout);
        cxvJson.putValue(jparent,"termtimeout",this.termtimeout);
        cxvJson.putValue(jparent,"termchars",this.termchars );

        cxvJson.putValue(jparent,"confidencelevel",this.confidencelevel);
        cxvJson.putValue(jparent,"sensitivity",this.sensitivity);
        cxvJson.putValue(jparent,"speedvsaccuracy",this.speedvsaccuracy);
        cxvJson.putValue(jparent,"completetimeout",this.completetimeout);
        cxvJson.putValue(jparent,"incompletetimeout",this.incompletetimeout);
        cxvJson.putValue(jparent,"maxspeechtimeout",this.maxspeechtimeout);
        cxvJson.putValue(jparent,"sttrecognizer",this.sttrecognizer);


        jobj = cxvJson.create();
        this.promptq.objectify(jobj);
        cxvJson.putValue(jparent,"promptq",jobj);

/*
        jobj = cxvJson.create();//getJSONObject(jfrom,"document",true);
        this.document.objectify(jobj);
        cxvJson.putValue(jparent,"doucment",jobj);

        jobj = cxvJson.create();//getJSONObject(jfrom,"form",true);
        this.form.objectify(jobj);
        cxvJson.putValue(jparent,"form",jobj);
*/
        jary = cxvJson.createArray();//getJSONArray(jfrom,"speechgrammar",true);
        this.grammarSpeech.objectify(jary);// = new CXVVxmlGrammar("speech",jary);
        cxvJson.putValue(jparent,"speechgrammar",jary);

        jary = cxvJson.createArray();//getJSONArray(jfrom,"speechgrammar",true);
        this.grammarDtmf.objectify(jary);// = new CXVVxmlGrammar("speech",jary);
        cxvJson.putValue(jparent,"dtmfgrammar",jary);

        jary = cxvJson.createArray();//getJSONArray(jfrom,"speechgrammar",true);
        this.grammarExtra.objectify(jary);// = new CXVVxmlGrammar("speech",jary);
        cxvJson.putValue(jparent,"extragrammar",jary);
    
}

//=========================== CXVVxml AudioConversion=====================
function CXVVxmlAudioConversion()
{
  
  /*
    var jconversion = jparent;//cxvJson.getValue(jparent,"audio$",{});
	
	this.enabled = cxvJson.getValue(jconversion,"enabled",false);
	this.tts = cxvJson.getValue(jconversion,"tts",false);
	this.localfile = cxvJson.getValue(jconversion,"localfile",false);
	this.remotefile = cxvJson.getValue(jconversion,"remotefile",false);
	this.outformat = cxvJson.getValue(jconversion,"outformat","wav");
	this.outlocalpath = cxvJson.getValue(jconversion,"outlocalpath","");
	
	*/	
	
	//this.enabled = false;//cxvJson.getValue(jconversion,"enabled",false);
	this.tts = false;//cxvJson.getValue(jconversion,"tts",false);
	this.localfile = false;//cxvJson.getValue(jconversion,"localfile",false);
	this.remotefile = false;//cxvJson.getValue(jconversion,"remotefile",false);
	this.outformat = "wav";//cxvJson.getValue(jconversion,"outformat","wav");
	this.outlocalpath = "";//cxvJson.getValue(jconversion,"outlocalpath","");
}   

CXVVxmlAudioConversion.prototype.objectify=function(jparent)
{
    var jconversion = jparent;//cxvJson.create() ;
	//cxvJson.putValue(jconversion,"enabled",this.enabled);
	cxvJson.putValue(jconversion,"tts",this.tts);
	cxvJson.putValue(jconversion,"localfile",this.localfile);
	cxvJson.putValue(jconversion,"remotefile",this.remotefile);
	cxvJson.putValue(jconversion,"outformat",this.outformat);
	cxvJson.putValue(jconversion,"outlocalpath",this.outlocalpath);
	
	//cxvJson.putValue(jparent,"audio$",jconversion);
	
	
}

//======================================== CXVVxmlMessage =======================


function CXVVxmlMessage()
{
    this.dialogid ="";	
    this.syncid="";
	this.id="";
	this.idtype="";

    this.document = new CXVVxmlDocument({});
    this.form =   new CXVVxmlForm({});
	
	//this.audioConversion= undefined;  // C--> S,CXVVxmlAudioConversion

 
    this.reqCollect=undefined;        // C <-- S ,CXVVxmlCollectRequest
    this.reqPlay=undefined;           // C <-- S ,CXVVxmlPlayRequest
    this.reqRecord=undefined;         // C <-- S ,CXVVxmlRecordRequest

    this.reqObject=undefined;         // C <-- S ,CXVVxmlObjectRequest

    this.reqData=undefined;         // C <-- S ,CXVVxmlObjectRequest

    this.resCollect=undefined;        // C--> S,CXVVxmlCollectResult

    this.resPlay=undefined;           // C--> S ,CXVVxmlPlayResult
    this.resRecord=undefined;         // C--> S ,CXVVxmlRecordResult

    this.resObject=undefined;         // C--> S ,CXVVxmlObjectResult
    this.resData=undefined;         // C--> S ,CXVVxmlObjectResult

    this.event=undefined;             // C<--> S ,CXVVxmlEvent
    this.stop=undefined;             // C <-- S,CXVVxmlStop

	
   // this.jsonObject=undefined;
	
}

CXVVxmlMessage.prototype.objectify=function(cxv)
{
	
    var jobj ;
	var jvxml = cxvJson.create();
				

	cxvJson.putValue(jvxml,"type$", cxv.type, "");
	cxvJson.putValue(jvxml,"name$", cxv.name, "");
	cxvJson.putValue(jvxml, "dialogid$", cxv.vxml.dialogid, "");
	cxvJson.putValue(jvxml, "id$", cxv.vxml.id, "");
	cxvJson.putValue(jvxml, "idtype$", cxv.vxml.idtype, "");	
    cxvJson.putValue(jvxml,"syncid$", cxv.vxml.syncid);	


    jobj = cxvJson.create();
    this.document.objectify(jobj);
    cxvJson.putValue(jvxml,"document$",jobj);

    jobj = cxvJson.create();
    this.form.objectify(jobj);
    cxvJson.putValue(jvxml,"form$",jobj);
	
			        
    if(cxv.name == CXVConst.CXVVXML_COLLECT_REQUEST)
    {
        this.reqCollect.objectify(jvxml);
    }
    else  if(cxv.name == CXVConst.CXVVXML_PLAY_REQUEST)
    {
        this.reqPlay.objectify(jvxml);

    }
    else  if(cxv.name==CXVConst.CXVVXML_RECORD_REQUEST)
    {
        this.reqRecord.objectify(jvxml);
    }
    else  if(cxv.name == CXVConst.CXVVXML_OBJECT_REQUEST)
    {
        this.reqObject.objectify(jvxml);

    }
    else  if(cxv.name == CXVConst.CXVVXML_DATA_REQUEST)
    {
        this.reqData.objectify(jvxml);

    }
    //======================RESULT=====================================
    else  if(cxv.name == CXVConst.CXVVXML_COLLECT_RESULT)
    {
        this.resCollect.objectify(jvxml);
        ;//this.resCollect = new CXVVxmlCollectResult(this.jsonObject);

    }
    else  if(cxv.name== CXVConst.CXVVXML_PLAY_RESULT)
    {
        this.resPlay.objectify(jvxml);
        ;//this.resPlay = new CXVVxmlPlayResult(this.jsonObject);

    }
    else  if(cxv.name==CXVConst.CXVVXML_RECORD_RESULT)
    {
        this.resRecord.objectify(jvxml);

        ;//this.resRecord = new CXVVxmlRecordResult(this.jsonObject);
    }
    else  if(cxv.name==CXVConst.CXVVXML_OBJECT_RESULT)
    {
        this.resObject.objectify(jvxml);
        //this.resObject = new CXVVxmlObjectResult();

    }
    else  if(cxv.name==CXVConst.CXVVXML_DATA_RESULT)
    {
        this.resData.objectify(jvxml);
        //this.resObject = new CXVVxmlObjectResult();

    }
    else  if(cxv.name==CXVConst.CXVVXML_EVENT)
    {
        this.event.objectify(jvxml);
        //this.error = new CXVVxmlError(this.jsonObject);
    }
    else  if(cxv.name==CXVConst.CXVVXML_STOP)
    {
        this.stop.objectify(jvxml);
        //this.error = new CXVVxmlError(this.jsonObject);
    }
    else  if(cxv.name==CXVConst.CXVVXML_SET_AUDIOCONVERSION)
    {
        this.audioConversion.objectify(jvxml);
        //this.error = new CXVVxmlError(this.jsonObject);
    }

	//cxvJson.putValue(jcxv,CXVConst.CXV_BODY,jvxml); 
    return jvxml;
	
}

CXVVxmlMessage.prototype.stringify=function(cxv)
{
	var jobj = this.objectify(cxv);
	return cxvJson.stringify(jobj);
	
}
//=========================================================
CXVVxmlMessage.prototype.parse=function(cxv,jsdata)
{
	//console.log(jsonString);
	//var jcxv  = cxvJson.parse(jsonString);	
	var jvxml= typeof(jsdata) === 'object' ? jsdata : cxvJson.parse(jsdata);		
	//var jvxml = cxvJson.getValue(jcxv,CXVConst.CXV_BODY,{});

	if(!cxv.vxml) 
	  cxv.vxml = new CXVVxmlMessage();
		
	cxv.name = cxvJson.getValue(jvxml, "name$", "");
	cxv.vxml.dialogid = cxvJson.getValue(jvxml, "dialogid$", "");
	cxv.vxml.id = cxvJson.getValue(jvxml, "id$", "");
	cxv.vxml.idtype = cxvJson.getValue(jvxml, "idtype$", "");
	cxv.vxml.syncid= cxvJson.getValue(jvxml,"syncid$","");

    cxv.vxml.document = new CXVVxmlDocument(cxvJson.getValue(jvxml,"document$",{}));
    cxv.vxml.form = new CXVVxmlForm(cxvJson.getValue(jvxml,"form$",{}));
	
	//console.log("CXVVxml parser:before:syncid="+cxv.vxml.syncid);
    //===================== REQUEST =========================
    if(cxv.name== CXVConst.CXVVXML_COLLECT_REQUEST)
    {
        cxv.vxml.reqCollect = new CXVVxmlCollectRequest(jvxml);

    }
    else  if(cxv.name== CXVConst.CXVVXML_PLAY_REQUEST)
    {
        cxv.vxml.reqPlay = new CXVVxmlPlayRequest(jvxml);

    }
    else  if(cxv.name== CXVConst.CXVVXML_RECORD_REQUEST)
    {
        cxv.vxml.reqRecord = new CXVVxmlRecordRequest(jvxml);
    }
    else  if(cxv.name== CXVConst.CXVVXML_OBJECT_REQUEST)
    {
        cxv.vxml.reqObject = new CXVVxmlObjectRequest(jvxml);

    }
    else  if(cxv.name== CXVConst.CXVVXML_DATA_REQUEST)
    {
        cxv.vxml.reqData = new CXVVxmlDataRequest(jvxml);

    }
    //======================RESULT=====================================
    else  if(cxv.name== CXVConst.CXVVXML_COLLECT_RESULT)
    {
        cxv.vxml.resCollect = new CXVVxmlCollectResult(jvxml);

    }
    else  if(cxv.name== CXVConst.CXVVXML_PLAY_RESULT)
    {
        cxv.vxml.resPlay = new CXVVxmlPlayResult(jvxml);

    }
    else  if(cxv.name== CXVConst.CXVVXML_RECORD_RESULT)
    {

        cxv.vxml.resRecord = new CXVVxmlRecordResult(jvxml);
    }
    else  if(cxv.name== CXVConst.CXVVXML_OBJECT_RESULT)
    {
        cxv.vxml.resObject = new CXVVxmlObjectResult(jvxml);

    }
    else  if(cxv.name== CXVConst.CXVVXML_DATA_RESULT)
    {
        cxv.vxml.resData = new CXVVxmlDataResult(jvxml);

    }
    //==========================================================
    else  if(cxv.name== CXVConst.CXVVXML_EVENT)
    {
        cxv.vxml.event = new CXVVxmlEvent(jvxml);
    }

    else  if(cxv.name== CXVConst.CXVVXML_STOP)  //if(cxv.name== CXVConst.CXVVXML_EVENT_SEND) || cxv.name== CXVConst.CXVVXML_EVENT_RECEIVED)
    {
        cxv.vxml.stop = new CXVVxmlStop(jvxml);
    }
 	
    else  if(cxv.name== CXVConst.CXVVXML_SET_AUDIOCONVERSION)  //if(cxv.name== CXVConst.CXVVXML_EVENT_SEND) || cxv.name== CXVConst.CXVVXML_EVENT_RECEIVED)
    {
        cxv.vxml.stop = new CXVVxmlAudioConversion(jvxml);
    }
 	else{
		return false;
	}
	//console.log("CXVVxml parser:after:syncid="+cxv.vxml.syncid);
	
	return true;
	
}
