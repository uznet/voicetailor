    
## \<assgin> tag
### 미리 정의된 변수에 값을 할당합니다

## Syntax
     <assgin  name = "string"  expr = "ECMAScript_Expression" />
## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name | 변수이름    | true    |       |
|expr | 변수에 할당할 값 또는 표현식|true| |
|     | string 은 반드시 “… “  or  ‘…’ 으로 처리해야함||

## Notes
\<assign> 태그의 "name" 속성으로 지정된 변수는 먼저 \<var> 태그에서 선언해야 합니다.
## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml5.3.2
