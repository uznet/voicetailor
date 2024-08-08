# \<receive> tag
## Purpose 
### VoiceXML 애플리케이션에서 외부 메시지를 수신하기위함.
## Syntax
\<receive\
fetchaudio = "string"\
fetchaudioexpr = "ECMA Expression"\
maxtime = "seconds"\
maxtimeexpr = "ECMA Expression"\
/>







## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|maxtime |인터프리터가 외부 메시지를 받기 위해 대기하는 최대 시간을 나타내는 W3C 시간 지정자. 시간이 초과되면 인터프리터는 "error.badfetch"를 발생시킵니다.| false   |    |
|maxtimeexpr|ECMA Expression for maxtime|false||    


## Notes
외부 메시지를 동기적으로 수신하려면 "externalevents.enable"속성을 false로 설정하고 "externalevents.queue"속성을 true로 설정하십시오

## Additional Reference Site
### https://www.w3.org/TR/voicexml30/#ExternalCommunicationModule
