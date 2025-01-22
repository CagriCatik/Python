"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[1744],{7849:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"rest-api/CRUD","title":"CRUD","description":"Overview","source":"@site/docs/rest-api/CRUD.md","sourceDirName":"rest-api","slug":"/rest-api/CRUD","permalink":"/Python/docs/rest-api/CRUD","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rest-api/CRUD.md","tags":[],"version":"current","frontMatter":{},"sidebar":"restAPISidebar","previous":{"title":"Interacting with REST APIs and Python","permalink":"/Python/docs/rest-api/Building-REST-API/08"}}');var i=s(4848),a=s(8453);const l={},t="CRUD",c={},o=[{value:"Overview",id:"overview",level:2},{value:"1. <strong>GET: Retrieve Data from a Server</strong>",id:"1-get-retrieve-data-from-a-server",level:2},{value:"2. <strong>POST: Send New Data to the Server</strong>",id:"2-post-send-new-data-to-the-server",level:2},{value:"3. <strong>PUT: Update Existing Data on the Server</strong>",id:"3-put-update-existing-data-on-the-server",level:2},{value:"4. <strong>PATCH: Partially Update Data on the Server</strong>",id:"4-patch-partially-update-data-on-the-server",level:2},{value:"5. <strong>DELETE: Remove Data from the Server</strong>",id:"5-delete-remove-data-from-the-server",level:2}];function d(e){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"crud",children:"CRUD"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["A REST API (Representational State Transfer Application Programming Interface) is a standardized architecture for building and interacting with web services. RESTful APIs rely on a stateless, client-server, and cacheable communication protocol, typically HTTP. This documentation provides a comprehensive guide on the primary HTTP methods used in REST APIs: ",(0,i.jsx)(n.strong,{children:"GET"}),", ",(0,i.jsx)(n.strong,{children:"POST"}),", ",(0,i.jsx)(n.strong,{children:"PUT"}),", ",(0,i.jsx)(n.strong,{children:"PATCH"}),", and ",(0,i.jsx)(n.strong,{children:"DELETE"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create"})," (typically associated with ",(0,i.jsx)(n.strong,{children:"POST"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Read"})," (typically associated with ",(0,i.jsx)(n.strong,{children:"GET"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update"})," (typically associated with ",(0,i.jsx)(n.strong,{children:"PUT"})," or ",(0,i.jsx)(n.strong,{children:"PATCH"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delete"})," (typically associated with ",(0,i.jsx)(n.strong,{children:"DELETE"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"1-get-retrieve-data-from-a-server",children:["1. ",(0,i.jsx)(n.strong,{children:"GET: Retrieve Data from a Server"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.code,{children:"GET"})," method is used to retrieve data from a server. It requests data from a specified resource without making any modifications to the resource."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Characteristics"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Safe"}),": The ",(0,i.jsx)(n.code,{children:"GET"})," method does not alter any server state. It is considered safe because it only retrieves data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Idempotent"}),": Multiple identical ",(0,i.jsx)(n.code,{children:"GET"})," requests will produce the same result and have no side effects."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cacheable"}),": Responses to ",(0,i.jsx)(n.code,{children:"GET"})," requests can be cached for improved performance."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieving a list of resources (e.g., a list of users)."}),"\n",(0,i.jsx)(n.li,{children:"Retrieving a specific resource by its ID (e.g., a single user by ID)."}),"\n",(0,i.jsx)(n.li,{children:"Filtering and searching resources based on query parameters (e.g., filtering users by role or status)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 1"}),": Retrieve all users"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"GET /api/users HTTP/1.1\nHost: example.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "name": "John Doe",\n    "email": "john.doe@example.com",\n    "role": "admin"\n  },\n  {\n    "id": 2,\n    "name": "Jane Smith",\n    "email": "jane.smith@example.com",\n    "role": "user"\n  }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 2"}),": Retrieve a specific user by ID"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"GET /api/users/1 HTTP/1.1\nHost: example.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "name": "John Doe",\n  "email": "john.doe@example.com",\n  "role": "admin",\n  "created_at": "2024-08-01T10:20:30Z"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 3"}),": Retrieve users filtered by role"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"GET /api/users?role=admin HTTP/1.1\nHost: example.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "name": "John Doe",\n    "email": "john.doe@example.com",\n    "role": "admin"\n  }\n]\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"2-post-send-new-data-to-the-server",children:["2. ",(0,i.jsx)(n.strong,{children:"POST: Send New Data to the Server"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.code,{children:"POST"})," method is used to send new data to the server. It is often used to create a new resource on the server."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Characteristics"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Non-idempotent"}),": Multiple identical ",(0,i.jsx)(n.code,{children:"POST"})," requests can result in the creation of multiple resources with different identifiers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Not Cacheable"}),": Typically, ",(0,i.jsx)(n.code,{children:"POST"})," requests are not cached as they alter the state of the server."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creating a new resource (e.g., a new user or a new item in a list)."}),"\n",(0,i.jsx)(n.li,{children:"Submitting data to be processed (e.g., form submissions, file uploads)."}),"\n",(0,i.jsx)(n.li,{children:"Bulk creation of resources by sending an array of data objects."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 1"}),": Create a new user"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'POST /api/users HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\n  "name": "John Doe",\n  "email": "john.doe@example.com",\n  "password": "SecurePassword123",\n  "role": "user"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": 3,\n  "name": "John Doe",\n  "email": "john.doe@example.com",\n  "role": "user",\n  "created_at": "2024-08-12T12:34:56Z"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 2"}),": Bulk create users"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'POST /api/users/bulk HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n[\n  {\n    "name": "Alice Johnson",\n    "email": "alice.johnson@example.com",\n    "password": "SecurePassword456",\n    "role": "user"\n  },\n  {\n    "name": "Bob Brown",\n    "email": "bob.brown@example.com",\n    "password": "SecurePassword789",\n    "role": "user"\n  }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": 4,\n    "name": "Alice Johnson",\n    "email": "alice.johnson@example.com",\n    "role": "user",\n    "created_at": "2024-08-12T12:40:00Z"\n  },\n  {\n    "id": 5,\n    "name": "Bob Brown",\n    "email": "bob.brown@example.com",\n    "role": "user",\n    "created_at": "2024-08-12T12:41:00Z"\n  }\n]\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"3-put-update-existing-data-on-the-server",children:["3. ",(0,i.jsx)(n.strong,{children:"PUT: Update Existing Data on the Server"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.code,{children:"PUT"})," method is used to update an existing resource on the server. It typically requires sending the entire resource payload, replacing the existing resource with the new one."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Characteristics"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Idempotent"}),": Multiple identical ",(0,i.jsx)(n.code,{children:"PUT"})," requests will produce the same result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"May Not be Cacheable"}),": ",(0,i.jsx)(n.code,{children:"PUT"})," requests may or may not be cacheable, depending on the implementation."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updating an entire resource (e.g., changing the name and email of a user)."}),"\n",(0,i.jsx)(n.li,{children:"Replacing a resource entirely (e.g., replacing all fields of a user)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 1"}),": Update an existing user"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'PUT /api/users/1 HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\n  "name": "John Doe",\n  "email": "john.doe@newdomain.com",\n  "role": "admin"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "name": "John Doe",\n  "email": "john.doe@newdomain.com",\n  "role": "admin",\n  "updated_at": "2024-08-12T13:45:00Z"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 2"}),": Replace a user's details entirely"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'PUT /api/users/2 HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\n  "name": "Jane Doe",\n  "email": "jane.doe@newdomain.com",\n  "role": "user"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": 2,\n  "name": "Jane Doe",\n  "email": "jane.doe@newdomain.com",\n  "role": "user",\n  "updated_at": "2024-08-12T13:50:00Z"\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"4-patch-partially-update-data-on-the-server",children:["4. ",(0,i.jsx)(n.strong,{children:"PATCH: Partially Update Data on the Server"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.code,{children:"PATCH"})," method is used to make partial updates to an existing resource. Unlike ",(0,i.jsx)(n.code,{children:"PUT"}),", which replaces the entire resource, ",(0,i.jsx)(n.code,{children:"PATCH"})," allows modifying specific fields."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Characteristics"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Idempotent"}),": Multiple identical ",(0,i.jsx)(n.code,{children:"PATCH"})," requests will produce the same result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"May Not be Cacheable"}),": Similar to ",(0,i.jsx)(n.code,{children:"PUT"}),", ",(0,i.jsx)(n.code,{children:"PATCH"})," requests may or may not be cacheable."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updating specific fields of a resource (e.g., only changing the user's email)."}),"\n",(0,i.jsx)(n.li,{children:"Applying incremental updates (e.g., updating user status or adding tags)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 1"}),": Partially update a user's email"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'PATCH /api/users/1 HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\n  "email": "john.doe@newdomain.com"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "name": "John Doe",\n  "email": "john.doe@newdomain.com",\n  "role": "admin",\n  "updated_at": "2024-08-12T14:56:00Z"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 2"}),": Update a user's status"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'PATCH /api/users/1/status HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\n  "status": "inactive"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "name": "John Doe",\n  "status": "inactive",\n  "updated_at": "2024-08-12T15:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"5-delete-remove-data-from-the-server",children:["5. ",(0,i.jsx)(n.strong,{children:"DELETE: Remove Data from the Server"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.code,{children:"DELETE"})," method is used to remove a resource from the server. Once a resource is deleted, it is no longer available."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Characteristics"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Idempotent"}),": Multiple identical ",(0,i.jsx)(n.code,{children:"DELETE"})," requests will produce the same result (deleting the resource)."]}),"\n",(0,i.jsx)(n.li,{children:"**Not Cacheable"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["**: ",(0,i.jsx)(n.code,{children:"DELETE"})," requests are not cached because they alter the state of the server."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Removing a resource (e.g., deleting a user or an item)."}),"\n",(0,i.jsx)(n.li,{children:"Bulk deletion of resources using query parameters (e.g., deleting all inactive users)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 1"}),": Delete a specific user"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"DELETE /api/users/1 HTTP/1.1\nHost: example.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "message": "User successfully deleted"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example 2"}),": Delete multiple users based on status"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"DELETE /api/users?status=inactive HTTP/1.1\nHost: example.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "message": "Inactive users successfully deleted"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var r=s(6540);const i={},a=r.createContext(i);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);