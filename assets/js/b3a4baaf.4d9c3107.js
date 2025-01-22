"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[1151],{2994:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"tips-and-tricks/match-case","title":"match-case Statement","description":"Introduction","source":"@site/docs/tips-and-tricks/match-case.md","sourceDirName":"tips-and-tricks","slug":"/tips-and-tricks/match-case","permalink":"/Python/docs/tips-and-tricks/match-case","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tips-and-tricks/match-case.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tipsAndTricksSidebar","previous":{"title":"Iterable vs Iterator in Python","permalink":"/Python/docs/tips-and-tricks/iterable-iterator"},"next":{"title":"Leveraging Python\'s \\"methodcaller\\" for Efficient Data Manipulation","permalink":"/Python/docs/tips-and-tricks/methodcaller"}}');var a=s(4848),r=s(8453);const i={},c="match-case Statement",l={},d=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Basic Syntax</strong>",id:"basic-syntax",level:2},{value:"<strong>Pattern Types</strong>",id:"pattern-types",level:2},{value:"1. <strong>Literal Patterns</strong>",id:"1-literal-patterns",level:3},{value:"2. <strong>Variable Patterns</strong>",id:"2-variable-patterns",level:3},{value:"3. <strong>Sequence Patterns</strong>",id:"3-sequence-patterns",level:3},{value:"4. <strong>Mapping Patterns (Dictionaries)</strong>",id:"4-mapping-patterns-dictionaries",level:3},{value:"5. <strong>Class Patterns</strong>",id:"5-class-patterns",level:3},{value:"6. <strong>Wildcard Pattern</strong>",id:"6-wildcard-pattern",level:3},{value:"7. <strong>OR Patterns (Alternatives)</strong>",id:"7-or-patterns-alternatives",level:3},{value:"8. <strong>AND Patterns</strong>",id:"8-and-patterns",level:3},{value:"<strong>Guards in Match-Case</strong>",id:"guards-in-match-case",level:2},{value:"<strong>Nested Patterns</strong>",id:"nested-patterns",level:2},{value:"<strong>Combining Patterns</strong>",id:"combining-patterns",level:2},{value:"<strong>Advanced Use Cases</strong>",id:"advanced-use-cases",level:2},{value:"<strong>Performance Considerations</strong>",id:"performance-considerations",level:2},{value:"<strong>Best Practices</strong>",id:"best-practices",level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsxs)(n.h1,{id:"match-case-statement",children:[(0,a.jsx)(n.code,{children:"match-case"})," Statement"]})}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:(0,a.jsx)(n.strong,{children:"Introduction"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"match-case"})," statement, introduced in Python 3.10, is a powerful and flexible control structure that allows for pattern matching, enabling more expressive and concise code. It is somewhat analogous to the ",(0,a.jsx)(n.code,{children:"switch-case"})," statements found in other programming languages like C, C++, and Java but extends far beyond simple value matching. Python's ",(0,a.jsx)(n.code,{children:"match-case"})," provides capabilities such as destructuring, type checks, and combining patterns with conditional logic, making it a versatile tool for handling complex data structures and decision-making processes."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-syntax",children:(0,a.jsx)(n.strong,{children:"Basic Syntax"})}),"\n",(0,a.jsxs)(n.p,{children:["The basic structure of a ",(0,a.jsx)(n.code,{children:"match-case"})," statement is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"match subject:\n    case pattern1:\n        # Action for pattern1\n    case pattern2:\n        # Action for pattern2\n    case _:\n        # Default action if no other pattern matches\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"match subject:"})}),": This is the expression or value being matched against the patterns. The ",(0,a.jsx)(n.code,{children:"subject"})," can be any Python object."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"case pattern:"})}),": This specifies a pattern to match against the subject. If the pattern matches, the associated block of code is executed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"case _:"})}),": The underscore (",(0,a.jsx)(n.code,{children:"_"}),") serves as a wildcard or default case that matches anything not captured by previous patterns, similar to a ",(0,a.jsx)(n.code,{children:"default"})," case in other languages."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"pattern-types",children:(0,a.jsx)(n.strong,{children:"Pattern Types"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"match-case"})," statement supports various types of patterns, which can be combined and nested to match complex data structures."]}),"\n",(0,a.jsxs)(n.h3,{id:"1-literal-patterns",children:["1. ",(0,a.jsx)(n.strong,{children:"Literal Patterns"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Matches exact values such as integers, strings, or booleans."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def weekday_or_weekend(day):\n    match day:\n        case "Saturday" | "Sunday":\n            return "Weekend"\n        case "Monday":\n            return "Weekday"\n        case _:\n            return "Unknown day"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"2-variable-patterns",children:["2. ",(0,a.jsx)(n.strong,{children:"Variable Patterns"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Matches any value and assigns it to a variable."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def describe_value(value):\n    match value:\n        case 0:\n            return "Zero"\n        case x:\n            return f"Got a value: {x}"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"3-sequence-patterns",children:["3. ",(0,a.jsx)(n.strong,{children:"Sequence Patterns"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Matches sequences like lists or tuples, and can also destructure them."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def process_points(points):\n    match points:\n        case [x, y]:\n            return f"Two points: {x}, {y}"\n        case [x, y, z]:\n            return f"Three points: {x}, {y}, {z}"\n        case _:\n            return "Unknown sequence"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"4-mapping-patterns-dictionaries",children:["4. ",(0,a.jsx)(n.strong,{children:"Mapping Patterns (Dictionaries)"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Matches dictionaries and allows extraction of values by key."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def handle_command(command):\n    match command:\n        case {"action": "move", "direction": direction}:\n            return f"Moving {direction}"\n        case {"action": "say", "message": message}:\n            return f"Message: {message}"\n        case _:\n            return "Unknown command"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"5-class-patterns",children:["5. ",(0,a.jsx)(n.strong,{children:"Class Patterns"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Matches instances of classes and can destructure attributes."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\ndef locate_point(point):\n    match point:\n        case Point(x, y):\n            return f"Point at ({x}, {y})"\n        case _:\n            return "Not a point"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"6-wildcard-pattern",children:["6. ",(0,a.jsx)(n.strong,{children:"Wildcard Pattern"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Represented by ",(0,a.jsx)(n.code,{children:"_"}),", matches anything and is typically used as a default case."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def process_value(value):\n    match value:\n        case 0:\n            return "Zero"\n        case _:\n            return "Non-zero value"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"7-or-patterns-alternatives",children:["7. ",(0,a.jsx)(n.strong,{children:"OR Patterns (Alternatives)"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Allows matching against multiple patterns with a single case."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def weekend_or_weekday(day):\n    match day:\n        case "Saturday" | "Sunday":\n            return "Weekend"\n        case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":\n            return "Weekday"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"8-and-patterns",children:["8. ",(0,a.jsx)(n.strong,{children:"AND Patterns"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['While Python doesn\'t have a direct "AND" pattern, complex conditions can be handled using guard clauses (conditional ',(0,a.jsx)(n.code,{children:"if"})," expressions) within patterns."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"guards-in-match-case",children:(0,a.jsx)(n.strong,{children:"Guards in Match-Case"})}),"\n",(0,a.jsxs)(n.p,{children:["Guards add conditional logic to a ",(0,a.jsx)(n.code,{children:"case"})," statement, allowing you to specify additional conditions that must be true for the pattern to match. Guards are written using the ",(0,a.jsx)(n.code,{children:"if"})," keyword after the pattern."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def categorize_number(number):\n    match number:\n        case x if x < 0:\n            return "Negative number"\n        case x if x == 0:\n            return "Zero"\n        case x if x > 0:\n            return "Positive number"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Execution Flow with Guards:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The pattern is checked first."}),"\n",(0,a.jsx)(n.li,{children:"If the pattern matches, the guard condition is evaluated."}),"\n",(0,a.jsxs)(n.li,{children:["If the guard condition is ",(0,a.jsx)(n.code,{children:"True"}),", the associated block is executed."]}),"\n",(0,a.jsxs)(n.li,{children:["If the guard condition is ",(0,a.jsx)(n.code,{children:"False"}),", the match continues to the next case."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"nested-patterns",children:(0,a.jsx)(n.strong,{children:"Nested Patterns"})}),"\n",(0,a.jsx)(n.p,{children:"Nested patterns allow you to match and destructure data within complex, nested data structures. This is particularly useful when working with data that includes multiple layers of nesting, such as dictionaries containing lists, or tuples within tuples."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def analyze_nested_data(data):\n    match data:\n        case {"user": {"name": name, "details": {"age": age, "location": location}}}:\n            return f"{name} is {age} years old and lives in {location}."\n        case _:\n            return "Unknown data format"\n\ndata = {\n    "user": {\n        "name": "Alice",\n        "details": {\n            "age": 30,\n            "location": "Wonderland"\n        }\n    }\n}\n\nprint(analyze_nested_data(data))  # Output: Alice is 30 years old and lives in Wonderland.\n'})}),"\n",(0,a.jsx)(n.h2,{id:"combining-patterns",children:(0,a.jsx)(n.strong,{children:"Combining Patterns"})}),"\n",(0,a.jsx)(n.p,{children:"Patterns can be combined in various ways to create complex matching conditions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Sequence Matching:"})," Matching lists or tuples with specific lengths or structures."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Mapping Matching:"})," Matching dictionaries with certain keys or specific key-value pairs."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Class Instance Matching:"})," Matching objects of specific types and destructuring their attributes."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def complex_match(data):\n    match data:\n        case [x, y] if x == y:\n            return f"Two equal elements: {x} and {y}"\n        case {"type": "circle", "radius": r}:\n            return f"Circle with radius {r}"\n        case Point(x, y) if x == y:\n            return f"Point on diagonal: ({x}, {y})"\n        case _:\n            return "No match found"\n\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nprint(complex_match([10, 10]))           # Output: Two equal elements: 10 and 10\nprint(complex_match({"type": "circle", "radius": 5}))  # Output: Circle with radius 5\nprint(complex_match(Point(4, 4)))        # Output: Point on diagonal: (4, 4)\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"advanced-use-cases",children:(0,a.jsx)(n.strong,{children:"Advanced Use Cases"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Handling Complex Input Data:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def handle_request(request):\n    match request:\n        case {"type": "login", "user": user}:\n            return f"Logging in user: {user}"\n        case {"type": "logout", "user": user}:\n            return f"Logging out user: {user}"\n        case {"type": "data", "payload": payload} if isinstance(payload, list):\n            return f"Processing data list with {len(payload)} items."\n        case {"type": "data", "payload": payload} if isinstance(payload, dict):\n            return f"Processing data dict with keys: {\', \'.join(payload.keys())}"\n        case _:\n            return "Unknown request type"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Error Handling:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def handle_response(response):\n    match response:\n        case {"status": 200, "data": data}:\n            return f"Success: {data}"\n        case {"status": 404, "error": error}:\n            return f"Not Found: {error}"\n        case {"status": 500, "error": error}:\n            return f"Server Error: {error}"\n        case _:\n            return "Unknown status"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"performance-considerations",children:(0,a.jsx)(n.strong,{children:"Performance Considerations"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Efficiency:"})," The ",(0,a.jsx)(n.code,{children:"match-case"})," statement is optimized for pattern matching, making it efficient even for complex conditions."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Readability:"})," While powerful, complex ",(0,a.jsx)(n.code,{children:"match"})," statements can become difficult to read if overused or not well-structured. It is advisable to balance complexity with clarity."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"best-practices",children:(0,a.jsx)(n.strong,{children:"Best Practices"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Use Guards Wisely:"})," Use guards to handle edge cases or to add conditions to patterns without cluttering the pattern itself."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Leverage Destructuring:"})," Use pattern matching to destructure complex data structures for more readable and concise code."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:["Fallback with Wildcard (",(0,a.jsx)(n.code,{children:"_"}),"):"]})," Always include a fallback case using ",(0,a.jsx)(n.code,{children:"_"})," to handle unexpected or unmatched cases."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Avoid Overcomplication:"})," Keep ",(0,a.jsx)(n.code,{children:"match-case"})," statements as simple as possible. Break down complex logic into smaller, more manageable pieces if necessary."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:(0,a.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"match-case"})," statement"]}),"\n",(0,a.jsxs)(n.p,{children:["in Python 3.10 and later versions is a powerful tool that provides flexibility and expressiveness far beyond traditional conditional statements. By understanding and effectively using the different types of patterns, guards, and combining patterns, you can write more readable, maintainable, and concise Python code. Whether you are working with simple values or complex data structures, ",(0,a.jsx)(n.code,{children:"match-case"})," allows you to handle multiple scenarios with elegance and efficiency."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);