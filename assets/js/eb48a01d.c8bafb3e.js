"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[850],{3630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guide/Unit-Testing/Fixtures","title":"Using Fixtures in Pytest for Unit Testing","description":"Introduction","source":"@site/docs/guide/14_Unit-Testing/02_Fixtures.md","sourceDirName":"guide/14_Unit-Testing","slug":"/guide/Unit-Testing/Fixtures","permalink":"/Python/docs/guide/Unit-Testing/Fixtures","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/14_Unit-Testing/02_Fixtures.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Unit Testing in Python","permalink":"/Python/docs/guide/Unit-Testing/Intro"},"next":{"title":"Using conftest.py in Pytest","permalink":"/Python/docs/guide/Unit-Testing/Conftest"}}');var i=n(4848),r=n(8453);const o={},l="Using Fixtures in Pytest for Unit Testing",u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Sample Module",id:"sample-module",level:3},{value:"Test Module Without Fixtures",id:"test-module-without-fixtures",level:3},{value:"Introduction to Fixtures",id:"introduction-to-fixtures",level:2},{value:"Creating Fixtures",id:"creating-fixtures",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Running the Tests",id:"running-the-tests",level:2},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"using-fixtures-in-pytest-for-unit-testing",children:"Using Fixtures in Pytest for Unit Testing"})}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, we will explore the concept of fixtures in Pytest and their application in unit testing. Properly structured tests are crucial for ensuring the reliability and maintainability of your codebase. We will begin by setting up a sample project, creating test functions, and then delve into how fixtures can streamline the process of writing tests."}),"\n",(0,i.jsx)(t.h2,{id:"project-setup",children:"Project Setup"}),"\n",(0,i.jsxs)(t.p,{children:["To start, we need to organize our project structure. It's a best practice to have a dedicated ",(0,i.jsx)(t.code,{children:"tests"})," folder where you can place all your test files. For this tutorial, we'll create a sample module named ",(0,i.jsx)(t.code,{children:"sample_module.py"})," and a corresponding test file named ",(0,i.jsx)(t.code,{children:"test_sample_module.py"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"sample-module",children:"Sample Module"}),"\n",(0,i.jsxs)(t.p,{children:["First, create a file named ",(0,i.jsx)(t.code,{children:"sample_module.py"})," with the following content:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def sort_numbers(numbers: list[int]) -> list[int]:\n    """Sorts a list of integers."""\n    numbers.sort()\n    return numbers\n\ndef reverse_numbers(numbers: list[int]) -> list[int]:\n    """Reverses a list of integers."""\n    numbers.reverse()\n    return numbers\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This module contains two functions: ",(0,i.jsx)(t.code,{children:"sort_numbers"})," and ",(0,i.jsx)(t.code,{children:"reverse_numbers"}),". These will be the functions we aim to test."]}),"\n",(0,i.jsx)(t.h3,{id:"test-module-without-fixtures",children:"Test Module Without Fixtures"}),"\n",(0,i.jsxs)(t.p,{children:["Next, create a file named ",(0,i.jsx)(t.code,{children:"test_sample_module.py"})," in a ",(0,i.jsx)(t.code,{children:"tests"})," directory:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import pytest\nimport sample_module\n\ndef test_sort_numbers():\n    numbers = [9, 5, -1, -10, 10]\n    actual = sample_module.sort_numbers(numbers)\n    expected = [-10, -1, 5, 9, 10]\n    assert actual == expected\n\ndef test_reverse_numbers():\n    numbers = [9, 5, -1, -10, 10]\n    actual = sample_module.reverse_numbers(numbers)\n    expected = [10, -10, -1, 5, 9]\n    assert actual == expected\n"})}),"\n",(0,i.jsx)(t.p,{children:"These tests are straightforward but repetitive. Both tests use the same initial data setup. In a larger codebase, repeating such setups can lead to redundancy and maintenance difficulties."}),"\n",(0,i.jsx)(t.h2,{id:"introduction-to-fixtures",children:"Introduction to Fixtures"}),"\n",(0,i.jsx)(t.p,{children:"Fixtures in Pytest help you to set up some initial conditions for your tests. They can be used to create reusable setups that multiple tests can share. This reduces redundancy and ensures consistency across tests."}),"\n",(0,i.jsx)(t.h3,{id:"creating-fixtures",children:"Creating Fixtures"}),"\n",(0,i.jsxs)(t.p,{children:["Let's refactor the above tests to use fixtures. Modify ",(0,i.jsx)(t.code,{children:"test_sample_module.py"})," as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import pytest\nimport sample_module\n\n@pytest.fixture\ndef sample_numbers_unsorted():\n    """Fixture to provide unsorted list of numbers."""\n    return [9, 5, -1, -10, 10]\n\ndef test_sort_numbers(sample_numbers_unsorted):\n    actual = sample_module.sort_numbers(sample_numbers_unsorted.copy())\n    expected = [-10, -1, 5, 9, 10]\n    assert actual == expected\n\ndef test_reverse_numbers(sample_numbers_unsorted):\n    actual = sample_module.reverse_numbers(sample_numbers_unsorted.copy())\n    expected = [10, -10, -1, 5, 9]\n    assert actual == expected\n'})}),"\n",(0,i.jsx)(t.h3,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Fixture Definition"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@pytest.fixture"}),": This decorator defines a fixture. The function ",(0,i.jsx)(t.code,{children:"sample_numbers_unsorted"})," will return the list ",(0,i.jsx)(t.code,{children:"[9, 5, -1, -10, 10]"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"This fixture can be used in multiple test functions, ensuring they all use the same initial data setup."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Using Fixtures in Tests"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The fixture is included as a parameter in the test functions (",(0,i.jsx)(t.code,{children:"test_sort_numbers"})," and ",(0,i.jsx)(t.code,{children:"test_reverse_numbers"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:".copy()"})," method ensures that each test gets its own copy of the list, avoiding side effects between tests."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"running-the-tests",children:"Running the Tests"}),"\n",(0,i.jsx)(t.p,{children:"To run the tests, navigate to your project directory in the terminal and execute the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pytest\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Pytest will automatically discover all files matching the pattern ",(0,i.jsx)(t.code,{children:"test_*.py"})," and execute the tests within them. You should see output indicating that both tests passed."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"Using fixtures in Pytest significantly enhances the organization and maintainability of your tests. They allow you to define reusable setups, ensuring consistency and reducing redundancy. In this tutorial, we have covered the basics of creating and using fixtures, and applied them to simple test cases. As your projects grow in complexity, fixtures will become an invaluable tool in your testing toolkit."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);