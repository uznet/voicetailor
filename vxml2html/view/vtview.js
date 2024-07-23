if(typeof (VTView) != 'object')
{
	  VTView = {};

    var _rcid="";
    var _mergeUrl=function(base,path)
    {
      var url  = base + "/"+path;   
      return url;
    }

    VTView.set_rcid=function(rcid)
    {
        _rcid= rcid;
    }

    VTView.transform=function(cxvm,templateUrl,cbResult)  
    {


          var  _translated ="";  
          var  _errorOut ="";  
          var  _errorCount=0;
          
          var  _errorOut=function(tag,reason)
          {		
               _errorOut += tag  ;
               _errorOut += ":";
               _errorOut += reason;
               _errorOut += "\r\n";

               _errorCount++;

               //console.log(tag +"->"+reason);
          }
          var  _evalFile=function(file)
          {
      
          } 
      
          var _write=function(text)
          {
      
            //console.log(text);
            _translated += text;
      
          }
          var _readText=function(textFile)
          {
            console.log("_readText");
      
          }
      
          VTTemplate.setErrorFunction (_errorOut);	
          //VTTemplate.setMergeUrlFunction (_mergeUrl);	
          //VTTemplate.setEvalFunction (eval);	
          //VTTemplate.setEvalUrlFunction (_evalFile);	
          VTTemplate.setTextWriterFunction(_write);   	
          VTTemplate.setFileReaderFunction(_readText);
      
          var _fetchTemplateResult=function(cxvm,status,xResponse)
          {			
                console.log("_fetchTemplateResult:"+status);
                if(status == 'success' )				
                {
                    var status = "error";                    
                    //var ctx={cxvm:cxvm};
                    var text= xResponse.getData();

                    _translated = "";
                    _errorOut ="";
                    _errorCount=0;

                    try{
					   VTTemplate.Args.cxvm = cxvm;
					   
                       VTTemplate.render(text);

                       if(_errorCount ==0) 
                       {
                          status = "success";
                       }
                       else 
                       {
                           _translated = _errorOut;                        
                       }

                    }
                    catch (e)
                    {
                      _translated = e;
                    }

                    cbResult(cxvm,status,_translated);
                    /*
                    $("#ivr2dialog").empty();
                    $(content).insertAfter ("#home");
                    $.mobile.changePage($("#ivr2dialog"));
                    */
                }				
                else //if((++errorCount$) > 0)
                {		
                     console.log(JSON.stringify(xResponse));
                }			
          }
    
         var _fetchTemplateRequest=function(cxvm,templateUrl) 
         {
             var headers = {"X-VT-RCID": _rcid};
    
             VTHttpClient.get(cxvm,
                    "view/"+templateUrl,
                                   headers,
                                   null,
                                   30,
                                   "text",
                                   _fetchTemplateResult);
         }

         _fetchTemplateRequest(cxvm,templateUrl);
    }

    VTView.getTemplateUrl=function(cxvm)
    {
            
      var template,mmi ;

      if(cxvm.type==CXVConst.CXV_TYPE_VXML)
      {
                      
          if(cxvm.name == CXVConst.CXVVXML_PLAY_REQUEST)
          {
              template= "view_play.vtejs";              
              mmi = cxvm.vxml.reqPlay.promptq.mmi;
          }
          else if(cxvm.name == CXVConst.CXVVXML_COLLECT_REQUEST)
          {
              template= "view_collect.vtejs";              
                  mmi = cxvm.vxml.reqCollect.promptq.mmi;
          }
          else if(cxvm.name == CXVConst.CXVVXML_RECORD_REQUEST)
          {
              template= "view_record.vtejs";              
              mmi = cxvm.vxml.reqRecord.promptq.mmi;
          }
          else
          {
              console.log("Invalid CXVMessage.name->"+name+"\r\n");
              return ;
          }
               
          mmi.interaction.extra = JSON.parse(mmi.interaction.extra);
               
          if(typeof(mmi.interaction.extra.template) == 'string' && mmi.interaction.extra.template.length >0 )
              template = mmi.interaction.extra.template;
          else if(cxvm.vxml.form.choice > 0)
              template = "view_menu.vtejs";
          else if(cxvm.vxml.form.option > 0)
              template = "view_option.vtejs";
               //IVR2Template.include(subtemplate,param);
               
      }
      else if(cxvm.type==CXVConst.CXV_TYPE_CCXML)
      {
             //if(cxvm.name==CXVConst.CXVCCXML_DISCONNECTED)
          template= "view_terminated.vtejs";
      }
      else
      {       
          console.log("Invalid CXVMessage.type->"+type);
           
      }

      return template;
    }

    //=======================================================

    VTView.text2mp3=function(text,texttype,lang,cbResult)
    {      
      var headers = {"X-VT-RCID": _rcid};
      var reqTts = {contentdata:text,contenttype:texttype,format:"mp3",lang:lang};
      var url = _mergeUrl(window.location.origin,"rc/tts");
      console.log("VTView.text2mp3:"+url);

      var _ttsResult=function(ctx,status,xResponse)
      {
        var jvalue={};
        if(status =='success')
        {
          
          jvalue=xResponse.getData();

        }
        else{
          jvalue = xResponse;
        }

      console.log("VTView.text2mp3:result->"+JSON.stringify(jvalue));

          cbResult(status=="success",jvalue);


      }

      VTHttpClient.post("tts",
        url,
        headers,
        JSON.stringify(reqTts),
        "application/json;charset=utf-8",
        30,
        "json",
        _ttsResult);

    }
    VTView.wav2mp3=function(wavFile,cbResult)
    {

      var headers = {"X-VT-RCID": _rcid};
      var params = "wavfile="+wavFile;
      var url = _mergeUrl(window.location.origin,"rc/wav2mp3");
      console.log("VTView.wav2mp3:"+url);
      var _wav2mp3Result=function(ctx,status,xResponse)
      {
          var jvalue ={};
          if(status =="success")
          {
            jvalue = xResponse.getData();


          }
          else{
            jvalue = xResponse;
          }

      console.log("VTView.wav2mp3:result->"+JSON.stringify(jvalue));

          cbResult(status=="success",jvalue);


      }


      params = encodeURI(params); 
      VTHttpClient.get("wav2mp3",
        url,
        headers,
        params,
        30,
        "json",
        _wav2mp3Result);

      
    }
    VTView.local2public=function(localFile,cbResult)
    {
      var headers = {"X-VT-RCID": _rcid};
      var url = _mergeUrl(window.location.origin,"rc/publicfy");
      var params = "localfile="+wavFile;

      var _publicfyResult=function(ctx,status,xResponse)
      {
        var jvalue ={};
        if(status =="success")
        {
          jvalue = xResponse.getData();
        }
        else{
          jvalue = xResponse;
        }
        cbResult(status=="success",jvalue);
    }
      params = encodeURI(params); 
      VTHttpClient.get("publicfy",
        url,
        headers,
        params,
        30,
        "json",
        _publicfyResult);
    }

}

