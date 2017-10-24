let str = "ASdasdasdas"
undefined
str.indexOf("a")
3
str.indexOf("a", 4)
6
str.substr(3)
"asdasdas"
str.substr(3, 5)
"asdas"
str.substring(3)
"asdasdas"
str.substring(3, 5)
"as"
str.slice(4,5)
"s"
str.substring(-5, -3)
""
str.slice(-5, -3)
"as"
str.split('a')
Array [ "ASd", "sd", "sd", "s" ]
let url = "http://youtube.com/watch?v=j1h35vj13h5vk1h"
undefined
url.split(?)
SyntaxError: expected expression, got '?'
[Learn More]
debugger eval code:1:10
url.split('?')
Array [ "http://youtube.com/watch", "v=j1h35vj13h5vk1h" ]
url.split('=')
Array [ "http://youtube.com/watch?v", "j1h35vj13h5vk1h" ]
url.split('=')[1]
"j1h35vj13h5vk1h"