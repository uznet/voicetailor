# \<object> tag
# Purpose 
## VoiceXML 애플리케이션에서 플랫폼 종속적인 기능을 사용할수 있도록 합니다
# Syntax
\<object\
name = "ECMAScript_variable"\
expr = "ECMAScript_variable"\
cond = "ECMAScript_variable"\
classid = "URI"\
codebase = "URI"\
codetype = "stringI"\
data= "URI"\
type = stringI"\
archive = "URI"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"\
/>




# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name|object 실행결과값을 보유하는 변수 이름| true    |  internal   |
|    |속성이 지정되지 않으면, 인터프리터 내부적으로 자동생성한다|||
|expr|Form item variable 의 초기값.|false|undefined|    
|    |만약에 어떤값으로 초기화되었다면 이 \<object> 는실행되지않을것이다 |||
|cond|현재의 "object" 요소를 수행할 것인지 아닌지에 대한 조건이다 |false|true|    
|    |주어진 조건이 true 일 경우는 "object" 요소 를 실행함 |||    
|classid|객체 구현의 위치를 지정하는 URI |false|Platform-dependent|    
|       | URI 규약은 플랫폼에 따라 다릅니다.|||
|codebase|data 및 archive로 지정된 상대 URI를 확인하는 데 사용되는 기본 경로입니다|false|base URI of the current document|   
|        | 기본값은 현재 문서의 기본 URI입니다.|||
|codetype|classid에 지정된 개체를 다운로드 할 때 예상되는 데이터의 콘텐츠 유형입니다|false|
|        |기본적으로 type 속성의 값이됩니다|||
|data|객체의 데이터 위치를 지정하는 URI|false|
|    |상대 URI인 경우, codebase 속성값이 base URI로 해석됩니다.|||
|type|data의 콘텐츠 형식입니다.|false||


# Notes
None

# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml2.3.5