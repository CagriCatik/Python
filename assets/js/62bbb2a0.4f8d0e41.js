"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[7232],{9508:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tips-and-tricks/common-errors","title":"10 Common Python Errors","description":"Introduction","source":"@site/docs/tips-and-tricks/10-common-errors.md","sourceDirName":"tips-and-tricks","slug":"/tips-and-tricks/common-errors","permalink":"/Python/docs/tips-and-tricks/common-errors","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tips-and-tricks/10-common-errors.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{},"sidebar":"tipsAndTricksSidebar","previous":{"title":"Python\'s 5 Worst Features","permalink":"/Python/docs/tips-and-tricks/worst-Features"},"next":{"title":"20 Essential Tips & Tricks in Python","permalink":"/Python/docs/tips-and-tricks/tips-and-tricks"}}');var o=r(4848),s=r(8453);const t={},l="10 Common Python Errors",a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"1. AttributeError",id:"1-attributeerror",level:2},{value:"Description:",id:"description",level:3},{value:"Example:",id:"example",level:3},{value:"Explanation:",id:"explanation",level:3},{value:"Solution:",id:"solution",level:3},{value:"2. ImportError and ModuleNotFoundError",id:"2-importerror-and-modulenotfounderror",level:2},{value:"Description:",id:"description-1",level:3},{value:"Example:",id:"example-1",level:3},{value:"Explanation:",id:"explanation-1",level:3},{value:"Solution:",id:"solution-1",level:3},{value:"3. IndexError",id:"3-indexerror",level:2},{value:"Description:",id:"description-2",level:3},{value:"Example:",id:"example-2",level:3},{value:"Explanation:",id:"explanation-2",level:3},{value:"Solution:",id:"solution-2",level:3},{value:"4. KeyError",id:"4-keyerror",level:2},{value:"Description:",id:"description-3",level:3},{value:"Example:",id:"example-3",level:3},{value:"Explanation:",id:"explanation-3",level:3},{value:"Solution:",id:"solution-3",level:3},{value:"5. NameError",id:"5-nameerror",level:2},{value:"Description:",id:"description-4",level:3},{value:"Example:",id:"example-4",level:3},{value:"Explanation:",id:"explanation-4",level:3},{value:"Solution:",id:"solution-4",level:3},{value:"6. NotImplementedError",id:"6-notimplementederror",level:2},{value:"Description:",id:"description-5",level:3},{value:"Example:",id:"example-5",level:3},{value:"Explanation:",id:"explanation-5",level:3},{value:"Solution:",id:"solution-5",level:3},{value:"7. StopIteration",id:"7-stopiteration",level:2},{value:"Description:",id:"description-6",level:3},{value:"Example:",id:"example-6",level:3},{value:"Explanation:",id:"explanation-6",level:3},{value:"Solution:",id:"solution-6",level:3},{value:"8. SyntaxError",id:"8-syntaxerror",level:2},{value:"Description:",id:"description-7",level:3},{value:"Example:",id:"example-7",level:3},{value:"Explanation:",id:"explanation-7",level:3},{value:"Solution:",id:"solution-7",level:3},{value:"9. IndentationError",id:"9-indentationerror",level:2},{value:"Description:",id:"description-8",level:3},{value:"Example:",id:"example-8",level:3},{value:"Explanation:",id:"explanation-8",level:3},{value:"Solution:",id:"solution-8",level:3},{value:"10. ValueError and TypeError",id:"10-valueerror-and-typeerror",level:2},{value:"Description:",id:"description-9",level:3},{value:"Examples:",id:"examples",level:3},{value:"Explanation:",id:"explanation-9",level:3},{value:"Solution:",id:"solution-9",level:3},{value:"Explanation:",id:"explanation-10",level:3},{value:"Solution:",id:"solution-10",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"10-common-python-errors",children:"10 Common Python Errors"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Errors are a fundamental part of programming. They provide critical feedback on what went wrong in your code, guiding you toward better practices and understanding. This tutorial explores 10 common Python errors, offering improved examples and explanations to help you understand the cause of these errors and how to prevent or resolve them."}),"\n",(0,o.jsx)(n.h2,{id:"1-attributeerror",children:"1. AttributeError"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.code,{children:"AttributeError"})," occurs when you try to access an attribute or method that an object does not possess."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class Car:\n    def __init__(self, brand: str):\n        self.brand = brand\n\ncar = Car("Volvo")\nprint(car.fuel_type)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["Here, we defined a ",(0,o.jsx)(n.code,{children:"Car"})," class with a single attribute, ",(0,o.jsx)(n.code,{children:"brand"}),". When we attempt to access ",(0,o.jsx)(n.code,{children:"car.fuel_type"}),", Python raises an ",(0,o.jsx)(n.code,{children:"AttributeError"})," because the ",(0,o.jsx)(n.code,{children:"Car"})," class does not have a ",(0,o.jsx)(n.code,{children:"fuel_type"})," attribute. This error commonly occurs due to typos or assumptions that an attribute exists when it does not."]}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution:"}),"\n",(0,o.jsxs)(n.p,{children:["Ensure that the attribute exists before trying to access it. If you need a ",(0,o.jsx)(n.code,{children:"fuel_type"})," attribute, define it in the class:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class Car:\n    def __init__(self, brand: str, fuel_type: str):\n        self.brand = brand\n        self.fuel_type = fuel_type\n\ncar = Car("Volvo", "Diesel")\nprint(car.fuel_type)  # Outputs: Diesel\n'})}),"\n",(0,o.jsxs)(n.p,{children:["By initializing ",(0,o.jsx)(n.code,{children:"fuel_type"}),", we avoid the ",(0,o.jsx)(n.code,{children:"AttributeError"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"2-importerror-and-modulenotfounderror",children:"2. ImportError and ModuleNotFoundError"}),"\n",(0,o.jsx)(n.h3,{id:"description-1",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ImportError"})," occurs when an import statement cannot find the module or object you are trying to import. ",(0,o.jsx)(n.code,{children:"ModuleNotFoundError"})," is a specific subclass of ",(0,o.jsx)(n.code,{children:"ImportError"})," that occurs when the module itself is not found."]}),"\n",(0,o.jsx)(n.h3,{id:"example-1",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import math\nfrom math import sqrt, pow\nfrom math import imaginary_function  # This will raise an ImportError\n"})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-1",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"math"})," module is imported correctly, and functions like ",(0,o.jsx)(n.code,{children:"sqrt"})," and ",(0,o.jsx)(n.code,{children:"pow"})," are valid. However, ",(0,o.jsx)(n.code,{children:"imaginary_function"})," does not exist in the ",(0,o.jsx)(n.code,{children:"math"})," module, leading to an ",(0,o.jsx)(n.code,{children:"ImportError"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"ModuleNotFoundError"})," would occur if you try to import a module that isn't installed or available in your Python environment."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import nonexistent_module  # Raises ModuleNotFoundError\n"})}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Verify the availability and correctness of the module or object you are importing."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"dir(module_name)"})," to inspect the contents of a module if unsure."]}),"\n",(0,o.jsxs)(n.li,{children:["Ensure that any external module is installed using ",(0,o.jsx)(n.code,{children:"pip install module_name"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from math import sqrt, pow  # Correct import\n"})}),"\n",(0,o.jsx)(n.h2,{id:"3-indexerror",children:"3. IndexError"}),"\n",(0,o.jsx)(n.h3,{id:"description-2",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.code,{children:"IndexError"})," occurs when you try to access an element in a list or tuple using an index that is out of range."]}),"\n",(0,o.jsx)(n.h3,{id:"example-2",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'names = ["Alice", "Bob", "Charlie"]\nprint(names[3])  # This will raise an IndexError\n'})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-2",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["The list ",(0,o.jsx)(n.code,{children:"names"})," has indices ",(0,o.jsx)(n.code,{children:"0"}),", ",(0,o.jsx)(n.code,{children:"1"}),", and ",(0,o.jsx)(n.code,{children:"2"}),', corresponding to "Alice", "Bob", and "Charlie". Attempting to access ',(0,o.jsx)(n.code,{children:"names[3]"})," raises an ",(0,o.jsx)(n.code,{children:"IndexError"})," because there is no element at index ",(0,o.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-2",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Always check the length of the list before accessing elements by index, or use try-except blocks to handle potential errors."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'if len(names) > 3:\n    print(names[3])\nelse:\n    print("Index out of range")\n'})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, using negative indices can help if you need to access elements from the end of the list:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"print(names[-1])  # Outputs: Charlie\n"})}),"\n",(0,o.jsx)(n.h2,{id:"4-keyerror",children:"4. KeyError"}),"\n",(0,o.jsx)(n.h3,{id:"description-3",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"KeyError"})," occurs when trying to access a dictionary key that does not exist."]}),"\n",(0,o.jsx)(n.h3,{id:"example-3",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'person = {"name": "John", "age": 30}\nprint(person["address"])  # Raises a KeyError\n'})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-3",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["In this dictionary, there are only two keys: ",(0,o.jsx)(n.code,{children:'"name"'})," and ",(0,o.jsx)(n.code,{children:'"age"'}),". Attempting to access ",(0,o.jsx)(n.code,{children:'"address"'})," results in a ",(0,o.jsx)(n.code,{children:"KeyError"})," because that key does not exist in the dictionary."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-3",children:"Solution:"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:".get()"})," method to avoid ",(0,o.jsx)(n.code,{children:"KeyError"})," or check if the key exists using the ",(0,o.jsx)(n.code,{children:"in"})," operator."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'print(person.get("address", "Address not available"))  # Outputs: Address not available\n'})}),"\n",(0,o.jsx)(n.p,{children:"Or:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'if "address" in person:\n    print(person["address"])\nelse:\n    print("Key not found")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"5-nameerror",children:"5. NameError"}),"\n",(0,o.jsx)(n.h3,{id:"description-4",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"NameError"})," occurs when a variable or function name is not recognized because it has not been defined or is out of scope."]}),"\n",(0,o.jsx)(n.h3,{id:"example-4",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def calculate_total(price, tax_rate):\n    total = price + (price * tax_rate)\n    return total\n\nprint(total)  # Raises a NameError\n"})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-4",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["Here, ",(0,o.jsx)(n.code,{children:"total"})," is defined within the scope of the ",(0,o.jsx)(n.code,{children:"calculate_total"})," function. Attempting to print ",(0,o.jsx)(n.code,{children:"total"})," outside the function results in a ",(0,o.jsx)(n.code,{children:"NameError"})," because ",(0,o.jsx)(n.code,{children:"total"})," is not recognized in the global scope."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-4",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Ensure that the variable or function is defined before use and within the correct scope."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"total = calculate_total(100, 0.05)\nprint(total)  # Outputs: 105.0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"6-notimplementederror",children:"6. NotImplementedError"}),"\n",(0,o.jsx)(n.h3,{id:"description-5",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"NotImplementedError"})," is a special exception used as a placeholder for methods that must be overridden in derived classes. It is commonly used in abstract base classes."]}),"\n",(0,o.jsx)(n.h3,{id:"example-5",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class Animal:\n    def make_sound(self):\n        raise NotImplementedError("Subclass must implement this method")\n\nclass Dog(Animal):\n    pass\n\ndog = Dog()\ndog.make_sound()  # Raises NotImplementedError\n'})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-5",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"Animal"})," class, ",(0,o.jsx)(n.code,{children:"make_sound"})," is intended to be implemented by any subclass. If the subclass does not override this method, calling it will raise a ",(0,o.jsx)(n.code,{children:"NotImplementedError"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-5",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Implement the method in the subclass:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class Dog(Animal):\n    def make_sound(self):\n        return "Bark"\n\ndog = Dog()\nprint(dog.make_sound())  # Outputs: Bark\n'})}),"\n",(0,o.jsx)(n.h2,{id:"7-stopiteration",children:"7. StopIteration"}),"\n",(0,o.jsx)(n.h3,{id:"description-6",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"StopIteration"})," exception is raised to signal that an iterator has no more items to yield."]}),"\n",(0,o.jsx)(n.h3,{id:"example-6",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def simple_generator():\n    yield 1\n    yield 2\n\ngen = simple_generator()\nprint(next(gen))  # Outputs: 1\nprint(next(gen))  # Outputs: 2\nprint(next(gen))  # Raises StopIteration\n"})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-6",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["The generator ",(0,o.jsx)(n.code,{children:"simple_generator"})," yields two values. After these values are exhausted, calling ",(0,o.jsx)(n.code,{children:"next()"})," again raises ",(0,o.jsx)(n.code,{children:"StopIteration"}),", signaling that the generator is done."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-6",children:"Solution:"}),"\n",(0,o.jsxs)(n.p,{children:["Handle ",(0,o.jsx)(n.code,{children:"StopIteration"})," in loops or use a ",(0,o.jsx)(n.code,{children:"for"})," loop that automatically handles the exception."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"gen = simple_generator()\nfor value in gen:\n    print(value)  # Outputs: 1, then 2\n"})}),"\n",(0,o.jsx)(n.h2,{id:"8-syntaxerror",children:"8. SyntaxError"}),"\n",(0,o.jsx)(n.h3,{id:"description-7",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"SyntaxError"})," occurs when Python encounters code that is not valid syntactically."]}),"\n",(0,o.jsx)(n.h3,{id:"example-7",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'if True\n    print("Hello, World!")  # Raises a SyntaxError\n'})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-7",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["The code above is missing a colon (",(0,o.jsx)(n.code,{children:":"}),") after the ",(0,o.jsx)(n.code,{children:"if"})," statement, which is required for proper syntax in Python."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-7",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Ensure your code follows Python\u2019s syntax rules."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'if True:\n    print("Hello, World!")  # Outputs: Hello, World!\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Common causes of ",(0,o.jsx)(n.code,{children:"SyntaxError"})," include:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Missing colons after statements like ",(0,o.jsx)(n.code,{children:"if"}),", ",(0,o.jsx)(n.code,{children:"for"}),", ",(0,o.jsx)(n.code,{children:"while"}),", and ",(0,o.jsx)(n.code,{children:"def"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Unclosed parentheses or brackets."}),"\n",(0,o.jsx)(n.li,{children:"Using reserved keywords improperly."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"9-indentationerror",children:"9. IndentationError"}),"\n",(0,o.jsx)(n.h3,{id:"description-8",children:"Description:"}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.code,{children:"IndentationError"})," occurs when the indentation of your code does not conform to Python's syntax rules."]}),"\n",(0,o.jsx)(n.h3,{id:"example-8",children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def greet():\nprint("Hello, World!")  # Raises an IndentationError\n'})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-8",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["In Python, code blocks must be indented consistently. The function ",(0,o.jsx)(n.code,{children:"greet"})," contains a statement that is not indented, causing an ",(0,o.jsx)(n.code,{children:"IndentationError"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-8",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Properly indent code blocks to indicate the code hierarchy."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def greet():\n    print("Hello, World!")  # Outputs: Hello, World!\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Common causes of ",(0,o.jsx)(n.code,{children:"IndentationError"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Mixing spaces and tabs for indentation."}),"\n",(0,o.jsx)(n.li,{children:"Incorrect indentation levels."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"10-valueerror-and-typeerror",children:"10. ValueError and TypeError"}),"\n",(0,o.jsx)(n.h3,{id:"description-9",children:"Description:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"ValueError"}),": Raised when a function receives an argument of the correct type but with an inappropriate value."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"TypeError"}),": Raised when an operation or function is applied to an object of an inappropriate type."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"ValueError:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'int("ten")  # Raises ValueError\n'})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-9",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"int"})," function expects a string that represents an integer, like ",(0,o.jsx)(n.code,{children:'"10"'}),". However, ",(0,o.jsx)(n.code,{children:'"ten"'})," is a non-numeric string, leading to a ",(0,o.jsx)(n.code,{children:"ValueError"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-9",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Ensure that the value passed to the function is appropriate:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'int("10")  # Outputs: 10\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"TypeError:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"len(5)  # Raises TypeError\n"})}),"\n",(0,o.jsx)(n.h3,{id:"explanation-10",children:"Explanation:"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"len"})," function expects a sequence (like a list or string) as an"]}),"\n",(0,o.jsxs)(n.p,{children:["argument. Passing an integer to ",(0,o.jsx)(n.code,{children:"len"})," raises a ",(0,o.jsx)(n.code,{children:"TypeError"})," because ",(0,o.jsx)(n.code,{children:"len"})," cannot be applied to an integer."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-10",children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"Ensure that the type of the argument is correct:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'len("hello")  # Outputs: 5\n'})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Understanding these common Python errors is crucial for efficient debugging and robust programming. By recognizing the patterns and causes of these errors, developers can swiftly correct issues and prevent them from recurring. As you continue to develop in Python, keep these explanations in mind to help streamline your debugging process and improve your code's quality."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var i=r(6540);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);