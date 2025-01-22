"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[2543],{3397:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"guide/Tips-and-Tricks/granularity-cohesion","title":"granularity-cohesion","description":"Granularity and Cohesion in Programming","source":"@site/docs/guide/18_Tips-and-Tricks/granularity-cohesion.md","sourceDirName":"guide/18_Tips-and-Tricks","slug":"/guide/Tips-and-Tricks/granularity-cohesion","permalink":"/Python/docs/guide/Tips-and-Tricks/granularity-cohesion","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/18_Tips-and-Tricks/granularity-cohesion.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"5 Fun Python Easter Eggs","permalink":"/Python/docs/guide/Tips-and-Tricks/easter-eggs"},"next":{"title":"\\"itemgetter\\"","permalink":"/Python/docs/guide/Tips-and-Tricks/itemgetter"}}');var a=o(4848),i=o(8453);const r={},t=void 0,d={},l=[{value:"Granularity and Cohesion in Programming",id:"granularity-and-cohesion-in-programming",level:3},{value:"1. Granularity",id:"1-granularity",level:4},{value:"2. Cohesion",id:"2-cohesion",level:4},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"granularity-and-cohesion-in-programming",children:"Granularity and Cohesion in Programming"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Granularity"})," and ",(0,a.jsx)(n.strong,{children:"cohesion"})," are key concepts in software design that influence how you structure your code. They impact readability, maintainability, and the overall design quality of your software."]}),"\n",(0,a.jsx)(n.h4,{id:"1-granularity",children:"1. Granularity"}),"\n",(0,a.jsx)(n.p,{children:'Granularity refers to the level of detail or size of the components in your software. It can apply to functions, modules, classes, or even entire services. Granularity is often discussed in terms of "fine-grained" or "coarse-grained" components:'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Fine-grained"})," components are small, with very specific responsibilities."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Coarse-grained"})," components are larger, with broader responsibilities."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example:"}),"\nConsider a library management system."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Fine-grained approach:"})," You might have individual methods like ",(0,a.jsx)(n.code,{children:"addBookToCatalog()"}),", ",(0,a.jsx)(n.code,{children:"removeBookFromCatalog()"}),", ",(0,a.jsx)(n.code,{children:"updateBookDetails()"}),", etc. Each function does one specific task."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def addBookToCatalog(book):\n    # code to add a book to the catalog\n\ndef removeBookFromCatalog(bookId):\n    # code to remove a book from the catalog\n\ndef updateBookDetails(bookId, details):\n    # code to update book details\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Coarse-grained approach:"})," You might have a single method ",(0,a.jsx)(n.code,{children:"manageCatalog(action, book)"})," that handles multiple actions such as adding, removing, or updating books."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def manageCatalog(action, book=None, bookId=None, details=None):\n    if action == "add":\n        # code to add a book to the catalog\n    elif action == "remove":\n        # code to remove a book from the catalog\n    elif action == "update":\n        # code to update book details\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Pros and Cons:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Fine-grained:"})," Easier to test and reuse but may lead to many small functions, making the code harder to follow."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Coarse-grained:"})," Easier to manage as a whole but can become complex and harder to test."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"2-cohesion",children:"2. Cohesion"}),"\n",(0,a.jsx)(n.p,{children:"Cohesion refers to how closely related the responsibilities of a single module or class are. High cohesion means that the components of a module or class are highly related and focused on a single task or purpose."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"High cohesion:"})," All elements within a module or class work together to achieve a common goal. This usually makes the code easier to maintain and understand."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Low cohesion:"})," The elements within a module or class are not closely related, which can lead to confusion and difficulty in maintaining the code."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example:"}),"\nLet\u2019s continue with the library management system."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"High cohesion:"})," You create a ",(0,a.jsx)(n.code,{children:"CatalogManager"})," class that focuses only on catalog management\u2014adding, removing, updating books."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class CatalogManager:\n    def addBook(self, book):\n        # code to add a book to the catalog\n\n    def removeBook(self, bookId):\n        # code to remove a book from the catalog\n\n    def updateBookDetails(self, bookId, details):\n        # code to update book details\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Low cohesion:"})," You create a ",(0,a.jsx)(n.code,{children:"LibraryManager"})," class that handles catalog management, member management, and loan processing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class LibraryManager:\n    def addBook(self, book):\n        # code to add a book to the catalog\n\n    def removeBook(self, bookId):\n        # code to remove a book from the catalog\n\n    def updateBookDetails(self, bookId, details):\n        # code to update book details\n\n    def registerMember(self, member):\n        # code to register a new member\n\n    def processLoan(self, memberId, bookId):\n        # code to process a loan\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Pros and Cons:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"High cohesion:"})," Easier to understand, test, and maintain. Changes to one aspect of the system (e.g., catalog management) don\u2019t affect unrelated parts."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Low cohesion:"}),' Can lead to "god classes" that do too much, making the code harder to maintain and more prone to errors when changes are needed.']}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Granularity"})," helps determine how you break down your system into components. Fine-grained components are more specific and easier to reuse but can make your system more complex. Coarse-grained components are broader and simpler to manage but can become monolithic."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Cohesion"})," ensures that your components are well-defined with a clear purpose. High cohesion is desirable because it makes your code more maintainable and understandable."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Balancing granularity and cohesion is key to designing robust, maintainable software. Fine-grained components with high cohesion often result in the best design, but it\u2019s important to strike the right balance based on the specific needs of your project."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>t});var s=o(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);