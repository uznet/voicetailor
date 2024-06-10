# 1.Voicetailor Event
## Intent action name : com.voicetailor.xintent$   
## Property:
         timestamp$:   current-time <= time <= current-time + 30sec
         name$: 
         source$:
         value$:  
         sign$: MD5(timestamp$ + name$ + source$ + timestamp$)
# xIntentEventPeer
<pre>
<code>
     public class xIntentEventPeer
     {
         private String pkgName =null;
         private String clsName = null;         
         private String uriString = null;_
		 private ComponentName cmpName=null; // component name

        public  xIntentEventPeer(String pkgName,String clsName)
        {
              this.pkgName = pkgName;
              this.clsName = clsName;
                  
        }
        public  xIntentEventPeer(String uri)
        {
                setUri(uri);
        }

        public String getUri()
        {             
             if(this.uri == null)
                this.uri = this.pkgName + "#"+this.clsName;                
             return this._uriString;
        }
        
        public void setUri(String uri)
        {
            if(uri != null)
            {
               JSONObject  juri = xJson.parse(uri);
               
               this.pkgName = xJson.getString(juri,"packagename",null);
               this.clsName = xJson.getString(juri,"classname",null);
            }
       }	

		public ComponentName getComponentName()
		{		     
		      if(this.cmpName == null )
		          this.cmpName  = new ComponentName(this.pkgName,this.clsName);
		     return this._cmpName;
		}   
     }
</code>
</pre>
## xIntentEvent API

<pre>
 <code>
   public class xIntentEvent 
   {
        public static final String ACTION_VOICETAILOR_XINTENT = "com.voicetailor.xintent$"   
        public long  timestamp;     // current-time <= time <= current-time + 30sec
        public String name;    // event name
        public xIntentEventPeer  source;  // sender package name
        public String sign;     // MD5(timestamp + name +  + key)
   
        public JSONObject  value:   //  must be  JSON type

  
        public xIntentEvent(Intent i)
        {
             this.timestamp= xIntent.getString(i,"timestamp",null);
             this.name= xIntent.getString(i,"name",null);
             this.source= new xIntentEventPeer(xIntent.getString(i,"source",null));		   
             this.sign= xIntent.getString(i,"sign",null);
        }
     
        public xIntentEvent(String name,xIntentEventPeer  source)
        {
             this.name= name;
             this.source = source;              
        }


        private  Intent _createIntent()
        {
             Intent i = new Intent();  
         
             xIntent.setAction(i,ACTION_VOICETAILOR_XEVENT);  
		     this.timestamp = System.currentTimeMillis()/1000;  //xDatetime.getTime();
             xIntent.setLong("timestamp",this.timestamp);             
             xIntent.setString(i,"name",ths.name);
             xIntent.setString(i,"source",this.source.getUri());
			 this.sign =  makeSign(this.timestamp,this.name, this.source);            
             xIntent.setString(i,"sign",this.sign);
			 
			 if(this.value != null)             
                 xIntent.setString(i,"value",xJson.toString(this.value));
             return i;
        }
       public boolean sendBroadcast()
       {
             return sendBroadcastTo(null)           ;
       }
       public boolean sendBroadcastTo(xIntentEventPeer target)
       {
             Intent i = _crateIntent();
             if(target != null)
             {
                i.setComponent(target.getComponentName(target));  
                i.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES); //!! 죽은 앱을 호출    
             }
             sendBroadcast(i);
              
       }


//============================================================
        public static String  makeSign(long timestamp,String name,String source)
        {
            String msg = timestamp + ":" + name + ":" + source +":"+ACTION_VOICETAILOR_XINTENT;
            byte[] b = new byte(msg);
            xDigest digest = xDigest"md5");
            digest.append(b,b.length);
            String sign = digest.toHex();
            return sign;
            
        }
    
   }
 </code>
</pre>

# EdpEvent API
<pre>
<code>
     public class EdpEvent
     {
          static  xIntentEventPeer  source
          public  static void setSource(String package,String receiver)
          {
              source = new  xIntentEventPeer(package,receiver);
          }
          public static boolean request_INIT(xIntentEventPeer target)
          {
             
          }
          public static boolean request_START(xIntentEventPeer target)
          {
          }
          public static boolean request_STOP(xIntentEventPeer target)
          {
          }
          public static boolean request_GETSTATUS(xIntentEventPeer target)
          {
          }
     }
</code>
</pre>

# 3. iv2watcher       
## 3.1 Init EDP
### request  
      timestamp$:
      name$: edp.init.request
      source$: package name 
      target$: package name
      sign$: 
      value$:
### result
     timestamp$:
     name$ edp.init.result
     source$: package name
     target$: package name
     sign$:
     value: { success: ..., reason: ....}
## 3.2 Start EDP
### request:      
   timestamp$:
   name$: edp.start.request
    source$: package name 
   target$: package name
   sign$: 
   value$:
### result:
    timestamp$:
     name$ edp.start.result
     source$: package name
     target$: package name
     sign$:
     value: { success: ..., reason: ....}
## 3.3 Stop EDP
### request:      
   timestamp$:
   name$: edp.stop.request
    source$: package name 
   target$: package name
   sign$: 
   value$:
### result:
    timestamp$:
     name$ edp.stop.result
     source$: package name
     target$: package name
     sign$:
     value: { success: ..., reason: ....}
### 3.4 Get Status EDP
### request:      
   timestamp$:
   name$: edp.status.request
    source$: package name 
   target$: package name
   sign$: 
   value$:
### result:
    timestamp$:
    name$ edp.status.result
    source$: package name
    target$: package name
    sign$:
    value: { success: ..., reason: ....}

   
      
      
      